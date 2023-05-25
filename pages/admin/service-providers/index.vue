<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "ServiceProvidersIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/service-providers",
    rootRoute: "admin-service-providers",
    pageTitleTranslation: "NAV__SERVICE_PROVIDERS",
    showFilters: false,
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
