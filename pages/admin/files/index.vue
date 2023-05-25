<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "FilesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/files",
    rootRoute: "admin-files",
    pageTitleTranslation: "NAV__FILES",
    showFilters: false,
    data() {
      const $t = this.$t.bind(this);

      return {
        fields: [
          { key: "id", label: $t("FILES.LABEL.ID") },
          { key: "filename", label: $t("FILES.LABEL.FILENAME") },
          { key: "url", label: $t("FILES.LABEL.URL") }
        ]
      };
    }
  };
</script>
