<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "ContinentsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/continents",
    rootRoute: "admin-continents",
    pageTitleTranslation: "NAV__CONTINENTS",
    showFilters: false,
    data() {
      const $t = this.$t.bind(this);

      return {
        fields: [
          {
            key: "continentCode",
            label: $t("CONTINENTS.LABEL.CONTINENT_CODE")
          },
          {
            key: "continentName",
            label: $t("CONTINENTS.LABEL.CONTINENT_NAME")
          }
        ]
      };
    }
  };
</script>
