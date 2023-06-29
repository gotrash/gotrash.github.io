<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PostcodeSectorsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/postcodes/sectors",
    rootRoute: "admin-postcodes-sectors",
    pageTitleTranslation: "NAV__POSTCODE_SECTORS",
    showFilters: false,
    idKey: "sector",
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: [
          { key: "sector" },
          // { key: "district" },
          // { key: "boundingBox", formatter: v => v.type },
          // { key: "coordinates", formatter: v => v.type },
          { key: "mapitCode" }
        ]
      };
    }
  };
</script>
