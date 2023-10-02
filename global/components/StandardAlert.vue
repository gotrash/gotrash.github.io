<template>
  <b-alert :variant="variant" v-model="dismissibleAlert" class="text-center" dismissible>
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
