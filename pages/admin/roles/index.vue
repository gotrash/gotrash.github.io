<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "RolesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/roles",
    rootRoute: "admin-roles",
    pageTitleTranslation: "NAV__ROLES",
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
