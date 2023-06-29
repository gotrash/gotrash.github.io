<template>
  <b-nav-item v-bind="$attrs" active-class="active" :label="text" :to="to" @click="() => $emit('click')">
    <fa-icon :icon="icon" :class="_iconClasses" /><span v-if="!hideText" class="d-inline d-md-none d-xl-inline">
      {{ text }}</span
    >
  </b-nav-item>
</template>

<script>
  export default {
    inheritAttrs: false,
    props: {
      hideText: Boolean,
      icon: {
        type: [Array, String],
        required: true
      },
      iconClasses: {
        type: [Array, Object, String],
        required: false,
        default: ""
      },
      text: {
        type: String,
        required: true
      },
      to: {
        type: [Object, String],
        required: true
      }
    },
    computed: {
      _iconClasses() {
        const { iconClasses } = this;
        const standardClasses = "mr-2 mr-md-0 fa-fw text-success";

        if (Array.isArray(iconClasses)) return [standardClasses, ...iconClasses];
        else return [standardClasses, iconClasses];
      }
    }
  };
</script>
