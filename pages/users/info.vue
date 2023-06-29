<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <h1>{{ $t("NAV__USERS_DASHBOARD") }}</h1>
      </b-col>
      <b-col cols="12">
        <pre>
          <code>
{{ info }}
          </code>
        </pre>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    fetchOnServer: false,
    layout: "users",
    fetchKey: "user-dashboard",
    data() {
      return {
        info: {}
      };
    },
    async fetch() {
      this.info = await this.$axios
        .get("/users/info")
        .then(res => res.data)
        .catch(() => {});

      return new Promise(resolve => resolve());
    }
  };
</script>
