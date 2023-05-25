<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "ServiceTypesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/service-types",
    rootRoute: "admin-service-types",
    pageTitleTranslation: "NAV__SERVICE_TYPES",
    showFilters: false,
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
