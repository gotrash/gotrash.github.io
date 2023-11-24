<script>
  const columnAttrs = {
    class: "my-1",
    props: {
      lg: 6
    }
  };
  const standardCardProps = {
    bodyBgVariant: "white",
    headerBgVariant: "white",
    footerBgVariant: "white",
    noBody: true
  };

  export default {
    props: {
      perPage: {
        type: [Number, String],
        required: false,
        default: null
      },
      search: {
        type: [String],
        required: false,
        default: null
      },
      sortBy: {
        type: [Object, String, null],
        required: false,
        default: null
      },
      sortDesc: Boolean,
      sortByOptions: {
        type: Array,
        required: true
      }
    },
    emits: ["update:per-page", "update:search", "update:sort-by", "update:sort-desc"],
    computed: {
      _perPage: {
        get() {
          return this.perPage;
        },
        set(perPage) {
          this.$emit("update:per-page", perPage);
        }
      },
      _search: {
        get() {
          return this.search;
        },
        set(search) {
          this.$emit("update:search", search);
        }
      },
      _sortBy: {
        get() {
          return this.sortBy;
        },
        set(sortBy) {
          this.$emit("update:sort-by", sortBy);
        }
      },
      _sortDesc: {
        get() {
          return this.sortDesc || false;
        },
        set(sortDesc) {
          this.$emit("update:sort-desc", sortDesc);
        }
      },
      perPageOptions() {
        return [
          { text: 20, value: 20 },
          { text: 50, value: 50 },
          { text: 100, value: 100 }
        ];
      },
      sortDescOptions() {
        return [
          { text: this.$t("GENERAL.LABEL.ASC"), value: false },
          { text: this.$t("GENERAL.LABEL.DESC"), value: true }
        ];
      }
    },
    methods: {
      onClearSearch() {
        this._search = "";
      }
    },
    render(h) {
      return h(
        "b-card",
        {
          props: standardCardProps
        },
        [
          h("b-card-body", [
            h("b-form", [
              h("b-form-row", [
                h("b-col", columnAttrs, [
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
                              this._sortBy = value;
                            }
                          },
                          props: {
                            options: this.sortByOptions,
                            size: "sm",
                            value: this._sortBy
                          }
                        }),
                        h("b-form-select", {
                          on: {
                            input: value => (this._sortDesc = value)
                          },
                          props: {
                            disabled: !this._sortBy,
                            options: this.sortDescOptions,
                            size: "sm",
                            value: this._sortDesc
                          }
                        })
                      ])
                    ]
                  )
                ]),
                h("b-col", columnAttrs, [
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
                            update: value => (this._search = value)
                          },
                          props: {
                            debounce: 200,
                            placeholder: this.$t("GENERAL.PLACEHOLDER.SEARCH"),
                            size: "sm",
                            type: "search",
                            value: this._search
                          }
                        }),
                        h("b-input-group-append", [
                          h(
                            "b-button",
                            {
                              on: {
                                click: this.onClearSearch
                              },
                              props: {
                                disabled: !this._search,
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
                h("b-col", columnAttrs, [
                  h(
                    "b-form-group",
                    {
                      class: "mb-0",
                      props: {
                        label: this.$t("GENERAL.LABEL.PER_PAGE"),
                        labelFor: "per-page-select",
                        labelColsSm: 3,
                        labelAlignSm: "right",
                        labelSize: "sm"
                      }
                    },
                    [
                      h("b-form-select", {
                        id: "per-page-select",
                        on: {
                          input: value => (this._perPage = value)
                        },
                        props: {
                          options: this.perPageOptions,
                          size: "sm",
                          value: this._perPage
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
    }
  };
</script>
