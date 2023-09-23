<template>
  <b-container class="rounded border bg-light p-3 pt-4" fluid>
    <b-row class="align-items-end">
      <b-col cols="12" md="6" class="text-center text-md-start">
        <svg width="144" height="48" viewBox="0 0 72 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          class="logo mx-auto mb-3 mb-md-3">

          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M52.3973 1.01093L51.5588 5.99054C49.0448 4.56717 43.3231 4.23041 43.3231 6.85138C43.3231 7.89285 44.6177 8.60913 46.178 9.47241C48.5444 10.7817 51.5221 12.4291 51.5221 16.062C51.5221 21.8665 45.4731 24 41.4645 24C37.4558 24 34.8325 22.6901 34.8325 22.6901L35.7065 17.4848C38.1115 19.4688 45.4001 20.032 45.4001 16.8863C45.4001 15.5645 43.9656 14.785 42.3019 13.8811C40.0061 12.6336 37.2742 11.1491 37.2742 7.67563C37.2742 1.30988 44.1978 0 47.1132 0C49.8102 0 52.3973 1.01093 52.3973 1.01093ZM66.6055 23.6006H72L67.2966 0.414276H62.5732C60.3923 0.414276 59.8612 2.14215 59.8612 2.14215L51.0996 23.6006H57.2234L58.4481 20.1566H65.9167L66.6055 23.6006ZM60.1406 15.399L63.2275 6.72235L64.9642 15.399H60.1406ZM14.7942 16.3622L20.3951 0.414917H26.7181L17.371 23.6012H11.2498L6.14551 3.45825C2.83215 1.41281 0 0.807495 0 0.807495L0.108643 0.414917H9.36816C11.9161 0.414917 12.1552 2.50314 12.1552 2.50314L14.1313 12.9281L14.132 12.9294L14.7942 16.3622ZM25.3376 23.6006H31.2126L34.8851 0.414917H29.0095L25.3376 23.6006Z"
            fill="black" />
        </svg>
      </b-col>
      <b-col cols="12" md="6">
        <b-form class="mb-3" @submit.stop.prevent="onUpdateDescription">
          <b-form-group class="text-center text-md-end">
            <div v-if="saving" class="text-center text-md-end mb-2">
              <fa-icon icon="spinner" class="fa-spin fa-lg" />
            </div>
            <b-form-input ref="field" v-else-if="editing" @blur="onFieldBlur" v-model:model-value="description"
              placeholder="Please type your description..."
              :class="[!editing ? 'bg-transparent border-0' : 'bg-white', 'text-center']" />
            <small @click="onFieldClick" :style="{ 'word-wrap': description.value ? 'break-word' : 'normal' }" v-else>
              {{ description || "Click to add a description" }}
            </small>
          </b-form-group>
          <input type="submit" hidden />
        </b-form>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" sm="6">
        <dl class="text-center text-sm-start">
          <dt>Last 4</dt>
          <dd>{{ paymentMethod.card.last4 }}</dd>
          <dt>Expiry Date</dt>
          <dd>{{ paymentMethod.card.expMonth }}/{{ paymentMethod.card.expYear }}</dd>
          <dt class="mb-3 mb-sm-0">Checks Passed</dt>
          <dd>
            <fa-icon :icon="paymentMethod.card.checks.addressLine1Check ? 'check' : 'times'"
              :class="['fa-lg fa-fw ms-auto me-auto me-sm-2 me-md-3 d-block d-sm-inline', paymentMethod.card.checks.addressLine1Check ? 'text-success' : 'text-danger']" />
            <strong class=" mb-1 d-block text-center text-sm-start d-sm-inline">Address Line One</strong>
            <br class="d-none d-sm-block" />
            <fa-icon :icon="paymentMethod.card.checks.addressPostcalCodeCheck ? 'check' : 'times'"
              :class="['fa-lg fa-fw ms-auto me-auto me-sm-2 me-md-3 d-block d-sm-inline', paymentMethod.card.checks.addressPostalCodeCheck ? 'text-success' : 'text-danger']" />
            <strong class=" mb-1 d-block text-center text-sm-start d-sm-inline">Postcode</strong>
            <br class="d-none d-sm-block" />
            <fa-icon :icon="paymentMethod.card.checks.cvcCheck ? 'check' : 'times'"
              :class="['fa-lg fa-fw ms-auto me-auto me-sm-2 me-md-3 d-block d-sm-inline', paymentMethod.card.checks.cvcCheck ? 'text-success' : 'text-danger']" />
            <strong class="d-block text-center text-sm-start d-sm-inline">CVC</strong>
          </dd>
        </dl>
      </b-col>
      <b-col cols="12" sm="6">
        <dl class="text-center text-sm-end">
          <dt>Name on Card</dt>
          <dd>{{ paymentMethod.billingDetails.name }}</dd>
          <dt>Billing Address</dt>
          <dd>
            <address v-html="addressFormatter(paymentMethod.billingDetails.address)">
            </address>
          </dd>
          <dt></dt>
          <dd>
            <b-button-group>
              <b-button @click="() => onDelete(paymentMethod.id)" class="text-danger">

                <fa-icon icon="trash" class="fa-lg text-danger" />
              </b-button>
            </b-button-group>
          </dd>
        </dl>
      </b-col>
    </b-row>
    <pre-code>
      {{ paymentMethod }}</pre-code>
  </b-container>
</template>

<script setup>
import { nextTick } from 'vue';
const description = ref("");
const editing = ref(false);
const saving = ref(false);
const field = ref(null)

const emit = defineEmits(["delete"])

const onDelete = paymentMethodId => {
  console.log("One: %o", paymentMethodId)
  emit("delete", paymentMethodId);
}

const onUpdateDescription = () => {
  console.log("Desc", description.value);
  saving.value = true;
  editing.value = false

  setTimeout(() => {
    saving.value = false
  }, 1500)
}

const onFieldBlur = () => {
  onUpdateDescription();
}
const onFieldClick = () => {

  console.log("Desc", description.value);
  editing.value = true

  nextTick(() => {
    field.value.focus();
  })

}
const addressFormatter = (address = {}) => {
  const keys = ["line1", "line2", "city", "state", "postalCode"];
  const addressParts = keys.map(key => address[key]);
  const filtered = addressParts.filter(part => part !== null && part !== undefined && part.length > 0);

  return filtered.join(",<br />") + ".";
}
const props = defineProps({
  paymentMethod: {
    type: Object,
    validator(paymentMethod) {
      const keys = Object.keys(paymentMethod);
      return keys.includes("billingDetails")
    }
  }
})
description.value = props.paymentMethod?.metadata?.label || ""

onActivated(() => {
  console.log("Label: %s", props.paymentMethod?.metadata?.label);
  console.log("Description Value: %s", props.paymentMethod?.metadata?.label)
});
</script>
