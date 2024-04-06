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
    <admin-lte-sidebar :menu="menu" />
    <div class="content-wrapper pb-3" style="min-height: calc(100vh - 7.125rem)">
      <slot />
    </div>
    <admin-footer />
  </div>
</template>

<script setup>
  import AdminFooter from "~/components/footers/AdminFooter";
  import AdminLteSidebar from "~/components/sidebars/AdminLteSidebar";
  import menu from "~/menus/UserProfileSidebar";

  const { signOut } = useAuth();
  const route = useRoute();

  useHead({
    bodyAttrs: {
      class: "sidebar-mini layout-fixed"
    },
    title: route.meta.title
  });
</script>
