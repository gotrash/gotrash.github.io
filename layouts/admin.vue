<template>
  <div id="wrapper">
    <admin-navbar />

    <admin-sidebar />

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1 class="m-0">Dashboard</h1>
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
      <breadcrumbs />

      <!-- Main content -->
      <section class="content">
        <Nuxt />
      </section>
      <!-- /.content -->
    </div>

    <admin-footer />

    <control-sidebar />
  </div>
</template>

<script>
  export default {
    name: "DefaultLayout",
    components: {
      AdminFooter: () => import("~/components/footers/AdminFooter"),
      AdminNavbar: () => import("~/components/navbars/AdminNavbar"),
      AdminSidebar: () => import("~/components/sidebars/AdminSidebar"),
      Breadcrumbs: () => import("~/components/Breadcrumbs"),
      ControlSidebar: () => import("~/components/sidebars/ControlSidebar")
    },
    head() {
      return {
        script: [
          {
            src: "/js/jquery.min.js",
            type: "text/javascript"
          },
          {
            src: "/js/adminlte.min.js",
            type: "text/javascript"
          }
        ]
      };
    }
  };
</script>
