<template>
  <b-alert :variant="variant" @close="onClose" @closed="onClosed" @close-countdown="onCloseCountdown"
    v-model="dismissibleAlert" class="text-center" :dismissible="dismissible">
    <div v-if="icon">
      <fa-icon :icon="icon" :class="['fa-3x mb-3', iconClasses]" />
    </div>
    <component v-if="title" :is="titleTag">
      {{ title }}
    </component>
    <component :is="messageTag" v-if="message">{{ message }}</component>
  </b-alert>
</template>

<script setup>
const dismissibleAlert = ref(true)
const emit = defineEmits(["close", "closed", "close-countdown"])

const onClose = () => {
  emit("close")
}
const onClosed = () => {
  emit("closed")
}
const onCloseCountdown = value => {
  emit("close-countdown", value)
}

const props = defineProps({
  icon: {
    type: String,
    required: false,
    default() {
      return null
    }
  },
  iconClasses: {
    type: String,
    required: false,
    default() {
      return null
    }
  },
  title: {
    type: String,
    required: false
  },
  titleTag: {
    type: String,
    required: false,
    default() {
      return "h2"
    }
  },
  message: {
    type: String,
    required: false
  },
  messageTag: {
    type: String,
    required: false,
    default() {
      return "p"
    }
  },
  variant: {
    type: String,
    required: false,
    default() {
      return "success"
    }
  },
  dismissible: {
    type: Boolean
  }
})

watch(() => [props.title, props.message, props.variant, props.icon, props.iconClasses, props.dismissible], () => {
  dismissibleAlert.value = !!(props.title || props.message)
})
</script>
