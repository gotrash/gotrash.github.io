<!-- eslint-disable vue/no-v-html -->
<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12" sm="8" offset-sm="2" md="6" offset-md="3" lg="4" offset-lg="4">
        <b-card class="card-outline card-primary" no-body>
          <auth-card-header />

          <b-card-body class="px-2 px-sm-3 px-md-4 pb-4 text-center">
            <p class="text-center h4 mb-4" v-text="$t('GENERAL.MESSAGE.THANK_YOU')"></p>
            <div class="font-size-large text-center pb-3 m-0" v-html="$t('AUTH.MESSAGE.CONFIRM_FORGOT_PASSWORD')"></div>

            <b-link :to="{ name: 'auth-login' }">
              {{ $t("AUTH.LABEL.LOGIN") }}
            </b-link>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "ConfirmForgotPasswordPage",
    components: {
      AuthCardHeader: () => import("~/components/global/AuthCardHeader")
    },
    layout: "auth"
  };
</script>
