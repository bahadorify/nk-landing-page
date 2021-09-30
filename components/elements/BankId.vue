<template>
  <div>
    <div class="iframe" :class="{ open: true }">
      <iframe v-if="iframeReady" :src="iframeUrl" />
    </div>
  </div>
</template>

<script>
import { loginBankId } from '@/assets/auth.ts'

const initData = () => ({
  url: '',
  error: false,
  errorMessage: 0,
  iframeReady: false,
  iframeUrl: ''
})
export default {
  name: 'BankId',
  props: {
    display: Boolean,
    linkText: String
  },
  data: initData,
  mounted () {
    this.startNormalLogin()
    this.listenToBankId()
  },
  methods: {
    /**
     * Normal login with bankdID
     */
    async startNormalLogin () {
      try {
        const res = await loginBankId()
        this.$store.commit('SAVE_USER_TOKEN', res.token)
        this.iframeReady = true
        this.iframeUrl = res.location
      } catch (err) {
        console.log(err)
      }
    },
    listenToBankId () {
      window.addEventListener(
        'message',
        (e) => {
          // If error comes from criipto
          if (e.origin.includes('easycoin.criipto.id')) {
            try {
              if (e.data.type === 'error') {
                this.$emit('redirectTo', 'start', 0, false, false, false, false)
                // eslint-disable-next-line
                console.log(e.data)
              }
            } catch (err) {
              // eslint-disable-next-line
              console.log(err)
            }

            // Message from reached callback
          } else {
            try {
              if (e.data.origin.includes('nordikcoin-cb')) {
                if (e.data.status === 'success') {
                  this.$store.commit('SAVE_USER_ID', e.data.id)
                  this.$emit('proceed')
                } else {
                  this.error = true
                  // this.errorMessage = getErrorMessage([
                  //   'nordikcoin-cb',
                  //   e.data.message
                  // ])
                }
              }
              // eslint-disable-next-line
            } catch (err) {}
          }
        },
        false
      )
    }
  }
}
</script>

<style scoped>
.iframe {
  height: 0px;
}
.open {
  height: 170px !important;
}
iframe {
  width: 500px;
  border: none;
  height: 100%;
}
@media only screen and (max-device-width: 480px) {
  iframe {
    width: 100%;
  }
}
</style>
