<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <h1>{{ $t("NAV__BUSINESS_PROFILE") }}</h1>
      </b-col>

      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" heading="150" sub-heading="New Orders" />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" heading="150" sub-heading="New Orders" />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" heading="150" sub-heading="New Orders" />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" heading="150" sub-heading="New Orders" />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" heading="150" sub-heading="New Orders" />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" heading="150" sub-heading="New Orders" />
      </b-col>
      <b-col cols="12" sm="4" md="3">
        <small-box icon="cog" heading="150" sub-heading="New Orders" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import ServiceProvider from "~/entity/ServiceProvider";
  export default {
    layout: "business",
    data() {
      return {
        backup: new ServiceProvider(),
        serviceProvider: new ServiceProvider()
      };
    }
  };
</script>
