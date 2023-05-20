<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <b-card body-bg-variant="white" footer-bg-variant="white" header-bg-variant="white" no-body>
          <b-card-body>
            <b-form>
              <b-form-row>
                <b-col class="my-1" lg="6">
                  <b-form-group
                    v-slot="{ ariaDescribedby }"
                    class="mb-0"
                    :label="$t('GENERAL.LABEL.SORT')"
                    label-for="sort-by-select"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                  >
                    <b-input-group size="sm">
                      <b-form-select
                        id="sort-by-select"
                        v-model="sortBy"
                        :aria-describedby="ariaDescribedby"
                        class="w-75"
                      >
                        <b-form-select-option value="">
                          {{ $t("GENERAL.LABEL.FORM_NONE") }}
                        </b-form-select-option>
                        <b-form-select-option
                          v-for="(field, fieldIndex) in sortableFields"
                          :key="`sortable-field-option-${fieldIndex + 1}`"
                          :value="field.key"
                        >
                          {{ field.label }}
                        </b-form-select-option>
                      </b-form-select>

                      <b-form-select
                        v-model="sortDesc"
                        :disabled="!sortBy"
                        :aria-describedby="ariaDescribedby"
                        size="sm"
                        class="w-25"
                      >
                        <option :value="false">
                          {{ $t("GENERAL.LABEL.ASC") }}
                        </option>
                        <option :value="true">
                          {{ $t("GENERAL.LABEL.DESC") }}
                        </option>
                      </b-form-select>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col class="my-1" lg="6">
                  <b-form-group
                    :label="$t('GENERAL.LABEL.SEARCH')"
                    label-for="search-input"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0"
                  >
                    <b-input-group size="sm">
                      <b-form-input
                        id="search-input"
                        v-model="search"
                        debounce="200"
                        type="search"
                        :placeholder="$t('GENERAL.PLACEHOLDER.SEARCH')"
                      ></b-form-input>

                      <b-input-group-append>
                        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                      </b-input-group-append>
                    </b-input-group>
                  </b-form-group>
                </b-col>
                <b-col class="my-1" sm="5" md="6">
                  <b-form-group
                    :label="$t('GENERAL.LABEL.PER_PAGE')"
                    label-for="per-page-select"
                    label-cols-sm="6"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0"
                  >
                    <b-form-select id="per-page-select" v-model="perPage" size="sm">
                      <b-form-select-option value="20"> 20 </b-form-select-option>
                      <b-form-select-option value="50"> 50 </b-form-select-option>
                      <b-form-select-option value="100"> 100 </b-form-select-option>
                    </b-form-select>
                  </b-form-group>
                </b-col>
              </b-form-row>
            </b-form>
          </b-card-body>
        </b-card>

        <b-card
          :per-page.sync="perPage"
          body-bg-variant="white"
          body-class="p-0"
          footer-bg-variant="white"
          header-bg-variant="white"
          no-body
        >
          <b-card-header class="">
            <div class="d-flex align-items-center justify-content-between">
              <b-card-title>{{ $t("NAV__COUNTRIES") }}</b-card-title>
              <div class="card-tools">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="totalRows"
                  :per-page="perPage"
                  align="right"
                  size="sm"
                  class="my-0"
                />
              </div>
            </div>
          </b-card-header>
          <b-card-body class="p-0">
            <b-table
              :current-page.sync="currentPage"
              :fields="fields"
              :filter="search"
              :items="provider"
              :per-page.sync="perPage"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              show-empty
            >
              <template slot="table-busy">
                <div class="py-5">
                  <message-spinner />
                </div>
              </template>
              <template #cell(enabled)="data">
                <fa-icon
                  v-if="false"
                  :title="$t(`GENERAL.LABEL.${data.value ? 'ENABLED' : 'DISABLED'}`)"
                  :icon="data.value ? 'check' : 'times'"
                  :class="[data.value ? 'text-success' : 'text-danger', 'fa-lg']"
                />
                <b-badge :class="`bg-${data.value ? 'success' : 'danger'}`">
                  {{ $t(`GENERAL.LABEL.${data.value ? "ENABLED" : "DISABLED"}`) }}
                </b-badge>
              </template>
            </b-table>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    components: {
      MessageSpinner: () => import("~/components/global/MessageSpinner.vue")
    },
    layout: "admin",
    middleware: "auth",
    data() {
      const $t = this.$t.bind(this);

      return {
        fields: [
          {
            key: "countryName",
            label: $t("COUNTRIES.LABEL.COUNTRY_NAME"),
            sortable: true
          },
          {
            key: "continent.continentCode",
            label: $t("COUNTRIES.LABEL.CONTINENT_CODE"),
            tdClass: "text-center",
            thClass: "text-center",
            sortable: true
          },
          {
            key: "twoLetterCountryCode",
            label: $t("COUNTRIES.LABEL.TWO_LETTER_COUNTRY_CODE"),
            tdClass: "text-center",
            thClass: "text-center",
            sortable: true
          },
          {
            key: "threeLetterCountryCode",
            label: $t("COUNTRIES.LABEL.THREE_LETTER_COUNTRY_CODE"),
            tdClass: "text-center",
            thClass: "text-center",
            sortable: true
          },
          {
            key: "countryNumber",
            label: $t("COUNTRIES.LABEL.COUNTRY_NUMBER"),
            tdClass: "text-center",
            thClass: "text-center",
            sortable: true
          },
          {
            key: "enabled",
            label: $t("COUNTRIES.LABEL.ENABLED"),
            tdClass: "text-center",
            thClass: "text-center",
            sortable: true
          }
        ],
        currentPage: 1,
        filter: null,
        perPage: 20,
        search: null,
        sortBy: null,
        sortDesc: false,
        totalRows: 1
      };
    },
    computed: {
      sortableFields() {
        return this.fields
          .filter(f => f.sortable)
          .sort((a, b) => (a.label === b.label ? 0 : a.label < b.label ? -1 : 1));
      }
    },
    methods: {
      provider(ctx) {
        const promise = this.$axios.get("/countries", {
          params: {
            page: ctx.currentPage || undefined,
            perPage: ctx.perPage || undefined,
            search: ctx.filter || undefined,
            sortBy: ctx.sortBy || undefined,
            sortDesc: ctx.sortDesc || false
          }
        });

        // Must return a promise that resolves to an array of items
        return promise.then(res => {
          this.totalRows = res?.data.totalElements || 0;
          // Must return an array of items or an empty array if an error occurred
          return res?.data.content || [];
        });
      }
    }
  };
</script>
