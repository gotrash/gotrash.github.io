<template>
  <b-form @submit.prevent="onSubmit" class="rounded bg-light border p-4 mb-3">
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
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  name: "LoginForm",
  props: {
    value: {
      type: Object,
    },
  },
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    form: {
      get() {
        return this.value;
      },
      set(form) {
        this.$emit("input", form);
      },
    },
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
      this.$emit("cancel");
    },
    onReset() {
      this.$nextTick(() => {
        this.$v.$reset();
      });

      this.$emit("reset");
    },
    onSubmit() {
      this.$v.form.$touch();

      if (this.$v.form.$anyError) {
        return;
      }

      this.$emit("submit");
    },
  },
};
</script>
