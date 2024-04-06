import { defineStore } from "pinia";

export const useUserProvidersStore = defineStore("user-providers", {
  actions: {
    async FETCH_PROVIDERS(_options = {}) {
      // const defaults = {
      //   showAll: false,
      //   search: undefined
      // };
      // const options = Object.assign({}, defaults, _options);
      // First off, if per-page is equal to total rows, we can naively return early.  The jobs will be reloaded
      // when the page is refreshed anyway.  Any further issues can be dealt with as required, such as jobs being
      // disabled.  This should very rarely happen as jobs will only ever be enabled (hopefully).
      // if (this.perPage === this.totalRows) return;
      // // Set loading state
      // this.loading = true;
      // // Get our user session
      // const { getSession } = useAuth();
      // const session = await getSession();
      // // Load our runtime config
      // const config = useRuntimeConfig();
      // // Use fetch to get our jobs
      // useFetch(`/jobs`, {
      //   // Base API URL
      //   baseURL: config.public.apiUrl,
      //   method: "GET",
      //   headers: {
      //     // Our authentication token from session
      //     Authorization: `Bearer ${session?.session?.access_token}`
      //   },
      //   lazy: true,
      //   query: {
      //     // URL Query Parameters for JPA paging
      //     page: options.showAll ? undefined : this.currentPage,
      //     perPage: options.showAll ? undefined : this.perPage,
      //     ...options
      //   }
      // })
      //   .then(res => {
      //     return new Promise(resolve => {
      //       // We must parse the result set, as a paged JPA response is always returned
      //       this.jobs = res.data.value.content;
      //       this.perPage = res.data.value.size;
      //       this.currentPage = res.data.value.number + 1;
      //       this.totalRows = res.data.value.totalElements;
      //       this.totalPages = res.data.value.totalPages;
      //       resolve();
      //     });
      //   })
      //   .catch(err => {
      //     // TODO: We need better error handling for fetch requests, such as Sentry or a similar alternative.
      //     const _err = new Error("There was an error fetching the jobs from the server.", { cause: err });
      //     // For now, just set the error into the store state and log it to the console
      //     this.error = _err;
      //     console.error(_err);
      //   })
      //   .finally(() => {
      //     // Set our loading state to false
      //     this.loading = false;
      //   });
    }
  },
  getters: {
    getDraft: state => state.draft,
    getProviders: state => state.providers
  },
  mutations: {
    clearError: state => (state.error = null),
    setDraft: (state, draft) => (state.draft = draft),
    setJobs: (state, providers) => {
      if (!Array.isArray(providers)) throw new TypeError("Jobs must be an array of objects");

      state.providers = providers;
    }
  },
  state: () => ({
    error: null,
    draft: null,
    providers: [],
    loading: false
  })
});
