<template>
  <b-nav-item v-bind="$attrs" active-class="active" :label="text" :to="to" @click="onClick">
    <fa-icon v-if="icon" :icon="icon" :class="_iconClasses" />
    <span v-if="!hideText" class="text-success">
      <slot>{{ text }}</slot>
    </span>
  </b-nav-item>
</template>

<script lang="ts">
  export default {
    inheritAttrs: false,
    emit: ["click"],
    props: {
      hideText: Boolean,
      icon: {
        type: [Array, String],
        required: false,
        default() {
          return undefined;
        }
      },
      iconClasses: {
        type: [Array, Object, String],
        required: false,
        default: ""
      },
      text: {
        type: String,
        required: false,
        default() {
          return "";
        }
      },
      to: {
        type: [Object, String],
        required: false
      }
    },
    emits: ["click"],
    computed: {
      _iconClasses() {
        const { iconClasses } = this;
        const standardClasses = "mr-2 mr-md-0 fa-fw text-success";

        if (Array.isArray(iconClasses)) return [standardClasses, ...iconClasses];
        else return [standardClasses, iconClasses];
      }
    },
    methods: {
      onClick(evt: any) {
        this.$emit("click", evt);
      }
    }
  };
</script>
