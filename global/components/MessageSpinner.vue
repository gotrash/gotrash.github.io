<template>
  <div class="text-center text-primary">
    <fa-icon :icon="icon" :class="[{ 'fa-spin': spinIcon }, 'fa-fw fa-3x mb-4']" />
    <component :is="messageTag">{{ message }}...</component>
  </div>
</template>

<script>
  export default {
    props: {
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
      showEllipsis: Boolean,
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
