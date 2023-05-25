<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PrivilegeTypesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/privilege-types",
    rootRoute: "admin-privilege-types",
    pageTitleTranslation: "NAV__PRIVILEGE_TYPES",
    showFilters: false,
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
