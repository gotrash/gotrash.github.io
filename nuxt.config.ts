import { resolve } from "path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  auth: {
    debug: true,
    // The module is enabled. Change this to disable the module
    isEnabled: true,
    // The origin is set to the development origin. Change this when deploying to production by setting `origin` in this config before build-time or by exporting `AUTH_ORIGIN` by running `export AUTH_ORIGIN=...`
    origin: "http://localhost:3000",
    // The base path to the authentication endpoints. Change this if you want to add your auth-endpoints at a non-default location
    basePath: "/api/auth",
    // Whether to periodically refresh the session. Change this to `true` for a refresh every seconds or set this to a number like `5000` for a refresh every 5000 milliseconds (aka: 5 seconds)
    enableSessionRefreshPeriodically: true,
    // Whether to refresh the session whenever a window focus event happens, i.e, when your user refocuses the window. Set this to `false` to turn this off
    enableSessionRefreshOnWindowFocus: true,
    // Whether to add a global authentication middleware that will protect all pages without exclusion
    globalAppMiddleware: false,
    // Select the default-provider to use when `signIn` is called. Setting this here will also effect the global middleware behavior: E.g., when you set it to `github` and the user is unauthorized, they will be directly forwarded to the Github OAuth page instead of seeing the app-login page
    defaultProvider: "oidc",
    // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path.
    addDefaultCallbackUrl: true,
    // Configuration of the global auth-middleware (only applies if you set `globalAppMiddleware: true` above!)
    globalMiddlewareOptions: {
      // Whether to allow access to 404 pages without authentication. Set this to `false` to force users to sign-in before seeing `404` pages. Setting this to false may lead to vue-router problems (as the target page does not exist)
      allow404WithoutAuth: true,
      // Whether to automatically set the callback url to the page the user tried to visit when the middleware stopped them. This is useful to disable this when using the credentials provider, as it does not allow a `callbackUrl`. Setting this to a string-value will result in that being used as the callbackUrl path. Note: You also need to set the global `addDefaultCallbackUrl` setting to `false` if you want to fully disable this for the global middleware.
      addDefaultCallbackUrl: true
    }
  },
  components: false,
  modules: [
    "@bootstrap-vue-next/nuxt",
    // https://github.com/dargmuesli/nuxt-cookie-control
    "@dargmuesli/nuxt-cookie-control",
    "@nuxt/content",
    "@nuxt/devtools",
    // https://devtools.nuxtjs.org/module/ui-kit
    // "@nuxt/devtools-ui-kit",
    // "@nuxt/image",
    // "@nuxtjs/color-mode",
    // "@nuxtjs/device",
    // https://github.com/nuxt-modules/google-adsense
    // "@nuxtjs/google-adsense",
    // "@nuxtjs/google-fonts",
    // "@nuxtjs/html-validator",
    "@nuxtjs/i18n",
    // https://ionic.nuxtjs.org/getting-started
    // "@nuxtjs/ionic",
    // "@nuxtjs/robots",
    "@pinia/nuxt",
    // "@pinia-orm/nuxt",
    "@sidebase/nuxt-auth",
    "@sidebase/nuxt-session"
    // https://vueuse.org/guide/#nuxt
    // "@vueuse/nuxt",
    // https://nuxt.com/modules/dayjs
    // "dayjs-nuxt",
    // https://nuxt.com/modules/bugsnag
    // "nuxt-bugsnag",
    // https://nuxt.com/modules/electron
    // "nuxt-electron",
    // https://nuxt.com/modules/gtag
    // "nuxt-gtag",
    // "nuxt-icon",
    // "nuxt-lodash"
    // https://github.com/AlexLavoie42/Nuxt-Mapbox
    // "nuxt-mapbox",
    // https://nuxt.com/modules/module-feed
    // "nuxt-module-feed",
    // https://nuxt-security.vercel.app/getting-started/configuration
    // "nuxt-security",
    // https://nuxtseo.com/sitemap/api/schema
    // "nuxt-simple-sitemap",
    // "nuxt-swiper"
  ],
  // devServer: {
  //   https: {
  //     key: "./server.key",
  //     cert: "./server.crt"
  //   }
  // },
  electron: {
    build: [
      {
        // Main-Process entry file of the Electron App.
        entry: "electron/main.ts"
      },
      {
        entry: "electron/preload.ts",
        onstart(options: any) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
          // instead of restarting the entire Electron App.
          options.reload();
        }
      }
    ],
    renderer: {}
  },
  cookieControl: {
    // Position of cookie bar.
    // 'top-left', 'top-right', 'top-full', 'bottom-left', 'bottom-right', 'bottom-full'
    barPosition: "bottom-full",

    // Switch to toggle if clicking the overlay outside the configuration modal closes the modal.
    closeModalOnClickOutside: true,

    // Component colors.
    // If you want to disable colors set colors property to false.
    colors: {
      barBackground: "#000",
      barButtonBackground: "#fff",
      barButtonColor: "#000",
      barButtonHoverBackground: "#333",
      barButtonHoverColor: "#fff",
      barTextColor: "#fff",
      checkboxActiveBackground: "#000",
      checkboxActiveCircleBackground: "#fff",
      checkboxDisabledBackground: "#ddd",
      checkboxDisabledCircleBackground: "#fff",
      checkboxInactiveBackground: "#000",
      checkboxInactiveCircleBackground: "#fff",
      controlButtonBackground: "#fff",
      controlButtonHoverBackground: "#000",
      controlButtonIconColor: "#000",
      controlButtonIconHoverColor: "#fff",
      focusRingColor: "#808080",
      modalBackground: "#fff",
      modalButtonBackground: "#000",
      modalButtonColor: "#fff",
      modalButtonHoverBackground: "#333",
      modalButtonHoverColor: "#fff",
      modalOverlay: "#000",
      modalOverlayOpacity: 0.8,
      modalTextColor: "#000",
      modalUnsavedColor: "#fff"
    },

    // The cookies that are to be controlled.
    // See detailed explanation further down below!
    cookies: {
      necessary: [],
      optional: []
    },

    // The milliseconds from now until expiry of the cookies that are being set by this module.
    cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 365, // one year

    // Names for the cookies that are being set by this module.
    cookieNameIsConsentGiven: "ncc_c",
    cookieNameCookiesEnabledIds: "ncc_e",

    // Options to pass to nuxt's useCookie
    cookieOptions: {
      path: "/"
    },

    // Switch to toggle the "accept necessary" button.
    isAcceptNecessaryButtonEnabled: true,

    // Switch to toggle the button that opens the configuration modal.
    isControlButtonEnabled: true,

    // Switch to toggle the concatenation of target cookie ids to the cookie description.
    isCookieIdVisible: false,

    // Switch to toggle the inclusion of this module's css.
    // If css is set to false, you will still be able to access your color variables.
    isCssEnabled: true,

    // Switch to toggle the css variables ponyfill.
    isCssPonyfillEnabled: false,

    // Switch to toggle the separation of cookie name and description in the configuration modal by a dash.
    isDashInDescriptionEnabled: true,

    // Switch to toggle the blocking of iframes.
    // This can be used to prevent iframes from adding additional cookies.
    isIframeBlocked: false,

    // Switch to toggle the modal being shown right away, requiring a user's decision.
    isModalForced: false,

    // The locales to include.
    locales: ["en"],

    // Translations to override.
    localeTexts: {
      en: {
        save: "Remember"
      }
    }
  },
  "google-adsense": {
    // id: 'ca-pub-#########'
  },
  gtag: {
    // id: 'G-XXXXXXXXXX'
  },
  security: {},
  googleFonts: {
    display: "swap",
    prefetch: true,
    preconnect: true,
    preload: true,
    useStylesheet: true
    // families: {
    //   Roboto: true,
    //   'Josefin+Sans': true,
    //   Lato: [100, 300],
    //   Raleway: {
    //     wght: [100, 400],
    //     ital: [100]
    //   },
    // }
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode"
  },
  robots: {
    rules: {
      UserAgent: "*",
      Disallow: ""
    }
  },
  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
  lodash: {
    prefix: false && "_",
    prefixSkip: "is",
    upperAfterPrefix: false,
    exclude: ["map"],
    alias: [
      // ["camelCase", "stringToCamelCase"], // => stringToCamelCase
      // ["kebabCase", "stringToKebab"], // => stringToKebab
      // ["isDate", "isLodashDate"] // => _isLodashDate
    ]
  },
  bootstrapVueNext: {
    composables: true
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css", "~/assets/scss/app.scss"],
  devtools: {
    enabled: true,
    experimental: { timeline: false },
    viteInspect: true,
    vscode: { enabled: false, startOnBoot: false, reuseExistingServer: true },
    ui: {}
  },
  nitro: { logLevel: 2, timing: true },
  // or sourcemap: true
  sourcemap: {
    server: true,
    client: true
  },
  content: {
    sources: {
      // overwrite default source AKA `content` directory
      content: {
        driver: "fs",
        prefix: "/info", // All contents inside this source will be prefixed with `/content`
        base: resolve(__dirname, "content")
      }
    }
  },
  i18n: {
    experimental: {
      jsTsFormatResource: false
    },
    langDir: "lang",
    lazy: false,
    locales: [
      {
        code: "en",
        iso: "en-GB",
        file: "en.js",
        name: "EN"
      }
    ],
    defaultLocale: "en",
    debug: false,
    defaultDirection: "ltr",
    vueI18n: "./i18n.config.ts"
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://localhost:8090"
    }
  },
  vite: {
    plugins: [
      VueI18nPlugin.vite({
        compositionOnly: false,
        fullInstall: true,
        forceStringify: false,
        runtimeOnly: false,
        include: resolve(__dirname, "lang/**")
      })
    ]
  },
  plugins: ["~/plugins/fontawesome"],
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/vue-fontawesome",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons"
    ]
  }
});
