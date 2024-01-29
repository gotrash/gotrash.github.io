<template>
  <b-container class="p-3" fluid>
    <admin-page-header-row slug="ADMIN_CONTINENTS" />

    <b-row>
      <b-col cols="12">
        <b-card bodyBgVariant="white" headerBgVariant="white" footerBgVariant="white" no-body>
          <b-card-header class="align-items-center d-flex justify-content-between">
            <b-card-title class="my-1">Continents</b-card-title>
            <div v-if="totalElements > perPage" class="card-tools ms-auto">
              <b-pagination
                class="my-0"
                v-model="currentPage"
                align="right"
                :total-rows="totalElements"
                size="sm"
                :per-page="perPage"
                variant="sucess"
                last-class=""
              >
                <template #page="{ page, active }">
                  <component :is="active ? 'b' : 'i'">{{ page }}</component>
                </template>
              </b-pagination>
            </div>
          </b-card-header>
          <b-card-body class="p-0">
            <b-table :items="continents" :fields="fields"></b-table>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
  import { format } from "date-fns";
  import { DateTimeFormats, FilterOptions } from "~/constants";

  const continents = ref([]);
  const currentPage = ref(1);
  const err = ref(null);
  const loading = ref(false);
  const perPage = ref(FilterOptions.perPageOptions[0].value);
  const totalElements = ref(0);
  const totalPages = ref(0);

  definePageMeta({
    layout: "admin",
    title: "Countries"
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
    continents.value = res.data.value.content;

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

    useApi(`/continents`, {
      query: _getQuery(),
      transform: jobParser
    })
      .then(_processResponse)
      .catch(_catchError)
      .finally(_setLoading);
  };

  let pageWatcher = null,
    routeWatcher = null;

  const _setupPageWatcher = () => {
    const route = useRoute();

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
  };

  const _setupRouteWatcher = () => {
    const route = useRoute();

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
  };

  onActivated(() => {
    const route = useRoute();
    currentPage.value = parseInt(parseFloat(route?.query?.page || 1));

    _onGetData();

    _setupPageWatcher();

    _setupRouteWatcher();
  });

  onBeforeRouteLeave((to, from) => {
    // Stop watching the current page for a value change
    if (pageWatcher) pageWatcher();

    // Stop watching the route (browser URL) for updates
    if (routeWatcher) routeWatcher();

    return true;
  });
</script>

<script>
  export default {
    data() {
      const $t = this.$t.bind(this);
      const getLabel = key => $t(`CONTINENTS.LABEL.${key}`);

      return {
        fields: [
          {
            key: "continentCode",
            label: getLabel("CONTINENT_CODE")
          },
          {
            key: "continentName",
            label: getLabel("CONTINENT_NAME")
          }
        ]
      };
    }
  };
</script>
