<template>
  <b-form>
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
              <b-form-input v-model="value.expMonth" :id="`expiry-year-input-${_.uid}`" />
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
      <b-col cols="12" sm="4">
        <b-form-group label="CVV" :label-for="`cvv-input-${_.uid}`">
          <b-form-input v-number-only :id="`cvv-input-${_.uid}`" v-model="value.cvv" />
        </b-form-group>
      </b-col>
    </b-row>
    <pre-code v-if="showDebug" v-model="value" />
  </b-form>
</template>

<script setup>
const props = defineProps(["modelValue", "showDebug"]);
const emit = defineEmits(["onSubmit", "update:modelValue"]);
const value = computed({
  get() {
    return props.modelValue;
  },
  set(modelValue) {
    emit("update:modelValue", modelValue)
  }
})
const onSubmit = (evt) => {
  emit("onSubmit", evt);
}

const vNumberOnly = {
  mounted: (el) => {
    console.log(el)
  },
  updated: (el) => {
    function checkValue(event) {
      console.log("Checking Value: %o", event)
      event.target.value = event.target.value.replace(/[^0-9]/g, '')
      if (event.charCode >= 48 && event.charCode <= 57) {
        return true
      }
      event.preventDefault()
    }
    el.addEventListener('keypress', checkValue)
  }
}
</script>

<script>
export default {
  directives: {
    'number-only': {
      bind(el) {

      }
    },
    'letter-only': {
      bind(el) {
        function checkValue(event) {
          if (event.charCode >= 48 && event.charCode <= 57) {
            event.preventDefault()
          }
          return true
        }
        el.addEventListener('keypress', checkValue)
      }
    }
  }
}
</script>
