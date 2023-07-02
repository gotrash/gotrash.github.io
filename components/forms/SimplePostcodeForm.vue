<template>
  <b-form :id="`postcode-checker-form-${_uid}`" @submit.stop.prevent="onSubmit">
    <b-form-group
      :label="$t('GENERAL.LABEL.POSTCODE')"
      label-class="text-primary"
      :label-for="`postcode-checker-postcode-input-${_uid}`"
    >
      <b-form-input
        :id="`postcode-checker-postcode-input-${_uid}`"
        ref="postcode-input"
        v-model="model.postcode"
        :disabled="busy"
        :form="`postcode-checker-form-${_uid}`"
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
        :aria-describedby="`postcode-checker-postcode-input-${_uid}-live-feedback`"
      />

      <b-form-invalid-feedback :id="`postcode-checker-postcode-input-${_uid}-live-feedback`">
        {{ $t("POSTCODES.MESSAGE.INVALID_POSTCODE") }}
      </b-form-invalid-feedback>
    </b-form-group>

    <div class="d-flex align-items-center justify-content-end">
      <b-btn
        :disabled="disabled || busy"
        :title="disabled ? $t('FRONTEND.MESSAGE.POSTCODE_CHECKER_SUBMIT_DISABLED') : undefined"
        type="submit"
        :variant="disabled ? (busy ? 'transparent' : 'secondary') : 'primary'"
      >
        <transition name="fade" mode="out-in">
          <fa-icon v-if="busy" icon="spinner" class="fa-fw fa-spin text-success" />
          <span v-else>
            {{ $t("GENERAL.LABEL.SUBMIT") }}
          </span>
        </transition>
      </b-btn>
    </div>
  </b-form>
</template>

<script>
  import { required, maxLength } from "vuelidate/lib/validators";
  import { HasModel, IsFormComponent } from "~/mixins";
  import { IsUkPostcode } from "~/validators";

  export default {
    name: "SimplePostcodeForm",
    mixins: [HasModel, IsFormComponent],
    props: {
      busy: Boolean,
      value: {
        type: Object,
        required: true,
        validator: form => Object.prototype.hasOwnProperty.call(form, "postcode")
      }
    },
    validations: {
      model: {
        postcode: {
          isPostcode: postcode => IsUkPostcode(postcode),
          required,
          maxLength: maxLength(9)
        }
      }
    },
    computed: {
      disabled() {
        const { busy, model } = this;

        return busy || !IsUkPostcode(model.postcode);
      }
    },
    methods: {
      focus() {
        this.$nextTick(() => {
          this.$refs["postcode-input"].focus();
        });
      },
      onSubmit() {
        this.$v.model.$touch();

        if (this.$v.model.$invalid) {
          return;
        }

        this.$emit("submit");
      },
      validateState(name) {
        const { $dirty, $error } = this.$v.model[name];

        return $dirty ? !$error : null;
      }
    }
  };
</script>
