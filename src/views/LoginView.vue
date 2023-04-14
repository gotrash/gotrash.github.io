<template>
  <b-container id="login-page">
    <b-row>
      <b-col>
        <h1 class="my-3">Login</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        sm="12"
        md="10"
        offset-md="1"
        lg="8"
        offset-lg="2"
        xl="6"
        offset-xl="3"
      >
        <b-form
          @submit.prevent="onSubmit"
          class="rounded bg-light border p-4 mb-3"
        >
          <b-form-group label="Username" label-for="username-input">
            <b-form-input
              id="username-input"
              :state="validateState('username')"
              v-model="form.username"
              aria-describedby="username-input-feedback"
            ></b-form-input>

            <b-form-invalid-feedback id="username-input-feedback"
              >Username is required and must be 4 or more
              characters</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group label="Password" label-for="password-input">
            <b-form-input
              id="password-input"
              v-model="form.password"
              :state="validateState('password')"
              type="password"
              aria-describedby="password-input-feedback"
            ></b-form-input>

            <b-form-invalid-feedback id="password-input-feedback"
              >Password is required and must be at least 8
              characters</b-form-invalid-feedback
            >
          </b-form-group>
          <div class="d-flex flex-column flex-md-row justify-content-between">
            <b-btn
              variant="outline-danger"
              class="mb-3 mb-md-0"
              type="reset"
              @click.stop.prevent="onReset"
              >Reset</b-btn
            >
            <div class="d-flex flex-column d-md-block">
              <b-btn
                type="cancel"
                variant="outline-warning"
                class="mb-3 mb-md-0 mr-md-2"
                @click.stop.prevent="onCancel"
              >
                Cancel
              </b-btn>
              <b-btn type="submit" variant="outline-primary">Submit</b-btn>
            </div>
          </div>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "LoginPage",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(4),
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    onCancel() {
      this.$router.push({ name: "home" });
    },
    onReset() {
      this.form = {
        username: null,
        password: null,
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    onSubmit(event) {
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      // alert("Form submitted!");
      console.log(event);
      const { username, password } = this;

      this.$axios
        .post("/login", { username, password })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
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
    },
  },
};
</script>
