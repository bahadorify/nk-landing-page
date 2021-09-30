<template>
  <div class="feature">
    <div>
      <img :src="icon" class="placeholder" alt="feature" />
      <h4 class="feature-heading">
        {{ heading }}
      </h4>
    </div>
    <p class="feature-p">
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: "Feature",
  props: ["heading", "icon"]
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.feature {
  margin-bottom: 2.625rem;
}

.feature-heading {
  font-size: $lg;
  font-weight: bold;
  display: inline-block;
}
.feature-p {
  font-size: $sm;
  // line-height: 0.9rem;
}
.placeholder {
  margin: 0 1rem 0.626rem 0;
  border-radius: 50%;
  width: 2.875rem;
}

@media screen and (max-width: $bp-lg) {
  .feature-heading {
    font-size: 1.6em;
  }
  .feature-p {
    font-size: 1em;
  }
}
</style>
