<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "JobsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/jobs",
    rootRoute: "jobs-jobs",
    pageTitleTranslation: "NAV__JOBS",
    showFilters: false,
    layout: "jobs",
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
