<script>
  import { PagedJpaTablePage } from "~/mixins";

  export default {
    name: "VerificationTokensIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/verification-tokens",
    rootRoute: "admin-verification-tokens",
    pageTitleTranslation: "NAV__VERIFICATION_TOKENS",
    showFilters: true,
    data() {
      const $t = this.$t.bind(this);

      return {
        fields: [
          { label: $t("VERIFICATION_TOKENS.LABEL.ID"), key: "id" },
          { label: $t("VERIFICATION_TOKENS.LABEL.USER_ID"), key: "userId" },
          { label: $t("VERIFICATION_TOKENS.LABEL.EXPIRY_DATE"), key: "expiryDate" }
        ],
        perPage: 20
      };
    }
  };
</script>
