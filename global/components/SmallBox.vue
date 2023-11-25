<template>
  <div :class="['small-box', `bg-${bgVariant}`]">
    <div v-if="heading || subHeading" class="inner">
      <!-- TODO: Add conditionals, that are true boolean-only, incase of 0 values -->
      <h3 v-if="_heading">{{ _heading }}</h3>
      <p v-if="subHeading">{{ subHeading }}</p>
    </div>
    <div v-if="icon" class="icon">
      <fa-icon :icon="icon" :class="[iconClasses, `text-${iconVariant}`]" />
    </div>
    <b-link v-if="to" class="small-box-footer" :to="to">More info <fa-icon icon="arrow-circle-right" /></b-link>
  </div>
</template>

<script>
  export default {
    props: {
      bgVariant: {
        type: String,
        required: false,
        default() {
          return "primary";
        }
      },
      icon: {
        type: [Array, String],
        required: false,
        default() {
          return "spinner";
        }
      },
      iconClasses: {
        type: [Array, Object, String],
        required: false,
        default() {
          return "";
        }
      },
      iconVariant: {
        type: String,
        required: false,
        default() {
          return "light";
        }
      },
      to: {
        type: [Object, String],
        required: false,
        default: null
      },
      heading: {
        type: [Number, String],
        required: false,
        default: null
      },
      subHeading: {
        type: [Number, String],
        required: false,
        default: null
      }
    },
    computed: {
      _heading() {
        const { heading, valueOrZeroString } = this;

        return valueOrZeroString(heading);
      }
    },
    methods: {
      valueOrZeroString(v) {
        return (v || 0).toString();
      }
    }
  };
</script>
