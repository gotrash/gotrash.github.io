<template>
  <b-container class="py-3" fluid>
    <b-row>
      <b-col cols="12">
        <h1 class="mb-3 h3">
          {{ $t("NAV__FEEDBACK") }}
        </h1>
      </b-col>

      <b-col cols="12">
        <user-feedback-statistics-card />
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup>
import UserProfileDto from '~/dto/UserProfileDto';

let token = ref(null);
const headers = useRequestHeaders(["cookie"]);
const { data } = await useFetch("/api/token", { headers });
token.value = data;

definePageMeta({
  layout: "user"
})
</script>

<script>
import UserAddressesCard from "~/components/cards/UserAddressesCard"
import UserFeedbackStatisticsCard from '~/components/cards/UserFeedbackStatisticsCard';

export default defineNuxtComponent({
  components: { UserAddressesCard, UserFeedbackStatisticsCard },
  data() {
    const original = new UserProfileDto();

    return {
      activeTabIndex: 0,
      original,
      user: original.clone(),
      tab: null
    }
  },
  computed: {
    activeTab() {
      return ["Active Jobs", "Settings", "Debug"][this.activeTabIndex]
    }
  }
})
</script>
