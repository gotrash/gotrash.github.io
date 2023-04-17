export default {
  auth: {},
  axios: {
    baseURL: "/",
    retry: { retries: 10 }
  },
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },
  build: {},
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module"
  ],
  cli: {
    badgeMessages: ["GoTrash", "Web App"]
  },
  components: false,
  cron: {
    options: {
      preset: "custom-cron-preset"
    },
    presets: {
      "custom-cron-preset": {
        presetId: "custom-cron-preset",
        useSeconds: true,
        useYears: false,
        useAliases: false,
        useBlankDay: true,
        allowOnlyOneBlankDayField: true,
        mustHaveBlankDayField: true,
        useLastDayOfMonth: false,
        useLastDayOfWeek: false,
        useNearestWeekday: false,
        useNthWeekdayOfMonth: false,
        seconds: {
          minValue: 0,
          maxValue: 0
        },
        minutes: {
          minValue: 0,
          maxValue: 59
        },
        hours: {
          minValue: 0,
          maxValue: 23
        },
        daysOfMonth: {
          minValue: 0,
          maxValue: 31
        },
        months: {
          minValue: 0,
          maxValue: 12
        },
        daysOfWeek: {
          minValue: 0,
          maxValue: 7
        },
        years: {
          minValue: 1970,
          maxValue: 2099
        }
      }
    }
  },
  csp: {},
  css: {},
  dev: process.env.NODE_ENV !== "production",
  head: {},
  i18n: {},
  modules: [
    "bootstrap-vue/nuxt",
    "@nuxtjs/auth",
    "@nuxtjs/axios",
    // "@nuxtjs/i18n",
    "@nuxtjs/pwa",
    // "@nuxtjs/style-resources",
    // "@nuxtjs/svg",
    "@nuxtjs/toast",
    "@nuxtjs/universal-storage"
  ],
  plugins: [],
  privateRuntimeConfig: {},
  publicRuntimeConfig: {},
  pwa: {
    icons: {
      iconFileName: "icon.png"
    },
    manifest: {
      name: "GoTrash",
      short_name: "GoTrash",
      background_color: "#FAFAFA",
      theme_color: "#1D1D1D",
      crossorigin: "use-credentials",
      orientation: "landscape-primary",
      display: "fullscreen",
      lang: "en"
    },
    meta: {
      mobileApp: false,
      favicon: true,
      author: "GoTrash UK Ltd",
      theme_color: "#1D1D1D",
      twitterSite: "@gotrash",
      nativeUI: false
    },
    workbox: {
      autoRegister: true,
      dev: process.env.NODE_ENV !== "production" && process.env.WORKBOX_DEV === true,
      offline: false,
      offlineStrategy: "CacheFirst",
      runtimeCaching: [
        {
          urlPattern: "/^https://fonts.googleapis.com/",
          handler: "staleWhileRevalidate",
          strategyOptions: {
            cacheName: "google-fonts-stylesheets"
          }
        },
        {
          urlPattern: "/^https://fonts.gstatic.com/",
          handler: "cacheFirst",
          strategyOptions: {
            cacheName: "google-fonts-webfonts",
            cacheableResponses: [0, 200],
            cacheExpiration: {
              maxAgeSeconds: 60 * 60 * 24 * 365
            }
          }
        }
      ]
    }
  },
  styleResources: {
    scss: ["./assets/scss/general.scss"],
    hoistUseStatements: true
  },
  toast: {
    position: "bottom-right",
    duration: 2000
  }
};
