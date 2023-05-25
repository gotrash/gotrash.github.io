<script>
  export default {
    layout: "admin",
    data() {
      return {
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
      perPageOptions() {
        return [
          { text: 20, value: 20 },
          { text: 50, value: 50 },
          { text: 100, value: 100 }
        ];
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
      sortDescOptions() {
        return [
          { text: this.$t("GENERAL.LABEL.ASC"), value: false },
          { text: this.$t("GENERAL.LABEL.DESC"), value: true }
        ];
      },
      sortableFields() {
        return (this.fields || [])
          .filter(f => f.sortable)
          .sort((a, b) => (a.label === b.label ? 0 : a.label < b.label ? -1 : 1));
      }
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
            search: ctx.search || undefined,
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
      renderFilterCard() {
        const h = this.$createElement.bind(this);

        return h(
          "b-card",
          {
            props: { bodyBgVariant: "white", headerBgVariant: "white", footerBgVariant: "white", noBody: true }
          },
          [
            h("b-card-body", [
              h("b-form", [
                h("b-form-row", [
                  h("b-col", { class: "my-1", props: { lg: 6 } }, [
                    h(
                      "b-form-group",
                      {
                        class: "mb-0",
                        props: {
                          label: this.$t("GENERAL.LABEL.SORT"),
                          labelFor: "sort-by-select",
                          labelColsSm: 3,
                          labelAlignSm: "right",
                          labelSize: "sm"
                        }
                      },
                      [
                        h("b-input-group", { size: "sm" }, [
                          h("b-form-select", {
                            id: "sort-by-select",
                            on: {
                              input: value => {
                                console.log("Received: %s", value);
                                this.sortBy = value;
                              }
                            },
                            props: {
                              options: this.sortByOptions,
                              size: "sm",
                              value: this.sortBy
                            }
                          }),
                          h("b-form-select", {
                            on: {
                              input: value => (this.sortDesc = value)
                            },
                            props: {
                              disabled: !this.sortBy,
                              options: this.sortDescOptions,
                              size: "sm",
                              value: this.sortDesc
                            }
                          })
                        ])
                      ]
                    )
                  ]),
                  h("b-col", { class: "my-1", props: { lg: 6 } }, [
                    h(
                      "b-form-group",
                      {
                        class: "mb-0",
                        props: {
                          label: this.$t("GENERAL.LABEL.SEARCH"),
                          labelFor: "search-input",
                          labelColsSm: 3,
                          labelAlignSm: "right",
                          labelSize: "sm"
                        }
                      },
                      [
                        h("b-input-group", { size: "sm" }, [
                          h("b-form-input", {
                            id: "search-input",
                            on: {
                              input: value => (this.search = value)
                            },
                            props: {
                              debounce: 200,
                              placeholder: this.$t("GENERAL.PLACEHOLDER.SEARCH"),
                              size: "sm",
                              type: "search",
                              value: this.search
                            }
                          }),
                          h("b-input-group-append", [
                            h(
                              "b-button",
                              {
                                on: {
                                  click: () => {
                                    this.search = "";
                                  }
                                },
                                props: {
                                  disabled: !this.search,
                                  size: "sm"
                                }
                              },
                              [this.$t("GENERAL.LABEL.CLEAR")]
                            )
                          ])
                        ])
                      ]
                    )
                  ]),
                  h("b-col", { class: "my-1", props: { lg: 6 } }, [
                    h(
                      "b-form-group",
                      {
                        class: "mb-0",
                        props: {
                          label: this.$t("GENERAL.LABEL.PER_PAGE"),
                          labelFor: "per-page-select",
                          labelColsSm: 6,
                          labelColsMd: 4,
                          labelColsLg: 3,
                          labelAlignSm: "right",
                          labelSize: "sm"
                        }
                      },
                      [
                        h("b-form-select", {
                          id: "per-page-select",
                          on: {
                            input: value => (this.perPage = value)
                          },
                          props: {
                            options: this.perPageOptions,
                            size: "sm",
                            value: this.perPage
                          }
                        })
                      ]
                    )
                  ])
                ])
              ])
            ])
          ]
        );
      },
      renderHeader() {
        const { currentPage: value, pageTitle, perPage, totalRows } = this;
        const h = this.$createElement.bind(this);

        const headerComponents = [h("b-card-title", pageTitle)];

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

        return h("b-card-header", {}, [
          h("div", { class: "d-flex align-items-center justify-content-between" }, headerComponents)
        ]);
      },
      renderTable() {
        const { renderHeader } = this;
        const h = this.$createElement.bind(this);

        return h(
          "b-card",
          {
            props: {
              bodyBgVariant: "white",
              bodyClass: "p-0",
              headerBgVariant: "white",
              footerBgVariant: "white",
              noBody: true
            }
          },
          [
            renderHeader(),
            h("b-card-body", { class: "p-0" }, [
              h("b-table", {
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
                  "table-busy": () => h("div", { class: "py-5" }, [h("message-spinner")]),
                  "cell(enabled)": data =>
                    h("b-badge", { class: `bg-${data.value ? "success" : "danger"}` }, [
                      this.$t(`GENERAL.LABEL.${data.value ? "ENABLED" : "DISABLED"}`)
                    ])
                }
              })
            ])
          ]
        );
      }
    },
    render(h) {
      const cards = [];

      if (this.$options.showFilters) cards.push(this.renderFilterCard());

      cards.push(this.renderTable());

      return h(
        "b-container",
        {
          props: {
            fluid: true
          }
        },
        [h("b-row", [h("b-col", { props: { cols: 12 } }, cards)])]
      );
    }
  };
</script>
