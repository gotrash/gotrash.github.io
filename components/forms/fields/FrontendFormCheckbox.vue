<template>
  <b-form-group
    class="h-100 frontend-form-checkbox"
    v-bind="{ ...$options.FormGroupAttributes, ...$attrs }"
    :state="state"
    :label="label"
    :label-for="`${id}-input`"
    :invalid-feedback="invalidFeedback"
  >
    <b-form-text
      v-if="description"
      v-bind="$options.FormTextAttributes"
      :id="description ? `${id}-help-block` : undefined"
      class="flex-grow-1"
    >
      {{ description }}
    </b-form-text>

    <b-btn-group
      v-bind="$options.FormCheckboxAttributes"
      :id="`${id}-input`"
      :aria-describedby="description ? `${id}-help-block` : undefined"
    >
      <b-btn
        :variant="model === false ? 'danger' : state === false ? 'outline-danger' : 'outline-primary'"
        @click="
          () => {
            model = false;
          }
        "
      >
        {{ $t("GENERAL.LABEL.NO") }}
      </b-btn>
      <b-btn
        :variant="model === true ? 'success' : state === false ? 'outline-danger' : 'outline-primary'"
        @click="
          () => {
            model = true;
          }
        "
      >
        {{ $t("GENERAL.LABEL.YES") }}
      </b-btn>
    </b-btn-group>
  </b-form-group>
</template>

<script>
  import { FrontendCheckboxAttributes, FrontendCheckboxGroupAttributes } from "~/constants";
  import { IsFormField } from "~/mixins";

  export default {
    extends: IsFormField,
    inheritAttrs: false,
    FormCheckboxAttributes: FrontendCheckboxAttributes,
    FormGroupAttributes: FrontendCheckboxGroupAttributes,
    props: {
      id: {
        type: String,
        required: true
      },
      invalidFeedback: {
        type: String,
        required: false,
        default: "Field Invalid"
      },
      label: {
        type: String,
        required: true
      },
      state: {
        type: [Boolean, String],
        required: false,
        default: null
      },
      description: {
        type: String,
        required: false,
        default: null
      }
    }
  };
</script>

<style lang="scss">
  .frontend-form-checkbox {
    height: 100%;
    flex-direction: column;
    // align-items: flex-start;
    // justify-content: stretch;
    > label {
      // display: block;
      // flex-shrink: 1;
      // flex-grow: 0;
      flex-basis: auto;
    }
    > .col {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
    }
  }
</style>
