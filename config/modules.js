// Community & 3rd-party modules
const communityModules = [
  //"nuxt-leaflet",
  'bootstrap-vue/nuxt',
]

// Official Nuxt modules
const nuxtModules = [
  'auth',
  'axios',
  'i18n',
  'pwa',
  'style-resources',
  'svg',
  'toast',
  'universal-storage',
  'sentry',
]

export default [
  ...nuxtModules.map((module) => `@nuxtjs/${module}`),
  ...communityModules,
  // https://go.nuxtjs.dev/content
  '@nuxt/content',
]
