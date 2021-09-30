<template>
  <a
    v-if="type === `flag`"
    :class="`flag ${code}`"
    :href="switchLocalePath(code)"
  ></a>
  <a
    v-else
    :href="switchLocalePath(code)"
    :class="{
      bold: $i18n.locale === code,
      flag: type === 'flag',
      code: type === 'flag' && code
    }"
  >
    {{ code }}
  </a>
</template>

<script>
export default {
  name: "LanguageButton",
  props: {
    code: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "flag"
    }
  },
  methods: {
    switchLang() {
      if (this.code) this.$i18n.setLocale(this.code);
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  cursor: pointer;
  text-transform: uppercase;
  &.bold {
    font-weight: bold;
  }
  &.flag {
    display: inline-block;
    border: none;
    width: 40px;
    height: 23px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
    margin-left: 10px;
    border: 1px solid #adadad;
    border-radius: 5px;
    &.en {
      background-image: url(~static/flags/en.svg);
    }
    &.ja {
      background-image: url(~static/flags/ja.svg);
    }
  }
}
</style>
