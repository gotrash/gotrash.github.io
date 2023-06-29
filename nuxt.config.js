import Path from "path";
import Fiber from "fibers";
import Sass from "sass";
import i18n from "./lang/config";

// Community & 3rd-party modules
const communityModules = ["nuxt-leaflet", "bootstrap-vue/nuxt"];

// Official Nuxt modules
const nuxtModules = [
  "auth-next",
  "axios",
  "i18n",
  "pwa",
  "style-resources",
  // "svg",
  "proxy",
  "toast",
  "universal-storage",
  "sentry"
];

export default {
  auth: {
    debug: true,
    plugins: [{ src: "~/plugins/axios" }, "~/plugins/auth.js"],
    strategies: {
      oidc: {
        scheme: "openIDConnect",
        endpoints: {
          configuration: "http://localhost:9000/.well-known/openid-configuration"
        },
        clientId: "messaging-client",
        clientSecret: "secret",
        grantType: "authorization_code",
        scope: "openid",
        // state: "UNIQUE_AND_NON_GUESSABLE",
        codeChallengeMethod: "S256",
        responseMode: "offline",
        logoutRedirectUri: "http://localhost:3000",
        // acrValues: "",
        autoLogout: false
      }
    },
    resetOnError: true,
    redirect: {
      login: "/login",
      logout: "/",
      callback: "/auth/authorized",
      home: "/"
    },
    watchLoggedIn: true
  },
  axios: {
    baseURL: "http://localhost:8090",
    browserBaseURL: "http://localhost:8090",
    progress: true,
    proxy: true,
    retry: { retries: 10 }
  },
  bootstrapVue: { bootstrapCSS: false, bootstrapVueCSS: false },
  build: {
    analyze: false,
    babel: {
      babelrc: false
      //     plugins: [
      //       [
      //         "module-resolver",
      //         {
      //           root: ["."],
      //           alias: {
      //             "@": ".",
      //             "~": "."
      //           }
      //         }
      //       ]
      //     ],

      //     presets(env) {
      //       // const envTargets = {
      //       //   client: { browsers: ["last 2 versions"], ie: 10 },
      //       //   server: { node: "current" }
      //       // };

      //       return [
      //         "@babel/preset-env",
      //         [
      //           "@nuxt/babel-preset-app",
      //           {
      //             corejs: 2,
      //             loose: true,
      //             targets: {
      //               browsers: ["last 2 versions"],
      //               node: "current"
      //             },
      //             useBuiltIns: "usage",
      //             polyfills: [
      //               "es.array.iterator",
      //               "es.array.from",
      //               "es.promise",
      //               "es.promise.finally",
      //               "es.object.assign",
      //               "es.object.entries",
      //               "es.map"
      //             ]
      //           }
      //         ]
      //       ];
      //     }
    },
    html: {
      // minify: {
      //   collapseBooleanAttributes: true,
      //   decodeEntities: true,
      //   minifyCSS: true,
      //   minifyJS: true,
      //   processConditionalComments: true,
      //   removeEmptyAttributes: false,
      //   removeRedundantAttributes: true,
      //   trimCustomFragments: true,
      //   useShortDoctype: true
      // }
    },
    loaders: {
      scss: {
        implementation: Sass,
        sassOptions: {
          fiber: Fiber,
          quietDeps: true
        },
        additionalData: '@use "sass:math";'
      }
    },
    parallel: true,
    profile: false,
    transpile: [/^vue2-google-maps($|\/)/],
    // transpile: [/^vue2-google-maps($|\/)/, "vuejs-datepicker", "pdfjs-dist"],
    extend(config, ctx) {
      config.node = {
        fs: "empty"
      };
      config.resolve.alias.leaflet = Path.join(__dirname, "node_modules/leaflet");
    }
  },
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/fontawesome"
    // https://go.nuxtjs.dev/stylelint
    // [
    //   "@nuxtjs/stylelint-module",
    //   {
    //     rules: { "selector-anb-no-unmatchable": null }
    //   }
    // ]
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
  csp: {
    reportOnly: true,
    hashAlgorithm: "sha256",
    policies: {
      "default-src": ["'self'"],
      "img-src": ["https:", "*.google-analytics.com"],
      "worker-src": [
        "'self'",
        `blob:`
        // DefaultConfigValues.PRIMARY_HOSTS
      ],
      "style-src": [
        "'self'",
        "'unsafe-inline'"
        // DefaultConfigValues.PRIMARY_HOSTS,
      ],
      "script-src": [
        "'self'",
        "'unsafe-inline'",
        // DefaultConfigValues.PRIMARY_HOSTS,
        "sentry.io",
        "*.sentry-cdn.com",
        "*.google-analytics.com"
      ],
      "connect-src": [
        // DefaultConfigValues.PRIMARY_HOSTS,
        "sentry.io",
        "*.google-analytics.com"
      ],
      "form-action": ["'self'"],
      "frame-ancestors": ["'none'"],
      "object-src": ["'none'"],
      "base-uri": [
        // DefaultConfigValues.PRIMARY_HOSTS
      ],
      "report-uri": [`https://sentry.io/api/<project>/security/?sentry_key=<key>`]
    }
  },
  css: ["~/assets/scss/app.scss"],
  dev: process.env.NODE_ENV !== "production",
  fontawesome: {
    component: "fa",
    suffix: true,
    icons: {
      brands: true,
      solid: true,
      // if you have bought the Pro packages
      // list the icons you want to add, not listed icons will be tree-shaked
      // solid: ["faHome", "faHeart"],
      // include all icons. But don't do this.
      regular: true
    }
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "GoTrash Web App" },
      { name: "format-detection", content: "telephone=no" },
      {
        hid: "robots",
        name: "robots",
        content: "noarchive, nofollow, noindex"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700"
      }
    ],
    title: "GoTrash",
    titleTemplate: `%s - GoTrash`
  },
  i18n,
  modules: [
    ...nuxtModules.map(module => `@nuxtjs/${module}`),
    ...communityModules,
    "~/modules/spatial.utils"
    // https://go.nuxtjs.dev/content
    // "@nuxt/content"
  ],
  plugins: [
    { src: "~/plugins/axios", mode: "client" },
    { src: "~/plugins/global-mixins" },
    { src: "~/plugins/global-components" },
    { src: "~/plugins/vuelidate" },
    { src: "~/plugins/router" }
    // { src: "~/plugins/google-maps.js", ssr: true }
  ],
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BROWSER_BASE_URL || "http://localhost:8090",
      browserBaseURL: process.env.BROWSER_BASE_URL || "http://localhost:8090"
    },
    googleAnalytics: {
      id: process.env.GA_TRACKING_ID
    },
    mapbox: {
      apiKey:
        process.env.MAPBOX_API_KEY ||
        "pk.eyJ1IjoiY29kZXRoZW9yaXN0IiwiYSI6ImNrMWY1NzZ0ZDBvNDQzb2xtczczdng4NmgifQ.f81JgmSd4m_haPhqGDOXcA",
      leafletUrl:
        process.env.MAPBOX_LEAFLET_URL ||
        "https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}"
    }
  },
  proxy: {
    // see Proxy section
    // Proxies /foo to http://example.com/foo
    "/.well-known/openid-configuration": {
      target: "http://localhost:9000/.well-known/openid-configuration"
    }
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: process.env.BROWSER_BASE_URL || "http://localhost:8090",
      browserBaseURL: process.env.BROWSER_BASE_URL || "http://localhost:8090"
    },
    googleAnalytics: {
      id: process.env.GA_TRACKING_ID
    },
    mapbox: {
      apiKey:
        process.env.MAPBOX_API_KEY ||
        "pk.eyJ1IjoiY29kZXRoZW9yaXN0IiwiYSI6ImNrMWY1NzZ0ZDBvNDQzb2xtczczdng4NmgifQ.f81JgmSd4m_haPhqGDOXcA",
      leafletUrl:
        process.env.MAPBOX_LEAFLET_URL ||
        "https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}"
    }
  },
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
  router: {
    middleware: ["auth"]
  },
  sentry: {
    dsn:
      process.env.SENTRY_DSN ||
      "https://4d5ae3c08af040e485d1a6d0115b42ac@o4505031174258688.ingest.sentry.io/4505031179108352",
    config: {},
    // initialize: true,
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
  },
  styleResources: {
    scss: ["./assets/scss/general.scss"],
    hoistUseStatements: true
  },
  toast: {
    position: "bottom-right",
    duration: 2000,
    register: [
      // Register custom toasts
      {
        name: "gotrash-error",
        message: payload => {
          const s = !payload && !payload.message ? "Oops, somethings went wrong!" : payload.message;
          return s;
        },
        options: {
          className: "bg-danger",
          type: "error"
        }
      },
      {
        name: "gotrash-disabled",
        message: payload => {
          const s = !payload && !payload.message ? "Setting disabled!" : `${payload.message} is now disabled!`;
          return s;
        },
        options: {
          className: "bg-danger",
          type: "error"
        }
      },
      {
        name: "gotrash-enabled",
        message: payload => {
          const s = !payload && !payload.message ? "Setting enabled!" : `${payload.message} is now enabled!`;
          return s;
        },
        options: {
          className: "bg-primary",
          type: "success"
        }
      },
      {
        name: "gotrash-success",
        message: payload => {
          const s = !payload && !payload.message ? "Oops, somethings went wrong!" : payload.message;
          return s;
        },
        options: {
          className: "bg-primary",
          type: "success"
        }
      },
      {
        name: "gotrash-info",
        message: payload => {
          const s = !payload && !payload.message ? "Oops, somethings went wrong!" : payload.message;
          return s;
        },
        options: {
          className: "bg-info",
          type: "info"
        }
      }
    ]
  }
};
