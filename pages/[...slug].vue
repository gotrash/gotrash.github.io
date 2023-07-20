<template>
  <main>
    <ContentDoc :path="$route.params.slug.join('/')" />
  </main>
</template>

<script setup>
  definePageMeta({
    layout: "frontend"
  });
</script>
