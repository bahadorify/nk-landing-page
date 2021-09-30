<template>
  <div class="paymentContainer">
    <h2>
      <span class="line">You are buying</span>
      <span
        class="line"
      >X amount of bitcoin</span>
      <!-- TODO -->
    </h2>

    <iframe
      :src="iframeuri"
      name="paymentIframe"
      class="paymentIframe"
      :class="{ hide: !showIframe }"
    />

    <div v-if="loading">
      <Loading :button="false" />
      <br>
      <br>
      <br>
      <!-- <span>
        <a @click="cancel">{{ lang.cancel }}</a> -->
      <!-- </span> -->
      <br>
    </div>

    <!-- <div>
      <div v-if="error && !prePaymentError">
        <br>
        <div class="errorMessage">
          <span v-if="displayError && showPaymentError">{{
            errorMessagePayment
          }}</span>
          <span v-else-if="displayError">{{ lang.error[errorMessage] }}</span>
          <span v-else>{{ lang.error[0] }}</span>
        </div>

        <div v-if="showTryAgain">
          <br>
          <button class="tryagain-button" @click="tryAgain">
            {{ lang.tryAgain }}
          </button>
        </div>
        <br>
        <br>
        <span>{{ lang.contactSupport }}</span>
        <br>
        <span v-if="tryAgainNewBankid">
          <a @click="logout">{{ lang.tryAgainNewBankid }}</a>
        </span>
        <span v-else>
          <br>
          <a @click="cancel">{{ lang.cancel }}</a>
        </span>
      </div>
    </div> -->
  </div>
</template>

<script>
import Loading from './Loading.vue'
import {
  getPricePtId,
  lockInvoice,
  cancelInvoice,
  createResultUrl,
  confirmPayment,
  reservePayment,
  logoutStorageToken,
  getPaymentUrl
} from '@/assets/payment'

const initData = {
  loading: true,
  error: false,
  tryAgainNewBankid: false,
  showTryAgain: false,
  logoutWhenCancel: false,
  errorMessage: 0,
  displayError: false,
  prePaymentError: false,
  showIframe: false,
  iframeuri: '',
  provider: process.env.VUE_APP_PROVIDER || null,
  showPaymentError: false,
  errorMessagePayment: ''
}

export default {
  name: 'Payment',
  components: {
    Loading
  },
  data: () => initData,
  computed: {
    contents () {
      return this.$store.state.data.contents
    }
  },
  /**
   * Open questionare if needed
   * then fetch pricePtId and lock invoice
   * then render correct paymentProvider
   */
  mounted () {
    this.error = false
    this.displayError = false
    process.env.NODE_ENV === 'development'
      ? setTimeout(this.getPricePointLockInvoice(this.startPayment), 1500)
      : this.getPricePointLockInvoice(this.startPayment)
  },
  methods: {
    startPayment () {
      // eslint-disable-next-line
      console.log(this.$store.state.data)
      this.reserve((res) => {
        this.$store.commit('saveOrderId', res.contents.orderId)
        getPaymentUrl(this.$store.state.data.paymentContents)
          .then(this.openIframe)
          .catch(this.handleError)
      })
    },
    openIframe (d) {
      // eslint-disable-next-line
      console.log(d)
      this.showIframe = true
      this.loading = false
      this.iframeuri = d.contents
      const handleMessage = (e) => {
        if (
          e.origin.includes('nordikcoin') ||
          e.origin.includes('localhost')
        ) {
          try {
            // eslint-disable-next-line
            console.log('received message ', e.data)
            if (e.data.from === 'payment-gateway') {
              if (e.data.status === 'success') {
                this.confirmPayment()
              } else if (e.data.status === 'cardData') {
                this.confirmPayment(e.data.contents)
              } else {
                this.showIframe = false
                this.handleError({
                  paymentError: true,
                  message: e.data.message
                })
              }
              window.removeEventListener('message', handleMessage, false)
            }
            // eslint-disable-next-line
          } catch (err) {}
        }
      }
      // Listen for payment status from iframe
      window.addEventListener('message', handleMessage, false)
    },
    tryAgain () {
      // Reset data...
      this.loading = true
      // ;(this.error = false),
      // (this.tryAgainNewBankid = false),
      // (this.showTryAgain = false),
      // (this.logoutWhenCancel = false),
      // (this.displayError = false),
      // (this.prePaymentError = false),
      // (this.showIframe = false),
      // (this.showPaymentError = false),
      // (this.errorMessagePayment = '')
      // Start payment
      this.getPricePointLockInvoice(this.startPayment)
    },
    logout () {
      this.$emit('redirectTo', 'start', 5, true, true, false, true)
    },
    cancel () {
      const url = createResultUrl(
        this.$store.state.data.contents.resultUrl,
        this.$store.state.data.invoiceId,
        'cancelledByUser'
      )
      if (this.logoutWhenCancel) {
        // Assuming user want to try again "from scratch"
        logoutStorageToken()
      }
      cancelInvoice(
        this.$store.state.data.userid,
        this.$store.state.data.token,
        this.$store.state.data.invoiceId
      )
        .catch(() =>
          cancelInvoice(null, null, this.$store.state.data.invoiceId)
        )
        .finally(() => (window.location.href = url))
    },
    setPricePt (p) {
      p.pContents.lang = this.$store.state.lang
      this.$store.commit('savePricePtId', p.pt)
      this.$store.commit('savePaymentContents', p.pContents)
      this.$store.commit('setAmountInBtc', p.omtAmount)
      this.provider = p.pContents.tag
      return p
    },
    getPricePointLockInvoice (cb) {
      getPricePtId(
        this.$store.state.data.userid,
        this.$store.state.data.token,
        this.$store.state.data.contents.amount,
        this.provider
      )
        .then(this.setPricePt)
        .then(
          lockInvoice(
            this.$store.state.data.userid,
            this.$store.state.data.token,
            this.$store.state.data.invoiceId
          )
        )
        .then(cb)
        .catch(this.handleError)
    },
    reserve (cb) {
      reservePayment(
        this.$store.state.data.userid,
        this.$store.state.data.token,
        this.$store.state.data.pricePtId
      )
        .then(cb)
        .catch(this.handleError)
    },
    confirmPayment (data = {}) {
      this.showIframe = false
      confirmPayment({
        orderId: this.$store.state.data.orderId,
        userid: this.$store.state.data.userid,
        token: this.$store.state.data.token,
        data
      })
        .then(() => this.$emit('proceed'))
        .catch((err) => {
          this.handleError({ ...err, paymentError: true, message: null })
        })
    },
    /**
     * migh return error because of unfilled questionare
     * TODO: refactor
     */
    handleError (err = {}) {
      // eslint-disable-next-line
      console.log(err)
      this.logoutWhenCancel = false
      this.error = true
      this.loading = false
      if (err.maybeWarning) {
        this.$store.commit('saveWarning', err.maybeWarning)
      }
      if (err.paymentError) {
        this.displayError = true
        this.errorMessage = 13
        this.showTryAgain = true
        if (typeof err.message === 'string') {
          this.showPaymentError = true
          this.errorMessagePayment = err.message
        }
      }
      if (err.displayMessage) {
        if (err.displayMessage === 101) {
          // if 'cannot cancel' = redirect to laststep
          this.$emit('redirectTo', 'laststep', 0, false, false, false)
        } else if (err.displayMessage === 102) {
          // if cannoc lock = redirect to start for invoice status
          this.$emit('redirectTo', 'start', 0, false, false, true, false)
        } else if (err.displayMessage === 103) {
          // questionare not submitted
          // eslint-disable-next-line
          console.log('show questionare')
        } else if (err.triedReserve && err.displayMessage !== 16) {
          // reservePayment failed && !order limit exceeded
          this.error = true
          this.loading = false
          this.getPricePointLockInvoice(this.startPayment)
        } else {
          this.showIframe = false
          this.errorMessage = err.displayMessage
          this.displayError = true
        }
      } else {
        this.showIframe = false
      }
      if (this.displayError) {
        this.logoutWhenCancel = this.errorMessage === 15
        this.tryAgainNewBankid = this.errorMessage === 3
      }
    }
  }
}
</script>

<style scoped>
.error {
  border-color: red;
}
.paymentContainer {
  padding-left: 20%;
  padding-right: 20%;
}

.paymentContainer .line {
  display: inline-block;
}
.paymentForm {
  margin: 0 auto;
  width: 50%;
  padding: 40px 0px 0px 0px;
}
input {
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid lightgray;
}
button {
  padding: 15px;
  font-size: 16px;
  margin: auto;
  width: 100%;
}
.seamless-form-target {
  height: 0px;
}
.paymentIframe {
  border: none;
  width: 100%;
  height: 700px;
}

.hide {
  display: none;
}

.disabled-button {
  background-color: grey;
}

.disabled-button:hover {
  cursor: not-allowed;
}

.tryagain-button {
  max-width: 167px;
  background-color: white;
  color: #db111b;
  border: 1px solid #db111b;
}

@media screen and (max-width: 980px) {
  .paymentContainer {
    padding-left: 10%;
    padding-right: 10%;
  }
  .paymentForm {
    width: 70%;
  }
}

@media screen and (max-width: 480px) {
  .paymentContainer {
    padding-left: 5%;
    padding-right: 5%;
  }
  .paymentForm {
    width: 90%;
  }
}

@media screen and (max-width: 360px) {
  .paymentContainer {
    padding-left: 0;
    padding-right: 0;
  }
  .paymentForm {
    width: 100%;
  }
}

.errorMessage {
  background-color: #ffbaba;
  padding: 20px 10px;
  border-radius: 6px;
  color: #db111b;
  border: 1px solid;
}
</style>
