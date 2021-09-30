<template>
  <div class="container">
    <div>
      Test page for payment flow.
      <BankId />
      <Payment />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BankId from '~/components/elements/BankId.vue'
import Payment from '~/components/elements/Payment.vue'

export default Vue.extend({
  name: 'App',
  components: {
    BankId,
    Payment
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  font-family: "Neutrif-Bold";
  max-width: 1200px;
  margin: auto
}

</style>
