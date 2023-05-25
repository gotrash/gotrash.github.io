<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PrivilegesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/privileges",
    rootRoute: "admin-privileges",
    pageTitleTranslation: "NAV__PRIVILEGES",
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
