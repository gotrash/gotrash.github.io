<template>
    <message-spinner v-if="loading">Loading</message-spinner>
    <b-container class="py-3" v-else fluid>
      <b-row>
        <b-col cols="12" sm="10" md="8" xl="6" offset-sm="1" offset-md="2" offset-xl="3">
          <pre v-if="user && showProfile">
            <code>
  {{ user }}
            </code>
          </pre>
          <pre v-if="err">
            <code>
  {{ err }}
            </code>
          </pre>
          <pre v-if="token">
            <code>
  {{ token }}
            </code>
          </pre>
          <b-button @click="onToggleProfile">Toggle Profile</b-button>
          <b-button @click="onClearData">Clear Data</b-button>
          <b-button @click="onGetData">Get Data</b-button>
        </b-col>
      </b-row>
    </b-container>
</template>

<script setup>
  definePageMeta({
    layout: "user"
  })
  let showProfile = ref(false);
  let err = ref(null);
  let loading = ref(false);
  let user = ref(null);
  let test = ref(null);
  let token = ref(null);
  const headers = useRequestHeaders(["cookie"]);
  const { data } = await useFetch("/api/token", { headers });
  token.value = data;

  const onToggleProfile = () => {
    showProfile.value = !showProfile.value;

    if (!showProfile.value && (!user.value || user === "null")) {
      onGetData();
    }
  };

  const onClearData = () => {
    user.value = null;
  };

  const onGetData = async () => {
    loading.value = true;
    const { getSession } = useAuth();
    const session = await getSession();

    useFetch("http://localhost:9000/userinfo", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.session?.access_token}`
      }
    })
      .then(res => {
        user.value = res.data;

        err.value = null;
        console.log("Success");
      })
      .catch(err => {
        console.log("An error occurred");
        err.value = err;
      })
      .finally(() => {
        loading.value = false;
        console.log("Finally");
      });
  };

  onGetData();
</script>

<script>
import MessageSpinner from "~/global/components/MessageSpinner";

export default {
  layout: "user",
  components: {
    MessageSpinner
  }
}
</script>
