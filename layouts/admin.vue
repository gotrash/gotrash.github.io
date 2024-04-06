<template>
  <div id="wrapper">
    <b-navbar ref="header" class="main-header navbar-white" type="light">
      <b-navbar-nav>
        <b-nav-item>Home</b-nav-item>
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
  import menu from "~/menus/SettingsSidebar";

  const { data, signOut } = useAuth();
  const route = useRoute();

  useHead({
    bodyAttrs: {
      class: "sidebar-mini layout-fixed"
    },
    title: route.meta.title
  });

  onMounted(() => {
    console.log("Mounted");
    console.log("Auth Data: %o", data);

    if (data?.session?.user?.image) {
      useApi("/users/files/" + data.session.user.image, { responseType: "blob" }).then(res => {
        console.log(res);
      });
    }
  });
</script>
