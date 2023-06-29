<template>
  <li :class="indicatorclass">
    <div class="step">
      <fa-icon :icon="step.icon" />
    </div>
    <div class="caption hidden-xs hidden-sm">
      Step <span v-text="step.id"></span>: <span v-text="step.title"></span>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      step: {
        type: Object,
        required: true
      },
      currentstep: {
        type: Number,
        required: false,
        default() {
          return 0;
        }
      }
    },
    computed: {
      indicatorclass() {
        return {
          active: this.step.id === this.currentstep,
          complete: this.currentstep > this.step.id
        };
      }
    }
  };
</script>
