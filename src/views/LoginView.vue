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
          @submit.prevent="login"
          class="rounded bg-light border p-4 mb-3"
        >
          <b-form-group>
            <b-form-label>Username</b-form-label>
            <b-form-input v-model="username" />
          </b-form-group>
          <b-form-group>
            <b-form-label>Password</b-form-label>
            <b-form-input v-model="password" />
          </b-form-group>
        </b-form>
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <b-btn variant="outline-danger" class="mb-3 mb-md-0">Reset</b-btn>
          <div class="d-flex flex-column d-md-block">
            <b-btn variant="outline-warning" class="mb-3 mb-md-0 mr-md-2">
              Cancel
            </b-btn>
            <b-btn variant="outline-primary">Submit</b-btn>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
    };
  },
});
</script>
