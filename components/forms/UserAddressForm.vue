<template>
  <b-form @submit.stop.prevent="onSubmit">
    <b-row>
      <b-col cols="12" md="6">
        <b-form-group :label="$t('USER_ADDRESSES.LABEL.LABEL')">
          <b-form-input v-model="address.label" class="mb-2" />
          <b-form-text>{{ $t("USER_ADDRESSES.FIELD_TEXT.LABEL") }}</b-form-text>
        </b-form-group>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <b-col cols="12" lg="6" order="2" order-lg="1">
        <b-form-group class="mb-2" :label="$t('USER_ADDRESSES.LABEL.MAP')">
          <div class="position-relative" style="min-height: 390px">
            <MapboxMap
              id="mapbox-address-map"
              class="form-control"
              map-id="mapbox-address-map"
              :options="{
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: [address.longitude || 0, address.latitude || 0], // starting position
                zoom: 17
              }"
            >
              <MapboxDefaultMarker
                marker-id="address-marker"
                :lnglat="[address.longitude || 0, address.latitude || 0]"
                :options="{ draggable: true }"
                @dragend="onDragEnd"
              />
            </MapboxMap>
          </div>
        </b-form-group>

        <b-row>
          <b-col cols="12" sm="6">
            <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.LATITUDE')" label-for="latitude-input">
              <b-form-input id="latitude-input" v-model="address.latitude" :disabled="isEditing" />
            </b-form-group>
          </b-col>
          <b-col cols="12" sm="6">
            <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.LONGITUDE')" label-for="longitude-input">
              <b-form-input id="longitude-input" v-model="address.longitude" :disabled="isEditing" />
            </b-form-group>
          </b-col>
        </b-row>

        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.GOOGLE_PLACE_ID')" label-for="place-id-input">
          <b-form-input id="place-id-input" v-model="address.googlePlaceId" :disabled="isEditing" />
        </b-form-group>

        <b-form-group v-if="showDebug" class="mb-2" :label="$t('GENERAL.LABEL.DEBUG')">
          <pre-code>
            {{ address.toJSON ? address.toJSON() : address }}
          </pre-code>
        </b-form-group>
      </b-col>
      <b-col cols="12" lg="6" order="1" order-lg="2">
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.FIND_ADDRESS')">
          <GMapAutocomplete
            id="google-maps-autocomplete-input"
            :disabled="isEditing"
            class="form-control"
            :options="{
              bounds: {
                north: 59.53530451232491,
                south: 49.91865,
                east: 1.87697,
                west: -7.667
              },
              strictBounds: true,
              fields: [
                'address_components',
                'formatted_address',
                'geometry',
                'name',
                'place_id',
                'rating',
                'types',
                'user_ratings_total'
              ]
            }"
            @place_changed="setPlace"
          />
        </b-form-group>

        <b-form-group
          class="mb-3"
          :label="$t('USER_ADDRESSES.LABEL.ADDRESS_LINE_ONE')"
          label-for="address-line-one-input"
        >
          <b-form-input id="address-line-one-input" v-model="address.addressLineOne" :disabled="isEditing" />
        </b-form-group>
        <b-form-group
          class="mb-3"
          :label="$t('USER_ADDRESSES.LABEL.ADDRESS_LINE_TWO')"
          label-for="address-line-two-input"
        >
          <b-form-input id="address-line-two-input" v-model="address.addressLineTwo" :disabled="isEditing" />
        </b-form-group>
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.TOWN')" label-for="town-input">
          <b-form-input id="town-input" v-model="address.town" :disabled="isEditing" />
        </b-form-group>
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.COUNTY')" label-for="county-input">
          <b-form-input id="county-input" v-model="address.county" :disabled="isEditing" />
        </b-form-group>
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.POSTCODE')" label-for="postcode-input">
          <b-form-input id="postcode-input" v-model="address.postcode" :disabled="isEditing" />
        </b-form-group>
        <b-form-group class="mb-3" :label="$t('USER_ADDRESSES.LABEL.COUNTRY')">
          <b-form-select v-model="address.country" :disabled="isEditing">
            <b-form-select-option :value="null">--- Select a country ---</b-form-select-option>
            <b-form-select-option
              v-for="country in countriesStore.countries"
              :key="`country-select-option-${country.twoLetterCountryCode}`"
              :value="country"
              >{{ country.countryName }} ({{ country.twoLetterCountryCode }})</b-form-select-option
            >
          </b-form-select>
        </b-form-group>
      </b-col>
    </b-row>
    <div class="d-flex gap-2 justify-content-end">
      <b-button variant="outline-danger" @click="onReset">
        {{ $t("GENERAL.LABEL.RESET") }}
      </b-button>
      <b-button variant="outline-warning" @click="onCancel">
        {{ $t("GENERAL.LABEL.CANCEL") }}
      </b-button>
      <b-button type="submit" variant="success" class="text-light">
        {{ $t("GENERAL.LABEL.SUBMIT") }}
      </b-button>
    </div>
  </b-form>
</template>

<script setup>
  import { useCountriesStore } from "@/store/countries";
  const { t: $t } = useI18n();

  const props = defineProps({
    modelValue: {
      type: Object,
      required: true
    }
  });

  const countriesStore = useCountriesStore();
  countriesStore.FETCH_COUNTRIES({ showAll: true });

  const emit = defineEmits(["cancel", "reset", "submit", "update:model-value"]);

  const route = useRoute();

  const showDebug = computed(() => !!route.query.debug || true);

  const address = computed({
    get() {
      return props.modelValue;
    },
    set(address) {
      emit("update:model-value", address);
    }
  });
  const isEditing = computed(() => address && !!address.value?.id);

  const setPlace = _place => {
    if (typeof _place === "undefined") {
      return;
    }

    const addressComponents = _place.address_components;

    let streetNum = "";
    let route = "";
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
  };

  const onDragEnd = evt => {
    if (evt?.getLngLat) {
      const { lat, lng } = evt.getLngLat();

      address.value.latitude = lat;
      address.value.longitude = lng;
    }
  };

  const onCancel = () => {
    emit("cancel");
  };
  const onReset = () => {
    emit("reset");
  };
  const onSubmit = () => {
    emit("submit", address);
  };
</script>
