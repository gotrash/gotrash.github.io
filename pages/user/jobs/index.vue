<template>
  <message-spinner v-if="loading || err">Loading</message-spinner>
  <b-container class="py-3" v-else fluid>
    <b-row>
      <b-col cols="12">
        <b-card no-body class="mb-3" footer-class="text-right">
          <b-card-header class="d-flex align-items-center pe-2 py-2">
            <div>
              {{ $t("NAV__JOBS") }}
            </div>
            <b-pagination :first-class="[totalPages === 0 || currentPage <= 1 ? 'd-none' : '']"
              :prev-class="[totalPages === 0 || currentPage <= 1 ? 'd-none' : '']"
              :last-class="[totalPages === 0 || totalPages <= currentPage ? 'd-none' : '']"
              :next-class="[totalPages === 0 || totalPages <= currentPage ? 'd-none' : '']"
              :class="['mb-0 ms-auto', { invisible: totalPages <= 1 }]" size="sm" :per-page="perPage"
              :total-rows="totalElements" v-model="currentPage" />
          </b-card-header>
          <b-card-body>
            <b-table :tbody-tr-class="() => 'pointer'" :fields="fields" :items="jobs" @row-clicked="onRowClicked" hover
              responsive show-empty>
              <template v-slot:cell(isBuilderWaste)="data">
                <fa-icon icon="check" class="fa-lg text-success" />
              </template>
              <template v-slot:cell(isBusiness)="data">
                <fa-icon icon="check" class="fa-lg text-success" />
              </template>
              <template v-slot:cell(isEasyAccess)="data">
                <fa-icon icon="check" class="fa-lg text-success" />
              </template>
              <template v-slot:cell(isRecyclable)="data">
                <fa-icon icon="check" class="fa-lg text-success" />
              </template>
              <template v-slot:cell(feedback)="data">
                <fa-icon icon="check" class="fa-lg text-success" />
              </template>
            </b-table>
          </b-card-body>
          <b-card-footer class="text-end">
            <b-button-group class="ms-auto">
              <b-button variant="outline-danger" @click="onCancel">Cancel</b-button>
              <b-button variant="outline-warning" @click="onReset">Reset</b-button>
              <b-button variant="outline-primary" @click="onCreateJob">CreateJob</b-button>
              <b-button variant="outline-primary" @click="onClearData">Clear Data</b-button>
              <b-button variant="outline-primary" @click="onGetData">Get Data</b-button>
              <b-button variant="outline-primary" @click="onRefresh">Refresh</b-button>
            </b-button-group>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>
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
const perPage = ref(20);
const totalPages = ref(0);
const totalElements = ref(0);
const currentPage = ref(1);

definePageMeta({
  layout: "user"
});

const dateFormatter = dateValue => {
  return format(new Date(dateValue), DateTimeFormats.DISPLAY_DATE)
}

const fields = [
  // { key: "id" },
  // { key: "creator" },
  // { key: "assignee" },
  { key: "summary" },
  // { key: "detailedDescription" },
  { key: "jobType" },
  { key: "feedback", label: "Has Feedback", formatter: value => !!value, tdClass: "text-center", thClass: "text-center" },
  { key: "isBuilderWaste", label: "Builder Waste", formatter: value => !!value, tdClass: "text-center", thClass: "text-center" },
  { key: "isBusiness", label: "Business", formatter: value => !!value, tdClass: "text-center", thClass: "text-center" },
  { key: "isEasyAccess", label: "Easy Access", formatter: value => !!value, tdClass: "text-center", thClass: "text-center" },
  { key: "isRecyclable", label: "Recyclable", formatter: value => !!value, tdClass: "text-center", thClass: "text-center" },
  { key: "createdAt", formatter: dateFormatter, tdClass: "text-center", thClass: "text-center" },
  { key: "updatedAt", formatter: dateFormatter, tdClass: "text-center", thClass: "text-center" },
  { key: "actions", label: "" }
]

const onCancel = () => {
  const router = useRouter()

  router.push(this.useLocalePath({ name: "user-jobs" }))
}

const onClearData = () => {
  try {
    loading.value = true;

    jobs.value = []
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
  jobs.value = [];
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
      page: currentPage.value
    }
  }).then(async (res) => {
    jobs.value = res.data.value.content;

    perPage.value = res.data.value.size;
    totalPages.value = res.data.value.totalPages;
    totalElements.value = res.data.value.totalElements;
    currentPage.value = res.data.value.number + 1;

    err.value = null;
  }).catch(err => {
    console.log("An error occurred: %o", err);
    err.value = err;
  }).finally(() => {
    loading.value = false;
  })
}
onActivated(() => {
  const route = useRoute();
  currentPage.value = route?.query?.page || 1;
});

onGetData();

watch(currentPage, (newPage, oldPage) => {
  if (oldPage !== newPage) {
    const router = useRouter();
    const route = useRoute();

    onGetData();

    router.push({ ...route, query: { page: currentPage.value > 1 ? currentPage.value : undefined } });
  }
})
</script>

