<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <b-card body-bg-variant="white" footer-bg-variant="white" header-bg-variant="white" no-body>
          <b-card-body>
            <continents-table />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    components: {
      ContinentsTable: () => import("~/components/tables/ContinentsTable.vue"),
      MessageSpinner: () => import("~/components/global/MessageSpinner.vue")
    },
    layout: "admin",
    data() {
      return {
        busy: true
      };
    }
  };
</script>
