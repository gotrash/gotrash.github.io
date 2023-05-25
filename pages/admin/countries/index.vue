<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "CountriesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/countries",
    rootRoute: "admin-countries",
    pageTitleTranslation: "NAV__COUNTRIES",
    showFilters: true,
    data() {
      const $t = this.$t.bind(this);

      return {
        fields: [
          {
            key: "countryName",
            label: $t("COUNTRIES.LABEL.COUNTRY_NAME"),
            sortable: true
          },
          {
            key: "continent.continentCode",
            label: $t("COUNTRIES.LABEL.CONTINENT_CODE"),
            tdClass: "text-center",
            thClass: "text-center",
            sortable: true
          },
          {
            key: "twoLetterCountryCode",
            label: $t("COUNTRIES.LABEL.TWO_LETTER_COUNTRY_CODE"),
            tdClass: "text-center",
            thClass: "text-center",
            sortable: true
          },
          {
            key: "threeLetterCountryCode",
            label: $t("COUNTRIES.LABEL.THREE_LETTER_COUNTRY_CODE"),
            tdClass: "text-center",
            thClass: "text-center",
            sortable: true
          },
          {
            key: "countryNumber",
            label: $t("COUNTRIES.LABEL.COUNTRY_NUMBER"),
            tdClass: "text-center",
            thClass: "text-center",
            sortable: true
          },
          {
            key: "enabled",
            label: $t("COUNTRIES.LABEL.ENABLED"),
            tdClass: "text-center",
            thClass: "text-center",
            sortable: true
          }
        ]
      };
    }
  };
</script>
