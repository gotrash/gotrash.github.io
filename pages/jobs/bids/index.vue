<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "BidsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/bids",
    rootRoute: "jobs-bids",
    pageTitleTranslation: "NAV__BIDS",
    showFilters: false,
    layout: "jobs",
    data() {
      const $t = this.$t.bind(this);

      return {
        fields: [
          {
            key: "id",
            label: $t("BIDS.LABEL.ID")
          },
          {
            key: "job",
            label: $t("BIDS.LABEL.JOB")
          },
          {
            key: "serviceProvider",
            label: $t("BIDS.LABEL.SERVICE_PROVIDER")
          },
          {
            key: "amount",
            label: $t("BIDS.LABEL.AMOUNT")
          }
        ]
      };
    }
  };
</script>
