<template>
  <!-- If we have an error or we're loading data, show an alert to the user -->
  <b-row v-if="error || busy">
    <b-col cols="12">
      <message-spinner v-if="busy" :message="busyMessage" />
      <error-alert v-else-if="error" :error="error" />
    </b-col>
  </b-row>
</template>

<script setup>
  defineProps({
    error: {
      type: [Object, String, Boolean, null],
      required: false,
      default() {
        return null;
      }
    },
    busy: {
      type: Boolean,
      required: false,
      default() {
        return null;
      }
    },
    busyMessage: {
      type: String,
      required: true
    }
  });
</script>
