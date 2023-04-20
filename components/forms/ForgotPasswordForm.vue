<template>
  <b-form @submit.prevent="onSubmit">
    <b-input-group class="mb-3">
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
        type="email"
        :placeholder="$t('AUTH.LABEL.EMAIL')"
      />
    </b-input-group>

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
  import { required } from "vuelidate/lib/validators";
  import IsFormComponent from "~/mixins/IsFormComponent";

  export default {
    name: "ForgotPasswordForm",
    mixins: [IsFormComponent],
    props: {
      value: {
        type: Object,
        required: true,
        validator: obj => Object.prototype.hasOwnProperty.call(obj, "email")
      }
    },
    validations: {
      form: {
        email: {
          required
        }
      }
    }
  };
</script>
