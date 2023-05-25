<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PostcodeDistrictsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/postcodes/districts",
    rootRoute: "admin-postcodes-districts",
    pageTitleTranslation: "NAV__POSTCODE_DISTRICTS",
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
