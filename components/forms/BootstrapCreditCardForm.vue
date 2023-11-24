<template>
  <b-form>
    <b-form-group
      v-if="showDebug || showTestData"
      label="Stripe Test Accounts"
      :label-for="`stripe-test-data-picker-${_.uid}`"
      class="mb-3"
    >
      <b-form-select :model-value="null" @update:model-value="onInsertTestDetails">
        <b-form-select-option :value="null"
          >Select an account to pre-fill the form below with test data</b-form-select-option
        >
        <b-form-select-option-group
          v-for="(status, statusKey) in StripeTestAccounts"
          :key="`test-card-option-group-${statusKey}`"
          :label="statusKey"
        >
          <b-form-select-option
            v-for="(card, cardIndex) in status"
            :key="`test-card-option-${cardIndex + 1}`"
            :value="card"
            >{{ card.label }}</b-form-select-option
          >
        </b-form-select-option-group>
      </b-form-select>
    </b-form-group>
    <b-form-group
      :label="$t('PAYMENT_METHODS.LABEL.CARD_NUMBER')"
      :label-for="`card-number-input-${_.uid}`"
      class="mb-3"
    >
      <b-form-input
        :id="`card-number-input-${_.uid}`"
        v-model="value.cardNumber"
        v-number-only
        v-mask
        data-maska="####-####-####-####"
      />
    </b-form-group>
    <b-form-group
      :label="$t('PAYMENT_METHODS.LABEL.NAME_ON_CARD')"
      :label-for="`name-on-card-input-${_.uid}`"
      class="mb-3"
    >
      <b-form-input :id="`name-on-card-input-${_.uid}`" v-model="value.cardHoldersName" />
    </b-form-group>
    <b-row class="mb-3">
      <b-col cols="12" sm="8">
        <b-row :id="`expiry-input-${_.uid}`">
          <b-col cols="6" class="pe-1">
            <b-form-group :label="$t('PAYMENT_METHODS.LABEL.EXP_MONTH')" :label-for="`expiry-month-input-${_.uid}`">
              <b-form-input :id="`expiry-month-input-${_.uid}`" v-model="value.expMonth" />
            </b-form-group>
          </b-col>
          <b-col cols="6" class="ps-1">
            <b-form-group :label="$t('PAYMENT_METHODS.LABEL.EXP_YEAR')" :label-for="`expiry-year-input-${_.uid}`">
              <b-form-input :id="`expiry-year-input-${_.uid}`" v-model="value.expYear" />
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
      <b-button v-if="showReset" variant="outline-danger" @click="$emit('reset')">Reset</b-button>
      <b-button v-if="showCancel" variant="danger" class="text-white" @click="$emit('cancel')">Cancel</b-button>
      <b-button type="submit" variant="success" class="text-white">Save</b-button>
    </div>
    <pre-code v-if="showDebug" v-model="value" />
  </b-form>
</template>

<script setup>
  import StripeTestAccounts from "~/test/_data/stripe-accounts.json";
  const props = defineProps(["showCancel", "showReset", "modelValue", "showDebug"]);
  const emit = defineEmits(["cancel", "reset", "onSubmit", "update:model-value"]);
  const route = useRoute();

  const showTestData = computed(() => {
    return route.query.testData;
  });
  const value = computed({
    get() {
      return props.modelValue;
    },
    set(modelValue) {
      emit("update:model-value", modelValue);
    }
  });
  const onInsertTestDetails = testAccountDetails => {
    value.value.cardNumber = testAccountDetails.cardNumber;
    value.value.expMonth = testAccountDetails.expMonth;
    value.value.expYear = testAccountDetails.expYear;
    value.value.cvc = testAccountDetails.cvc;
    value.value.cardHoldersName = testAccountDetails.label;
  };
</script>
