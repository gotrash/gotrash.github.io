<template>
  <div class="step-wrapper" :class="stepWrapperClass">
    <button type="button" class="btn btn-primary" :disabled="firststep" @click="lastStep">Back</button>
    <button type="button" class="btn btn-primary" :disabled="laststep" @click="nextStep">Next</button>
    <button v-if="laststep" type="submit" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
  export default {
    name: "WizardStep",
    props: {
      step: {
        type: Object,
        required: true
      },
      stepcount: {
        type: Number,
        required: false,
        default() {
          return 0;
        }
      },

      currentstep: {
        type: Number,
        required: false,
        default() {
          return 0;
        }
      }
    },
    emits: ["step-change"],
    computed: {
      active() {
        return this.step.id === this.currentstep;
      },
      firststep() {
        return this.currentstep === 1;
      },
      laststep() {
        return this.currentstep === this.stepcount;
      },
      stepWrapperClass() {
        return {
          active: this.active
        };
      }
    },
    methods: {
      nextStep() {
        this.$emit("step-change", this.currentstep + 1);
      },

      lastStep() {
        this.$emit("step-change", this.currentstep - 1);
      }
    }
  };
</script>
