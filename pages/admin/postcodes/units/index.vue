<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PostcodeUnitsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/postcodes/units",
    rootRoute: "admin-postcodes-units",
    pageTitleTranslation: "NAV__POSTCODE_UNITS",
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
