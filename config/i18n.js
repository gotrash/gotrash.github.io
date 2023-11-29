export default {
  experimental: {
    jsTsFormatResource: false
  },
  compilation: {
    strictMessage: false
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
  vueI18n: "./i18n.config.ts",
  strictMessage: false,
  warnHtmlInMessage: false,
  warnHtmlMessage: false,
  precompile: {
    strictMessage: false
  }
};
