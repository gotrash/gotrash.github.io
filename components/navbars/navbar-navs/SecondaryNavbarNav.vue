<template>
  <b-navbar-nav class="font-weight-bolder">
    <fullscreen-navbar-item v-if="showFullscreenToggle" />

    <li v-if="showSidebarToggle" class="nav-item">
      <a
        class="nav-link text-success"
        data-widget="control-sidebar"
        data-controlsidebar-slide="true"
        href="#"
        role="button"
      >
        <fa-icon icon="th-large" />
      </a>
    </li>
    <template v-if="!$auth.loggedIn">
      <b-nav-item
        link-classes="text-success"
        @click="
          () => {
            $auth.loginWith('oidc');
          }
        "
        >{{ $t("NAV__LOGIN") }}</b-nav-item
      >
      <b-nav-item link-classes="text-success" :to="{ name: 'auth-sign-up' }">
        {{ $t("NAV__SIGNUP") }}
      </b-nav-item>
    </template>
    <template v-else>
      <b-nav-item
        link-classes="text-success"
        active-class="active"
        exact
        :label="$t('NAV__USER')"
        :to="{ name: 'admin-user' }"
      >
        <fa-icon icon="user" /><span class="d-none d-lg-inline text-dark"> {{ $t("NAV__USER_PROFILE") }}</span>
      </b-nav-item>
      <b-nav-item
        link-classes="text-success"
        active-class="active"
        :label="$t('NAV__BUSINESS_PROFILE')"
        :to="{ name: 'business' }"
      >
        <fa-icon icon="building" /><span class="d-none d-lg-inline text-dark"> {{ $t("NAV__BUSINESS") }}</span>
      </b-nav-item>
      <b-nav-item
        link-classes="text-success"
        active-class="active"
        exact
        :label="$t('NAV__SETTINGS')"
        :to="{ name: 'admin' }"
      >
        <fa-icon icon="cog" /><span class="d-none d-lg-inline text-dark"> {{ $t("NAV__ADMIN") }}</span>
      </b-nav-item>
      <b-nav-item
        link-classes="text-success"
        active-class="active"
        :label="$t('NAV__USERS_DASHBOARD')"
        :to="{ name: 'users' }"
      >
        <fa-icon icon="users" /><span class="d-none d-lg-inline text-dark"> {{ $t("NAV__USERS") }}</span>
      </b-nav-item>
      <b-nav-item link-classes="text-success" active-class="active" :label="$t('NAV__JOBS')" :to="{ name: 'jobs' }">
        <fa-icon icon="tasks" /><span class="d-none d-lg-inline text-dark"> {{ $t("NAV__JOBS") }}</span>
      </b-nav-item>
      <b-nav-item
        link-classes="text-success"
        :title="$t('NAV__LOGOUT')"
        @click="
          () => {
            $auth.logout();
          }
        "
      >
        <fa-icon icon="sign-out-alt" /><span class="d-none d-lg-inline text-dark"> {{ $t("NAV__LOGOUT") }}</span>
      </b-nav-item>
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
</template>

<script>
  export default {
    name: "SecondaryNavbarNav",
    components: {
      FullscreenNavbarItem: () => import("../navbar-items/FullscreenNavbarItem.vue"),
      LogoutNavbarItem: () => import("../navbar-items/LogoutNavbarItem.vue")
    },
    props: {
      showFullscreenToggle: Boolean,
      showSidebarToggle: Boolean
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
