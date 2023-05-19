<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <!-- Navbar -->
    <b-navbar class="main-header navbar-white" type="light">
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
        <logout-navbar-item />
      </b-navbar-nav>
    </b-navbar>
    <!-- /.navbar -->
  </div>
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
      showLanguageSwitcher() {
        const { availableLocales } = this;

        return availableLocales > 1;
      }
    },
    methods: {
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
