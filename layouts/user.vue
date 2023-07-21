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
    </b-navbar>
    <aside class="main-sidebar sidebar-light-primary elevation-4">
      <b-link class="brand-link" :to="localePath({ name: 'index' })">
        <span class="brand-text font-weight-light">
          <b class="font-weight-bold">Go</b>Trash
        </span>
      </b-link>
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
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-item">
              <b-link class="nav-link" active-class="active" exact :to="localePath({ name: 'user-profile' })">
                {{ $t("NAV__PROFILE") }}
              </b-link>
            </li>
            <li class="nav-item">
              <b-link class="nav-link" active-class="active" exact :to="localePath({ name: 'user-addresses' })">
                {{ $t("NAV__ADDRESSES") }}
              </b-link>
            </li>
            <li class="nav-item">
              <b-link class="nav-link" active-class="active" exact :to="localePath({ name: 'user-payment-methods' })">
                {{ $t("NAV__PAYMENT_METHODS") }}
              </b-link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    <div class="content-wrapper">
      <slot />
    </div>

    <admin-footer />
  </div>
</template>

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
    useHead({
      bodyAttrs: {
        class: 'sidebar-mini layout-fixed'
      }
    })
  }
}
</script>
