<template>
  <b-navbar
    id="frontend-navbar"
    class="px-0 px-good-6 py-3 border-bottom border-success"
    style="border-bottom-width: 4px !important"
    toggleable="md"
    :type="'light'"
  >
    <b-navbar-brand class="py-0 px-2" :to="localePath({ name: 'index' })">
      <site-logo :color="logoColor" />
      <i18n-t v-if="false" keypath="APP_NAME_END" tag="span" for="APP_NAME_START">
        <b>{{ $t("APP_NAME_START") }}</b>
      </i18n-t>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" class="mx-2 text-primary py-2 border-0">
      <fa-icon icon="bars" />
    </b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mx-2 text-primary py-2 border-0">
        <standard-nav-item :to="localePath({ name: 'index' })" text="Home" />
        <standard-nav-item :to="localePath({ name: 'about' })" text="About" />
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ms-auto py-2">
        <standard-nav-item v-if="!authenticated" @click.stop.prevent="onSignIn">
          {{ $t("NAV__LOGIN") }}
        </standard-nav-item>
        <standard-nav-item v-if="!authenticated" :to="localePath({ name: 'auth-sign-up' })">
          {{ $t("NAV__SIGNUP") }}
        </standard-nav-item>
        <b-nav-item-dropdown class="text-success" v-if="false" text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown align-end v-if="authenticated" no-caret auto-close>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <div class="text-success align-items-center d-flex">
              <img class="img-circle elevation-2" src="/images/user-placeholder.png" />
              <!--  <fa-icon class="ms-2" icon="angle-down" />-->
            </div>
          </template>
          <b-dropdown-item :to="localePath({ name: 'user-profile' })">{{ $t("NAV__PROFILE") }}</b-dropdown-item>
          <b-dropdown-item @click.stop.prevent="signOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
      <b-nav-form class="d-none">
        <b-form-input class="me-2" placeholder="Search" />
        <b-button type="submit" variant="outline-success">Search</b-button>
      </b-nav-form>
    </b-collapse>
  </b-navbar>
</template>

<script setup>
  import { computed } from "vue";
  const { status, data, lastRefreshedAt, signIn, signOut } = useAuth();
  const headers = useRequestHeaders(["cookie"]);
  const { data: token } = await useFetch("/api/token", { headers });

  const authenticated = computed(() => {
    return status.value === "authenticated";
  });

  const onSignIn = () => signIn("oidc");

  const onSignOut = () => signOut("oidc");

  const props = defineProps({
    iconClasses: {
      type: String,
      required: false,
      default: undefined
    },
    logoColor: {
      type: String,
      required: false,
      default: undefined
    },
    type: {
      type: String,
      required: false,
      default() {
        return "dark";
      }
    }
  });
</script>

<script>
  import SiteLogo from "../SiteLogo";
  import StandardNavItem from "./StandardNavItem.vue";
  export default {
    name: "SiteNavbar",
    components: { SiteLogo, StandardNavItem }
  };
</script>
