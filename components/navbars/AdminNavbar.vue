<!-- eslint-disable vue/no-v-html -->
<template>
  <!-- Navbar -->
  <b-navbar ref="header" class="main-header navbar-white" type="light">
    <!-- Left navbar links -->
    <b-navbar-nav>
      <b-nav-item link-classes="text-success" data-widget="pushmenu" href="#" role="button">
        <fa-icon icon="bars" />
      </b-nav-item>
    </b-navbar-nav>

    <!-- Right navbar links -->
    <standard-navbar-nav class="ml-auto" />
  </b-navbar>
  <!-- /.navbar -->
</template>

<script>
  export default {
    name: "AdminNavbar",
    components: {
      FullscreenNavbarItem: () => import("./navbar-items/FullscreenNavbarItem.vue"),
      LogoutNavbarItem: () => import("./navbar-items/LogoutNavbarItem.vue"),
      StandardNavbarNav: () => import("./navbar-navs/StandardNavbarNav")
    },
    computed: {
      /**
       * TODO Remove the static boolean from the filter lambda in this computed property
       *
       * Get's the available locales, currently modified to show all locales, including the active locale
       */
      availableLocales() {
        return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale || true);
      },
      headerHeight: {
        get() {
          return this.$store.getters("layout/getHeight")("header");
        },
        set(height) {
          this.$store.commit("layout/setHeight", { key: "header", height });
        }
      },
      headerWidth: {
        get() {
          return this.$store.getters("layout/getWidth")("width");
        },
        set(width) {
          this.$store.commit("layout/setWidth", { key: "header", width });
        }
      },
      showLanguageSwitcher() {
        const { availableLocales } = this;

        return availableLocales > 1;
      }
    },
    mounted() {
      this.setHeight();
      this.setWidth();

      this.$nextTick(() => {
        this.setupListeners();
      });
    },
    beforeDestroy() {
      this.removeListeners();
    },
    methods: {
      setHeight() {
        this.headerHeight = this.$refs.header.$el.clientHeight + 1;
      },
      setWidth() {
        this.headerWidth = this.$refs.header.$el.clientWidth;
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
