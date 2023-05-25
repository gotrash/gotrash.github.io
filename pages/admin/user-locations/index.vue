<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "UsersLocationsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/user-locations",
    rootRoute: "admin-user-locations",
    pageTitleTranslation: "NAV__USER_LOCATIONS",
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
