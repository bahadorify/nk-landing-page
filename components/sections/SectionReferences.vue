<template>
  <section class="references center-mobile">
    <h3>{{ $t("home.references.heading") }}</h3>
    <div class="logos">
      <div>
        <a
          target="_blank"
          href="https://www.nasdaq.com/articles/the-best-bitcoin-trading-strategies-that-still-work-in-2020-2020-03-24"
        >
          <img src="/logos/nasdaq.svg" alt="Nasdaq" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://finance.yahoo.com/news/nordikcoin-set-expand-asian-markets-080000724.html"
        >
          <img src="/logos/yahoofinance.svg" alt="Yahoo Finance" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://coinmarketcap.com/fr/headlines/news/5-reasons-why-bitcoin-is-becoming-a-mainstream-payment-option/"
        >
          <img src="/logos/coinmarketcap.svg" alt="CoinMarketCap" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://techbullion.com/will-bitcoin-ever-become-stable/"
        >
          <img src="/logos/techbullion.svg" alt="Techbullion" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://thetaiwantimes.com/nordikcoin-set-to-expand-into-asian-markets-in-2021/"
        >
          <img src="/logos/taiwantimes.svg" alt="Taiwan Times" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://www.econotimes.com/How-Bitcoin-Works-The-Technology-Behind-Cryptocurrencies-1598293"
        >
          <img src="/logos/econotimes.svg" alt="Econo Times" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://btcmanager.com/here-is-the-safest-and-most-convenient-bitcoin-wallet-of-2020/"
        >
          <img src="/logos/btcmanager.svg" alt="BTC Manager" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://cryptoslate.com/how-to-buy-bitcoin-with-credit-cards-instantly/"
        >
          <img src="/logos/cryptoslate.svg" alt="Cryptoslate" />
        </a>
      </div>
      <div>
        <a
          target="_blank"
          href="https://bitcoinmagazine.com/articles/the-best-bitcoin-trading-strategies-that-still-work-in-2020"
        >
          <img src="/logos/bitcoinmagazine.svg" alt="Bitcoin Magazine" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "References"
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.references {
  text-align: center;
  padding: 3.125rem 0;
  margin: 0 auto;
  width: 100rem;
  .logos {
    margin-top: 3.3rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    div {
      width: 33%;
      padding: 3rem 7rem;
      img {
        width: 100%;
        height: 6.5rem;
        object-fit: contain;
      }
    }
  }
}

@media screen and (max-width: $bp-lg) {
  .references {
    width: 100%;
    // margin: 0;
    // padding-left: 1em;
    // padding-right: 1em;
    // h3 {
    //   font-size: 2.2em;
    //   margin-bottom: 1.6em;
    // }
    .logos {
      margin-top: 1rem;
      div {
        width: 25%;
        margin: 2% 4%;
        padding: 0;
        img {
          height: 3rem;
        }
      }
    }
  }
}
</style>
