<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "RolesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/users",
    layout: "users",
    rootRoute: "users-users",
    pageTitleTranslation: "NAV__USERS",
    showFilters: false,
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
