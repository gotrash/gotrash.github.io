import VueGoogleMaps from './src/main'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyB-dcwUf8qd2vAcwRnAvBVaTMd81tiq2aA',
      libraries: 'places',
    },
  })
})
