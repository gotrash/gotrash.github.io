<template>
  <b-card no-body>
    <custom-card-header>
      {{ $t("ADDRESSES.LABEL.USER_ADDRESSES") }}
    </custom-card-header>
    <b-card-body>
      <b-table-simple>
        <b-thead>
          <b-tr>
            <b-th>{{ $t("ADDRESSES.LABEL.ADDRESS") }}</b-th>
            <b-th class="text-end" style="width: 140px">{{ $t("GENERAL.LABEL.ACTIONS") }}</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="address in addresses" :key="`address-row-${address}`">
            <b-td class="align-middle"><div v-html="address.formattedAddress.split(', <br />').join(', ')"></div></b-td>
            <b-td class="text-end" style="width: 140px">
              <b-button-group class="text-light ms-auto">
                <b-button class="text-danger" variant="transparent" :title="$t('ADDRESSES.LABEL.DELETE_ADDRESS')">
                  <fa-icon icon="trash" class="fa-lg fa-fw" />
                </b-button>
                <b-button class="text-success" variant="transparent" :title="$t('ADDRESSES.LABEL.EDIT_ADDRESS')">
                  <fa-icon icon="pen" class="fa-lg fa-fw" />
                </b-button>
              </b-button-group>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-card-body>
  </b-card>
</template>

<script>
  import { format } from "date-fns";
  import { DateTimeFormats } from "~/constants";

  export default {
    data() {
      return {
        addresses: [],
        loading: false
      };
    },
    created() {
      this.loading = true;
    },
    mounted() {
      this.getAddresses();
    },
    methods: {
      addressFormatter(address = {}) {
        const keys = ["addressLineOne", "addressLineTwo", "town", "county", "postcode"];
        const addressParts = keys.map(key => address[key]);
        const filtered = addressParts.filter(part => part !== null && part !== undefined);

        return filtered.join(", <br />");
      },
      async getAddresses() {
        this.loading = true;
        const { getSession } = useAuth();
        const session = await getSession();

        useFetch(`/user/addresses/all`, {
          baseURL: this.$config.public.apiUrl,
          method: "GET",
          headers: {
            Authorization: `Bearer ${session?.session?.access_token}`
          },
          lazy: true,
          query: {
            page: this.currentPage
          },
          transform: data => {
            return {
              ...data?.map(address => {
                return {
                  ...address,
                  formattedAddress: this.addressFormatter(address),
                  updatedAt: format(new Date(address.updatedAt), DateTimeFormats.DISPLAY_DATE)
                };
              })
            };
          }
        })
          .then(async res => {
            if (res.data.value.numberOfElements === 0) {
              this.$router.push(
                this.localePath({ name: "user-addresses", query: { page: res.data.value.totalPages } })
              );
            }

            await new Promise(resolve => {
              this.addresses = res.data.value;

              resolve();
            });

            return Promise.resolve();
          })
          .catch(err => {
            const _err = new Error("There was an error fetching your addresses from the server.", { cause: err });
            this.err = _err;
            console.error(_err);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    }
  };
</script>
