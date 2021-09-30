<template>
  <div id="topnav" :class="`full-width`">
    <nav class="topnav">
      <div class="topnav--logo-container">
        <nuxt-link to="/">
          <img
            class="topnav--logo"
            src="/logo_nordikcoin.svg"
            alt="nordikcoin logo"
          />
        </nuxt-link>
        <div class="tagline">Powered by Lightning</div>
      </div>
      <div :class="`topnav--nav show-non-mobile`">
        <div class="topnav--lang">
          <LanguageButton key="en" code="en" type="not-flag" />
          /
          <LanguageButton key="ja" code="ja" type="not-flag" />
        </div>
        <nuxt-link
          class="topnav--link"
          :to="{ path: '/', hash: '#how-it-works' }"
        >
          {{ $t("navbar.how") }}
        </nuxt-link>
        <nuxt-link class="topnav--link" :to="{ path: '/', hash: '#why-us' }">
          {{ $t("navbar.why") }}
        </nuxt-link>
        <a class="topnav--link" href="/login">
          {{ $t("navbar.sign") }}
        </a>
        <a class="topnav--link topnav--btn" href="/login">
          {{ $t("navbar.get") }}
        </a>
      </div>
    </nav>
    <div class="nav-container show-mobile">
      <nav :class="`m-navbar ${open}`">
        <div :class="`hamburger-menu ${open}`" @click="toggleHamburger">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
        <div class="cover-mobile"></div>
        <div class="m-nav-list">
          <li class="m-nav-item" @click="toggleHamburger">
            <nuxt-link
              class="m-nav-link"
              :to="{ path: '/', hash: '#how-it-works' }"
            >
              {{ $t("navbar.how") }}
            </nuxt-link>
          </li>
          <li class="m-nav-item" @click="toggleHamburger">
            <nuxt-link class="m-nav-link" :to="{ path: '/', hash: '#why-us' }">
              {{ $t("navbar.why") }}
            </nuxt-link>
          </li>
          <li class="m-nav-item">
            <a class="m-nav-link" href="/login">
              {{ $t("navbar.sign") }}
            </a>
          </li>
          <li class="m-nav-item" @click="toggleHamburger">
            <LanguageButton
              v-for="locale in $i18n.locales"
              :key="locale.code"
              :code="locale.code"
            />
          </li>
          <li :class="`m-nav-item ${open}`">
            <a
              class="m-nav-link topnav--btn"
              href="/login"
            >
              {{ $t("navbar.get") }}
            </a>
          </li>
        </div>
      </nav>
    </div>
    <!-- <nav :class="`mobile-nav show-mobile ${hidden}`">
      <a href="javascript:void(0);" class="icon" @click="toggleHamburger">
        <fa :icon="['fas', 'bars']" />
      </a>
      <div :class="`topnav--nav responsive`">
        <nuxt-link
          class="topnav--link"
          :to="{ path: '/', hash: '#how-it-works' }"
        >
          {{ $t("navbar.how") }}
        </nuxt-link>
        <nuxt-link class="topnav--link" :to="{ path: '/', hash: '#why-us' }">
          {{ $t("navbar.why") }}
        </nuxt-link>
        <a class="topnav--link" href="/login">
          {{ $t("navbar.sign") }}
        </a>
        <a class="topnav--link topnav--btn" href="/login">
          {{ $t("navbar.get") }}
        </a>
      </div>
    </nav> -->
  </div>
</template>

<script>
import LanguageButton from '@/components/elements/LanguageButton'

export default {
  name: "NavBar",
  components: {
    LanguageButton
  },
  data: () => ({
    isOpen: false
  }),
  computed: {
    open() {
      return this.isOpen ? "open" : "";
    }
  },
  methods: {
    toggleHamburger() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/sass/_variables.scss";
.show-mobile {
  display: none;
}
#topnav {
  background: $info;
}
.topnav--logo-container {
  .topnav--logo {
    width: 245px;
  }
  .tagline {
    font-style: italic;
    padding-left: 47px;
    margin-top: -7px;
    font-size: 11px;
    font-weight: lighter;
  }
}
.topnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 0;
  background-color: $info;
  width: $width;
  max-width: $maxWidth;
  margin: auto;

  .icon {
    display: none;
    font-size: 22px;
  }

  .topnav--nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .topnav--lang {
      position: fixed;
      margin: -80px 14px 0 0;
    }

    &.show-non-mobile {
      display: flex;
    }
    .topnav--link {
      margin-left: 40px; //55px
      font-size: 20px;
      // font-weight: bold;
      &:first-of-type {
        margin-left: 0;
      }
    }
  }
}

.topnav--btn {
  background: $secondary;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 25px;
  margin-left: 44px;
  border-radius: 5px;
  &:hover {
    color: $grey;
  }
}

@media screen and (max-width: $bp-lg) {
  .topnav {
    margin: 0 1rem;
    .topnav--nav {
      &.show-non-mobile {
        display: none;
      }
    }
  }

  .nav-container {
    &.show-mobile {
      display: block;
    }

    width: 100%;
    position: relative;
    background-color: transparent;
    .cover-mobile {
      position: fixed;
      width: inherit;
      height: 160px;
      background: #eceef1;
    }
    .m-navbar {
      width: 300px;
      height: 100vh;
      background: #eceef1;
      position: fixed;
      top: 0;
      right: -300px;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: center;
      transition: right 0.4s ease 0.1s;
      z-index: 1000;

      &.open {
        right: 0;
        transition: right 0.4s ease;
      }

      .m-nav-list {
        text-align: right;
        width: 100%;
        overflow: scroll;
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        /* Hide scrollbar for Chrome, Safari and Opera */
        &::-webkit-scrollbar {
          display: none;
        }

        .m-nav-item {
          list-style: none;
          margin: 35px 50px;

          &:first-child {
            margin-top: 200px;
          }

          // Get Started button
          &:last-child {
            position: fixed;
            top: 115px;
            right: 50px;
            margin: 0;
            opacity: 0;
            transition: opacity 0.1s;
            a {
              padding: 17px 57px;
              margin: 0;
            }
            &.open {
              opacity: 1;
              transition: opacity 0.1s ease 0.4s;
            }
          }
        }
      }

      .hamburger-menu {
        width: 35px;
        height: 30px;
        position: fixed;
        top: 50px;
        right: 50px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        z-index: 1;

        .line {
          width: 100%;
          height: 3px;
          background: $grey;
          border-radius: 1px;
          transition: all 0.8s;
          z-index: 1001;
        }
        &.open .line1 {
          transform: rotateZ(-405deg) translate(-8px, 6px);
        }
        &.open .line2 {
          opacity: 0;
        }
        &.open .line3 {
          transform: rotateZ(405deg) translate(-8px, -6px);
        }
      }
    }
  }
}
@media screen and (max-width: 425px) {
  .topnav--logo-container {
    .topnav--logo {
      width: 150px;
    }
    .tagline {
      padding-left: 29px;
      margin-top: -3px;
      font-size: 7px;
    }
  }
  .nav-container .m-navbar .hamburger-menu {
    top: 40px;
    right: 20px;
  }
}
</style>
