<template>
  <b-form :id="`postcode-checker-form-${_.uid}`" @submit.stop.prevent="onSubmit">
    <b-form-group
      class="mb-3"
      :label="$t('GENERAL.LABEL.POSTCODE')"
      label-class="text-primary"
      :label-for="`postcode-checker-postcode-input-${_.uid}`"
    >
      <b-form-input
        :id="`postcode-checker-postcode-input-${_.uid}`"
        ref="postcode-input"
        v-model="form.postcode"
        :disabled="busy"
        :form="`postcode-checker-form-${_.uid}`"
        autocomplete="off"
        maxlength="8"
        name="postcode"
        :placeholder="$t('GENERAL.LABEL.POSTCODE')"
        :state="validateState('postcode')"
        :style="{
          'background-color': 'transparent',
          border: 'none',
          'border-bottom': '2px solid #28a744',
          'border-radius': '0px'
        }"
        :aria-describedby="`postcode-checker-postcode-input-${_.uid}-live-feedback`"
      />

      <b-form-invalid-feedback :id="`postcode-checker-postcode-input-${_.uid}-live-feedback`">
        {{ $t("POSTCODES.MESSAGE.INVALID_POSTCODE") }}
      </b-form-invalid-feedback>
    </b-form-group>

    <div class="d-flex align-items-center justify-content-end">
      <b-button
        :disabled="disabled || busy"
        :title="disabled ? $t('FRONTEND.MESSAGE.POSTCODE_CHECKER_SUBMIT_DISABLED') : undefined"
        type="submit"
        :variant="disabled ? (busy ? 'transparent' : 'secondary') : 'primary'"
      >
        <fa-icon v-if="busy" icon="spinner" class="fa-fw fa-spin text-success" />
        <span v-else>
          {{ $t("GENERAL.LABEL.SUBMIT") }}
        </span>
      </b-button>
    </div>
  </b-form>
</template>

<script>
  import { useVuelidate } from "@vuelidate/core";
  import { required, maxLength } from "@vuelidate/validators";
  import { IsUkPostcode } from "~/validators";

  export default {
    props: ["busy", "modelValue"],
    emits: ["update:modelValue", "submit"],
    setup() {
      return {
        v$: useVuelidate()
      };
    },
    computed: {
      disabled() {
        const { busy, form } = this;

        return busy || !IsUkPostcode(form.postcode);
      },
      form: {
        get() {
          return this.modelValue;
        },
        set(value) {
          this.$emit("update:modelValue", value);
        }
      }
    },
    validations: {
      form: {
        postcode: {
          isPostcode: postcode => IsUkPostcode(postcode),
          required,
          maxLength: maxLength(9)
        }
      }
    },
    methods: {
      focus() {
        this.$nextTick(this.$refs["postcode-input"].focus);
      },
      validateState(name) {
        const { $dirty, $error } = this.v$;

        return $dirty ? !$error : null;
      },
      onSubmit(evt) {
        if (evt?.preventDefault) evt.preventDefault();
        if (evt?.stopPropagation) evt.stopPropagation();

        this.v$.form.$touch();

        if (this.v$.form.$invalid) {
          return;
        }

        this.$emit("submit", evt);
      }
    }
  };
</script>
