<template>
  <section class="bitcoin-val ">
    <div class="section-header center-mobile">
      <p class="subheading">
        {{ $t("home.bitcoin.subheading") }}
      </p>
      <h2>{{ $t("home.bitcoin.heading") }}</h2>
    </div>
    <div class="datapoint-wrapper">
      <DataPoint
        :title="$t('home.bitcoin.data1title')"
        :value="pointData.PRICE"
      />
      <DataPoint
        :style="`color: ${percentColor};`"
        :title="$t('home.bitcoin.data2title')"
        :value="percentage(pointData.CHANGEPCT24HOUR)"
      />
      <DataPoint
        :title="$t('home.bitcoin.data3title')"
        :value="pointData.MKTCAP"
      />
      <DataPoint
        :title="$t('home.bitcoin.data4title')"
        :value="pointData.TOTALVOLUME24HTO"
      />
    </div>
    <div>
      <div class="range-widget">
        <span
          v-for="r in ranges"
          :key="r.range"
          :class="rangeClass(r.range)"
          @click="doSelect(r)"
          >{{ r.range }}</span
        >
      </div>
      <ChartHistory :chart-data="chartData" />
    </div>
  </section>
</template>

<script>
import { prepareHighChartsData } from "../../helpers/cryptoCompare.js";
import DataPoint from '@/components/elements/DataPoint'
import ChartHistory from '@/components/elements/charts/ChartHistory'
// CryptoCompare API
// historical bc data
const urlHistMinute =
  "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=EUR&limit=1440&api_key=fcda569b2cd82dca7f3470745ed16db294939447c22ab3183362c95399549823";
const urlHistHour =
  "https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=EUR&limit=720&api_key=fcda569b2cd82dca7f3470745ed16db294939447c22ab3183362c95399549823";
const urlHistDay =
  "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=EUR&limit=1825&api_key=fcda569b2cd82dca7f3470745ed16db294939447c22ab3183362c95399549823";
// 24HR point data
const url24 =
  "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=EUR&api_key=fcda569b2cd82dca7f3470745ed16db294939447c22ab3183362c95399549823";

export default {
  async fetch() {
    const rObj = this.ranges.find(r => r.range === this.selectedRange);
    this.chartData = await prepareHighChartsData(rObj);
    const { data: data24 } = await this.$axios.get(url24);
    this.pointData = data24.DISPLAY.BTC.EUR;
  },
  components: {
    DataPoint,
    ChartHistory
  },
  data: () => ({
    chartData: [],
    pointData: {},
    ranges: [
      { range: "1h", endpoint: urlHistMinute, points: 60 },
      { range: "12h", endpoint: urlHistMinute, points: 720 },
      { range: "1d", endpoint: urlHistMinute, points: 1440 },
      { range: "1w", endpoint: urlHistHour, points: 168 },
      { range: "1m", endpoint: urlHistHour, points: 720 },
      { range: "1y", endpoint: urlHistDay, points: 365 },
      { range: "5y", endpoint: urlHistDay, points: 1825 }
    ],
    selectedRange: "1d",
    percentColor: ""
  }),
  methods: {
    rangeClass(r) {
      return r === this.selectedRange ? "selected" : "";
    },
    async doSelect(r) {
      this.selectedRange = r.range;
      this.chartData = await prepareHighChartsData(r);
      console.log(this.chartData);
    },
    percentage(p) {
      this.percentColor = Number(p) >= 0 ? "#7CEE00" : "#FF004F";
      return `${p}%`;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.range-widget {
  display: flex;
  justify-content: flex-end;
  margin: 0 0 1rem 1rem;
  span {
    margin: 0 1rem;
    font-size: $xs;
    font-weight: bold;
    opacity: 0.2;
    &.selected {
      opacity: 1;
    }
    &:hover {
      cursor: pointer;
    }
  }
}

.bitcoin-val {
  padding-top: 9.1rem;
}

.section-header {
  margin-bottom: 4.375rem;
}

.datapoint-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 8.75rem;

  div {
    margin-bottom: 0.625rem;
    flex-grow: 1;
  }
}

@media screen and (max-width: $bp-lg) {
  .section-header {
    margin-bottom: 0;
  }
  .bitcoin-val {
    padding-top: 4em;
    padding-left: 1em;
    padding-right: 1em;
    .subheading {
      font-size: 1.4em;
      margin-bottom: 0.4em;
    }
    h2 {
      font-size: 2.2em;
      margin-bottom: 0.8em;
    }
  }
  .datapoint-wrapper {
    margin-bottom: 2.4em;
    justify-content: center;
    div {
      flex-grow: 0;
    }
  }
  .range-widget {
    justify-content: center;
    margin: 1rem 0;
    span {
      font-size: 1em;
    }
  }
}
</style>
