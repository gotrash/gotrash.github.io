<template>
  <ol class="step-indicator">
    <component
      :is="'step-navigation-step'"
      v-for="step in steps"
      :key="step.id"
      :step="step"
      :currentstep="currentstep"
    />
  </ol>
</template>

<script>
  export default {
    components: {
      StepNavigationStep: () => import("~/components/wizard/StepNavigationStep")
    },
    props: {
      currentstep: {
        type: [Number, String],
        required: false,
        default() {
          return 0;
        }
      },
      steps: {
        type: [Array, Object],
        required: true
      }
    }
  };
</script>
