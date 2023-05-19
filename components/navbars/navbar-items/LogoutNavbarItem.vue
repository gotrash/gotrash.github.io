<template>
  <b-nav-item
    @click="
      () => {
        $auth.logout();
      }
    "
  >
    {{ $t("NAV__LOGOUT") }}
  </b-nav-item>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$auth.logout();
      }
    }
  };
</script>
