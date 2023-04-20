<template>
  <div :class="['info-box', _shadow]">
    <span :class="['info-box-icon', variant ? `bg-${variant}` : null]">
      <fa-icon :icon="icon" />
    </span>
    <div class="info-box-content">
      <span class="info-box-text" v-text="text"></span>
      <span v-if="statistic" class="info-box-number" v-text="statistic"></span>
    </div>
  </div>
</template>

<script>
  export const props = {
    icon: {
      type: [Array, String],
      required: false,
      validator: v => {
        if (Array.isArray(v)) {
          return v.length === 2;
        } else if (typeof v === "string") {
          return true;
        }
      },
      default() {
        return "info";
      }
    },
    text: {
      type: String,
      required: true
    },
    shadow: {
      type: [String],
      required: false,
      default() {
        return null;
      },
      validator: shadow => (shadow ? ["none", "sm", "md", "lg"].includes(shadow.toLowerCase()) : true)
    },
    statistic: {
      type: String,
      required: false,
      default: null
    },
    variant: {
      type: String,
      required: false,
      default() {
        return "info";
      }
    }
  };

  export default {
    props,
    computed: {
      _shadow() {
        const { shadow } = this;

        if (!shadow) return null;

        return shadow === "md" ? "shadow" : `shadow-${shadow.toLowerCase()}`;
      }
    }
  };
</script>
