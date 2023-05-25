<script>
  import { format } from "date-fns";
  import { PagedJpaTablePage } from "~/mixins";
  import { DateTimeFormats } from "~/constants";
  export default {
    name: "OAuthRegisteredClientsIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/oauth/clients",
    rootRoute: "admin-oauth-clients",
    pageTitleTranslation: "NAV__OAUTH_CLIENTS",
    data() {
      const $t = this.$t.bind(this);

      return {
        fields: [
          { key: "clientName", label: $t("OAUTH.LABEL.CLIENT_NAME"), sortable: true },
          { key: "clientId", label: $t("OAUTH.LABEL.CLIENT_ID"), sortable: true },
          {
            key: "clientIdIssuedAt",
            label: $t("OAUTH.LABEL.CLIENT_ID_ISSUED_AT"),
            sortable: true,
            formatter: value => (value ? format(new Date(value), DateTimeFormats.DISPLAY_DATE_TIME) : null)
          },
          {
            key: "clientSecretExpiresAt",
            label: $t("OAUTH.LABEL.CLIENT_SECRET_EXPIRES_AT"),
            sortable: true,
            formatter: value => (value ? format(new Date(value), DateTimeFormats.DISPLAY_DATE_TIME) : null),
            thClass: "text-center",
            tdClass: "text-center"
          },
          {
            key: "scopes",
            label: $t("OAUTH.LABEL.SCOPES"),
            formatter: value => (value ? value.split(",").join("<br>") : null)
          },
          { key: "clientAuthenticationMethods", label: $t("OAUTH.LABEL.CLIENT_AUTHENTICATION_METHODS") },
          {
            key: "authorizationGrantTypes",
            label: $t("OAUTH.LABEL.AUTHORIZATION_GRANT_TYPES"),
            formatter: value => (value ? value.split(",").join("<br>") : value)
          },
          {
            key: "actions",
            label: $t("GENERAL.LABEL.ACTIONS"),
            thClass: "text-center",
            tdClass: "text-right"
          }
        ],
        showAllFields: true
      };
    }
  };
</script>
