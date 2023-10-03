<template>
  <div id="wrapper">
    <b-navbar ref="header" class="main-header navbar-white" type="light">
      <!-- Left navbar links -->
      <b-navbar-nav>
        <b-nav-item link-classes="text-success" data-widget="pushmenu" href="#" role="button">
          <fa-icon icon="bars" />
        </b-nav-item>
        <b-nav-item :to="localePath({ name: 'index' })">Home</b-nav-item>
      </b-navbar-nav>
      <!-- Right navbar links -->
      <b-navbar-nav right>
        <b-nav-item @click="signOut">{{ $t("NAV__LOGOUT") }}</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <aside class="main-sidebar sidebar-light-primary elevation-4">
      <brand-link />
      <div class="sidebar">
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img class="img-circle elevation-2" alt="User Image" src="~/assets/images/user-placeholder.png" />
          </div>
          <div class="info">
            <span class="d-block">
              User Name
            </span>
          </div>
        </div>
        <nav class="mt-2">
          <b-nav class="mt-2 nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" pills>
            <b-nav-item exact-active-class="text-light" :to="localePath({ name: 'user-profile' })">
              {{ $t("NAV__PROFILE") }}
            </b-nav-item>
            <b-nav-item exact-active-class="text-light" :to="localePath({ name: 'user-feedback' })">
              {{ $t("NAV__FEEDBACK") }}
            </b-nav-item>
            <b-nav-item exact-active-class="text-light" :to="localePath({ name: 'user-jobs' })">
              {{ $t("NAV__JOBS") }}
            </b-nav-item>
            <b-nav-item exact-active-class="text-light" :to="localePath({ name: 'user-addresses' })">
              {{ $t("NAV__ADDRESSES") }}
            </b-nav-item>
            <b-nav-item exact-active-class="text-light" :to="localePath({ name: 'user-payment-methods' })">
              {{ $t("NAV__PAYMENT_METHODS") }}
            </b-nav-item>
          </b-nav>
        </nav>
      </div>
    </aside>
    <div class="content-wrapper" style="min-height: calc(100vh - 7.125rem)">
      <slot />
    </div>

    <admin-footer />
  </div>
</template>

<script setup>
const { signOut } = useAuth();

useHead({
  bodyAttrs: {
    class: 'sidebar-mini layout-fixed'
  }
})
</script>

<script>
import AdminFooter from "~/components/footers/AdminFooter";

export default {
  components: {
    AdminFooter,
    AdminNavbar: () => import("~/components/navbars/AdminNavbar"),
    AdminLteSidebar: () => import("~/components/sidebars/AdminLteSidebar"),
    ControlSidebar: () => import("~/components/sidebars/ControlSidebar")
  },
  setup() {

  }
}
</script>
