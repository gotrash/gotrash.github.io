<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "VerificationTokensIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/verification-tokens",
    rootRoute: "users-verification-tokens",
    pageTitleTranslation: "NAV__VERIFICATION_TOKENS",
    showFilters: true,
    layout: "users",
    data() {
      const $t = this.$t.bind(this);

      return {
        fields: [
          { label: $t("VERIFICATION_TOKENS.LABEL.ID"), key: "id" },
          { label: $t("VERIFICATION_TOKENS.LABEL.USER_ID"), key: "userId" },
          { label: $t("VERIFICATION_TOKENS.LABEL.EXPIRY_DATE"), key: "expiryDate" }
        ]
      };
    }
  };
</script>
