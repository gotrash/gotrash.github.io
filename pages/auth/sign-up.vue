<template>
  <div class="login-box">
    <h1>{{ $t("PAGE_TITLE__SIGNUP") }}</h1>
    <b-card>
      <auth-card-header />

      <register-user-form v-model="form" />
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "SignupPage",
    components: {
      AuthCardHeader: () => import("~/components/headers/AuthCardHeader"),
      RegisterUserForm: () => import("~/components/forms/RegisterUserForm")
    },
    layout: "auth",
    data() {
      return {
        form: {
          email: null,
          password: null,
          confirmPassword: null
        }
      };
    }
  };
</script>
