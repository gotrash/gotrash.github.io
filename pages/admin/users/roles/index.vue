<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "RolesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/roles",
    rootRoute: "users-roles",
    pageTitleTranslation: "NAV__ROLES",
    showFilters: false,
    layout: "users",
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
