<template>
  <b-modal v-model="isOpen" @hide.prevent ref="modal" hide-footer>
    <standard-alert v-show="error || loading || saving || verifying" @close="onAlertClose" :icon="alertIcon"
      :icon-classes="'fa-spin'" :title="alertTitle" :message="alertMessage" :variant="alertVariant"
      :dismissible="isDismissible" />

    <bootstrap-credit-card-form v-model="cardDetails" @cancel="onCancel" :saving="saving" @submit.stop.prevent="onSubmit"
      :show-cancel="true" :show-reset="true" />
  </b-modal>
</template>

<script setup>
import BootstrapCreditCardForm from "~/components/forms/BootstrapCreditCardForm"
import CardDetailsDto from '@/dto/CardDetailsDto'

const isOpen = ref(false)
const cardDetails = ref(new CardDetailsDto())
const modal = ref(null)

const error = ref(false)
const loading = ref(false)
const saving = ref(false)
const verifying = ref(false)

const isDismissible = computed(() => {
  return !!error.value
})

const onAlertClose = () => {
  error.value = null
}

const alertIcon = computed(() => {
  if ((verifying.value || saving.value || loading.value) && !error.value) return "spinner"
  return null
})

const alertVariant = computed(() => {
  if (error.value) return "danger"
  if (verifying.value) return "warning"
  if (saving.value || loading.value) return "success"
  return undefined
})

const alertMessage = computed(() => {
  if (error.value) return "There was an error processing your request."
  if (verifying.value) return "Verifying the data you've entered, hold tight..."
  if (loading.value) return " "
  if (saving.value) return "We're saving you're payment details, hold tight..."
  return null
})

const alertTitle = computed(() => {
  if (error.value) return "Error"
  if (verifying.value) return "Verifying"
  if (loading.value) return "Loading"
  if (saving.value) return "Saving"
  return null
})

const show = _cardDetails => {
  isOpen.value = true

  if (_cardDetails != null) cardDetails.value = _cardDetails;
}

defineEmits(["cancel", "reset", "inserted", "updated"])

defineExpose({
  show
})

const resetFlags = () => {
  loading.value = false;
  saving.value = false;
  verifying.value = false;
}

const closeModal = () => {
  isOpen.value = false;

  return Promise.resolve();
}

const onCancel = () => {
  loading.value = true;

  try {
    cardDetails.value = new CardDetailsDto();
    console.log("Card Details Reset")
  } finally {
    closeModal().then(() => {
      resetFlags();
    })
  }
}

const onSubmit = () => {
  error.value = null
  saving.value = true

  console.log("Saving")

  const { getSession } = useAuth();

  getSession().then(session => {
    useApi(`/user/payment-methods`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session?.session?.access_token}`
      },
      body: new CardDetailsDto(cardDetails.value)
    }).then(() => {
      console.log("Got Response")
    }).catch(_err => {
      console.log("Boo Boo")

      error.value = _err
    }).finally(() => {
      saving.value = false;
    })
  })

}
</script>
