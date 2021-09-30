import axios from 'axios'
import { formatData } from './common'
import { LoginResponse } from './types'

const handleBankIdLoginData = (res: any) => {
  const location = res.contents.location
  const automaticLogin = location == null
  return {
    automaticLogin,
    tag: res.tag,
    location,
    token: res.contents.token,
    deviceKey: res.contents.deviceKey
  }
}

export const loginBankId = (): Promise<LoginResponse> =>
  new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: 'browser/user/id/login',
      data: {
        callback: `${process.env.VUE_APP_SERVICES}/cb`,
        provider: 'urn:grn:authn:no:bankid:central'
      }
    })
      .then(formatData)
      .then(handleBankIdLoginData)
      .then(resolve)
      .catch(reject)
  })

// export const fetchLogin = (type = 'central', cancelToken) => fetchApi( // rename
//   '/browser/user/id/login',
//   {
//     method: 'POST',
//     cancelToken,
//     data: {
//       callback: `${process.env.ServicesUrl}/cb`,
//       provider: `urn:grn:authn:no:bankid:${type}`,
//     },
//   },
// );
