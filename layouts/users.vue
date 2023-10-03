<template>
  <div id="wrapper">
    <admin-navbar />

    <admin-lte-sidebar :menu="menu" />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Main content -->
      <section class="content py-3" :style="{ 'min-height': `${contentHeight}px` }">
        <Nuxt />
      </section>
      <!-- /.content -->
    </div>

    <admin-footer />
  </div>
</template>

<script>
import IsAdminLteLayout from "~/mixins/IsAdminLteLayout";
import menu from "~/menus/UsersSidebar";

export default {
  name: "DefaultLayout",
  extends: IsAdminLteLayout,
  data() {
    return {
      menu
    };
  }
};
</script>
