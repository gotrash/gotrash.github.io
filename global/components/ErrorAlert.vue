<template>
  <b-alert :model-value="showError" variant="danger">
    {{ error }}
  </b-alert>
</template>

<script>
  export default {
    props: {
      error: {
        type: [Error, String],
        required: false,
        default() {
          return null;
        }
      }
    },
    computed: {
      showError() {
        return this.error !== null;
      }
    }
  };
</script>
