<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group :label="$t('AUTH.LABEL.EMAIL')" label-for="email-input">
      <b-form-input
        id="email-input"
        v-model="form.email"
        :state="validateState('email')"
        aria-describedby="email-input-feedback"
      ></b-form-input>

      <b-form-invalid-feedback id="email-input-feedback">{{ $t("AUTH.ERROR.LOGIN_EMAIL") }}</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group :label="$t('AUTH.LABEL.PASSWORD')" label-for="password-input">
      <b-form-input
        id="password-input"
        v-model="form.password"
        :state="validateState('password')"
        type="password"
        aria-describedby="password-input-feedback"
      ></b-form-input>

      <b-form-invalid-feedback id="password-input-feedback">
        <template v-if="!$v.form.password.required">Missing</template>
        <template v-else-if="!$v.form.password.minLength">Too Short</template>
        <template v-else-if="!$v.form.password.maxLength">Too Long</template>
        <template v-else-if="!$v.form.password.passwordStrength">Not strong enough</template>
        <template v-else>Some other password-related error</template>
      </b-form-invalid-feedback>
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
  </b-form>
</template>

<script>
  import AuthDto from "~/dto/AuthDto";
  import { Form, ModelValidator, Validations } from "~/forms/LoginForm";
  import IsFormComponent from "~/mixins/IsFormComponent";

  export default {
    name: "LoginForm",
    dto: AuthDto,
    mixins: [IsFormComponent],
    Form,
    props: {
      value: {
        type: Object,
        required: true,
        validator: v => ModelValidator(v)
      }
    },
    computed: {
      vForm() {
        const vForm = { ...this.$v.form };

        delete vForm.$model;
        delete vForm.$params;

        for (const field of Object.keys(vForm).filter(f => !f.includes("$"))) {
          delete vForm[field].$params;
        }

        return vForm;
      }
    },
    validations: Validations
  };
</script>
