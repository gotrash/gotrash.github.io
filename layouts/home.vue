<template>
  <div
    class="h-100 frontend-wrapper"
    :style="{
      'background-color': `rgba(127,127,127, 0.5)`,
      'background-size': 'cover',
      'background-position': 'top center',
      'background-repeat': 'no-repeat',
      'background-attachment': 'fixed'
    }"
  >
    <FrontendNavbar id="frontend-navbar" />
    <Nuxt />
  </div>
</template>

<script>
  export default {
    name: "HomeLayout",
    components: {
      FrontendNavbar: () => import("~/components/navbars/FrontendNavbar")
    },
    head() {
      return {
        bodyAttrs: {
          class: "full-height"
        }
      };
    }
  };
</script>
