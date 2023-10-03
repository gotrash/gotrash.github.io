<template>
  <b-container class="py-3" fluid>
    <b-row>
      <b-col v-if="false" cols="12">
        <h1 class="mb-3 h3">
          {{ $t("NAV__USER_PROFILE") }}
        </h1>
      </b-col>

      <b-col cols="12" xl="6">
        <user-feedback-statistics-card />

        <user-addresses-card />
      </b-col>
      <b-col cols="12" xl="6">
        <user-job-statistics-card />

        <b-tabs class="bg-white mb-3 card-primary card-outline" active-nav-item-class="bg-primary" nav-wrapper-class="p-2"
          pills content-class="bg-white" card v-model="activeTabIndex">
          <b-tab title="Active Jobs">
            <b-container fluid>
              <b-row>
                <b-col cols="12">
                  <b-form>
                    <b-form-row>
                      <b-col cols="12" lg="6">Left Col</b-col>
                      <b-col cols="12" lg="6">Right Col</b-col>
                    </b-form-row>
                  </b-form>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Settings">
            <b-container fluid>
              <b-row>
                <b-col cols="12">
                  <b-form>
                    <b-form-row>
                      <b-col cols="12" lg="6">Left Col</b-col>
                      <b-col cols="12" lg="6">Right Col</b-col>
                    </b-form-row>
                  </b-form>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
          <b-tab title="Debug">
            <b-container fluid>
              <b-row>
                <b-col cols="12" sm="6">
                  <pre class="mb-0 pb-0" v-if="original">
                    <code>
{{ original.toJson ? original.toJson() : original }}
                    </code>
                  </pre>
                </b-col>
                <b-col cols="12" sm="6">
                  <pre class="mb-0 pb-0" v-if="user">
                    <code>
{{ user.toJson ? user.toJson() : user }}
                    </code>
                  </pre>
                </b-col>
              </b-row>
            </b-container>
          </b-tab>
        </b-tabs>


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
import UserJobStatisticsCard from '~/components/cards/UserJobStatisticsCard';

export default defineNuxtComponent({
  components: { UserAddressesCard, UserFeedbackStatisticsCard, UserJobStatisticsCard },
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
