<template>
  <div class="login-box">
    <b-alert :show="error != null" variant="info" dismissible>
      {{ error }}
    </b-alert>
    <b-card no-body class="card-outline card-primary">
      <auth-card-header />
      <b-card-body>
        <p class="login-box-msg">{{ $t("AUTH.MESSAGE.SIGN_IN") }}</p>

        <login-form v-model="form" class="mb-3" @cancel="onCancel" @reset="onReset" @submit="onSubmit" />

        <div class="d-none social-auth-links text-center mt-2 mb-3">
          <a href="#" class="btn btn-block btn-primary">
            <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
          </a>
          <a href="#" class="btn btn-block btn-danger">
            <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
          </a>
        </div>

        <p class="mb-1 text-center">
          <b-link :to="{ name: 'auth-forgot-password' }">{{ $t("AUTH.LABEL.FORGOT_PASSWORD") }}</b-link>
        </p>
        <p class="mb-0 text-center">
          <b-link :to="{ name: 'auth-sign-up' }">{{ $t("AUTH.LABEL.SIGN_UP") }}</b-link>
        </p>
      </b-card-body>
      <b-card-footer v-show="false"></b-card-footer>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "LoginPage",
    components: {
      AuthCardHeader: () => import("~/components/global/AuthCardHeader"),
      LoginForm: () => import("~/components/forms/LoginForm")
    },
    layout: "auth",
    data() {
      return {
        error: null,
        form: {
          username: "",
          password: "",
          rememberMe: true
        }
      };
    },
    watch: {
      "form.rememberMe": {
        handler(rememberMe) {
          this.$storage.setUniversal("rememberMe", rememberMe);
        }
      }
    },
    mounted() {
      this.form.rememberMe = this.$storage.getUniversal("rememberMe");
    },
    methods: {
      onCancel() {
        this.$router.push({ name: "home" });
      },
      onReset() {
        this.form = {
          username: null,
          password: null
        };
      },
      onSubmit() {
        const { username, password } = this.form;

        this.$axios
          .post("/login", { username, password })
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
      }
    }
  };
</script>
