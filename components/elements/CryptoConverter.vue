<template>
  <form class="crypto-form" inline @submit="handleSubmit">
    <div class="flex-v mobile-m">
      <label for="amount">{{ $t("home.buy.pay") }}</label>
      <div class="flex-h mobile-w">
        <!-- <input
          id="amount"
          v-model="amount"
          type="number"
          class="amount input"
          placeholder="Pay in your currency"
        /> -->
        <NumberTextInput
          id="amount"
          :initialValue="amount"
          @inputValueChange="updateAmount($event)"
        />
        <select id="currency" v-model="selected" name="currency" class="input">
          <option
            v-for="({ value, text }, idx) of options"
            :key="idx"
            :value="value"
          >
            {{ text }}
          </option>
        </select>
      </div>
    </div>
    <div class="vline" />
    <div class="flex-v mobile-m">
      <label for="btc-amount">{{ $t("home.buy.receive") }}</label>
      <div class="flex-h mobile-w">
        <input
          id="btc-amount"
          readonly
          type="number"
          class="input btc_amount"
          :value="cryptoValue"
          placeholder="Receive in Bitcoin"
          @focus="handleFocus"
        />
        <img
          src="/icons/bitcoin.svg"
          height="25rem"
          width="25rem"
          alt="bitcoin"
        />
      </div>
    </div>
    <a class="btn-default center-mobile" href="https://nordikcoin.com/login">
      {{ $t("home.buy.btn") }}
    </a>
  </form>
</template>

<script>
import NumberTextInput from '@/components/elements/NumberTextInput'
import { formatAmount } from "@/helpers/formatting";
export default {
  name: "CryptoConverter",
  components: {
    NumberTextInput
  },
  async fetch() {
    const url =
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD,EUR,NOK,JPY&api_key=fcda569b2cd82dca7f3470745ed16db294939447c22ab3183362c95399549823";
    const { data } = await this.$axios.get(url);
    this.USD = 1 / data.BTC.USD;
    this.EUR = 1 / data.BTC.EUR;
    this.JPY = 1 / data.BTC.JPY;
    this.NOK = 1 / data.BTC.NOK;
  },
  data() {
    return {
      formatAmount,
      amount: "20000",
      selected: "USD",
      options: [
        { value: "USD", text: "$" },
        { value: "EUR", text: "€" },
        { value: "NOK", text: "kr" },
        { value: "JPY", text: "¥" }
      ],
      USD: 0,
      JPY: 0,
      EUR: 0,
      NOK: 0
    };
  },
  computed: {
    cryptoValue() {
      const value = this[this.selected];
      if (!this.amount || !value) {
        return "";
      }
      return (Number(this.amount) * value).toFixed(4);
    }
  },
  methods: {
    handleFocus(e) {
      e.target.blur();
    },
    handleSubmit(evt) {
      evt.preventDefault();
      console.log("Submit Pressed");
      // handle your form submission here
    },
    updateAmount(amt) {
      this.amount = amt;
      // console.log("updated to:", amt);
    }
  },
  fetchOnServer: false
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.flex-h {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.flex-v {
  display: flex;
  flex-direction: column;
}

.ml {
  margin-left: 1rem;
}

.crypto-form {
  padding: 0.625rem;
  background-color: white;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 1.25rem -0.875rem rgba(0, 0, 0, 0.75);
}

form {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
label {
  font-size: $xs;
  color: $grey;
}

.input {
  border: 0 none;
  font-size: $md;
  text-align: left;
}
input {
  border-radius: 0;
  &:read-only {
    background-color: white;
  }
  &[type="number"] {
    width: 11rem;
  }
}

.btn {
  width: 100%;
  background-color: $secondary;
  font-size: $md;
  font-weight: bold;
}
select.input {
  width: 3.75rem;
  height: 2.4rem;
  font-size: 1.25rem;
  padding-left: 8px;
  border: 1px solid #ccc;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(/icons/dropdown.svg) 84% / 27% no-repeat white;
}
.custom-select {
  text-align-last: center;
}
.vline {
  width: 1px;
  height: 5rem;
  background: lightgray;
}

@media screen and (max-width: $bp-lg) {
  .crypto-form {
    margin-top: 1em;
    flex-direction: column;
  }
  .vline {
    display: none;
  }
  label {
    font-size: $xxxs;
    margin-left: 10px;
    margin-bottom: 0;
  }
  .btn-default {
    width: 100%;
    font-size: 1.2rem;
    padding: 0.8em 0.8em;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-size: 1rem;
  }
  .mobile-m {
    margin: auto;
  }
  input {
    padding-bottom: 0.5em;
    margin-left: 10px;
  }
  .flex-v {
    align-self: flex-start;
  }
  .center-mobile {
    text-align: center;
  }
  .mobile-w {
    width: 84vw;
  }
  select.input {
    margin-bottom: 10px;
  }
}

@media screen and (min-width: $bp-lg + 1) {
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1;
  }
}
</style>
