<template>
  <b-form-group
    v-bind="$options.FormGroupAttributes"
    :label="label"
    :label-for="`${id}-input`"
    :invalid-feedback="invalidFeedback"
  >
    <b-form-text
      v-if="description"
      v-bind="$options.FormTextAttributes"
      :id="description ? `${id}-help-block` : undefined"
    >
      {{ description }}
    </b-form-text>
    <b-form-textarea
      :id="`${id}-input`"
      v-model="model"
      :maxlength="limit || undefined"
      class="mb-2"
      :formatter="formatter"
      :state="state"
      :rows="rows"
      :aria-describedby="description ? `${id}-help-block` : undefined"
      :no-resize="!canResize"
    />

    <div
      v-if="limit"
      class="text-right"
      style="margin-top: -2rem; height: 2rem; padding-left: 0.5rem; padding-right: 0.5rem; font-size: 0.8rem"
    >
      {{ model?.length || 0 }}/{{ limit }}
    </div>
  </b-form-group>
</template>

<script>
  import { FrontendFormGroupAttributes } from "~/constants";
  import { IsFormField } from "~/mixins";

  export default {
    extends: IsFormField,
    FormGroupAttributes: FrontendFormGroupAttributes,
    props: {
      canResize: Boolean,
      noLineBreaks: Boolean,
      limit: {
        type: [Number, String],
        required: false,
        default: null
      },
      value: {
        type: String,
        required: false,
        default() {
          return null;
        }
      },
      rows: {
        type: [Number, String],
        required: false,
        default: 3
      }
    },
    methods: {
      formatter(value) {
        const { noLineBreaks } = this;

        return noLineBreaks ? (value && value.replaceAll("\n", "").replaceAll("\r", "")) || value : value;
      }
    }
  };
</script>
