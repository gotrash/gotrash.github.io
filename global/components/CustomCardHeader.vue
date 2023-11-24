<template>
  <b-card-header>
    <h1 class="fs-5 fw-normal lh-1 mb-0">
      <span v-if="text">
        {{ text }}
      </span>
      <slot v-else />
    </h1>
  </b-card-header>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: false,
        default() {
          return null;
        }
      }
    }
  };
</script>
