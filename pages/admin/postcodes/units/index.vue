<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PostcodeUnitsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/postcodes/units",
    rootRoute: "admin-postcodes-units",
    pageTitleTranslation: "NAV__POSTCODE_UNITS",
    showFilters: true,
    idKey: "postcodes",
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: [
          { key: "postcodes", label: "Postcodes", sortable: true },
          // { key: "sector", label: "Sector", sortable: true },
          // { key: "boundingBox", formatter: v => v.type },
          // { key: "coordinates", formatter: v => v.type },
          { key: "mapitCode", label: "Mapit Code", sortable: true }
        ]
      };
    }
  };
</script>
