<template>
  <div class="nb-full-width">
    <div id="section-container" class="section-container">
      <div class="heading center-mobile">
        <h1>{{ $t("home.hero.heading") }}</h1>
        <p class="subh1">
          {{ $t("home.hero.subheading") }}
        </p>
      </div>
      <CryptoConverter class="widget" />
      <img
        class="img"
        src="/Nordicoin_Bear3_animated.svg"
        alt="NordikCoin bear"
      />
    </div>
  </div>
</template>

<script>
import CryptoConverter from "~/components/elements/CryptoConverter.vue";

export default {
  name: "Hero",
  components: {
    CryptoConverter
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.section-container {
  width: $width;
  max-width: $maxWidth;
  padding: 0 1rem;
  margin: auto;
  display: grid;
  grid-template-columns: 2fr 5% 1fr;
  grid-template-rows: 1fr auto;
  // column-gap: 300px;
  grid-template-areas:
    "heading . image"
    "widget . image";

  .heading {
    grid-area: heading;
    margin-bottom: 6.5625rem;

    .subh1 {
      font-size: $lg;
      max-width: 95vw;
    }
  }

  .widget {
    grid-area: widget;
    // max-width: 927px;
    // justify-self: start;
  }

  img {
    grid-area: image;
    max-width: 26.8125rem;
    align-self: center;
    justify-self: center;
  }
}

@media screen and (max-width: $bp-lg) {
  .nb-full-width {
    padding: 30px 0;
  }
  .section-container {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0;
    padding-left: 1em;
    padding-right: 1em;
    .heading {
      margin-bottom: 0;
    }
    h1 {
      font-size: 2.4em;
    }
    p {
      font-size: 1em !important;
    }
    .img {
      margin-top: 2em;
    }
  }
}
</style>
