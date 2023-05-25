<template>
  <b-container fluid>
    <b-row>
      <b-col
        cols="12"
        :class="{ 'd-flex align-items-center justify-content-around': $fetchState.pending || $fetchState.error }"
        :style="
          $fetchState.pending || $fetchState.error
            ? {
                'min-height': '200px'
              }
            : undefined
        "
      >
        <message-spinner v-if="$fetchState.pending || $fetchState.error" :message="$fetchState.error || undefined" />
        <b-form v-else>
          <b-card no-body>
            <b-card-header>
              <div class="d-flex align-items-center justify-content-between">
                <b-card-title>{{ $t("NAV__EDIT_COUNTRY") }}</b-card-title>
                <div class="card-tools"></div>
              </div>
            </b-card-header>
            <b-card-body>
              <b-container fluid>
                <b-row>
                  <b-col cols="12" md="6">
                    <pre><code>{{ backup.toJson() }}</code></pre>
                  </b-col>
                  <b-col cols="12" md="6">
                    <pre><code>{{ country.toJson() }}</code></pre>
                  </b-col>
                </b-row>
              </b-container>
              <b-form-group :label="$t('COUNTRIES.LABEL.COUNTRY_NAME')" label-for="country-name-input">
                <b-form-input id="country-name-input" v-model="country.countryName" />
              </b-form-group>
              <b-form-group :label="$t('COUNTRIES.LABEL.CONTINENT')" label-for="continent-input">
                <b-form-select id="continent-input" v-model="country.continent">
                  <b-form-select-option :value="null">
                    --- {{ $t("COUNTRIES.PLACEHOLDER.PICK_A_CONTINENT") }} ---
                  </b-form-select-option>
                  <b-form-select-option
                    v-for="continent in continents"
                    :key="`continent-form-option-${continent.continentCode}`"
                    :value="continent"
                  >
                    {{ continent.continentName }} ({{ continent.continentCode }})
                  </b-form-select-option>
                </b-form-select>
              </b-form-group>
              <b-form-group
                :label="$t('COUNTRIES.LABEL.TWO_LETTER_COUNTRY_CODE')"
                label-for="two-letter-country-code-input"
              >
                <b-form-input id="two-letter-country-code-input" v-model="country.twoLetterCountryCode" />
              </b-form-group>
              <b-form-group
                :label="$t('COUNTRIES.LABEL.THREE_LETTER_COUNTRY_CODE')"
                label-for="three-letter-country-code-input"
              >
                <b-form-input id="three-letter-country-code-input" v-model="country.threeLetterCountryCode" />
              </b-form-group>
              <b-form-group :label="$t('COUNTRIES.LABEL.COUNTRY_NUMBER')" label-for="country-number-input">
                <b-form-input id="country-number-input" v-model="country.countryNumber" />
              </b-form-group>
              <b-form-group :label="$t('COUNTRIES.LABEL.ENABLED')" label-for="enabled-input">
                <b-form-checkbox id="enabled-input" v-model="country.enabled" switch />
              </b-form-group>
            </b-card-body>
            <b-card-footer class="text-right">
              <b-btn variant="outline-danger" :disabled="resetDisabled" @click="onReset">
                {{ $t("GENERAL.LABEL.RESET") }}
              </b-btn>
              <b-btn variant="outline-secondary" :disabled="cancelDisabled" @click="onCancel">
                {{ $t("GENERAL.LABEL.CANCEL") }}
              </b-btn>
              <b-btn variant="primary" :disabled="saveDisabled" @click="onSave">
                {{ $t("GENERAL.LABEL.SAVE") }}
              </b-btn>
            </b-card-footer>
          </b-card>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import ContinentDto from "~/entity/Continent";
  import CountryDto from "~/entity/Country";

  export default {
    fetchOnServer: false,
    layout: "admin",
    data() {
      return {
        backup: null,
        country: null,
        continents: []
      };
    },
    async fetch() {
      this.country = null;
      await this.$axios
        .get(`/countries/${this.$route.params.id}`)
        .then(res => {
          this.country = new CountryDto(res.data);
          this.backup = this.country.clone();
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
      await this.$axios
        .get(`/continents`)
        .then(res => {
          this.continents = (res.data.content || []).map(continent => new ContinentDto(continent));
        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },
    computed: {
      cancelDisabled() {
        // const { backup, country } = this;
        return false;
      },
      resetDisabled() {
        const { backup, country } = this;

        return !backup || backup.equals(country);
      },
      saveDisabled() {
        const { backup, country } = this;

        return backup?.equals(country);
      }
    },
    methods: {
      onCancel() {
        this.$router.go(-1);
      },
      onReset() {
        this.country = this.backup.clone();
      },
      onSave() {
        this.$axios
          .post(`/countries/${this.country.id}`, this.country)
          .then(res => (this.country = new CountryDto(res.data)))
          .catch(error => {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
            console.log(error.config);
          });
      }
    }
  };
</script>
