<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PaymentsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/payments",
    rootRoute: "jobs-payments",
    pageTitleTranslation: "NAV__PAYMENTS",
    showFilters: false,
    layout: "jobs",
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
