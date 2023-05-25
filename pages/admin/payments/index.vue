<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PaymentsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/payments",
    rootRoute: "admin-payments",
    pageTitleTranslation: "NAV__PAYMENTS",
    showFilters: false,
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: [],
        perPage: 1000,
        showAllFields: true
      };
    }
  };
</script>
