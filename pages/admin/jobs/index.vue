<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "JobsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/jobs",
    rootRoute: "admin-jobs",
    pageTitleTranslation: "NAV__JOBS",
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
