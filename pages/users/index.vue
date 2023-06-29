<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <h1>{{ $t("NAV__USERS_DASHBOARD") }}</h1>
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" :heading="statistics.users || 0" :sub-heading="$t('NAV__USERS')" />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" :heading="statistics.roles || 0" :sub-heading="$t('NAV__ROLES')" />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" :heading="statistics.privilegeTypes || 0" :sub-heading="$t('NAV__PRIVILEGE_TYPES')" />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" :heading="statistics.privileges || 0" :sub-heading="$t('NAV__PRIVILEGES')" />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" :heading="statistics.passwordResetTokens || 0" :sub-heading="$t('NAV__RESET_TOKENS')" />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box
          icon="cog"
          :heading="statistics.verificationTokens || 0"
          :sub-heading="$t('NAV__VERIFICATION_TOKENS')"
        />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" :heading="statistics.userLocations || 0" :sub-heading="$t('NAV__USER_LOCATIONS')" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    layout: "users",
    fetchKey: "user-dashboard",
    data() {
      return {
        statistics: {}
      };
    },
    async fetch() {
      this.statistics = await this.$axios
        .get("/users/dashboard")
        .then(res => res.data || {})
        .catch(() => {});

      return new Promise(resolve => resolve());
    }
  };
</script>
