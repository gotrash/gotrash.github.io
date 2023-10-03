<template>
  <b-container class="p-3" fluid>
    <b-row>
      <b-col cols="12" class="text-center mb-4">
        <page-title>{{ $t("PAGE_TITLE__USER_FEEDBACKS") }}</page-title>
        <page-summary>{{ $t("PAGE_SUMMARY__USER_FEEDBACKS") }}</page-summary>
      </b-col>
    </b-row>
    <b-row v-if="!loading && !err && totalPages > 1">
      <b-col cols="12" class="mb-3">
        <b-pagination align="end" :first-class="[totalPages === 0 || currentPage <= 1 ? 'd-none' : '']"
          :prev-class="[totalPages === 0 || currentPage <= 1 ? 'd-none' : '']"
          :last-class="[totalPages === 0 || totalPages <= currentPage ? 'd-none' : '']"
          :next-class="[totalPages === 0 || totalPages <= currentPage ? 'd-none' : '']"
          :class="['mb-0 ms-auto', { invisible: totalPages <= 1 }]" size="sm" :per-page="perPage"
          :total-rows="totalElements" v-model="currentPage" />
      </b-col>
    </b-row>
    <b-row v-if="loading || err">
      <b-col cols="12">
        <message-spinner v-if="loading">
          {{ $t("FEEDBACK.MESSAGE.LOADING") }}
        </message-spinner>
        <error-alert v-else-if="err" :error="err" />
      </b-col>
    </b-row>
    <div v-else-if="feedbacks.length <= 0">
      No Feedback</div>
    <template v-else>
      <b-row v-for="feedback in feedbacks" :key="`user-job-feedback-row-${feedback.id}`" class="mb-3">
        <b-col cols="12">
          <b-container class="border border-2 bg-white py-2" fluid>
            <b-row>
              <b-col cols="12">
                <div class="d-flex w-100">
                  <div>
                    <div>ID: {{ feedback.id }}</div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row class="pt-4">
              <b-col cols="12">
                <div>Created At: <small>{{ feedback.createdAt || 'Not Created' }}</small></div>
                <div>Updated At: <small>{{ feedback.updatedAt || 'Not Updated' }}</small></div>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>

    </template>
  </b-container>
</template>

<script setup>
import MessageSpinner from "~/global/components/MessageSpinner";
import { format } from "date-fns";
import { DateTimeFormats } from "~/constants";

const config = useRuntimeConfig();

const err = ref(null);
const feedbacks = ref([]);
const loading = ref(false);
const perPage = ref(15);
const totalPages = ref(0);
const totalElements = ref(0);
const currentPage = ref(1);

definePageMeta({
  layout: "user"
});

const dateFormatter = dateValue => {
  return format(new Date(dateValue), DateTimeFormats.DISPLAY_DATE)
}

const fields = []

const onCancel = () => {
  const router = useRouter()

  router.push(this.useLocalePath({ name: "user-feedback" }))
}

const onClearData = () => {
  try {
    loading.value = true;

    feedbacks.value = []
  } finally {
    loading.value = false
  }
}

const onCreateJob = () => {
  console.log("Creating Job")
}

const onRefresh = evt => {
  console.log(evt)
}

const onReset = () => {
  feedbacks.value = [];
}

const onRowClicked = row => {
  const router = useRouter();
  const localePath = useLocalePath();

  router.push(localePath({ name: "user-feedback-slug", params: { slug: row.id } }))
}

const onGetData = async () => {
  loading.value = true;
  const { getSession } = useAuth();
  const session = await getSession();

  useFetch(`/user/feedback`, {
    baseURL: config.public.apiUrl,
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.session?.access_token}`
    },
    lazy: true,
    server: false,
    query: {
      page: currentPage.value,
      perPage: perPage.value
    },
    transform: (data) => {
      return {
        ...data,
        // content: data.content?.map(job => {
        //   return {
        //     ...job,
        //     updatedAt: format(new Date(job.updatedAt), DateTimeFormats.DISPLAY_DATE)
        //   }
        // })
      }
    }
  }).then(async (res) => {
    feedbacks.value = res.data.value.content;

    perPage.value = res.data.value.size;
    totalPages.value = res.data.value.totalPages;
    totalElements.value = res.data.value.totalElements;
    currentPage.value = res.data.value.number + 1;

    err.value = null;

    // throw new Error("Test Error")
  }).catch(_err => {
    console.error(_err);
    err.value = _err;
  }).finally(() => {
    loading.value = false;
  })
}
onActivated(() => {
  const route = useRoute();
  currentPage.value = route?.query?.page || 1;

  onGetData();
});


watch(currentPage, (newPage, oldPage) => {
  if (oldPage !== newPage) {
    const router = useRouter();
    const route = useRoute();

    onGetData();

    router.push({ ...route, query: { page: currentPage.value > 1 ? currentPage.value : undefined } });
  }
})
</script>
