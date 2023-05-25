<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PrivilegesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/privileges",
    rootRoute: "users-privileges",
    pageTitleTranslation: "NAV__PRIVILEGES",
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
