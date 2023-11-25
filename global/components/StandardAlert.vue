<template>
  <b-alert
    v-model="dismissibleAlert"
    :variant="variant"
    class="text-center"
    :dismissible="dismissible"
    @close="onClose"
    @closed="onClosed"
    @close-countdown="onCloseCountdown"
  >
    <div v-if="icon">
      <fa-icon :icon="icon" :class="['fa-3x mb-3', iconClasses]" />
    </div>
    <component :is="titleTag" v-if="title">
      {{ title }}
    </component>
    <component :is="messageTag" v-if="message">{{ message }}</component>
  </b-alert>
</template>

<script setup>
  const dismissibleAlert = ref(true);
  const emit = defineEmits(["close", "closed", "close-countdown"]);

  const onClose = () => {
    emit("close");
  };
  const onClosed = () => {
    emit("closed");
  };
  const onCloseCountdown = value => {
    emit("close-countdown", value);
  };

  const props = defineProps({
    icon: {
      type: String,
      required: false,
      default() {
        return null;
      }
    },
    iconClasses: {
      type: String,
      required: false,
      default() {
        return null;
      }
    },
    title: {
      type: String,
      required: false,
      default() {
        return null;
      }
    },
    titleTag: {
      type: String,
      required: false,
      default() {
        return "h2";
      }
    },
    message: {
      type: String,
      required: false,
      default() {
        return null;
      }
    },
    messageTag: {
      type: String,
      required: false,
      default() {
        return "p";
      }
    },
    variant: {
      type: String,
      required: false,
      default() {
        return "success";
      }
    },
    dismissible: {
      type: Boolean
    }
  });

  watch(
    () => [props.title, props.message, props.variant, props.icon, props.iconClasses, props.dismissible],
    () => {
      dismissibleAlert.value = !!(props.title || props.message);
    }
  );
</script>
