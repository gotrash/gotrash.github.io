<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "RolesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/users",
    rootRoute: "admin-users",
    pageTitleTranslation: "NAV__USERS",
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
