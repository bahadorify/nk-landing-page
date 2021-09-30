import messages from "./assets/translations/messages";

export default {
  env: {
    BACKEND_DOMAIN: "http://localhost:8188"
  },
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "NordikCoin" || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
      // {
      //   hid: "description",
      //   name: "description",
      //   content: process.env.npm_package_description || ""
      // }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/sass/app.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@/plugins/highcharts-vue.js"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [{ path: "~/components", extensions: ["vue"] }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxt/typescript-build"],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    // Doc: https://github.com/nuxt/content
    "@nuxt/content",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/fontawesome-free-solid",
            icons: ["faBars"]
          }
        ]
      }
    ],
    [
      "nuxt-i18n",
      {
        strategy: "no_prefix",
        differentDomains: true,
        locales: [
          {
            name: "English",
            code: "en",
            file: "~/assets/translations/messages.js",
            domain: process.env.APP_URL
          },
          {
            name: "Japanese",
            code: "ja",
            file: "~/assets/translations/messages.js",
            domain: `jp.${process.env.APP_URL}`
          }
        ],
        defaultLocale: process.env.DEFAULT_LOCALE,
        vueI18n: {
          fallbackLocale: "en",
          messages
        }
      }
    ],
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  robots: {
    UserAgent: '*',
    Disallow: '/login'
  },
  sitemap: {
    hostname: "https://nordikcoin.com/",
    exclude: [
      "/login"
    ],
    routes: [
      '/about-us',
      '/aml-kyc-policy',
      '/contact-us',
      '/cookie-policy',
      '/frequently-asked-questions-faq',
      '/general-risk-disclosure',
      '/manual-account-opening',
      '/pricing-and-fees-disclosures',
      '/privacy-policy',
      '/refund-cancellation',
      '/terms-conditions',
    ]
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: ["@stylelib"],
    extractCSS: true
  },
  router: {
    scrollBehavior(to) {
      const offset = window.innerWidth > 1024 ? 120 : 80;
      if (to.hash) {
        const el = document.querySelector(to.hash);
        return window.scrollTo({
          // TODO: el is not defined when navigating
          // from one page to another page's #
          top: el ? el.offsetTop - offset : 0,
          behavior: "smooth"
        });
      }
      return window.scrollTo({ top: 0 });
    }
  }
};
