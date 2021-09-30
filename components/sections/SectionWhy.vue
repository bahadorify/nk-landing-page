<template>
  <section class="why-us center-mobile">
    <div class="features" id="why-us">
      <p class="subheading">
        {{ $t("home.why.subheading") }}
      </p>
      <h2>{{ $t("home.why.heading") }}</h2>
      <!--       <p class="description">
        {{ $t('home.why.description') }}
      </p> -->
      <Feature :heading="$t('home.why.feature1heading')" icon="/icons/lock.svg">
        {{ $t("home.why.feature1description") }}
      </Feature>
      <Feature :heading="$t('home.why.feature2heading')" icon="/icons/star.svg">
        {{ $t("home.why.feature2description") }}
      </Feature>
      <Feature
        :heading="$t('home.why.feature3heading')"
        icon="/icons/thumb.svg"
      >
        {{ $t("home.why.feature3description") }}
      </Feature>
      <Feature
        :heading="$t('home.why.feature4heading')"
        icon="/icons/check.svg"
      >
        {{ $t("home.why.feature4description") }}
      </Feature>
      <a class="btn-default" href="https://nordikcoin.com/login">
        {{ $t("home.why.btn") }}
      </a>
    </div>
    <div class="img">
      <img src="/fishing-bear.svg" alt="Fishing NordikCoin Bear" />
    </div>
  </section>
</template>

<script>
import Feature from "./Feature.vue";
export default {
  name: "Why",
  components: {
    Feature
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.why-us {
  padding-top: 9.1rem;
  display: flex;
  align-items: center;
}
.features {
  flex: 0 0 50%;
  margin-right: 4.9rem;
  .description {
    font-size: 1.75rem;
    margin-bottom: 2.4rem;
  }
}

.img {
  img {
    width: 100%;
  }
}

@media screen and (max-width: $bp-lg) {
  .why-us {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 4em;
  }
  .features {
    flex: 0;
    margin-right: 0;
    .subheading {
      font-size: 1.4em;
      margin-bottom: 0.4em;
    }
    h2 {
      font-size: 2.2em;
      margin-bottom: 0.8em;
    }
    .description {
      font-size: 1em;
    }
  }
  .img {
    width: 100%;
    height: auto;
    margin-bottom: 2em;
    img {
      width: 160px;
      margin: 0 auto;
    }
  }
  .btn-default {
    width: 100%;
    font-size: 1.2rem;
    padding: 0.8em 0.8em;
  }
}
</style>
