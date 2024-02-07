<template>
  <NuxtPage />
</template>

<script setup>
  definePageMeta({
    layout: "user",
    scrollToTop: true
  });

  useHead({
    titleTemplate: title => (title ? `${title} | GoTrash` : `GoTrash`)
  });
</script>
