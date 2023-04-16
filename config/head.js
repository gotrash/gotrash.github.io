export default {
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'GoTrash Web App' },
    { name: 'format-detection', content: 'telephone=no' },
    {
      hid: 'robots',
      name: 'robots',
      content: 'noarchive, nofollow, noindex',
    },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    {
      rel: 'stylesheet',
      type: 'text/css',
      href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700',
    },
  ],
  title: 'GoTrash',
  titleTemplate: `%s - GoTrash`,
  script: [
    // {
    //   src: "/js/jquery.min.js",
    //   type: "text/javascript"
    // },
    // {
    //   src: "/js/adminlte.js",
    //   type: "text/javascript"
    // }
  ],
}
