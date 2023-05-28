<!-- eslint-disable vue/no-v-html -->
<template>
  <b-navbar>
    <b-navbar-brand :to="{ name: 'index' }">
      <span v-html="$t('APP_NAME_HTML')"></span>
    </b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item :to="{ name: 'index' }">{{ $t("NAV__HOME") }}</b-nav-item>
      <b-nav-item v-if="$auth.loggedIn" :to="{ name: 'admin-messages' }">{{ $t("NAV__MESSAGES") }}</b-nav-item>
      <b-nav-item v-if="$auth.loggedIn" :to="{ name: 'logo' }">{{ $t("NAV__LOGO") }}</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <template v-if="!$auth.loggedIn">
        <b-nav-item
          @click="
            () => {
              $auth.loginWith('oidc');
            }
          "
          >{{ $t("NAV__LOGIN") }}</b-nav-item
        >
        <b-nav-item :to="{ name: 'auth-sign-up' }">{{ $t("NAV__SIGNUP") }}</b-nav-item>
      </template>
      <template v-else>
        <b-nav-item :to="{ name: 'admin-user' }">{{ $t("NAV__USER") }}</b-nav-item>
        <b-nav-item
          @click="
            () => {
              $auth.logout();
            }
          "
          >{{ $t("NAV__LOGOUT") }}</b-nav-item
        >
      </template>
      <b-nav-dropdown v-if="showLanguageSwitcher" id="nav--lang-dropdown" toggle-class="nav-link-custom" right>
        <template slot="text">
          {{ $t("NAV__LANG") }}
        </template>
        <b-dropdown-item
          v-for="locale in availableLocales"
          :key="locale.code + '-lang-dropdown-item'"
          :to="switchLocalePath(locale.code)"
          @click.prevent.stop="$event => $i18n.setLocale(locale.code)"
        >
          {{ generateLocaleLabel(locale.iso) }}
        </b-dropdown-item>
      </b-nav-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
  export default {
    name: "SiteNavbar",
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
