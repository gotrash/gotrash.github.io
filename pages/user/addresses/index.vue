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
    <b-row v-if="data.content && data.content.length > 0">
      <b-col cols="12">
        <div class="mb-3 d-flex align-items-center justify-content-end bg-white p-2 rounded border">
          <b-pagination :disabled="pending" :first-class="[totalPages === 0 || currentPage <= 1 ? 'd-none' : '']"
            :prev-class="[totalPages === 0 || currentPage <= 1 ? 'd-none' : '']"
            :last-class="[totalPages === 0 || totalPages <= currentPage ? 'd-none' : '']"
            :next-class="[totalPages === 0 || totalPages <= currentPage ? 'd-none' : '']"
            :class="['mb-0 ms-auto me-2', { invisible: totalPages <= 1 }]" size="sm" :per-page="perPage"
            :total-rows="totalElements" v-model="currentPage" />
          <b-button-group>
            <b-button @click="onAddAddress" variant="success" class="text-white">
              {{ $t("USER_ADDRESSES.LABEL.ADD_NEW_ADDRESS") }}
            </b-button>
          </b-button-group>
        </div>
      </b-col>
    </b-row>
    <!-- If we have an error or we're loading data, show an alert to the user -->
    <b-row v-if="error || pending">
      <b-col cols="12">
        <message-spinner v-if="pending">
          {{ $t(`USER_ADDRESSES.MESSAGE.LOADING_ADDRESSES`) }}
        </message-spinner>
        <error-alert v-else-if="error" :error="error" />
      </b-col>
    </b-row>
    <!-- Main Content -->
    <template v-else>
      <b-row>
        <!-- If we don't have any addresses, show the alternative UI -->
        <b-col v-if="!data.content || data.content.length <= 0" cols="12">
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
          <b-col cols="12" md="6" lg="4" xl="3" class="mb-2" v-for="address in data.content"
            :key="`payment-method-column-${address.id}`">
            <user-address-card @deleted="onAddressDeleted" :address="address" />
          </b-col>
        </template>
      </b-row>
    </template>
  </b-container>
</template>

<script setup>
// Component imports
import UserAddressCard from '~/components/cards/UserAddressCard';

// Using define page meta, we specify our page options such as layout, keep alive, etc.
definePageMeta({
  layout: "user",
  keepalive: false,
});

// Reactive data refs
const
  currentPage = ref(1),
  totalElements = ref(0),
  totalPages = ref(0),
  perPage = ref(20);

// Page functions
const onAddAddress = () => { }
const onAddressDeleted = () => { }
const onDeleteAddress = () => { }

const { getSession } = useAuth();

const config = useRuntimeConfig();
const session = await getSession();

const { data, pending, error } = await useFetch(
  '/user/addresses', {
  baseURL: config.public.apiUrl,
  headers: {
    Authorization: `Bearer ${session?.session?.access_token}`
  },
  lazy: true,
  immediate: true,
  server: false,
  default: () => {
    return {
      content: [],
      size: 0,
      number: 0,
      totalElements: 0,
      totalPages: 0
    }
  },
  pick: ["content"],
  query: {
    page: currentPage,
    perPage: perPage
  },
  onResponse: res => {
    totalElements.value = res.response._data.totalElements
    totalPages.value = res.response._data.totalPages
  }
})

onActivated(() => {
  currentPage.value = 1;
})

onDeactivated(() => {
  totalElements.value = 0;
  totalPages.value = 0
})

watch(currentPage, () => {
  try {
    const route = useRoute()
    const queryPage = route.query.page;

    if (currentPage.value && (queryPage === undefined || (!isNaN(queryPage) && queryPage !== currentPage.value))) {
      const router = useRouter();
      router.push({ ...route, query: { ...route.query, page: currentPage.value > 1 ? currentPage.value : undefined } })
    }
  } catch (_err) {
    console.error(_err);
  }
})

const route = useRoute();

watch(
  // Watcher getter must be a reactive value or a getter function. As `route` is not reactive a proper reactive value,
  // we can use a getter function to make it so.
  () => route.query.page,
  // Handler function needs to update current page value based off URL query parameter `page`
  (page) => {
    const _queryPage = parseInt(parseFloat(page || 1));

    if (_queryPage !== currentPage.value) {
      currentPage.value = _queryPage;
    }
  },
  // Watcher options
  {
    deep: false,
    immediate: true
  }
)
</script>
