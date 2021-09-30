<template>
  <div class="section-action center-mobile">
    <div class="section-action--icon">
      <img src="/coin-bear-1.svg" alt="Nordikcoin bear" />
    </div>
    <div class="section-action--col">
      <p class="subheading">
        {{ $t("home.call.subheading") }}
      </p>
      <h2>{{ $t("home.call.heading") }}</h2>
      <p class="description margin">
        {{ $t("home.call.description") }}
      </p>
      <a class="btn-default" href="https://nordikcoin.com/login">
        {{ $t("home.call.btn") }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallToAction"
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.section-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15.6rem auto 8.75rem;
  padding: 0 10rem;
  .section-action--icon {
    flex: 0 0 20rem;
    img {
      width: 100%;
      margin: auto;
    }
  }
  .section-action--col {
    flex: 0 0 50rem;
    // max-width: 49rem;
    .description {
      font-size: $lg;
    }
  }
  .margin {
    margin-bottom: 2rem;
  }
}
@media screen and (max-width: $bp-lg) {
  .section-action {
    padding: 0;
    margin: 0;
    padding: 4em 1em;
    flex-direction: column;
    justify-content: center;
    .section-action--icon {
      display: flex;
      flex: 0 1 auto;
    }
    .section-action--col {
      flex: 0 1 auto;
      .subheading {
        margin-top: 1em;
        font-size: 1em;
        text-align: center;
      }
      h2 {
        font-size: 1.8em;
        text-align: center;
      }
      .description {
        font-size: 1em;
        text-align: center;
        margin-bottom: 2em;
      }
    }
    img {
      max-width: 120px;
      width: auto;
      height: auto;
      margin-bottom: 2em;
    }
    .btn-default {
      width: 100%;
      font-size: 1.2rem;
      padding: 0.8em 0.8em;
    }
  }
}
</style>
