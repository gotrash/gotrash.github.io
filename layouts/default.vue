<template>
  <div id="default-page-layout">
    <FrontendNavbar id="frontend-navbar" icon-classes="text-black" type="light" variant="light" />
    <Nuxt style="min-height: calc(100vh - 56px)" />
    <site-footer />
  </div>
</template>

<script>
  export default {
    name: "DefaultLayout",
    components: {
      FrontendNavbar: () => import("~/components/navbars/FrontendNavbar"),
      SiteFooter: () => import("~/components/footers/SiteFooter")
    }
  };
</script>
