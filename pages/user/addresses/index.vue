<template>
  <b-container class="p-3">
    <!-- Page Title Area -->
    <b-row>
      <b-col cols="12" class="text-center mb-4">
        <page-title>{{ $t("PAGE_TITLE__USER_ADDRESSES") }}</page-title>
        <page-summary>{{ $t("PAGE_SUMMARY__USER_ADDRESSES") }}</page-summary>
      </b-col>
    </b-row>
    <!-- Show the bar and button if we have addresses -->
    <b-row v-if="addresses && addresses.length > 0">
      <b-col cols="12">
        <div class="mb-3 d-flex justify-content-end bg-white p-2 rounded border">
          <b-button-group class="ms-auto">
            <b-button @click="onAddAddress" variant="success" class="text-white">
              {{ $t("USER_ADDRESSES.LABEL.ADD_NEW_ADDRESS") }}
            </b-button>
          </b-button-group>
        </div>
      </b-col>
    </b-row>
    <!-- If we have an error or we're loading, saving or deleting, show an alert to the user -->
    <b-row v-if="loading || saving || deleting || err">
      <b-col cols="12">
        <message-spinner v-if="loading || saving || deleting">
          {{ $t(`USER_ADDRESSES.MESSAGE.${saving ? 'SAVING_ADDRESS' : deleting ? 'DELETING_ADDRESS' :
            'LOADING_ADDRESSES'}`) }}
        </message-spinner>
        <error-alert v-else-if="err" :error="err" />
      </b-col>
    </b-row>
    <!-- Main Content -->
    <template v-else>
      <b-row>
        <!-- If we don't have any addresses, show the alternative UI -->
        <b-col v-if="!addresses || addresses.length <= 0" cols="12">
          <div class="d-flex align-items-center justify-content-around w-100" style="min-height: 400px">
            <div class="text-center" style="line-height: 1.6; max-width: 600px">
              <div class="fs-5 mb-4">
                You don't have any addresses. At least one address is required before a job can be added to GoTrash.
              </div>
              <b-button-group class="mx-auto">
                <b-button @click="onAddAddress" variant="success" class="text-white" size="sm">
                  <fa-icon icon="pen" class="fa-lg me-1" />
                  {{ $t("USER_ADDRESSES.LABEL.ADD_NEW_ADDRESS") }}
                </b-button>
              </b-button-group>
            </div>
          </div>
        </b-col>
        <template v-else>
          <!-- If we have addresses, loop over them and show a user address card for each -->
          <b-col cols="12" lg="6" xl="4" class="mb-2" v-for="address in addresses"
            :key="`payment-method-column-${address.id}`">
            <user-address-card :address="address" />
          </b-col>
        </template>
      </b-row>
    </template>
    <add-edit-credit-card-modal ref="addEditCreditCardModal" />
  </b-container>
</template>

<script setup>
import { v4 } from "uuid"
import AddEditCreditCardModal from "~/components/modals/AddEditCreditCardModal"
import UserAddressCard from "~/components/cards/UserAddressesCard"

const config = useRuntimeConfig();
const adding = ref(false);
const deleting = ref(false);
const err = ref(null);
const addresses = ref([]);
const loading = ref(true);
const saving = ref(false);
const perPage = ref(20);
const totalPages = ref(0);
const totalRows = ref(0);
const currentPage = ref(1)

definePageMeta({
  layout: "user"
});

const onAddAddress = () => {
  // addEditCreditCardModal.value.show()
  adding.value = true
}

const onDelete = paymentMethodId => {
  deleting.value = true;

  const { getSession } = useAuth();

  getSession().then(session => {
    useApi(`/user/addresses`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${session?.session?.access_token}`
      },
      body: { paymentMethodId }
    }).then(async (res) => {
      addresses.value = res.data.value.content;
      perPage.value = res.data.value.size;
      currentPage.value = res.data.value.number + 1;
      totalRows.value = res.data.value.totalElements;
      totalPages.value = res.data.value.totalPages;

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

  useFetch(`/user/addresses`, {
    key: v4(),
    baseURL: config.public.apiUrl,
    lazy: true,
    server: false,
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.session?.access_token}`
    },
    query: {
      page: currentPage.value
    },
  }).then(async (res) => {
    console.log(res)
    addresses.value = res.data.value.content;
    perPage.value = res.data.value.size;
    currentPage.value = res.data.value.number + 1;
    totalRows.value = res.data.value.totalElements;
    totalPages.value = res.data.value.totalPages;

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
