<script>
  import PageUtils from "./PageUtils";

  export default {
    mixins: [PageUtils],
    layout: "admin",
    data() {
      return {
        fields: [{ key: "id", label: "ID", sortable: true }],
        perPage: 20,
        currentPage: 1,
        filter: null,
        search: null,
        sortBy: null,
        sortDesc: false,
        totalRows: 0
      };
    },
    computed: {
      pageTitle() {
        if (this.$options.pageTitleTranslation) return this.$t(this.$options.pageTitleTranslation);

        return null;
      },
      sortByOptions() {
        const sortByOptions = [
          { text: `${this.$t("GENERAL.LABEL.FORM_NONE")}`, value: null },
          ...(this.sortableFields || []).map(field => {
            return {
              text: field.label,
              value: field.key
            };
          })
        ];
        return sortByOptions;
      },
      sortableFields() {
        return (this.fields || [])
          .filter(f => f.sortable)
          .sort((a, b) => (a.label === b.label ? 0 : a.label < b.label ? -1 : 1));
      }
    },
    watch: {
      perPage: {
        handler(newValue, oldValue) {
          if (newValue !== oldValue && newValue !== 20)
            this.$router.push({ ...this.$route, query: { ...this.$route.query, perPage: newValue } });
          else if (newValue !== oldValue && newValue === 20) {
            const query = { ...this.$route.query };
            if (Object.keys(query).includes("perPage")) delete query.perPage;
            this.$router.push({ ...this.$route, query });
          }
        }
      },
      currentPage: {
        handler(newValue, oldValue) {
          if (newValue !== oldValue && Number.isInteger(newValue) && newValue > 1)
            this.$router.push({ ...this.$route, query: { ...this.$route.query, currentPage: newValue } });
          else if (newValue !== oldValue && newValue <= 1) {
            const query = { ...this.$route.query };
            if (Object.keys(query).includes("currentPage")) delete query.currentPage;
            this.$router.push({ ...this.$route, query });
          }
        }
      },
      search: {
        handler(newValue, oldValue) {
          if (newValue !== oldValue) {
            if ([null, ""].includes(newValue)) {
              const query = { ...this.$route.query };
              if (Object.keys(query).includes("search")) delete query.search;
              this.$router.push({ ...this.$route, query });
            } else {
              this.$router.push({ ...this.$route, query: { ...this.$route.query, search: newValue } });
            }
          }
        }
      },
      sortBy: {
        handler(newValue, oldValue) {
          if (newValue !== oldValue) {
            if (newValue === null) {
              const query = { ...this.$route.query };
              if (Object.keys(query).includes("sortBy")) delete query.sortBy;
              this.$router.push({ ...this.$route, query });
            } else {
              this.$router.push({ ...this.$route, query: { ...this.$route.query, sortBy: newValue } });
            }
          }
        }
      },
      sortDesc: {
        handler(newValue, oldValue) {
          if (newValue !== oldValue) {
            if (newValue === false) {
              const query = { ...this.$route.query };
              if (Object.keys(query).includes("sortDesc")) delete query.sortDesc;
              this.$router.push({ ...this.$route, query });
            } else {
              this.$router.push({ ...this.$route, query: { ...this.$route.query, sortDesc: newValue } });
            }
          }
        }
      },
      "$route.query.perPage": {
        handler(newValue, oldValue) {
          if (newValue !== oldValue) this.perPage = newValue || 20;
        }
      },
      "$route.query.search": {
        handler(newValue, oldValue) {
          if (newValue !== oldValue) this.search = newValue || null;
        }
      },
      "$route.query.sortBy": {
        handler(newValue, oldValue) {
          if (newValue !== oldValue) this.sortBy = newValue || null;
        }
      },
      "$route.query.sortDesc": {
        handler(newValue, oldValue) {
          if (newValue !== oldValue) this.sortDesc = newValue || null;
        }
      },
      "$route.query.currentPage": {
        handler(newValue, oldValue) {
          if (newValue !== oldValue && !newValue) this.currentPage = 1;
          else if (
            newValue !== oldValue &&
            Number.isInteger(parseInt(parseFloat(newValue))) &&
            parseInt(parseFloat(newValue)) < this.totalRows / this.perPage
          )
            this.currentPage = parseInt(parseFloat(newValue));
        }
      }
    },
    mounted() {
      const { perPageOptions, sortableFields } = this;
      const { perPage, currentPage, search, sortBy, sortDesc } = this.$route.query;

      if (currentPage && Number.isInteger(parseInt(parseFloat(currentPage))) && parseInt(parseFloat(currentPage)) > 0)
        this.currentPage = parseInt(parseFloat(currentPage));
      if (perPage && perPageOptions.map(v => v.value.toString()).includes(perPage)) this.perPage = perPage;
      if (search && typeof search === "string" && search.length > 0) this.search = search;
      if (sortBy && sortableFields.map(sbo => sbo.key).includes(sortBy)) this.sortBy = sortBy;
      if (sortDesc) this.sortDesc = true;
    },
    methods: {
      onRowClick(data) {
        this.$router.push({ name: `${this.$options.rootRoute}-id`, params: { id: data.id } });
      },
      provider(ctx) {
        const promise = this.$axios.get(this.$options.apiUrl, {
          params: {
            page: ctx.currentPage || undefined,
            perPage: ctx.perPage || undefined,
            search: ctx.filter || undefined,
            sortBy: ctx.sortBy || undefined,
            sortDesc: ctx.sortDesc || undefined
          }
        });

        // Must return a promise that resolves to an array of items
        return promise
          .then(res => {
            this.totalRows = res?.data.totalElements || 0;
            // Must return an array of items or an empty array if an error occurred
            return res?.data?.content || [];
          })
          .catch(() => {
            return [];
          });
      },
      renderCardHeader() {
        const { currentPage: value, perPage, totalRows } = this;
        const h = this.$createElement.bind(this);

        const headerComponents = [];

        if (totalRows > perPage) {
          headerComponents.push(
            h("div", { class: "card-tools" }, [
              h("b-pagination", {
                class: "my-0",
                on: { input: _value => (this.currentPage = _value) },
                props: {
                  align: "right",
                  perPage,
                  size: "sm",
                  totalRows,
                  value,
                  variant: "success",
                  lastClass: ""
                },
                scopedSlots: {
                  page: ({ page, active }) => h(active ? "b" : "i", active ? {} : {}, [page])
                }
              })
            ])
          );
        }

        headerComponents.push(h("b-btn", { props: { to: { name: "admin-jobs-new" } } }, ["New Job"]));

        return h("b-card-header", {}, [
          h("div", { class: "d-flex align-items-center justify-content-end" }, headerComponents)
        ]);
      },
      renderTable() {
        return this.$createElement("b-table", {
          on: {
            "row-clicked": this.onRowClick,
            "update:currentPage": value => (this.currentPage = value),
            "update:perPage": value => (this.perPage = value),
            "update:sortBy": value => (this.sortBy = value),
            "update:sortDesc": value => (this.sortDesc = value)
          },
          props: {
            currentPage: this.currentPage,
            fields: this.fields,
            filter: this.search,
            items: this.provider,
            showEmpty: true,
            sortBy: this.sortBy,
            sortDesc: this.sortDesc,
            perPage: this.perPage
          },
          scopedSlots: {
            "table-busy": () => this.$createElement("div", { class: "py-5" }, [this.$createElement("message-spinner")]),
            "cell(enabled)": data =>
              this.$createElement("b-badge", { class: `bg-${data.value ? "success" : "danger"}` }, [
                this.$t(`GENERAL.LABEL.${data.value ? "ENABLED" : "DISABLED"}`)
              ])
          }
        });
      }
    },
    render(h) {
      return this.renderContainer([
        h("jpa-filter-card", {
          on: {
            "update:per-page": value => {
              this.perPage = value;
            },
            "update:sort-by": value => {
              this.sortBy = value;
            },
            "update:search": value => {
              this.search = value;
            },
            "update:sort-desc": value => {
              this.sortDesc = value;
            }
          },
          props: {
            search: this.search,
            sortBy: this.sortBy,
            sortByOptions: this.sortByOptions,
            sortDesc: this.sortDesc,
            perPage: this.perPage,
            title: this.pageTitle
          }
        }),
        this.renderStandardCard([this.renderTable()])
      ]);
    }
  };
</script>
