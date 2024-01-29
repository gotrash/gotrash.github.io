<template>
  <b-table :fields="fields" :items="items">
    <template #cell(user)="data">
      <b-card no-body>
        <div>
          <h3>User Details</h3>
          <pre><code>{{ data.value }}</code></pre>
        </div>
        <div>
          <h3>Active Service Provider</h3>
          <pre><code>{{ data.item.user.activeServiceProvider }}</code></pre>
        </div>
        <div>
          <h3>Country</h3>
          <pre><code>{{ data.item.user.country }}</code></pre>
        </div>
        <div>
          <h3>Owned Providers</h3>
          <pre><code>{{ data.item.user.ownedProviders }}</code></pre>
        </div>
      </b-card>
    </template>
  </b-table>
</template>

<script>
import { format } from "date-fns";
import IsTable from "~/mixins/IsTable.vue";
import { DateTimeFormats } from "~/constants";

export default {
  fetchOnServer: true,
  fetchKey: "password-reset-tokens",
  name: "PasswordResetTokenTable",
  mixins: [IsTable],
  props: {},
  asyncData() {
    return {};
  },
  data() {
    const $t = this.$t.bind(this);

    return {
      fields: [
        { key: "id", label: $t("PASSWORD_RESET_TOKENS.LABEL.ID") },
        { key: "token", label: $t("PASSWORD_RESET_TOKENS.LABEL.TOKEN") },
        {
          key: "user",
          label: $t("PASSWORD_RESET_TOKENS.LABEL.USER"),
          formatter(value, key, item) {
            const newValue = { ...value };
            newValue.roles = (value.roles || []).length;
            newValue.privileges = (value.privileges || []).length;
            newValue.serviceProviders = (value.serviceProviders || []).length;
            delete newValue.activeServiceProvider;
            delete newValue.country;
            delete newValue.ownedProviders;
            return newValue;
          }
        },
        {
          key: "expiryDate",
          label: $t("PASSWORD_RESET_TOKENS.LABEL.EXPIRY_DATE"),
          formatter: value => {
            return value ? format(new Date(value), DateTimeFormats.DISPLAY_DATE_TIME) : null;
          }
        }
      ]
    };
  }
};
</script>
