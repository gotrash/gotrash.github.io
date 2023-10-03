<template>
  <b-container class="py-3" fluid>
    <b-row>
      <b-col>
        <b-card class="mb-3" no-body>
          <b-card-header>Addresses</b-card-header>
        </b-card>
        <b-container class="p-0" fluid>
          <GMapAutocomplete placeholder="This is a placeholder" @place_changed="setPlace">
          </GMapAutocomplete>
          <message-spinner v-if="loading || deleting">{{ deleting ? "Deleting" : "Loading" }}...</message-spinner>
          <b-row v-else-if="addresses && showProfile">
            <b-col v-for="(add, addIndex) in addresses.value" :key="addIndex" cols="12" md="6" lg="4" xl="3">
              <b-card class="mb-3" no-body>
                <b-card-header class="d-flex align-items-center justify-content-between">
                  <span>{{ add.label }}</span>
                  <b-button class="p-1" role="button" @click="() => onDeleteLocation(add.id)">
                    <fa-icon icon="times" />
                  </b-button>
                </b-card-header>
                <b-card-body>
                  <div class="d-flex justify-content-between align-items-start flex-column">
                    <address>
                      <div v-if="add.addressLineOne">{{ add.addressLineOne }},<br /></div>
                      <div v-if="add.addressLineTwo">{{ add.addressLineTwo }},<br /></div>
                      <div v-if="add.town">{{ add.town }},<br /></div>
                      <div v-if="add.county">{{ add.county }},<br /></div>
                      <div>{{ add.postcode }}.<br /><br /></div>

                      <div v-if="add.latitude || add.longitude">{{ add.latitude || add.longitude }}<span
                          v-if="add.longitude && add.latitude">/{{ add.longitude }}</span> <br /><br /></div>

                      {{ add.enabled ? "Enabled" : "" }}
                    </address>
                    <div class="mb-3" v-if="add.country">
                      {{ add.country.countryName }} ({{ add.country.twoLetterCountryCode }})
                    </div>
                  </div>

                </b-card-body>
              </b-card>
            </b-col>

          </b-row>
        </b-container>
      </b-col>
    </b-row>
    <b-button @click="onToggleProfile">Toggle Profile</b-button>
    <b-button @click="onClearData">Clear Data</b-button>
    <b-button @click="onGetData">Get Data</b-button>
    <b-button @click="onLogThis">Log This</b-button>
  </b-container>
</template>

<script setup>
import MessageSpinner from "~/global/components/MessageSpinner";
definePageMeta({
  layout: "user"
})

let showProfile = ref(true);
let err = ref(null);
let deleting = ref(false);
let loading = ref(false);
let addresses = ref([]);

const onDeleteLocation = async id => {
  deleting.value = true;

  const { getSession } = useAuth();
  const session = await getSession();

  await useFetch(`http://localhost:8090/user/locations/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${session?.session?.access_token}`
    }
  }).then(async () => {
    await onGetData();
  }).catch(err => {
    console.error(err);
  }).finally(() => {
    deleting.value = false;
  })
}

const onToggleProfile = () => {
  showProfile.value = !showProfile.value;

  if (!showProfile.value && (!addresses.value || user === "null")) {
    onGetData();
  }
};

const onClearData = () => {
  addresses.value = [];
};

const onGetData = async () => {
  loading.value = true;
  const { getSession } = useAuth();
  const session = await getSession();

  useFetch("http://localhost:8090/user/locations", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session?.session?.access_token}`
    }
  })
    .then(res => {
      addresses.value = res?.data === "null" ? [] : res.data;

      err.value = null;
    })
    .then(() => {
    })
    .catch(err => {
      console.log("An error occurred");
      err.value = err;
    })
    .finally(() => {
      loading.value = false;
      nextTick(() => {
        console.log(addresses.value.length)
        console.log(addresses.value[0])

      })
    });
};

onGetData();
</script>

<script>
export default {
  methods: {
    onLogThis() {
      console.log(this.$bvModal);
    },
    setPlace(place) {
      console.log("Place: %o", place);
    }
  }
}
</script>
