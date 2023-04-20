<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group :label="$t('AUTH.LABEL.USERNAME')" label-for="username-input">
      <b-form-input
        id="username-input"
        v-model="form.username"
        :state="validateState('username')"
        aria-describedby="username-input-feedback"
      ></b-form-input>

      <b-form-invalid-feedback id="username-input-feedback">{{ $t("AUTH.ERROR.USERNAME") }}</b-form-invalid-feedback>
    </b-form-group>

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
  import { required, minLength } from "vuelidate/lib/validators";
  import IsFormComponent from "~/mixins/IsFormComponent";

  export default {
    name: "LoginForm",
    mixins: [IsFormComponent],
    props: {
      value: {
        type: Object,
        required: true,
        validator: obj =>
          Object.prototype.hasOwnProperty.call(obj, "username") &&
          Object.prototype.hasOwnProperty.call(obj, "password") &&
          ((Object.prototype.hasOwnProperty.call(obj, "rememberMe") && typeof obj.rememberMe === "boolean") ||
            obj.rememberMe === null)
      }
    },
    validations: {
      form: {
        username: {
          required,
          minLength: minLength(4)
        },
        password: {
          required,
          minLength: minLength(8)
        }
      }
    }
  };
</script>
