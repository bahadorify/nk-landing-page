<template>
  <section class="how-it-works center-mobile" id="how-it-works">
    <div class="nc-card">
      <div>
        <h3>{{ $t("home.how.heading1") }}</h3>
        <p>
          {{ $t("home.how.subheading1") }}
          <br />
        </p>
      </div>
      <div class="img">
        <img src="/reading-bear.svg" alt="Reading NordikCoin bear" />
      </div>
    </div>
    <div class="nc-card">
      <div>
        <h3>{{ $t("home.how.heading2") }}</h3>
        <p>
          {{ $t("home.how.subheading2") }}
          <br />
        </p>
      </div>
      <div class="img">
        <img src="/happy-bear2.svg" alt="Happy NordikCoin bear" />
      </div>
    </div>
    <div class="nc-card">
      <div>
        <h3>{{ $t("home.how.heading3") }}</h3>
        <p>
          {{ $t("home.how.subheading3") }}
          <br />
        </p>
      </div>
      <div class="img">
        <img src="/happy-bear.svg" alt="Happy NordikCoin bear" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HowItWorks"
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.how-it-works {
  padding: 3.125rem 0;
  display: flex;
  justify-content: space-between;
}
.nc-card {
  flex: 0 0 calc(33% - 4rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    margin-top: 0.56rem;
    font-size: 1.3rem;
    color: $grey;
  }
  .img {
    height: 11.18rem;
    img {
      height: 100%;
    }
  }
}

@media screen and (max-width: $bp-lg) {
  .how-it-works {
    overflow: hidden;
    flex-direction: column;
  }
  .nc-card {
    padding-left: 1em;
    padding-right: 1em;
    align-items: center;
    h3 {
      font-size: 1.6em;
    }
    p {
      font-size: 1em !important;
    }
    .img {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
      img {
        display: block;
        max-width: 80px;
        width: auto;
        height: auto;
        margin: auto;
      }
    }
  }
}
</style>
