import type { UseFetchOptions } from "nuxt/app";
import { FilterOptions } from "@/constants";
import type { Ref } from "vue";
import { defu } from "defu";

const ENABLED = "enabled";
const DISABLED = "disabled";

const is_enabled_options = { ENABLED, DISABLED };

export interface IJpaQueryData {
  page: number | string | null | undefined;
  perPage: number | string | null | undefined;
  search: string | null | undefined;
  sortBy: string | null | undefined;
  sortDesc: boolean | null | undefined;
}

export interface IJpaPageOptions {
  page?: number | string | null;
  perPage?: number | string | null;
  search: string | null;
  sortBy: string | null;
  sortDesc: boolean | null;
  status: string | null;

  removeNulls: Function;
}

export interface IJpaResponseObject {
  content: Array<any>;
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: object;
  size: number;
  sort: object;
  totalElements: number;
  totalPages: number;
}

export interface IJpaPageData<T> {
  items: Ref<Array<T>>;
  pageable: Ref<IJpaQueryData>;
  err: Ref<string | object | null>;
  loading: Ref<boolean>;
  totalElements: Ref<string | number>;
  totalPages: Ref<string | number>;
  _getQuery: Function;
  _catchError: Function;
  _processResponse: Function;
}

interface IClassDiffValue {
  old: string | number | null;
  new: string | number | null;
}

export class JpaPageOptions implements IJpaPageOptions {
  page = 1;
  perPage = FilterOptions.perPageOptions[0].value;
  search = null;
  sortBy = null;
  sortDesc = false;
  status = "enabled";

  reset() {
    this.page = 1;
    this.perPage = FilterOptions.perPageOptions[0].value;
    this.search = null;
    this.sortBy = null;
    this.sortDesc = false;
  }

  removeNulls(): IJpaQueryData {
    const { page, perPage, search, sortBy, sortDesc } = this;

    return {
      page: page || undefined,
      perPage: perPage || undefined,
      search: search || undefined,
      sortBy: sortBy || undefined,
      sortDesc: sortDesc || undefined
    };
  }
}

export function useJpa<T>(url: string | (() => string), options: UseFetchOptions<T> = {}): IJpaPageData<T> {
  // These reactive references are to hold the page state and any error message(s) we may have.
  const err: Ref<string | object | null> = ref(null);
  const loading: Ref<boolean> = ref(false);

  // This is the state for the actual page data and paged data properties, filters and sort-by values.
  const items: Ref<Array<T>> = ref([]);
  const pageable: Ref<JpaPageOptions> = ref(new JpaPageOptions());
  const totalElements: Ref<number | string> = ref(0);
  const totalPages: Ref<number | string> = ref(0);

  // The `_getQuery` method builds the URL query parameters based off the filtering, sorting and current page values.
  const _getQuery = (): IJpaQueryData => {
    const queryOptions: IJpaQueryData = pageable.value.removeNulls();

    return queryOptions;
  };

  // Basic error handling for the request.  The page should implement the functionality for pasing and displaying the
  // error, maybe using another composable.
  const _catchError = (_err: string | object) => {
    console.error(_err);
    err.value = _err;
  };

  // Parses the standard JPA response for the Spring Boot API endpoints and set's up our paging data accordingly.
  const _processResponse = async (res: {
    data: { value: IJpaResponseObject };
    error: any;
    pending: Ref<boolean>;
    status: any;
    execute: Function;
    refresh: Function;
  }) => {
    if (res.error.value) {
      err.value = res.error.value;

      items.value = [];
      totalPages.value = 1;
      totalElements.value = 1;

      return;
    } else {
      items.value = res.data.value.content;

      pageable.value.perPage = Number(res.data.value.size);
      totalPages.value = Number(res.data.value.totalPages);
      totalElements.value = Number(res.data.value.totalElements);

      err.value = null;
    }
  };

  const _setLoading = function (value: boolean = false) {
    loading.value = value;
  };

  return {
    items,
    pageable,
    err,
    loading,
    totalElements,
    totalPages,
    _getQuery,
    _catchError,
    _processResponse,
    _setLoading
  };
}
