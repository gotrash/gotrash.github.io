<template>
  <b-container class="p-3">
    <b-row>
      <b-col cols="12" class="text-center mb-4">
        <page-title>{{ $t("PAGE_TITLE__USER_PAYMENT_METHODS") }}</page-title>
        <page-summary>{{ $t("PAGE_SUMMARY__USER_PAYMENT_METHODS") }}</page-summary>
      </b-col>
    </b-row>
    <b-row v-if="paymentMethods && paymentMethods.length > 0">
      <b-col cols="12">
        <div class="mb-3 d-flex justify-content-end bg-white p-2 rounded border">
          <b-button-group class="ms-auto">
            <b-button @click="onAddPaymentMethod" variant="success" class="text-white">{{
              $t("PAYMENT_METHODS.LABEL.ADD_NEW_CARD_DETAILS") }}</b-button>
          </b-button-group>
        </div>
      </b-col>
    </b-row>
    <b-row v-if="loading || saving || deleting || err">
      <b-col cols="12">
        <message-spinner v-if="loading || saving || deleting">
          {{ $t(`PAYMENT_METHODS.MESSAGE.${saving ? 'SAVING_PAYMENT_METHOD' : deleting ? 'DELETING_PAYMENT_METHOD' :
            'LOADING'}`) }}
        </message-spinner>
        <error-alert v-else-if="err" :error="err" />
      </b-col>
    </b-row>
    <template v-else>
      <b-row>
        <b-col v-if="!paymentMethods || paymentMethods.length <= 0" cols="12">
          <div class="d-flex align-items-center justify-content-around w-100" style="min-height: 400px">
            <div class="text-center" style="line-height: 1.6; max-width: 600px">
              <div class="fs-5 mb-4">
                You don't have any payment methods. At least one payment method is required before a bid can be accepted
                on
                any jobs.
              </div>
              <b-button-group class="mx-auto">
                <b-button @click="onAddPaymentMethod" variant="success" class="text-white" size="sm">
                  <fa-icon icon="pen" class="fa-lg me-1" />
                  {{ $t("PAYMENT_METHODS.LABEL.ADD_CARD_DETAILS") }}
                </b-button>
              </b-button-group>
            </div>
          </div>
        </b-col>
        <template v-else>
          <b-col cols="12" lg="6" xl="4" class="mb-2" v-for="paymentMethod in paymentMethods"
            :key="`payment-method-column-${paymentMethod.id}`">
            <payment-method-ui class="rounded border bg-white p-3 pt-4" :payment-method="paymentMethod"
              @delete="onDelete" />
          </b-col>
        </template>
      </b-row>
    </template>
    <add-edit-credit-card-modal ref="addEditCreditCardModal" />
  </b-container>
</template>

<script setup>
import { v4 } from "uuid"
import AddEditCreditCardModal from "~/components/modals/AddEditCreditCardModal.vue"
import PaymentMethodUi from "~/components/PaymentMethodUI";

const addEditCreditCardModal = ref(null);
const config = useRuntimeConfig();
const adding = ref(false);
const deleting = ref(false);
const err = ref(null);
const paymentMethods = ref([]);
const loading = ref(true);
const saving = ref(false);

definePageMeta({
  layout: "user"
});

const onAddPaymentMethod = () => {
  addEditCreditCardModal.value.show()
  adding.value = true
}

const onDelete = paymentMethodId => {
  deleting.value = true;

  const { getSession } = useAuth();

  getSession().then(session => {
    useApi(`/user/payment-methods`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${session?.session?.access_token}`
      },
      body: { paymentMethodId }
    }).then(async (res) => {
      paymentMethods.value = res.data.value;

      err.value = null;
    }).catch(_err => {
      console.error(_err)
      err.value = _err;
    }).finally(() => {
      deleting.value = false;

      onGetData();
    })
  })
}

const onGetData = async () => {
  loading.value = true;
  const { getSession } = useAuth();
  const session = await getSession();

  useFetch(`/user/payment-methods`, {
    key: v4(),
    baseURL: config.public.apiUrl,
    lazy: true,
    server: false,
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.session?.access_token}`
    },
  }).then(async (res) => {
    console.log("Page Res: %o", res)
    paymentMethods.value = res.data.value;

    err.value = null;
  }).catch(_err => {
    console.error(_err)
    err.value = _err;
  }).finally(() => {
    loading.value = false;
  })
}

onActivated(() => {
  onGetData();
});
</script>
