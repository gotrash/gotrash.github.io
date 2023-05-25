<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PostcodeAreasIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/postcodes/areas",
    rootRoute: "admin-postcodes-areas",
    pageTitleTranslation: "NAV__POSTCODE_AREAS",
    showFilters: false,
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
