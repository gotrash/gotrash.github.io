<template>
  <component class="mb-3" @delete="onDelete" :is="component" :payment-method="paymentMethod" />
</template>

<script setup>
  import PaymentMethodCardUI from "~/components/payment-methods/PaymentMethodCardUI.vue";
  import PaymentMethodUnknownUI from "~/components/payment-methods/PaymentMethodUnknownUI.vue";

  const emit = defineEmits(["delete"]);

  const onDelete = paymentMethodId => {
    emit("delete", paymentMethodId);
  };

  const props = defineProps({
    paymentMethod: {
      type: Object,
      validator(paymentMethod) {
        const keys = Object.keys(paymentMethod);
        return keys.includes("billingDetails");
      }
    }
  });

  const component = computed(() => {
    switch (props.paymentMethod.type) {
      case "card":
        return PaymentMethodCardUI;

      default:
        return PaymentMethodUnknownUI;
    }
  });
</script>
