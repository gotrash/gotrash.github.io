<template>
  <b-form @reset.stop.prevent="onReset" @submit.stop.prevent="onSubmit">
    <frontend-form-textarea
      id="trash-something-summary"
      v-model="form.summary"
      limit="100"
      :invalid-feedback="invalidSummaryFeedback"
      :state="validateState('summary')"
      :description="$t('JOBS.MESSAGE.SUMMARY')"
      :label="$t('JOBS.LABEL.SUMMARY')"
      no-line-breaks
    />

    <b-form-group
      v-bind="$options.FormGroupAttributes"
      :label="$t('JOBS.LABEL.IMAGES')"
      :invalid-feedback="$t('JOBS.INVALID.IMAGES_REQUIRED')"
      label-for="trash-something-images-input"
    >
      <b-form-text v-bind="$options.FormTextAttributes" id="trash-something-images-help-block">
        {{ $t("JOBS.MESSAGE.IMAGES") }}
      </b-form-text>

      <b-form-file
        id="trash-something-images-input"
        v-model="form.images"
        multiple
        :state="validateState('images')"
        class="mb-2"
        aria-describedby="trash-something-images-help-block"
      />
    </b-form-group>

    <b-row align-v="stretch" class="py-2 row-flex">
      <b-col cols="12" sm="6">
        <frontend-form-checkbox
          id="trash-something-is-builder-waste"
          v-model="form.isBuilderWaste"
          class="h-100"
          :invalid-feedback="$t('JOBS.INVALID.IS_BUILDER_WASTE_REQUIRED')"
          :state="validateState('isBuilderWaste')"
          :description="$t('JOBS.MESSAGE.IS_BUILDER_WASTE')"
          :label="$t('JOBS.LABEL.IS_BUILDER_WASTE')"
        />
      </b-col>
      <b-col cols="12" sm="6">
        <frontend-form-checkbox
          id="trash-something-is-recyclable"
          v-model="form.isRecyclable"
          class="h-100"
          :invalid-feedback="$t('JOBS.INVALID.IS_RECYCLABLE_REQUIRED')"
          :state="validateState('isRecyclable')"
          :description="$t('JOBS.MESSAGE.IS_RECYCLABLE')"
          :label="$t('JOBS.LABEL.IS_RECYCLABLE')"
        />
      </b-col>
      <b-col cols="12" sm="6">
        <frontend-form-checkbox
          id="trash-something-is-business"
          v-model="form.isBusiness"
          class="h-100"
          :invalid-feedback="$t('JOBS.INVALID.IS_BUSINESS_REQUIRED')"
          :state="validateState('isBusiness')"
          :description="$t('JOBS.MESSAGE.IS_BUSINESS')"
          :label="$t('JOBS.LABEL.IS_BUSINESS')"
        />
      </b-col>
      <b-col cols="12" sm="6">
        <frontend-form-checkbox
          id="trash-something-is-easy-access"
          v-model="form.isEasyAccess"
          class="h-100"
          :invalid-feedback="$t('JOBS.INVALID.IS_EASY_ACCESS_REQUIRED')"
          :state="validateState('isEasyAccess')"
          :description="$t('JOBS.MESSAGE.IS_EASY_ACCESS')"
          :label="$t('JOBS.LABEL.IS_EASY_ACCESS')"
        />
      </b-col>
    </b-row>
    <frontend-form-select
      id="trash-something-load-size"
      v-model="form.loadSize"
      class="mb-2"
      :invalid-feedback="$t('JOBS.INVALID.LOAD_SIZE_REQUIRED')"
      :state="validateState('loadSize')"
      :description="$t('JOBS.MESSAGE.LOAD_SIZE')"
      :label="$t('JOBS.LABEL.LOAD_SIZE')"
    >
      <b-form-select-option v-if="!form.loadSize" :value="null"
        >--- {{ $t("LOAD_SIZES.MESSAGE.PLACEHOLDER") }} ---</b-form-select-option
      >
      <b-form-select-option
        v-for="loadSize in $options.LoadSizes"
        :key="`trash-something-load-size-option-${loadSize}`"
        :value="loadSize"
        >{{ $t(`LOAD_SIZES.LABEL.${loadSize}`) }}</b-form-select-option
      >
    </frontend-form-select>

    <frontend-form-textarea
      id="trash-something-detailed-description"
      v-model="form.detailedDescription"
      :invalid-feedback="invalidDetailedDescriptionFeedback"
      :state="validateState('detailedDescription')"
      limit="1000"
      rows="5"
      :description="$t('JOBS.MESSAGE.DETAILED_DESCRIPTION')"
      :label="$t('JOBS.LABEL.DETAILED_DESCRIPTION')"
    />

    <div class="d-flex align-items-center justify-content-end mt-3">
      <div>
        <b-btn v-if="showCancel" variant="outline-primary" @click="onCancel">{{ $t("GENERAL.LABEL.CANCEL") }}</b-btn>
        <b-btn v-if="showReset" type="reset" variant="outline-primary">{{ $t("GENERAL.LABEL.RESET") }}</b-btn>
        <b-btn type="submit" variant="primary">{{ $t("GENERAL.LABEL.SAVE") }}</b-btn>
      </div>
    </div>
  </b-form>
</template>

<script>
  import {
    required,
    maxLength,
    minLength
    // $each
  } from "vuelidate/lib/validators";
  import FrontendFormCheckbox from "./fields/FrontendFormCheckbox";
  import FrontendFormFile from "./fields/FrontendFormFile";
  import FrontendFormInput from "./fields/FrontendFormInput";
  import FrontendFormSelect from "./fields/FrontendFormSelect";
  import FrontendFormTextarea from "./fields/FrontendFormTextarea";
  import { FrontendFormGroupAttributes, FrontendFormTextAttributes, LoadSizes } from "~/constants";
  import { HasModel, IsFormComponent } from "~/mixins";

  export default {
    name: "JobForm",
    FormTextAttributes: FrontendFormTextAttributes,
    FormGroupAttributes: FrontendFormGroupAttributes,
    components: {
      FrontendFormCheckbox,
      FrontendFormFile,
      FrontendFormSelect,
      FrontendFormInput,
      FrontendFormTextarea
    },
    LoadSizes,
    mixins: [HasModel, IsFormComponent],
    validations: {
      form: {
        detailedDescription: {
          required,
          maxLength: maxLength(1000),
          minLength: minLength(10)
        },
        summary: {
          required,
          maxLength: maxLength(100),
          minLength: minLength(10)
        },
        images: {
          // required,
          // minLength: minLength(1)
          // $each: {
          //   name: {
          //     required,
          //     minLength: minLength(2)
          //   }
          // }
        },
        isBuilderWaste: {
          required
        },
        isBusiness: {
          required
        },
        isEasyAccess: {
          required
        },
        isRecyclable: {
          required
        },
        loadSize: {
          required
        }
      }
    },
    computed: {
      invalidDetailedDescriptionFeedback() {
        const {
          $v: {
            form: { detailedDescription }
          }
        } = this;
        const $t = this.$t.bind(this);

        if (!detailedDescription.required) {
          return $t("JOBS.INVALID.DETAILED_DESCRIPTION_REQUIRED");
        } else if (!detailedDescription.minLength) {
          return $t("JOBS.INVALID.DETAILED_DESCRIPTION_TOO_SHORT");
        } else if (!detailedDescription.maxLength) {
          return $t("JOBS.INVALID.DETAILED_DESCRIPTION_TOO_LONG");
        } else {
          return null;
        }
      },
      invalidSummaryFeedback() {
        const {
          $v: {
            form: { summary }
          }
        } = this;
        const $t = this.$t.bind(this);

        if (!summary.required) {
          return $t("JOBS.INVALID.SUMMARY_REQUIRED");
        } else if (!summary.minLength) {
          return $t("JOBS.INVALID.SUMMARY_TOO_SHORT");
        } else if (!summary.maxLength) {
          return $t("JOBS.INVALID.SUMMARY_TOO_LONG");
        } else {
          return null;
        }
      }
    },
    methods: {
      onCancel() {
        console.log("Cancelling job creation");
      },
      onReset() {
        console.log("Resetting job");
      },
      onSubmit() {
        this.$v.form.$touch();

        if (this.$v.form.$invalid) {
          return;
        }

        this.$emit("submit", this.form);
      },
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name];

        return $dirty ? !$error : null;
      }
    }
  };
</script>
