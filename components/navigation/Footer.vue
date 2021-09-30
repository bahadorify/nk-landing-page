<template>
  <footer>
    <div id="footer" class="footer--content">
      <div class="copyright">
        <img class="copyright--logo" src="/logo_nordikcoin.svg" alt="Logo" />
        <small>
          {{ $t("footer.copyright1") }}
          <br />
          {{ $t("footer.copyright2") }}
        </small>
        <div class="copyright--logos">
          <div>
            <img src="/logos/logo-mastercard.png" alt="mastercard" />
          </div>
          <div>
            <img src="/logos/logo-maestro.png" alt="maestro" />
          </div>
          <div>
            <img src="/logos/logo-visa.png" alt="visa" />
          </div>
          <div>
            <img src="/logos/18plus.png" alt="18plus" />
          </div>
        </div>
        <div class="copyright--language">
          <span>
            Language:
          </span>
          <LanguageButton
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :code="locale.code"
          />
        </div>
      </div>
      <div class="footer--links">
        <div class="footer--col links">
          <div class="footer--item">
            <h5>{{ $t("footer.heading1") }}</h5>
            <ul class="list-unstyled text-small">
              <li>
                <nuxt-link :to="localePath('/terms-conditions/')">
                  {{ $t("footer.terms") }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/refund-cancellation/')">
                  {{ $t("footer.refund") }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/aml-kyc-policy/')">
                  {{ $t("footer.aml") }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/privacy-policy/')">
                  {{ $t("footer.privacy") }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/cookie-policy/')">
                  {{ $t("footer.cookie") }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/general-risk-disclosure/')">
                  {{ $t("footer.general") }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/pricing-and-fees-disclosures/')">
                  {{ $t("footer.pricing") }}
                </nuxt-link>
              </li>
            </ul>
          </div>

          <div class="footer--item">
            <h5>{{ $t("footer.heading2") }}</h5>
            <ul class="list-unstyled text-small">
              <li>
                <nuxt-link :to="localePath('/about-us/')">
                  {{ $t("footer.about") }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/manual-account-opening/')">
                  {{ $t("footer.manual") }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/frequently-asked-questions-faq/')">
                  {{ $t("footer.faq") }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link :to="localePath('/contact-us/')">
                  {{ $t("footer.contact") }}
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div class="footer--item hide-mobile">
            <h5>{{ $t("footer.heading3") }}</h5>
            <ul class="list-unstyled text-small">
              <li>{{ $t("footer.weekdays") }}</li>
              <li>
                <a href="mailto:support@nordikcoin.com"
                  >support@nordikcoin.com</a
                >
              </li>
            </ul>
          </div>
        </div>

        <!--         <div class="footer--col links">
          <div class="footer--item">
            <h5>{{ $t('footer.heading4') }}</h5>
            <ul class="list-unstyled text-small">
              <li>
                <nuxt-link to="">
                  {{ $t('footer.howtobuy') }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="">
                  {{ $t('footer.howtocreate') }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="">
                  {{ $t('footer.best') }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="">
                  {{ $t('footer.btcdummies') }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="">
                  {{ $t('footer.buybit') }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="">
                  {{ $t('footer.isgood') }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to=""
                >
                  {{ $t('footer.wheretobuy') }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="">
                  {{ $t('footer.thehistory') }}
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to=""
                  class="text-muted"
                >
                  {{ $t('footer.whatis') }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div> -->

        <!-- Unelegant hack for odd flex containers and flex items disposition in desktop layout -->
        <div class="footer--col links hide-not-mobile">
          <div class="footer--item hide-not-mobile">
            <h5>{{ $t("footer.heading3") }}</h5>
            <ul class="list-unstyled text-small">
              <li>{{ $t("footer.weekdays") }}</li>
              <li><a href="#">support@nordikcoin.com</a></li>
              <li>
                <a href="tel:+35699000055">
                  Telephone: (+356) 99 00 00 55
                </a>
              </li>
            </ul>
          </div>
          <div class="footer--item hide-not-mobile">
            <h5>{{ $t("footer.heading5") }}</h5>
            <address>
              OmniMatrix OÜ<br />
              Maakri tn 19/2<br />
              Tallinn 10145<br />
              Harju maakond<br />
              Estonia
            </address>
          </div>
          <div class="footer--item hide-not-mobile">
            <h5>{{ $t("footer.heading6") }}</h5>
            <address>
              OmniMatrix LTD<br />
              Valley Towers, No. 4 <br />
              Valley Road <br />
              Birkirkara BKR 9022 <br />
              MALTA
            </address>
          </div>
          <div class="footer--item hide-not-mobile">
            <h5>{{ $t("footer.heading7") }}</h5>
            <address>
              OmniMatrix OÜ <br />
              Organization number: 14674630 <br />
              VT000095 <br />
            </address>
          </div>
        </div>

        <div class="footer--col address hide-mobile">
          <div class="footer--item hide-mobile">
            <h5>{{ $t("footer.heading5") }}</h5>
            <address>
              OmniMatrix OÜ<br />
              Maakri tn 19/2<br />
              Tallinn 10145<br />
              Harju maakond<br />
              Estonia
            </address>
          </div>
          <div class="footer--item hide-mobile">
            <h5>{{ $t("footer.heading7") }}</h5>
            <address>
              OmniMatrix OÜ <br />
              Organization number: 14674630 <br />
              VT000095 <br />
            </address>
          </div>
        </div>
        <div class="footer--col address hide-mobile">
          <div class="footer--item hide-mobile">
            <h5>{{ $t("footer.heading6") }}</h5>
            <address>
              OmniMatrix LTD<br />
              Valley Towers, No. 4 <br />
              Valley Road <br />
              Birkirkara BKR 9022 <br />
              MALTA
            </address>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LanguageButton from '@/components/elements/LanguageButton'

export default {
  name: "Footer",
  components: {
    LanguageButton
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";

.hide-not-mobile {
  display: none;
}

.hide-mobile {
  display: block;
}

footer {
  background: #fafafa;
  width: 100vw;
  margin-bottom: 0;
  position: relative;
  left: calc(-50vw + 50%);
}

.footer--content {
  display: flex;
  justify-content: flex-start;
  width: $width;
  max-width: $maxWidth;
  margin: auto;
  padding: 70px 1rem;
}

.copyright {
  height: 15.625rem;
  margin-right: 10rem;
  flex: 0 0 23.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  small {
    font-size: $xxs;
    margin-bottom: 1.25rem;
  }
  .copyright--logo {
    width: 100%;
    max-width: 15.25rem;
    margin-bottom: 2.5rem;
  }
  .copyright--logos {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    a {
      display: block;
    }
    img {
      width: 3.6rem;
      // height: auto;
    }
  }
  .copyright--language {
    display: flex;
    align-items: center;
    padding-top: 40px;
  }
}

.footer--links {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  font-size: $xxs;
  line-height: 2.5rem;
  color: #333;
  width: 100%;
  h5 {
    font-size: $xxs;
    font-weight: bold;
  }
  ul {
    margin-bottom: 0;
  }

  .footer--col {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 0.625rem;
    // flex: 0 0 14rem;

    .footer--item {
      margin-bottom: 1.875rem;
    }
  }
  .links {
    margin-right: 3rem;
  }
  .address {
    flex: 0 0 14rem;
  }
}

@media screen and (max-width: $bp-lg) {
  footer {
    width: 100%;
    position: static;
    padding-left: 1em;
    padding-right: 1em;
  }

  .footer--content {
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .copyright {
    width: 100%;
    margin: 0;
    align-items: center;
    text-align: center;
    height: auto;
    flex: 0 1 auto;

    .copyright--logo {
      max-width: 120px;
      width: auto;
      height: auto;
      margin-bottom: 2em;
    }

    small {
      font-size: 0.8em;
    }
  }

  .footer--links {
    justify-content: center;
    padding-top: 2em;
    font-size: 1em;
    .footer--col {
      // padding: 2px;
      &:not(.hide-mobile) {
        margin: 0 auto;
      }
      .footer--item {
        margin-bottom: 1.875rem;
      }
    }
    h5 {
      font-size: 1.2em;
      text-align: center;
    }
    a {
      font-size: 1em;
      text-align: center;
    }
    .links {
      margin-right: 0;
      text-align: center;
    }
    .address {
      flex: 0 1 auto;
      text-align: center;
    }
  }

  .hide-mobile {
    display: none;
  }

  .hide-not-mobile {
    display: block;
  }
}
</style>
