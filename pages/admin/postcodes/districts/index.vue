<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PostcodeDistrictsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/postcodes/districts",
    rootRoute: "admin-postcodes-districts",
    pageTitleTranslation: "NAV__POSTCODE_DISTRICTS",
    showFilters: false,
    idKey: "district",
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: [
          { key: "district" },
          // { key: "boundingBox", formatter: v => v.type },
          // { key: "coordinates", formatter: v => v.type },
          { key: "mapitCode" }
        ]
      };
    }
  };
</script>
