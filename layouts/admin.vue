<template>
  <div id="wrapper">
    <admin-navbar />

    <admin-lte-sidebar :menu="menu" />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Main content -->
      <section class="content py-3" :style="{ 'min-height': `${contentHeight}px` }">
        <!-- Content Header (Page header) -->
        <div v-if="false" class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 v-if="false" class="m-0">Dashboard</h1>
              </div>
              <!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Home</a></li>
                  <li class="breadcrumb-item active">Dashboard v1</li>
                </ol>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
        <Nuxt />
      </section>
      <!-- /.content -->
    </div>

    <admin-footer />

    <control-sidebar />
  </div>
</template>

<script>
  import IsAdminLteLayout from "~/mixins/IsAdminLteLayout";
  import menu from "~/menus/AdminSidebar";

  export default {
    name: "AdminLayout",
    extends: IsAdminLteLayout,
    data() {
      return {
        menu
      };
    }
  };
</script>
