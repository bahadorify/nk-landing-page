<template>
  <main class="main nb-full-width">
    <div class="container">
      <h1 class="title">
        {{ title }}
      </h1>
      <div class="content nuxt-content">
        <p>
          <strong>{{ $t('manual.heading') }}</strong>
        </p>
        <p>
          <strong>{{ $t('manual.strong') }}</strong>
        </p>
        <p>{{ $t('manual.p1') }}</p>
        <p>{{ $t('manual.p2') }}</p>
        <ul>
          <li>{{ $t('manual.ul1.li1') }}</li>
          <li>{{ $t('manual.ul1.li2') }}</li>
          <li>{{ $t('manual.ul1.li3') }}</li>
          <li>{{ $t('manual.ul1.li4') }}</li>
          <li>{{ $t('manual.ul1.li5') }}</li>
          <li>{{ $t('manual.ul1.li6') }}</li>
          <li>{{ $t('manual.ul1.li7') }}</li>
          <ul v-if="$i18n.locale === 'ja'">
            <li>{{ $t('manual.ul1.ul3.li1') }}</li>
            <li>{{ $t('manual.ul1.ul3.li2') }}</li>
            <li>{{ $t('manual.ul1.ul3.li3') }}</li>
            <li>{{ $t('manual.ul1.ul3.li4') }}</li>
          </ul>
        </ul>
        <p>{{ $t('manual.p3') }}</p>
        <p>{{ $t('manual.p4') }}</p>
        <p>{{ $t('manual.p5') }} <nuxt-link v-if="$i18n.locale !== 'ja'" to="/terms-conditions">{{ $t('manual.here') }}</nuxt-link></p>
        <p>{{ $t('manual.p6') }}</p>
        <ul>
          <li>{{ $t('manual.ul2.li1') }}</li>
          <li>{{ $t('manual.ul2.li2') }}</li>
          <li>{{ $t('manual.ul2.li3') }}</li>
          <li>{{ $t('manual.ul2.li4') }}</li>
          <li>{{ $t('manual.ul2.li5') }}</li>
          <li>{{ $t('manual.ul2.li6') }}</li>
          <li>{{ $t('manual.ul2.li7') }}</li>
          <li>{{ $t('manual.ul2.li8') }}</li>
          <li>{{ $t('manual.ul2.li9') }}</li>
          <li>{{ $t('manual.ul2.li10') }}</li>
          <li>{{ $t('manual.ul2.li11') }}</li>
          <li>{{ $t('manual.ul2.li12') }}</li>
          <li>{{ $t('manual.ul2.li13') }}</li>
          <li>{{ $t('manual.ul2.li14') }}</li>
          <li>{{ $t('manual.ul2.li15') }}</li>
          <li>{{ $t('manual.ul2.li16') }}</li>
          <li>{{ $t('manual.ul2.li17') }}</li>
          <li>{{ $t('manual.ul2.li18') }}</li>
          <li>{{ $t('manual.ul2.li19') }}</li>
          <li>{{ $t('manual.ul2.li20') }}</li>
          <li>{{ $t('manual.ul2.li21') }}</li>
          <li>{{ $t('manual.ul2.li22') }}</li>
          <li>{{ $t('manual.ul2.li23') }}</li>
          <li>{{ $t('manual.ul2.li24') }}</li>
          <li>{{ $t('manual.ul2.li25') }}</li>
          <li>{{ $t('manual.ul2.li26') }}</li>
          <li>{{ $t('manual.ul2.li27') }}</li>
          <li>{{ $t('manual.ul2.li28') }}</li>
          <li>{{ $t('manual.ul2.li29') }}</li>
          <li>{{ $t('manual.ul2.li30') }}</li>
          <li>{{ $t('manual.ul2.li31') }}</li>
          <li>{{ $t('manual.ul2.li32') }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'with-header',
  data () {
    return {
      pageArr: [],
      title: '',
      seo_title: '',
      description: '',
      keywords: ''
    }
  },
  head () {
    return {
      titleTemplate: 'Manual Account Opening – %s',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Manual Account Opening'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Manual Account Opening'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/_variables.scss";
h1 {
  font-size: 30px;
}
h2 {
  font-size: 25px;
}
h3 {
  font-size: 20px;
}
@media screen and (min-width: $bp-lg + 1) {
  h1.title {
    margin-bottom: 48px;
    font-size: 64px;
  }
  .nuxt-content {
    h2 {
      font-size: 58px;
    }
    h3 {
      font-size: 36px;
    }
    p,
    li {
      font-size: 16px !important;
    }
  }
}
</style>
