export default {
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
};
