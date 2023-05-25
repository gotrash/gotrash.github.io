<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PostcodeSectorsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/postcodes/sectors",
    rootRoute: "admin-postcodes-sectors",
    pageTitleTranslation: "NAV__POSTCODE_SECTORS",
    showFilters: false,
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
