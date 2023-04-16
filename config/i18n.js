export default {
  locales: [
    {
      code: "en",
      iso: "en-GB",
      file: "en",
      name: "EN"
    }
  ],
  defaultLocale: "en",
  strategy: "no_prefix",
  detectBrowserLanguage: {
    alwaysRedirect: true,
    useCookie: false,
    redirectOn: "no_prefix"
  },
  vueI18n: {
    fallbackLocale: "en"
  },
  lazy: true,
  langDir: "lang/",
  skipSettingLocaleOnNavigate: true
};
