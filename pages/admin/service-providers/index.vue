<script>
  import { format } from "date-fns";
  import { PagedJpaTablePage } from "~/mixins";
  import { DateTimeFormats } from "~/constants";

  export default {
    name: "ServiceProvidersIndex",
    mixins: [PagedJpaTablePage],
    apiUrl: "/service-providers",
    rootRoute: "admin-service-providers",
    pageTitleTranslation: "NAV__SERVICE_PROVIDERS",
    showFilters: false,
    data() {
      const $t = this.$t.bind(this);
      let createLabel = label => $t(`SERVICE_PROVIDERS.LABEL.${label}`);
      const fields = [
        { key: "id", label: createLabel("ID") },
        { key: "name", label: createLabel("NAME") },
        { key: "address", label: createLabel("ADDRESS"), formatter: this.addressCellFormatter },
        { key: "country", label: createLabel("COUNTRY"), formatter: this.countryFormatter },
        { key: "co-ordinates", label: createLabel("COORDINATES"), formatter: this.coordinatesFormatter },
        { key: "contactDetails", label: createLabel("CONTACT_DETAILS") },
        { key: "createdAt", label: createLabel("CREATED_AT"), formatter: this.timeFormatter },
        { key: "updatedAt", label: createLabel("UPDATED_AT"), formatter: this.timeFormatter }
      ];

      createLabel = undefined;

      return {
        fields
      };
    },
    methods: {
      addressCellFormatter: (value, key, item) => {
        let address = "";
        let keys = ["addressLineOne", "addressLineTwo", "town", "county", "postcode"];

        for (key of keys) {
          if (item[key]) address += address ? `, ${item[key]}` : item[key];
        }

        keys = undefined;

        return address;
      },
      coordinatesFormatter: (value, key, item) => `${item.latitude}, ${item.longitude}`,
      countryFormatter: v => v.twoLetterCountryCode,
      timeFormatter: v => (v ? format(new Date(v), DateTimeFormats.DISPLAY_DATE_TIME) : "Unavailable"),
      scopedTableSlots() {
        const h = this.$createElement;

        return {
          "cell(contactDetails)": ({ item }) => {
            const items = [];
            let pushItem = item => items.push(h("div", item));

            if (item.telephone) pushItem(item.telephone);
            if (item.mobile) pushItem(item.mobile);
            if (item.email) pushItem(item.email);

            pushItem = undefined;

            return h("div", items);
          }
        };
      }
    }
  };
</script>
