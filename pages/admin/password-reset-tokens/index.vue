<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PasswordResetTokensIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/password-reset-tokens",
    rootRoute: "admin-password-reset-tokens",
    pageTitleTranslation: "NAV__PASSWORD_RESET_TOKENS",
    showFilters: false,
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
