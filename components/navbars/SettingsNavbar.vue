<!-- eslint-disable vue/no-v-html -->
<template>
  <!-- Navbar -->
  <b-navbar ref="header" class="main-header navbar-white" type="light">
    <!-- Left navbar links -->
    <b-navbar-nav>
      <b-nav-item data-widget="pushmenu" href="#" role="button">
        <fa-icon icon="bars" />
      </b-nav-item>
    </b-navbar-nav>

    <!-- Right navbar links -->
    <b-navbar-nav class="ml-auto">
      <fullscreen-navbar-item />

      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
          <fa-icon icon="th-large" />
        </a>
      </li>

      <b-nav-item :label="$t('NAV__MESSAGES')" :to="{ name: 'admin-messages' }">
        <fa-icon icon="envelope" />
      </b-nav-item>
      <b-nav-item :label="$t('NAV__USER')" :to="{ name: 'admin-user' }">
        <fa-icon icon="user" />
      </b-nav-item>

      <logout-navbar-item />
    </b-navbar-nav>
  </b-navbar>
  <!-- /.navbar -->
</template>

<script>
  export default {
    name: "AdminNavbar",
    components: {
      FullscreenNavbarItem: () => import("./navbar-items/FullscreenNavbarItem.vue"),
      LogoutNavbarItem: () => import("./navbar-items/LogoutNavbarItem.vue")
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

      this.setupListeners();
    },
    unmounted() {
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
      },
      /**
       * Generates a display label based off the ISO code for a countries language.
       *
       * The way it does so is by either:
       *
       * If the ISO code DOES NOT contain a hyphen, the iso code is simply returned.
       *
       * If the ISO code DOES contain a hyphen, then the iso code is split at the hyphen, with the second part appended to the first, wrapped in parenthesis and upper-cased.
       *
       * @param {String} iso The ISO code of the language to generate a display label for.
       *
       * @returns {String} A display label for a countries language based off it's ISO code.  Ideal for use in language switchers and associated functionality.
       */
      generateLocaleLabel: iso => {
        // Early return if ISO doesn't contain a hyphen
        if (!iso.includes("-")) return iso;

        // Else split at the hyphen
        const isoParts = iso.split("-");

        // Uppercase the second array value and wrap it in parenthesis using string interpolation
        return `${isoParts[0]} (${isoParts[1].toUpperCase()})`;
      }
    }
  };
</script>
