<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <h1>{{ $t("NAV__BUSINESS_DETAILS") }}</h1>
      </b-col>

      <b-col cols="12" sm="6">
        <pre><code>{{backup.toJson ? backup.toJson() : backup}}</code></pre>
      </b-col>
      <b-col cols="12" sm="6">
        <pre><code>{{serviceProvider.toJson ? backup.toJson() : backup}}</code></pre>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import ServiceProvider from "~/entity/ServiceProvider";
  export default {
    layout: "business",
    fetchOnServer: false,
    data() {
      return {
        backup: new ServiceProvider(),
        serviceProvider: new ServiceProvider()
      };
    },
    fetch() {
      this.$axios.get("/provider").then(res => {
        console.log(res.data);
      });
    }
  };
</script>
