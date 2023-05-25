<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PrivilegeTypesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/privilege-types",
    rootRoute: "users-privilege-types",
    pageTitleTranslation: "NAV__PRIVILEGE_TYPES",
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
