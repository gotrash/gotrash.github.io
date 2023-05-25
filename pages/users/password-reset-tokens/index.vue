<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "PasswordResetTokensIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/password-reset-tokens",
    rootRoute: "users-password-reset-tokens",
    pageTitleTranslation: "NAV__PASSWORD_RESET_TOKENS",
    showFilters: false,
    layout: "users",
    data() {
      // const $t = this.$t.bind(this);

      return {
        fields: []
      };
    }
  };
</script>
