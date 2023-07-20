<template>
  <div>
    <frontend-navbar icon-classes="text-success" logo-color="#f8f9fa" />
    <slot />
  </div>
</template>

<script>
  import FrontendNavbar from "~/components/navbars/FrontendNavbar";

  export default defineComponent({
    components: { FrontendNavbar: FrontendNavbar }
  });
</script>

<style scoped lang="scss">
  @import "node_modules/bootstrap/scss/functions";
  @import "~/assets/scss/variables";
  @import "node_modules/bootstrap/scss/variables";
  @import "node_modules/bootstrap/scss/variables-dark";

  #frontend-navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999999;
    background-color: rgba(0, 0, 0, 0.55);
    color: $success;
  }
</style>
