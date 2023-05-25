<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "MessagesIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/messages",
    rootRoute: "admin-messages",
    pageTitleTranslation: "NAV__MESSAGES",
    showFilters: false,
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
