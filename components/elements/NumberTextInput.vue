<template>
  <input
    :id="id"
    type="text"
    v-model="strModel"
    @input="formatInput"
    maxlength="9"
  />
</template>

<script>
import { formatAmount, unformat } from "@/helpers/formatting";
export default {
  props: ["id", "initialValue", "pattern"],
  data() {
    return {
      strModel: formatAmount(this.initialValue)
    };
  },
  methods: {
    formatInput(e) {
      let input = e.target.value;
      const matched = input.match(/[^ \d]/);
      if (matched) {
        const outlier = matched[0];
        input = input.split(outlier).join("");
      }
      const unformatted = unformat(input);
      this.strModel = formatAmount(unformatted);
      this.$emit("inputValueChange", unformatted);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
input {
  border-radius: 0;
  width: 11rem;
  border: 0 none;
  font-size: $md;
  text-align: left;
  &:read-only {
    background-color: white;
  }
}
</style>
