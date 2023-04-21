<template>
  <div id="auth-page-layout">
    <Nuxt />
  </div>
</template>
<script>
  export default {
    name: "AuthLayout",
    components: {
      SiteNavbar: () => import("~/components/navbars/SiteNavbar.vue")
    }
  };
</script>
<style lang="scss">
  #auth-page-layout {
    -ms-flex-align: center;
    align-items: center;
    background-color: #e9ecef;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 100vh;
    -ms-flex-pack: center;
    justify-content: center;
  }
</style>
