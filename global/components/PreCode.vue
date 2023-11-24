<template>
  <pre>
    <code>
<slot>
{{ modelValue.toJSON && typeof modelValue.toJSON === "function" ? modelValue.toJSON() : modelValue }}
</slot>
    </code>
  </pre>
</template>

<script setup>
  defineProps(["modelValue"]);
</script>
