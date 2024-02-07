<template>
  <b-card body-bg-variant="white" header-bg-variant="white" footer-bg-variant="white" no-body>
    <b-card-body>
      <b-form>
        <b-row>
          <b-col class="my-1" lg="6">
            <b-form-group
              class="mb-0"
              :label="$t('GENERAL.LABEL.SORT')"
              label-for="sort-by-select"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
            >
              <b-input-group size="sm">
                <b-form-select id="sort-by-select" v-model="_sortBy" :options="sortByOptions" size="sm"></b-form-select>
                <b-form-select
                  id="sort-by-select"
                  v-model="_sortDesc"
                  :disabled="!sortBy"
                  :options="sortDescOptions"
                  size="sm"
                ></b-form-select>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col class="my-1" lg="6">
            <b-form-group
              class="mb-0"
              :label="$t('GENERAL.LABEL.SEARCH')"
              label-for="search-input"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
            >
              <b-input-group size="sm">
                <b-form-input
                  id="search-input"
                  v-model="_search"
                  :placeholder="$t('GENERAL.PLACEHOLDER.SEARCH')"
                  :debounce="200"
                  size="sm"
                  type="search"
                />
                <b-input-group-append>
                  <b-button
                    :disabled="!search"
                    size="sm"
                    @click="
                      () => {
                        search = '';
                      }
                    "
                  >
                    {{ $t("GENERAL.LABEL.CLEAR") }}
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col class="my-1" lg="6">
            <b-form-group
              class="mb-0"
              :label="$t('GENERAL.LABEL.PER_PAGE')"
              label-for="per-page-select"
              label-cols-sm="6"
              label-cols="4"
              label-cols-lg="3"
              label-align-sm="right"
              label-size="sm"
            >
              <b-form-select
                id="per-page-select"
                v-model="_perPage"
                :options="FilterOptions.perPageOptions"
                size="sm"
              />
            </b-form-group>
          </b-col>
        </b-row>
      </b-form>
    </b-card-body>
  </b-card>
</template>

<script setup>
  import { FilterOptions } from "~/constants";

  const props = defineProps({
    hideSearch: Boolean,
    hideShowDeleted: Boolean,
    hideSortBy: Boolean,
    hideStatus: Boolean,
    perPage: Number,
    search: [Number, String],
    softDeletes: Boolean,
    sortBy: [Number, String],
    sortByOptions: Array,
    sortDesc: Boolean,
    sortDescOptions: Array
  });

  const $emit = defineEmits(["update:perPage", "update:search", "update:sortBy", "update:sortDesc"]);

  const _perPage = computed({
    get: () => props.perPage,
    set: newValue => $emit("update:perPage", newValue)
  });

  const _search = computed({
    get: () => props.search,
    set: newValue => $emit("update:search", newValue)
  });

  const _sortBy = computed({
    get: () => props.sortBy,
    set: newValue => $emit("update:sortBy", newValue)
  });

  const _sortDesc = computed({
    get: () => props.sortDesc,
    set: newValue => $emit("update:sortDesc", newValue)
  });
</script>
