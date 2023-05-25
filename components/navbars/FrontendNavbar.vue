<!-- eslint-disable vue/no-v-html -->
<template>
  <b-navbar type="dark">
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'index' }">{{ $t("NAV__HOME") }}</b-nav-item>
    </b-navbar-nav>
    <secondary-navbar-nav class="ml-auto" />
  </b-navbar>
</template>

<script>
  export default {
    name: "SiteNavbar",
    components: {
      SecondaryNavbarNav: () => import("./navbar-navs/SecondaryNavbarNav.vue")
    }
  };
</script>

<style lang="scss">
  #frontend-navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
</style>
