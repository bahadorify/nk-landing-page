<template>
  <main class="main nb-full-width">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <nuxt-content :document="page" class="content" />
    </div>
  </main>
</template>

<script>
export default {
  layout: "with-header",
  head() {
    return {
      titleTemplate: `${this.seo_title} – %s`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords
        }
      ]
    };
  },
  data() {
    return {
      pageArr: [],
      title: "",
      seo_title: "",
      description: "",
      keywords: ""
    };
  },
  async asyncData({ $content, route, error }) {
    const re = /.*\/(.+)$/;
    const pageArr = await $content("simple-pages")
      .where({ path: { $contains: route.params.slug } })
      .fetch();
    if (!pageArr.length) {
      throw new Error("Cannot find page");
    }
    const { title, seo_title, description, keywords } = pageArr[0];
    return {
      pageArr,
      title,
      seo_title,
      description,
      keywords
    };
  },
  computed: {
    page() {
      return this.pageArr[0];
    }
  }
};
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
