import axios from 'axios'
import {
  formatData,
  getErrorMessage,
  continueIfSuccess,
  handleReject
} from './common'

const DEFAULT_CURRENCY = process.env.VUE_APP_DEFAULT_CURRENCY || 'eur'

/**
 * Create new invoice
 * - Never create invoice for live server - nordikcoin.com
 */
export const newInvoiceId = (
  result: string,
  notification: string,
  payerId: string,
  id: any
) =>
  new Promise((resolve, reject) => {
    const domain = process.env.BACKEND_DOMAIN

    console.log(process.env.BACKEND_DOMAIN)
    const data = {
      resultMessage: 'Back to merchant',
      amount: [DEFAULT_CURRENCY, 5.0],
      txId: (Math.random() + 1).toString(36).substring(1),
      paymentDescr: '500 Foobar credits',
      resultUrl: result !== '' ? result : '/pay',
      merchantRef: 'Foobar',
      notificationUrl: notification !== '' ? notification : '/pay'
    }
    axios({
      method: 'POST',
      url: `${domain}/merchant/invoice/new/${id}?signature=TEST`,
      data: payerId !== '' ? Object.assign({}, { payerId }, data) : data
    })
      .then(res => resolve(res.data.invoiceId))
      .catch(reject)
  })
/**
 * Check for success
 * @param {object} data
 * @return func | Needs to be a promise that either resolves
 * or rejects
 */
const continueIfSuccessOr = (cb: any) => (data: any) =>
  new Promise(resolve => (data.tag === 'success' ? resolve(data) : cb(data)))

/**
 * Check if valid and get Status message
 */
const getStatus = (s:any) => ({
  valid: s === 'created' || s === 'executing',
  statusMsg:
    s === 'expired' ? 0 : s === 'canceled' ? 1 : s === 'executed' ? 2 : 3
})

export const getInvoiceData = ({ user = {} }) => (id: any) =>
  new Promise((resolve, reject) => {
    if (id) {
      axios
        .get(`${process.env.BACKEND_DOMAIN}/browser/invoice/${id}`)
        .then(formatData)
        .then(
          continueIfSuccessOr((d: { contents: any }) =>
            resolve({
              valid: false,
              user,
              status: '',
              statusMsg: getErrorMessage(d.contents),
              hasId: true,
              saveContents: false
            })
          )
        )
        .then((d: any) => {
          let { valid, statusMsg } = getStatus(d.contents.status)
          // eslint-disable-next-line
          console.log(id, d.contents, valid, statusMsg, d.contents.status)
          statusMsg =
            valid && d.contents.warning
              ? getErrorMessage(d.contents.warning)
              : statusMsg
          // If warning = currency not supported, handle order as not valid
          if (statusMsg === 6) {
            valid = false
          }
          resolve({
            user: Object.assign({}, user, {
              contents: d.contents
            }),
            valid,
            status: d.contents.status,
            statusMsg,
            id,
            hasId: true,
            saveContents: true
          })
        })
        .catch(reject)
    } else {
      resolve({ valid: false, user, status: '', statusMsg: 3, hasId: false })
    }
  })

/**
 * Used for getPricePtId
 * Format amount to object with amountTo and amountFrom
 * @param [array] amount
 * @return {object}
 */
const createAmount = (amount: string[]) => {
  if (amount[0] === 'btc') {
    return {
      amountTo: amount,
      amountFrom: [DEFAULT_CURRENCY, 0] // Todo: pay with multiple fiats
    }
  } else {
    return {
      amountTo: ['omt', 0],
      amountFrom: amount
    }
  }
}

/**
 * Fetch pricePtId
 *
 * @return Promise<number> pricePtId
 */
export const getPricePtId = (
  userid: any,
  token: any,
  amount: any,
  provider = null
) =>
  new Promise((resolve, reject) => {
    const cardToken = localStorage.getItem(`cardTokenId-${userid}`)
    axios({
      method: 'POST',
      url: `${process.env.VUE_APP_BACKENDDOMAIN}/browser/price/pt`,
      data: Object.assign({}, createAmount(amount), {
        cardToken,
        provider,
        saveCard: true
      }),
      auth: {
        username: userid,
        password: token
      }
    })
      .then((res: any) => {
        if (res.data.tag === 'success') {
          resolve({
            pt: res.data.contents.pricePtId,
            pContents: res.data.contents.payment,
            omtAmount: res.data.contents.amountTo[1]
          })
        } else {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject({
            displayMessage: getErrorMessage(res.data.contents),
            maybeWarning: res.data.contents
          })
        }
      })
      .catch(reject)
  })

/**
 * Lock invoice (after getPricePtId)
 * Might return PayerId mismatch
 */
export const lockInvoice = (userid: any, token: any, invoiceId: any) => ({
  pt
}: {
  pt: any
}) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `${process.env.VUE_APP_BACKENDDOMAIN}/browser/invoice/lock/${userid}/${invoiceId}`,
      data: { pricePtId: pt },
      auth: {
        username: userid,
        password: token
      }
    })
      .then(formatData)
      .then(continueIfSuccess)
      .then(resolve)
      .catch(handleReject(reject))
  })

/**
 * Cancel invoice
 */
export const cancelInvoice = (userid: any, token: any, invoiceId: any) =>
  userid
    ? axios({
      method: 'POST',
      url: `${process.env.VUE_APP_BACKENDDOMAIN}/browser/invoice/cancel/${userid}/${invoiceId}`,
      data: {},
      auth: {
        username: userid,
        password: token
      }
    })
    : axios({
      method: 'POST',
      url: `${process.env.VUE_APP_BACKENDDOMAIN}/browser/invoice/cancel-unauthenticated/${invoiceId}`,
      data: {}
    })

/**
 * Create resultUrl
 */
export const createResultUrl = (
  url: string | string[],
  invoiceId: any,
  status = ''
) => {
  const start = url.indexOf('?') > 0 ? '&' : '?'
  const end = status !== '' ? `&status=${status}` : ''
  return `${url}${start}invoiceId=${invoiceId}${end}`
}

/**
 * Confirm payment
 */
export const confirmPayment = ({
  orderId,
  userid,
  token,
  data = {}
}: {
  orderId: any
  userid: any
  token: any
  data: any
}) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `${process.env.VUE_APP_BACKENDDOMAIN}/browser/orders/offer/take/${userid}/${orderId}`,
      data,
      auth: {
        username: userid,
        password: token
      }
    })
      .then((res: any) => {
        return {
          tag: res.data.tag,
          contents: Object.assign({}, res.data.contents, {
            orderId
          }),
          userid,
          token
        }
      })
      .then(continueIfSuccess)
      .then(resolve)
      .catch(reject)
  })

/**
 * Reserve payment
 * @param {object} payment
 * @param {string} userid
 * @param {string} token
 * @param {object} offer
 */
export const reservePayment = (userid: any, token: any, pricePtId: any) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `${process.env.VUE_APP_BACKENDDOMAIN}/browser/orders/offer/reserve/${userid}`,
      data: {
        pricePtId
      },
      auth: {
        username: userid,
        password: token
      }
    })
      .then(formatData)
      .then(continueIfSuccess)
      .then(resolve)
      .catch(handleReject(reject, { triedReserve: true }))
  })

/**
 * Remove localstorage items
 */
export const logoutStorageToken = () => {
  localStorage.removeItem('userid')
  localStorage.removeItem('token')
  localStorage.removeItem('deviceKey')
}

/**
 * Start payment (load balancer)
 */
export const getPaymentUrl = (data: any) =>
  new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `${process.env.VUE_APP_BACKENDDOMAIN}/startpayment`,
      data: { providerData: data }
    })
      .then(formatData)
      .then(continueIfSuccess)
      .then(resolve)
      .catch(reject)
  })
