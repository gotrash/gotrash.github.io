<template>
  <div class="login-box">
    <b-card class="card-outline card-primary" no-body>
      <auth-card-header />

      <b-card-body>
        <p class="login-box-msg" v-text="$t('AUTH.MESSAGE.FORGOT_PASSWORD')"></p>

        <forgot-password-form v-model="form" @cancel="onCancel" @submit="onSubmit" />
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "ForgotPasswordPage",
    components: {
      AuthCardHeader: () => import("~/components/global/AuthCardHeader"),
      ForgotPasswordForm: () => import("~/components/forms/ForgotPasswordForm")
    },
    layout: "auth",
    data() {
      return {
        error: null,
        form: {
          email: null
        }
      };
    },
    methods: {
      onCancel() {
        this.$router.push({ name: "auth-login" });
      },
      onSubmit() {
        const { form } = this;

        this.$axios
          .post("/auth/forgot-password", { ...form, origin: window.location.origin })
          .then(res => {
            console.log(res);
            this.$router.push({ name: "auth-confirm-forgot-password" });
          })
          .catch(error => {
            if (error?.config) console.log(error.config);
          });
      }
    }
  };
</script>
