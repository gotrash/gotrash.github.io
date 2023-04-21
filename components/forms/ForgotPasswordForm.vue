<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group>
      <b-input-group>
        <template #append>
          <b-input-group-text>
            <fa-icon icon="envelope" />
          </b-input-group-text>
        </template>

        <b-form-input
          id="forgot-password-email-input"
          ref="email-input"
          v-model="form.email"
          name="email"
          type="text"
          :placeholder="$t('AUTH.LABEL.EMAIL')"
          :state="validateState('email')"
        />
      </b-input-group>

      <b-form-invalid-feedback :state="validateState('email')">
        <template v-if="!$v.form.email.required">{{ $t("AUTH.ERROR.FORGOT_PASSWORD_EMAIL_REQUIRED") }}</template>
        <template v-else-if="!$v.form.email.email">{{ $t("AUTH.ERROR.FORGOT_PASSWORD_EMAIL_INVALID") }}</template>
      </b-form-invalid-feedback>
    </b-form-group>

    <b-form-row>
      <b-col>
        <b-btn type="submit" variant="primary" block>{{ $t("AUTH.LABEL.REQUEST_NEW_PASSWORD") }}</b-btn>
      </b-col>
    </b-form-row>

    <p class="mt-3 mb-1 text-center">
      <b-link :to="{ name: 'auth-login' }">
        {{ $t("AUTH.LABEL.LOGIN") }}
      </b-link>
    </p>
  </b-form>
</template>

<script>
  import { validationMixin } from "vuelidate";
  import { Validations } from "~/forms/ForgotPasswordForm";
  import IsFormComponent from "~/mixins/IsFormComponent";

  export default {
    name: "ForgotPasswordForm",
    mixins: [IsFormComponent, validationMixin],
    props: {
      value: {
        type: Object,
        required: true,
        validator: obj => Object.prototype.hasOwnProperty.call(obj, "email")
      }
    },
    validations: Validations
  };
</script>
