<template>
  <pre>
    <code>
      <slot>
{{ modelValue }}
      </slot>
    </code>
  </pre>
</template>

<script setup>
const props = defineProps(["modelValue"])
</script>
