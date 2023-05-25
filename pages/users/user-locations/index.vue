<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "UsersLocationsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/user-locations",
    rootRoute: "users-user-locations",
    pageTitleTranslation: "NAV__USER_LOCATIONS",
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
