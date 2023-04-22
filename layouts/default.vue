<template>
  <div id="default-page-layout">
    <site-navbar />
    <Nuxt style="min-height: calc(100vh - 56px)" />
  </div>
</template>

<script>
  export default {
    name: "DefaultLayout",
    components: {
      SiteNavbar: () => import("~/components/navbars/SiteNavbar")
    }
  };
</script>
