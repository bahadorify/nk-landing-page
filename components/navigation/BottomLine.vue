<template>
  <div v-if="scrollTop" class="bottom-line full-width"></div>
</template>

<script>
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      scrollTop: false
    };
  },
  methods: {
    handleScroll(e) {
      const scrollTop = e.srcElement.scrollingElement.scrollTop;
      this.scrollTop = scrollTop > 35 ? true : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.bottom-line {
  border-bottom: 1px solid #dde3ed;
}
</style>
