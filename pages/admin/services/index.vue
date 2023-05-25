<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "ServicesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/services",
    rootRoute: "admin-services",
    pageTitleTranslation: "NAV__SERVICES",
    showFilters: false,
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
