<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group :label="$t('AUTH.LABEL.USERNAME')" label-for="email-input">
      <b-form-input
        id="email-input"
        v-model="form.email"
        :state="validateState('email')"
        aria-describedby="email-input-feedback"
      ></b-form-input>

      <b-form-invalid-feedback id="email-input-feedback">{{ $t("AUTH.ERROR.USERNAME") }}</b-form-invalid-feedback>
    </b-form-group>
    <pre>
      <code>
        {{ $v.form.email }}
      </code>
    </pre>
    <b-form-group :label="$t('AUTH.LABEL.PASSWORD')" label-for="password-input">
      <b-form-input
        id="password-input"
        v-model="form.password"
        :state="validateState('password')"
        type="password"
        aria-describedby="password-input-feedback"
      ></b-form-input>

      <b-form-invalid-feedback id="password-input-feedback">{{ $t("AUTH.ERROR.PASSWORD") }}</b-form-invalid-feedback>
    </b-form-group>
    <pre>
      <code>
        {{ $v.form.password }}
      </code>
    </pre>
    <div class="row">
      <div class="col-12 col-sm-8">
        <div class="icheck-primary mt-1 mb-3">
          <b-form-checkbox id="login-remember-me-checkbox" v-model="form.rememberMe">
            {{ $t("AUTH.LABEL.REMEMBER_ME") }}</b-form-checkbox
          >
        </div>
      </div>

      <div class="col-12 col-sm-4">
        <button type="submit" class="btn btn-primary btn-block">
          {{ $t("AUTH.LABEL.SIGN_IN") }}
        </button>
      </div>
    </div>

    <div class="d-none flex-column flex-md-row justify-content-between">
      <b-btn variant="outline-danger" class="mb-3 mb-md-0" type="reset" @click.stop.prevent="onReset">{{
        $t("GENERAL.LABEL.RESET")
      }}</b-btn>
      <div class="d-flex flex-column d-md-block">
        <b-btn type="cancel" variant="outline-warning" class="mb-3 mb-md-0 mr-md-2" @click.stop.prevent="onCancel">
          {{ $t("GENERAL.LABEL.CANCEL") }}
        </b-btn>
        <b-btn type="submit" variant="outline-primary">
          {{ $t("GENERAL.LABEL.SUBMIT") }}
        </b-btn>
      </div>
    </div>
  </b-form>
</template>

<script>
  import { validationMixin } from "vuelidate";
  import { Validations } from "~/forms/RegisterUserForm";
  import IsFormComponent from "~/mixins/IsFormComponent";

  export default {
    name: "RegisterUserForm",
    mixins: [IsFormComponent, validationMixin],
    props: {
      value: {
        type: Object,
        required: true,
        validator: obj =>
          Object.prototype.hasOwnProperty.call(obj, "email") &&
          Object.prototype.hasOwnProperty.call(obj, "password") &&
          Object.prototype.hasOwnProperty.call(obj, "confirmPassword")
      }
    },
    emits: ["input", "submit"],
    computed: {
      form: {
        get() {
          return this.value;
        },
        set(form) {
          this.$emit("input", form);
        }
      }
    },
    validations: Validations,
    methods: {
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name];

        return $dirty ? !$error : null;
      },
      onClear() {
        this.$v.form.$reset();
      },
      onSubmit() {
        this.$v.form.$touch();

        if (this.$v.form.$anyError) {
          return;
        }

        this.$emit("submit");
      }
    }
  };
</script>
