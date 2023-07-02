<template>
  <b-form-group v-bind="{ ...$options.FormGroupAttributes, ...$attrs }" :label="label" :label-for="`${id}-input`">
    <b-form-text
      v-if="description"
      v-bind="$options.FormTextAttributes"
      :id="description ? `${id}-help-block` : undefined"
    >
      {{ description }}
    </b-form-text>

    <b-form-input
      :id="`${id}-input`"
      v-model="model"
      class="mb-2"
      :aria-describedby="description ? `${id}-help-block` : undefined"
    />
  </b-form-group>
</template>

<script>
  import { FrontendFormGroupAttributes } from "~/constants";
  import { IsFormField } from "~/mixins";

  export default {
    extends: IsFormField,
    inheritAttrs: false,
    FormGroupAttributes: FrontendFormGroupAttributes
  };
</script>
