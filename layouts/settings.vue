<template>
  <div id="wrapper">
    <admin-navbar />

    <settings-sidebar />

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
  </div>
</template>

<script>
  export default {
    name: "DefaultLayout",
    components: {
      AdminFooter: () => import("~/components/footers/AdminFooter"),
      AdminNavbar: () => import("~/components/navbars/AdminNavbar"),
      SettingsSidebar: () => import("~/components/sidebars/SettingsSidebar"),
      Breadcrumbs: () => import("~/components/Breadcrumbs")
    },
    head() {
      return {
        bodyAttrs: {
          class: "sidebar-mini layout-fixed"
        },
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
    },
    computed: {
      contentHeight() {
        if (this.maxHeight === this.controlSidebarHeight) {
          return this.maxHeight;
        } else if (this.maxHeight === this.windowHeight) {
          return this.maxHeight - this.headerHeight - this.footerHeight;
        } else {
          return this.maxHeight - this.headerHeight - this.footerHeight;
        }
      },
      controlSidebarHeight() {
        return this.$store.getters["layout/getHeight"]("controlSidebar");
      },
      footerHeight() {
        return this.$store.getters["layout/getHeight"]("footer");
      },
      headerHeight() {
        return this.$store.getters["layout/getHeight"]("header");
      },
      maxHeight() {
        return this.$store.getters["layout/getMaxHeight"];
      },
      sidebarHeight() {
        return this.$store.getters["layout/getHeight"]("sidebar");
      },
      windowHeight: {
        get() {
          return this.$store.getters["layout/getHeight"]("window");
        },
        set(height) {
          this.$store.commit("layout/setHeight", { key: "window", height });
        }
      },
      windowWidth: {
        get() {
          return this.$store.getters["layout/getWidth"]("window");
        },
        set(width) {
          this.$store.commit("layout/setWidth", { key: "window", width });
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.init();

        this.setupListeners();
      });
    },
    unmounted() {
      this.removeListeners();
    },
    methods: {
      init() {
        this.setHeight();
        this.setWidth();
      },
      setHeight() {
        this.windowHeight = window.innerHeight;
      },
      setWidth() {
        this.windowWidth = window.innerWidth;
      },
      setupListeners() {
        window.addEventListener("resize", this.setHeight);
        window.addEventListener("resize", this.setWidth);
      },
      removeListeners() {
        window.removeEventListener("resize", this.setHeight);
        window.removeEventListener("resize", this.setWidth);
      }
    }
  };
</script>
