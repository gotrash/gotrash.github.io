<template>
  <b-form>
    <b-form-group v-if="showDebug || showTestData" label="Stripe Test Accounts"
      :label-for="`stripe-test-data-picker-${_.uid}`" class="mb-3">
      <b-form-select @update:modelValue="onInsertTestDetails" :model-value="null">
        <b-form-select-option :value="null">Select an account to pre-fill the form below with test
          data</b-form-select-option>
        <b-form-select-option-group v-for="(status, statusKey) in StripeTestAccounts" :label="statusKey">
          <b-form-select-option :value="card" v-for="card in status">{{ card.label }}</b-form-select-option>
        </b-form-select-option-group>
      </b-form-select>
    </b-form-group>
    <b-form-group :label="$t('PAYMENT_METHODS.LABEL.CARD_NUMBER')" :label-for="`card-number-input-${_.uid}`" class="mb-3">
      <b-form-input v-number-only v-model="value.cardNumber" v-mask data-maska="####-####-####-####"
        :id="`card-number-input-${_.uid}`" />
    </b-form-group>
    <b-form-group :label="$t('PAYMENT_METHODS.LABEL.NAME_ON_CARD')" :label-for="`name-on-card-input-${_.uid}`"
      class="mb-3">
      <b-form-input v-model="value.cardHoldersName" :id="`name-on-card-input-${_.uid}`" />
    </b-form-group>
    <b-row class="mb-3">
      <b-col cols="12" sm="8">
        <b-row :id="`expiry-input-${_.uid}`">
          <b-col cols="6" class="pe-1">
            <b-form-group :label="$t('PAYMENT_METHODS.LABEL.EXP_MONTH')" :label-for="`expiry-month-input-${_.uid}`">
              <b-form-input v-model="value.expMonth" :id="`expiry-month-input-${_.uid}`" />
            </b-form-group>
          </b-col>
          <b-col cols="6" class="ps-1">
            <b-form-group :label="$t('PAYMENT_METHODS.LABEL.EXP_YEAR')" :label-for="`expiry-year-input-${_.uid}`">
              <b-form-input v-model="value.expYear" :id="`expiry-year-input-${_.uid}`" />
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" sm="4">
        <b-form-group label="CVV" :label-for="`cvv-input-${_.uid}`">
          <b-form-input :id="`cvv-input-${_.uid}`" v-model="value.cvc" />
        </b-form-group>
      </b-col>
    </b-row>
    <div class="modal-footer border-0 p-0">
      <b-button v-if="showReset" @click="$emit('reset')" variant="outline-danger">Reset</b-button>
      <b-button v-if="showCancel" @click="$emit('cancel')" variant="danger" class="text-white">Cancel</b-button>
      <b-button type="submit" variant="success" class="text-white">Save</b-button>
    </div>
    <pre-code v-if="showDebug" v-model="value" />
  </b-form>
</template>

<script setup>
import StripeTestAccounts from "~/test/_data/stripe-accounts.json"
const props = defineProps(["showCancel", "showReset", "modelValue", "showDebug"]);
const emit = defineEmits(["cancel", "reset", "onSubmit", "update:modelValue"]);
const route = useRoute();

const showDebug = computed(() => {
  return route.query.debug;
})

const showTestData = computed(() => {
  return route.query.testData;
})
const value = computed({
  get() {
    return props.modelValue;
  },
  set(modelValue) {
    emit("update:modelValue", modelValue)
  }
})
const onInsertTestDetails = testAccountDetails => {
  value.value.cardNumber = testAccountDetails.cardNumber
  value.value.expMonth = testAccountDetails.expMonth;
  value.value.expYear = testAccountDetails.expYear;
  value.value.cvc = testAccountDetails.cvc;
  value.value.cardHoldersName = testAccountDetails.label;
}

const onSubmit = (evt) => {
  emit("onSubmit", evt);
}

</script>
