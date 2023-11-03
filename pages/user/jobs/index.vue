<template>
  <b-container class="p-3" fluid>
    <b-row>
      <b-col cols="12" class="text-center mb-4">
        <page-title>{{ $t("PAGE_TITLE__USER_JOBS") }}</page-title>
        <page-summary>{{ $t("PAGE_SUMMARY__USER_JOBS") }}</page-summary>
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
          {{ $t("JOBS.MESSAGE.LOADING") }}
        </message-spinner>
        <error-alert v-else-if="err" :error="err" />
      </b-col>
    </b-row>
    <template v-else>
      <b-row v-for="job in jobs" :key="`job-row-${job.id}`" class="mb-3">
        <b-col cols="12">
          <b-container class="border border-2 bg-white py-2" fluid>
            <b-row>
              <b-col cols="12">
                <div class="d-flex w-100">
                  <div>
                    <div>ID: {{ job.id }}</div>
                    <div>Job Type: {{ job.jobType || 'Unknown' }}</div>
                    <div>Feedback: {{ job.feedback || 'None Left' }}</div>
                    <div>Load Size: {{ $t(`LOAD_SIZES.LABEL.${job.loadSize}`) }}</div>
                    <div>Summary: {{ job.summary }}</div>
                    <div>Detailed Description: {{ job.detailedDescription }}</div>
                    <div>Bids: {{ (job.bids || []).length }}</div>
                  </div>
                  <div>
                    <div>
                      Builder Waste <fa-icon :icon="job.isBuilderWaste ? 'check' : 'times'"
                        :class="['fa-lg', job.isBuilderWaste ? 'text-success' : 'text-danger']" />
                    </div>
                    <div>
                      Business <fa-icon :icon="job.isBusiness ? 'check' : 'times'"
                        :class="['fa-lg', job.isBusiness ? 'text-success' : 'text-danger']" />
                    </div>
                    <div>
                      Easy Access <fa-icon :icon="job.isEasyAccess ? 'check' : 'times'"
                        :class="['fa-lg', job.isEasyAccess ? 'text-success' : 'text-danger']" />
                    </div>
                    <div>
                      Recyclable <fa-icon :icon="job.isRecyclable ? 'check' : 'times'"
                        :class="['fa-lg', job.isRecyclable ? 'text-success' : 'text-danger']" />
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" sm="6">Start Date Required: <small>{{ job.startDateRequired || 'No Start Date Provided'
              }}</small></b-col>
              <b-col cols="12" sm="6">End Date Required: <small>{{ job.endDateRequired || 'No End Date Provided'
              }}</small></b-col>
            </b-row>
            <b-row class="pt-4">
              <b-col cols="12" sm="6">
                <div>Created At: <small>{{ job.createdAt || 'Not Created' }}</small></div>
                <div>Updated At: <small>{{ job.updatedAt || 'Not Updated' }}</small></div>
                <div>Last Accessed At: <small>{{ job.lastAccessedAt || 'Unknown' }}</small></div>
              </b-col>
              <b-col cols="12" sm="6">
                <div>Published At: <small>{{ job.publishedAt || 'Not Published' }}</small></div>
                <div>Completed At: <small>{{ job.completedAt || 'Incomplete' }}</small></div>
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
const jobs = ref([]);
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

const onCreateJob = () => {
  console.log("Creating Job")
}

const onRowClicked = row => {
  const router = useRouter();
  const localePath = useLocalePath();

  router.push(localePath({ name: "user-jobs-slug", params: { slug: row.id } }))
}

const onGetData = async () => {
  loading.value = true;
  const { getSession } = useAuth();
  const session = await getSession();

  useFetch(`/user/jobs`, {
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
        content: data.content?.map(job => {
          return {
            ...job,
            updatedAt: format(new Date(job.updatedAt), DateTimeFormats.DISPLAY_DATE)
          }
        })
      }
    }
  }).then(async (res) => {
    jobs.value = res.data.value.content;

    perPage.value = res.data.value.size;
    totalPages.value = res.data.value.totalPages;
    totalElements.value = res.data.value.totalElements;
    currentPage.value = res.data.value.number + 1;

    err.value = null;

    // throw new Error("Test Error")
  }).catch(_err => {
    console.error(_err)
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

<script>
import { v4 } from "uuid";
export default {
  key: v4()
}
</script>
