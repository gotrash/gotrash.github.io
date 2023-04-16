<template>
  <b-container id="login-page">
    <b-row>
      <b-col>
        <h1 class="my-3">Login</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" md="10" offset-md="1" lg="8" offset-lg="2" xl="6" offset-xl="3">
        <div class="login-box">
          <b-alert :show="error != null" variant="info" dismissible>
            {{ error }}
          </b-alert>

          <b-card variant="outline card-lightblue" no-body>
            <b-card-header> Header </b-card-header>
            <b-card-body> Body </b-card-body>
          </b-card>

          <login-form v-model="form" @cancel="onCancel" @reset="onReset" @submit="onSubmit" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import LoginForm from "@/components/forms/LoginForm";

  export default {
    name: "LoginPage",
    components: { LoginForm },
    data() {
      return {
        error: null,
        form: {
          username: "",
          password: ""
        }
      };
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
    },
    metaInfo: {
      bodyAttrs: {
        class: ["login-page"]
      }
    }
  };
</script>
