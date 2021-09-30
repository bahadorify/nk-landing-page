<template>
  <b-container fluid>
    <div class="sticky full-width">
      <NavBar />
      <no-ssr>
        <BottomLine />
      </no-ssr>
    </div>
    <div class="spacer"></div>
    <nuxt />
    <Footer />
  </b-container>
</template>

<script>
import NavBar from '@/components/navigation/NavBar'
import BottomLine from '@/components/navigation/BottomLine'
import Footer from '@/components/navigation/Footer'

export default {
  components: {
    NavBar,
    BottomLine,
    Footer
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.container-fluid {
  width: $width;
  max-width: $maxWidth;
  margin: 0 auto;
  padding: 0 1rem;
  /* font-family: "Neutrif-Bold"; */
}

h2,
h4 {
  font-weight: 900;
}

.spacer {
  margin-bottom: 120px;
}

@media screen and (max-width: $bp-lg) {
  .container-fluid {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
  }
  .spacer {
    margin-bottom: 94px;
  }
}
</style>
