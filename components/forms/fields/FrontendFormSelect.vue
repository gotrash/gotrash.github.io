<template>
  <b-form-group
    v-bind="{ ...$options.FormGroupAttributes, ...$attrs }"
    :invalid-feedback="invalidFeedback"
    :label="label"
    :label-for="`${id}-input`"
  >
    <b-form-text
      v-if="description"
      v-bind="$options.FormTextAttributes"
      :id="description ? `${id}-help-block` : undefined"
    >
      {{ description }}
    </b-form-text>

    <b-form-select
      :id="`${id}-input`"
      v-model="model"
      :state="state"
      class="mb-2"
      :aria-describedby="description ? `${id}-help-block` : undefined"
    >
      <slot></slot>
    </b-form-select>
  </b-form-group>
</template>

<script>
  import { FrontendFormGroupAttributes } from "~/constants";
  import { IsFormField } from "~/mixins";

  export default {
    mixins: [IsFormField],
    inheritAttrs: false,
    FormGroupAttributes: FrontendFormGroupAttributes
  };
</script>
