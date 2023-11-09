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
        <b-pagination
          align="end"
          :first-class="[totalPages === 0 || currentPage <= 1 ? 'd-none' : '']"
          :prev-class="[totalPages === 0 || currentPage <= 1 ? 'd-none' : '']"
          :last-class="[totalPages === 0 || totalPages <= currentPage ? 'd-none' : '']"
          :next-class="[totalPages === 0 || totalPages <= currentPage ? 'd-none' : '']"
          :class="['mb-0 ms-auto', { invisible: totalPages <= 1 }]"
          size="sm"
          :per-page="perPage"
          :total-rows="totalElements"
          v-model="currentPage"
        />
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
                    <div>Job Type: {{ job.jobType || "Unknown" }}</div>
                    <div>Feedback: {{ job.feedback || "None Left" }}</div>
                    <div>Load Size: {{ $t(`LOAD_SIZES.LABEL.${job.loadSize}`) }}</div>
                    <div>Summary: {{ job.summary }}</div>
                    <div>Detailed Description: {{ job.detailedDescription }}</div>
                    <div>Bids: {{ (job.bids || []).length }}</div>
                  </div>
                  <div>
                    <div>
                      Builder Waste
                      <fa-icon
                        :icon="job.isBuilderWaste ? 'check' : 'times'"
                        :class="['fa-lg', job.isBuilderWaste ? 'text-success' : 'text-danger']"
                      />
                    </div>
                    <div>
                      Business
                      <fa-icon
                        :icon="job.isBusiness ? 'check' : 'times'"
                        :class="['fa-lg', job.isBusiness ? 'text-success' : 'text-danger']"
                      />
                    </div>
                    <div>
                      Easy Access
                      <fa-icon
                        :icon="job.isEasyAccess ? 'check' : 'times'"
                        :class="['fa-lg', job.isEasyAccess ? 'text-success' : 'text-danger']"
                      />
                    </div>
                    <div>
                      Recyclable
                      <fa-icon
                        :icon="job.isRecyclable ? 'check' : 'times'"
                        :class="['fa-lg', job.isRecyclable ? 'text-success' : 'text-danger']"
                      />
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" sm="6"
                >Start Date Required: <small>{{ job.startDateRequired || "No Start Date Provided" }}</small></b-col
              >
              <b-col cols="12" sm="6"
                >End Date Required: <small>{{ job.endDateRequired || "No End Date Provided" }}</small></b-col
              >
            </b-row>
            <b-row class="pt-4">
              <b-col cols="12" sm="6">
                <div>
                  Created At: <small>{{ job.createdAt || "Not Created" }}</small>
                </div>
                <div>
                  Updated At: <small>{{ job.updatedAt || "Not Updated" }}</small>
                </div>
                <div>
                  Last Accessed At: <small>{{ job.lastAccessedAt || "Unknown" }}</small>
                </div>
              </b-col>
              <b-col cols="12" sm="6">
                <div>
                  Published At: <small>{{ job.publishedAt || "Not Published" }}</small>
                </div>
                <div>
                  Completed At: <small>{{ job.completedAt || "Incomplete" }}</small>
                </div>
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

  const err = ref(null);
  const jobs = ref([]);
  const loading = ref(false);
  const perPage = ref(15);
  const totalPages = ref(0);
  const totalElements = ref(0);
  const currentPage = ref(1);

  definePageMeta({
    layout: "user",
    title: "User Jobs"
  });

  const _getQuery = () => {
    return {
      page: currentPage.value,
      perPage: perPage.value
    };
  };

  const _catchError = _err => {
    console.error(_err);
    err.value = _err;
  };

  const _processResponse = async res => {
    jobs.value = res.data.value.content;

    perPage.value = parseInt(parseFloat(res.data.value.size || 1));
    totalPages.value = parseInt(parseFloat(res.data.value.totalPages || 1));
    totalElements.value = parseInt(parseFloat(res.data.value.totalElements || 1));

    err.value = null;
  };

  const _setLoading = (value = false) => {
    loading.value = value;
  };

  const jobParser = data => {
    return {
      ...data,
      content: data.content?.map(job => {
        return {
          ...job,
          updatedAt: format(new Date(job.updatedAt), DateTimeFormats.DISPLAY_DATE)
        };
      })
    };
  };

  const _onGetData = async () => {
    _setLoading(true);

    useApi(`/user/jobs`, {
      query: _getQuery(),
      transform: jobParser
    })
      .then(_processResponse)
      .catch(_catchError)
      .finally(_setLoading);
  };

  let pageWatcher = null,
    routeWatcher = null;

  onActivated(() => {
    const route = useRoute();
    currentPage.value = parseInt(parseFloat(route?.query?.page || 1));

    _onGetData();

    // Setup a watcher to monitor the current page value.  If the value updates, we should update the URL and fetch the
    // the data from the API.
    pageWatcher = watch(currentPage, (newPage, oldPage) => {
      // We only need this to work if the current page value has actually updated. Early return here if the value hasn't
      // updated.
      if (oldPage === newPage) return;

      const router = useRouter();

      _onGetData();

      router.push({ ...route, query: { page: currentPage.value > 1 ? currentPage.value : undefined } });
    });

    routeWatcher = watch(
      () => route.query,
      value => {
        const page = parseInt(parseFloat(value?.page || 1));

        if (page !== currentPage.value) {
          currentPage.value = page;
          _onGetData();
        }
      },
      { deep: true, immediate: false }
    );
  });

  onBeforeRouteLeave(() => {
    // Stop watching the current page for a value change
    pageWatcher?.stop();

    // Stop watching the route (browser URL) for updates
    routeWatcher?.stop();
  });
</script>
