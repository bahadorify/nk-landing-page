<template>
  <div class="datapoint center-mobile">
    <div class="data-title">
      {{ title }}
    </div>
    <div class="data-value" :class="{ align: align }">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
    align: Boolean
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.datapoint {
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-right: 9.375rem;
}

.data-title {
  font-size: $xxs;
  color: $grey;
}

.data-value {
  font-size: $xl;
}

@media screen and (max-width: $bp-lg) {
  .datapoint {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-right: 0;
    padding: 10px 15px;
  }
  .data-title {
    font-size: 1em;
  }
  .data-value {
    font-size: 1.4em;
  }
  .align {
    align-self: flex-end;
  }
}
</style>
