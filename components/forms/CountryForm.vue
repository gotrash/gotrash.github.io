<template>
  <b-form id="country-form">
    <b-form-group :label="$t('COUNTRIES.LABEL.COUNTRY_NAME')" label-for="country-name-input">
      <b-form-input id="country-name-input" v-model="form.countryName" form="country-form" name="country-name" />
    </b-form-group>
    <b-form-group :label="$t('COUNTRIES.LABEL.TWO_LETTER_COUNTRY_CODE')" label-for="two-letter-country-code-input">
      <b-form-input
        id="two-letter-country-code-input"
        v-model="form.twoLetterCountryCode"
        form="country-form"
        name="two-letter-country-code"
        :max="2"
      />
    </b-form-group>
    <b-form-group :label="$t('COUNTRIES.LABEL.THREE_LETTER_COUNTRY_CODE')" label-for="three-letter-country-code-input">
      <b-form-input
        id="three-letter-country-code-input"
        v-model="form.threeLetterCountryCode"
        form="country-form"
        name="three-letter-country-code"
        :max="3"
      />
    </b-form-group>
    <b-form-group :label="$t('COUNTRIES.LABEL.COUNTRY_NUMBER')" label-for="country-number-input">
      <b-form-input
        id="country-number-input"
        v-model="form.countryNumber"
        form="country-form"
        name="country-number"
        type="number"
      />
    </b-form-group>
    <b-form-group :label="$t('COUNTRIES.LABEL.ENABLED')" label-for="enabled-input">
      <b-form-checkbox id="enabled-input" v-model="form.enabled" form="country-form" name="enabled" />
    </b-form-group>
    <b-form-group :label="$t('COUNTRIES.LABEL.CONTINENT')" label-for="continent-input">
      <b-form-select id="continent-input" v-model="form.continentCode" form="country-form" name="continent-code">
        <b-form-select-option :value="null">--- Please select a continent ---</b-form-select-option>
        <b-form-select-option
          v-for="continent in continents"
          :key="`continent-option-${continent.continentCode}`"
          :value="continent.continentCode"
        >
          {{ continent.continentName }}
        </b-form-select-option>
      </b-form-select>
    </b-form-group>
  </b-form>
</template>

<script>
  import { ModelValidator, Validations } from "~/forms/CountryForm";
  import { IsFormComponent } from "~/mixins";

  export default {
    name: "CountryForm",
    mixins: [IsFormComponent],
    props: {
      continents: {
        type: Array,
        required: true,
        validator: continents => Array.isArray(continents) && continents.length > 0
      },
      value: {
        type: Object,
        required: true,
        validator: ModelValidator
      }
    },
    validations: Validations
  };
</script>
