<template>
  <div>
    <b-card no-body>
      <b-card-header header-tag="h5">
        {{ $t("OAUTH.LABEL.NEW_CLIENT") }}
      </b-card-header>
      <b-card-body>
        <b-form>
          <b-form-group :label="$t('OAUTH.LABEL.CLIENT_NAME')"> <b-form-input /></b-form-group>: "Client Name", <br />
          <b-form-group :label="$t('OAUTH.LABEL.CLIENT_ID')"> <b-form-input /></b-form-group>: "Client ID", <br />
          <b-form-group :label="$t('OAUTH.LABEL.CLIENT_ID_ISSUED_AT')"> <b-form-input /></b-form-group>: "Issued At",
          <br />
          <b-form-group :label="$t('OAUTH.LABEL.CLIENT_SECRET')"> <b-form-input /></b-form-group>: "Client Secret",
          <br />
          <b-form-group :label="$t('OAUTH.LABEL.CLIENT_SECRET_EXPIRES_AT')"> <b-form-input /></b-form-group>: "Expires
          At",
          <br />
          <b-form-group :label="$t('OAUTH.LABEL.CLIENT_AUTHENTICATION_METHODS')"> <b-form-input /></b-form-group>:
          "Authentication Methods",
          <br />
          <b-form-group :label="$t('OAUTH.LABEL.AUTHORIZATION_GRANT_TYPES')"> <b-form-input /></b-form-group>:
          "Authorization grant Types",
          <br />
          <b-form-group :label="$t('OAUTH.LABEL.REDIRECT_URIS')"> <b-form-input /></b-form-group>: "Redirect URIs",
          <br />
          <b-form-group :label="$t('OAUTH.LABEL.POST_LOGOUT_REDIRECT_URIS')"> <b-form-input /></b-form-group>:
          "Post-logout redirect URIs",
          <br />
          <b-form-group :label="$t('OAUTH.LABEL.SCOPES')"> <b-form-input /></b-form-group>: "Scopes", <br />
          <b-form-group :label="$t('OAUTH.LABEL.CLIENT_SETTINGS')"> <b-form-input /></b-form-group>: "Client Settings",
          <br />
          <b-form-group :label="$t('OAUTH.LABEL.TOKEN_SETTINGS')"> <b-form-input /></b-form-group>: "Token Settings"
          <br />
        </b-form>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  export default {
    layout: "admin",
    data() {
      return {
        clientName: "Client Name",
        clientId: "Client ID",
        clientIdIssuedAt: "Issued At",
        clientSecret: "Client Secret",
        clientSecretExpiresAt: "Expires At",
        clientAuthenticationMethods: "Authentication Methods",
        authorizationGrantTypes: "Authorization Grant Types",
        redirectUris: "Redirect URIs",
        postLogoutRedirectUris: "Post-logout Redirect URIs",
        scopes: "Scopes",
        clientSettings: "Client Settings",
        tokenSettings: "Token Settings"
      };
    }
  };
</script>
