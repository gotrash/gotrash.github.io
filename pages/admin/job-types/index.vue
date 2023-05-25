<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "JobTypesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/jobs/types",
    rootRoute: "admin-job-types",
    pageTitleTranslation: "NAV__JOB_TYPES",
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
