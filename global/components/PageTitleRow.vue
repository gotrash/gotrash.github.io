<template>
  <!-- Page Title Area -->
  <b-row>
    <b-col cols="12" class="text-center mb-4 justify-content-around">
      <h1 class="fs-3 mb-3">{{ title }}</h1>
      <h2 v-if="summary" class="fs-5 mx-auto" style="max-width: 26.25rem">
        <small>{{ summary }}</small>
      </h2>
    </b-col>
  </b-row>
</template>

<script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    }
  });
</script>
