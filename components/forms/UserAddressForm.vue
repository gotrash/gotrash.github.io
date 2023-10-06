<template>
  <b-form @submit.stop.prevent="onSubmit">
    <b-row>
      <b-col cols="12" md="6">
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.LABEL')">
          <b-form-input class="mb-2" v-model="address.label" />
          <b-form-text>{{ $t("USER_ADDRESSES.FIELD_TEXT.LABEL") }}</b-form-text>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" lg="6" order="2" order-lg="1">
        <b-form-group class="mb-2" :label="$t('USER_ADDRESSES.LABEL.MAP')">
          <div class="position-relative" style="min-height: 390px">
            <MapboxMap class="form-control" id="mapbox-address-map" map-id="mapbox-address-map" :options="{
              style: 'mapbox://styles/mapbox/streets-v12', // style URL
              center: [address.longitude || 0, address.latitude || 0], // starting position
              zoom: 17
            }
              ">
              <MapboxDefaultMarker marker-id="address-marker" @dragend="onDragEnd"
                :lnglat="[address.longitude || 0, address.latitude || 0]" :options="{ draggable: true }" />
            </MapboxMap>

          </div>
        </b-form-group>

        <b-row>
          <b-col cols="12" sm="6">
            <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.LATITUDE')" label-for="latitude-input">
              <b-form-input :disabled="isEditing" v-model="address.latitude" id="latitude-input" />
            </b-form-group>
          </b-col>
          <b-col cols="12" sm="6">
            <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.LONGITUDE')" label-for="longitude-input">
              <b-form-input :disabled="isEditing" v-model="address.longitude" id="longitude-input" />
            </b-form-group>
          </b-col>
        </b-row>



        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.GOOGLE_PLACE_ID')" label-for="place-id-input">
          <b-form-input :disabled="isEditing" v-model="address.googlePlaceId" id="place-id-input" />
        </b-form-group>

        <b-form-group v-if="showDebug" class="mb-2" :label="$t('GENERAL.LABEL.DEBUG')">
          <pre-code>
            {{ address }}
          </pre-code>
        </b-form-group>
      </b-col>
      <b-col cols="12" lg="6" order="1" order-lg="2">
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.FIND_ADDRESS')">
          <GMapAutocomplete :disabled="isEditing" class="form-control" id="google-maps-autocomplete-input"
            @place_changed="setPlace" :options="{
              bounds: {
                north: 59.53530451232491,
                south: 49.91865,
                east: 1.87697,
                west: -7.66700
              },
              strictBounds: true,
              fields: [
                'address_components',
                'formatted_address',
                'geometry', 'name', 'place_id',
                'rating',
                'types',
                'user_ratings_total'
              ]
            }" />
        </b-form-group>

        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.ADDRESS_LINE_ONE')"
          label-for="address-line-one-input">
          <b-form-input :disabled="isEditing" v-model="address.addressLineOne" id="address-line-one-input" />
        </b-form-group>
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.ADDRESS_LINE_TWO')"
          label-for="address-line-two-input">
          <b-form-input :disabled="isEditing" v-model="address.addressLineTwo" id="address-line-two-input" />
        </b-form-group>
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.TOWN')" label-for="town-input">
          <b-form-input :disabled="isEditing" v-model="address.town" id="town-input" />
        </b-form-group>
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.COUNTY')" label-for="county-input">
          <b-form-input :disabled="isEditing" v-model="address.county" id="county-input" />
        </b-form-group>
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.POSTCODE')" label-for="postcode-input">
          <b-form-input :disabled="isEditing" v-model="address.postcode" id="postcode-input" />
        </b-form-group>
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.COUNTRY')">
          <b-form-select :disabled="isEditing" v-model="address.country">
            <b-form-select-option :value="null">--- Select a country ---</b-form-select-option>
            <b-form-select-option v-for="country in countriesStore.countries" :value="country">{{ country.countryName }}
              ({{ country.twoLetterCountryCode }})</b-form-select-option>
          </b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <div class="d-flex gap-2 justify-content-end">
      <b-button @click="onReset" variant="outline-danger">
        {{ $t("GENERAL.LABEL.RESET") }}
      </b-button>
      <b-button @click="onCancel" variant="outline-warning">
        {{ $t("GENERAL.LABEL.CANCEL") }}
      </b-button>
      <b-button type="submit" variant="success" class="text-light">
        {{ $t("GENERAL.LABEL.SUBMIT") }}
      </b-button>
    </div>
  </b-form>
</template>

<script setup>
import { useCountriesStore } from '@/store/countries';
const { t: $t } = useI18n();

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  }
})

const original = ref({ ...props.modelValue })

const countriesStore = useCountriesStore();
countriesStore.FETCH_COUNTRIES({ showAll: true })

const emit = defineEmits(["cancel", "reset", "submit", "update:model-value"])

const route = useRoute();

const showDebug = computed(() => !!route.query.debug || true)

const address = computed({
  get() {
    return props.modelValue
  },
  set(address) {
    emit("update:model-value", address)
  }
})
const isEditing = computed(() => address && !!address.value?.id)

const setPlace = _place => {
  if (typeof _place === "undefined") {
    return;
  }

  const addressComponents = _place.address_components;

  let streetNum = "";
  let route = ""; ``
  let address2 = "";
  let country = "";

  for (let i = 0; i < addressComponents.length; i++) {
    switch (addressComponents[i].types[0]) {
      case "postal_code":
        address.value.postcode = addressComponents[i].long_name;
        break;
      case "postal_town":
        address.value.town = addressComponents[i].long_name;
        break;
      case "administrative_area_level_2":
        address.value.county = addressComponents[i].long_name;
        break;
      case "street_number":
        streetNum = addressComponents[i].long_name;
        break;
      case "route":
        route = addressComponents[i].long_name;
        break;
      case "neighborhood":
        address2 = addressComponents[i].long_name;
        break;
      case "locality":
        address2 = addressComponents[i].long_name;
        break;
      case "premise":
        address2 = addressComponents[i].long_name;
        break;
      case "country":
        country = addressComponents[i].short_name;
        break;
    }
  }

  address.value.addressLineOne = streetNum + " " + route;
  address.value.addressLineTwo = address2;
  address.value.country = countriesStore.countries.find(c => c.twoLetterCountryCode === country);
  address.value.googlePlaceId = _place.place_id;

  address.value.latitude = _place.geometry.location.lat();
  address.value.longitude = _place.geometry.location.lng();
}

const onDragEnd = evt => {
  if (evt?.getLngLat) {
    const { lat, lng } = evt.getLngLat();

    address.value.latitude = lat;
    address.value.longitude = lng;
  }
}

const onCancel = evt => {
  emit("cancel")
}
const onReset = evt => {
  emit("reset")
}
const onSubmit = evt => {
  emit("submit", address)
}
</script>
