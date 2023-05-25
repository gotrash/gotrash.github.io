<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "InvoicesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/invoices",
    rootRoute: "admin-invoices",
    pageTitleTranslation: "NAV__INVOICES",
    showFilters: false,
    data() {
      const $t = this.$t.bind(this);

      return {
        fields: [
          { key: "id", label: $t("INVOICES.LABEL.ID") },
          { key: "job", label: $t("INVOICES.LABEL.JOB") },
          { key: "createdAt", label: $t("INVOICES.LABEL.CREATED_AT") },
          { key: "updatedAt", label: $t("INVOICES.LABEL.UPDATED_AT") }
        ],
        perPage: 1000,
        showAllFields: true
      };
    }
  };
</script>
