<template>
  <div class="container">
    Hi
  </div>
</template>

<script>
import { newInvoiceId, getInvoiceData } from '@/assets/payment'

const initData = {
  resultUrl: '',
  payerId: '',
  notificationUrl: '',
  demoMerchant: 'jjfcp4n2cmk5cns8'
}

export default {
  name: 'NotFound',
  data: () => initData,
  mounted () {
    this.$nextTick(function () {
      this.startDemo()
    // Code that will run only after the
    // entire view has been rendered
    })
  },
  methods: {
    startDemo () {
      newInvoiceId(
        this.resultUrl,
        this.notificationUrl,
        this.payerId,
        this.demoMerchant
      )
        .then((res) => {
          // eslint-disable-next-line
          console.log(res)
          getInvoiceData(initData)(res).then((d) => {
            console.log(d)
          })
        })
        // eslint-disable-next-line
        .catch(console.log)
    }
  }
}
</script>
