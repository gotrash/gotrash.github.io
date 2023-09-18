<template>
  <b-container class="pt-3" fluid>
    <b-card no-body>
      <b-card-header class="d-flex align-items-center pe-2 py-2">
        <div>
          Addresses
        </div>
        <b-pagination :first-class="[totalPages === 0 || currentPage <= 1 ? 'd-none' : '']"
          :prev-class="[totalPages === 0 || currentPage <= 1 ? 'd-none' : '']"
          :last-class="[totalPages === 0 || totalPages <= currentPage ? 'd-none' : '']"
          :next-class="[totalPages === 0 || totalPages <= currentPage ? 'd-none' : '']" class="mb-0 ms-auto" size="sm"
          :per-page="perPage" :total-rows="totalRows" v-model="currentPage" />
      </b-card-header>
      <b-card-body :class="{ 'pb-0': !loading && !err }">
        <message-spinner v-if="loading" message="ADDRESSES.MESSAGE.LOADING" />
        <div v-else-if="err">
          <p>{{ err }}</p>
        </div>
        <b-row v-else>
          <b-col cols="12" md="6" lg="4" xl="3" v-for="(address, addressIndex) in addresses"
            :key="`address-col-${address.id}`">
            <b-card class="bg-light" no-body>
              <b-card-body>
                <b-row>
                  <b-col class="mb-3 mb-lg-0">
                    <h2 v-if="false" class="lead"><b>Nicole Pearson</b></h2>
                    <p v-if="false" class="text-muted text-sm"><b>About: </b> Web Designer / UX / Graphic Artist / Coffee
                      Lover </p>
                    <ul class="ml-2 mb-0 fa-ul text-muted">
                      <li class="small">
                        <span class="fa-li">
                          <fa-icon icon="building" class="fa-lg text-success" />
                        </span>
                        <b>Address:</b><br />
                        <span v-html="address.formattedAddress"></span>
                      </li><br />
                      <li class="small">
                        <span class="fa-li">
                          <fa-icon icon="calendar" class="text-success fa-lg" />
                        </span>
                        <b>Updated At:</b><br />
                        <span v-html="address.updatedAt"></span>
                      </li>
                    </ul>
                  </b-col>
                  <b-col v-if="false" lg="5" class="text-center">
                    <img src="~/assets/images/user-placeholder.png" alt="replace-with-map" height="128" width="128"
                      class="img-circle img-fluid">
                  </b-col>
                </b-row>
              </b-card-body>
              <b-card-footer class="d-flex justify-content-end">
                <div class="ml-auto">
                  <b-button @click="onDeleteClicked(addressIndex)" class="btn btn-sm bg-danger me-2">
                    <fa-icon icon="trash" class="text-light" />
                  </b-button>
                  <b-link :to="localePath({ name: 'user-addresses-slug', params: { slug: address.id } })"
                    class="btn btn-sm btn-success text-light">
                    <fa-icon icon="map-marker" class="text-light" /> View Address
                  </b-link>
                </div>
              </b-card-footer>
            </b-card>
          </b-col>
        </b-row>

      </b-card-body>
    </b-card>
  </b-container>
</template>

<script setup>
definePageMeta({
  layout: "user"
})
</script>

<script>
import { format } from "date-fns";
import { reject } from "lodash";
import { DateTimeFormats } from "~/constants";

export default {
  data() {
    return {
      addresses: [],
      currentPage: 1,
      err: null,
      loading: false,
      perPage: 20,
      totalPages: 0,
      totalRows: 0
    }
  },
  created() {
    this.loading = true;

    if (this.$route.query?.page && !isNaN(this.$route.query.page)) {
      this.currentPage = parseInt(parseFloat(this.$route.query.page))
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.onGetData();
    })
  },
  watch: {
    currentPage(currentPage) {
      this.updateRoutePage(currentPage).finally(this.onGetData)
    },
    "$route.query.page"(queryPage) {
      const _queryPage = parseInt(parseFloat(queryPage || 1));

      if (_queryPage !== this.currentPage) {
        this.currentPage = _queryPage;
      }
    }
  },
  methods: {
    updateRoutePage(currentPage) {
      return new Promise((resolve, reject) => {
        try {
          const queryPage = this.$route.query.page;

          if (currentPage && (queryPage === undefined || (!isNaN(queryPage) && queryPage !== currentPage))) {
            const router = useRouter();
            router.push({ ...this.$route, query: { ...this.$route.query, page: currentPage > 1 ? currentPage : undefined } })
          }
          resolve()
        } catch (err) {
          console.error("There was an error updating the route with the current page");
          reject(true);
        }
      })
    },
    async onGetData() {
      this.loading = true;
      const { getSession } = useAuth();
      const session = await getSession();

      const { pending, data } = useFetch(`/user/addresses`, {
        baseURL: this.$config.public.apiUrl,
        method: "GET",
        headers: {
          Authorization: `Bearer ${session?.session?.access_token}`
        },
        lazy: true,
        query: {
          page: this.currentPage
        },
        transform: (data) => {
          return {
            ...data,
            content: data.content?.map(address => {
              return {
                ...address,
                formattedAddress: this.addressFormatter(address),
                updatedAt: format(new Date(address.updatedAt), DateTimeFormats.DISPLAY_DATE)
              }
            })
          }
        }
      }).then(async (res) => {
        if (res.data.value.numberOfElements === 0) {
          this.$router.push(this.localePath({ name: "user-addresses", query: { page: res.data.value.totalPages } }));
        }

        await new Promise((resolve) => {
          this.addresses = res.data.value.content
          this.perPage = res.data.value.size;
          this.currentPage = res.data.value.number + 1;
          this.totalRows = res.data.value.totalElements
          this.totalPages = res.data.value.totalPages

          resolve();
        })

        return Promise.resolve();
      }).catch(err => {
        const _err = new Error("There was an error fetching your addresses from the server.", { cause: err });
        this.err = _err;
        console.error(_err);
      }).finally(() => {
        this.loading = false;
      });
    },
    addressFormatter(address = {}) {
      const keys = ["addressLineOne", "addressLineTwo", "town", "county", "postcode"];
      const addressParts = keys.map(key => address[key]);
      const filtered = addressParts.filter(part => part !== null && part !== undefined);

      return filtered.join(", <br />");
    },
    async onDeleteClicked(addressIndex) {
      if ([undefined, null].includes(addressIndex)) throw new Error("`onDeleteClicked` called without an address index.")
      if (isNaN(addressIndex) || isNaN(parseInt(addressIndex))) throw new TypeError("`onDeleteClicked` address index should be a valid integer.")

      console.log(parseInt(addressIndex));

      const address = this.addresses[addressIndex];

      console.log("Address ID: %o", address.id)
      const { id: addressId } = address;

      const { getSession } = useAuth();
      const session = await getSession();

      useFetch(`/user/addresses/${addressId}`, {
        baseURL: this.$config.public.apiUrl,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${session?.session?.access_token}`
        },
      }).then(() => {
        this.addresses.splice(addressIndex, 1)
      });
    }
  }
}
</script>
