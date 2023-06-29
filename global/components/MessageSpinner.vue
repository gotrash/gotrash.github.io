<template>
  <div class="text-center text-primary">
    <slot v-if="!hideSpinner" name="spinner">
      <fa-icon :icon="icon" :class="[{ 'fa-spin': spinIcon }, 'fa-fw fa-3x mb-4']" />
    </slot>

    <component :is="messageTag">{{ message }}<span v-if="!hideEllipsis">...</span></component>
  </div>
</template>

<script>
  export default {
    props: {
      hideEllipsis: Boolean,
      hideSpinner: Boolean,
      icon: {
        type: [Array, String],
        required: false,
        default() {
          return "spinner";
        }
      },
      message: {
        type: String,
        required: false,
        default() {
          return this.$t("GENERAL.MESSAGE.LOADING");
        }
      },
      messageTag: {
        type: String,
        required: false,
        default() {
          return "h1";
        }
      },
      spinIcon: {
        type: Boolean,
        required: false,
        default() {
          return true;
        }
      }
    }
  };
</script>
