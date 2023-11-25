<template>
  <b-nav-item exact-active-class="text-light" :to="to">
    <slot>{{ text }}</slot>
  </b-nav-item>
</template>

<script setup>
defineProps({
  to: {
    type: [Object, String],
    required: true,
  },
  text: {
    type: String,
    required: false,
    default() {
      return null;
    },
  },
});
</script>
