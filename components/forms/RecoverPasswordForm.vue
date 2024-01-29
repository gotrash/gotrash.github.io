<template>
  <b-form @submit.stop.prevent="onSubmit">
    <b-input-group class="mb-3">
      <template #append>
        <b-input-group-text @click="showPassword = !showPassword">
          <fa-icon icon="eye" :class="{ 'text-danger': showPassword }" />
        </b-input-group-text>
      </template>

      <b-form-input
        id="recover-password-password-input"
        ref="password-input"
        v-model="form.password"
        name="password"
        :type="showPassword ? 'text' : 'password'"
        :placeholder="$t('AUTH.LABEL.PASSWORD')"
        :state="validateState('password')"
        aria-describedby="username-input-feedback"
      />
    </b-input-group>

    <b-input-group class="mb-3">
      <template #append>
        <b-input-group-text @click="showConfirmPassword = !showConfirmPassword">
          <fa-icon icon="eye" :class="{ 'text-danger': showConfirmPassword }" />
        </b-input-group-text>
      </template>

      <b-form-input
        id="recover-password-confirm-password-input"
        ref="confirm-password-input"
        v-model="form.confirmPassword"
        name="confirm-password"
        :type="showConfirmPassword ? 'text' : 'password'"
        :placeholder="$t('AUTH.LABEL.CONFIRM_PASSWORD')"
        :state="validateState('confirmPassword')"
        aria-describedby="username-input-feedback"
      />
    </b-input-group>

    <b-form-row>
      <b-col>
        <b-btn type="submit" variant="primary" block>{{ $t("AUTH.LABEL.UPDATE_PASSWORD") }}</b-btn>
      </b-col>
    </b-form-row>
  </b-form>
</template>

<script>
  import { validationMixin } from "vuelidate";
  import { required, minLength } from "vuelidate/lib/validators";
  import IsFormComponent from "~/mixins/IsFormComponent";

  export default {
    name: "RecoverPasswordForm",
    mixins: [IsFormComponent, validationMixin],
    props: {
      value: {
        type: Object,
        required: true,
        validator: obj =>
          Object.prototype.hasOwnProperty.call(obj, "confirmPassword") &&
          Object.prototype.hasOwnProperty.call(obj, "password")
      }
    },
    data() {
      return {
        showPassword: false,
        showConfirmPassword: false
      };
    },
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
    validations: {
      form: {
        confirmPassword: {
          required,
          minLength: minLength(8)
        },
        password: {
          required,
          minLength: minLength(8)
        }
      }
    },
    methods: {
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name];

        return $dirty ? !$error : null;
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
