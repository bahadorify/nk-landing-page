<template>
  <div class="py-5">
    <div class="stats row m-5 justify-content-center">
      <div class="col-lg-4 py-5 text-center">
        <h3 class="font-weight-bold">30 000</h3>
        <h5>Bitcoin wallets<br class="d-none d-lg-block">created</h5>
      </div>
      <div class="col-lg-4 py-lg-5 text-center">
        <h3 class="font-weight-bold">$150M</h3>
        <h5>Worth of Bitcoin<br class="d-none d-lg-block">exchanged</h5>
      </div>
      <div class="col-lg-4 py-5 text-center">
        <h3 class="font-weight-bold">15 000</h3>
        <h5>Weekly exchanges<br class="d-none d-lg-block">on the platform</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stats"
}
</script>

<style scoped>
  .stats {
    background-color: #44BECC;
    color: white;
    border-radius: 10px;
  }
</style>