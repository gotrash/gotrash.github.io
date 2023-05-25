<template>
  <div :class="['small-box', `bg-${bgVariant}`]">
    <div v-if="heading || subHeading" class="inner">
      <h3 v-if="heading">{{ heading }}</h3>
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
          return "dark";
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
        type: String,
        required: false,
        default: null
      },
      subHeading: {
        type: String,
        required: false,
        default: null
      }
    }
  };
</script>
