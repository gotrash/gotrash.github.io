<template>
  <div class="h-100 frontend-wrapper">
    <FrontendNavbar icon-classes="text-success" logo-color="#f8f9fa" type="dark" />
    <Nuxt />
    <SiteFooter />
  </div>
</template>

<script>
  import FrontendNavbar from "~/components/navbars/FrontendNavbar";
  export default {
    name: "HomeLayout",
    components: {
      FrontendNavbar,
      SiteFooter: () => import("~/components/footers/SiteFooter")
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

<style scoped lang="scss">
  #frontend-navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999999;
    background-color: rgba(0, 0, 0, 0.55);
  }
</style>
