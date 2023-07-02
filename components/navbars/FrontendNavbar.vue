<!-- eslint-disable vue/no-v-html -->
<template>
  <b-navbar
    v-bind="$attrs"
    id="frontend-navbar"
    class="px-0 px-good-6 py-3 border-bottom border-success"
    toggleable="md"
    :type="type"
    style="border-bottom-width: 4px !important"
  >
    <b-navbar-brand class="py-0 px-2" :to="{ name: 'index' }">
      <site-logo :color="logoColor" />
    </b-navbar-brand>

    <nav-business-details :class="['d-none d-tiny-flex flex-fill flex-column']" />

    <b-navbar-toggle target="nav-collapse" class="mx-2 text-primary py-2 border-0">
      <fa-icon icon="bars" />
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <standard-navbar-nav class="ml-auto pt-3 pt-md-0 px-4 p-xl-0" />
    </b-collapse>
  </b-navbar>
</template>

<script>
  import NavBusinessDetails from "./nav-sections/NavBusinessDetails";
  import StandardNavbarNav from "./navbar-navs/StandardNavbarNav";

  export default {
    name: "SiteNavbar",
    components: {
      NavBusinessDetails,
      SiteLogo: () => import("~/components/SiteLogo"),
      StandardNavbarNav
    },
    inheritAttrs: false,
    props: {
      iconClasses: {
        type: String,
        required: false,
        default: undefined
      },
      logoColor: {
        type: String,
        required: false,
        default: undefined
      },
      type: {
        type: String,
        required: false,
        default: "dark"
      }
    }
  };
</script>
