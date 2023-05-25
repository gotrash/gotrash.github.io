<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "JobItemsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/jobs/items",
    rootRoute: "admin-job-items",
    pageTitleTranslation: "NAV__JOB_ITEMS",
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
