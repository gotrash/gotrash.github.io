<template>
  <div>
    <div
      class="d-flex align-items-center pb-10 position-relative"
      :style="{
        'background-image': `url(${headerBg})`,
        'background-size': 'cover',
        'background-position': 'center center',
        'background-attachment': 'fixed',
        'padding-top': '12.75rem'
      }"
    >
      <div class="overlay"></div>
      <b-container>
        <b-row v-if="!sent">
          <b-col cols="12" md="8" offset-md="2" xl="6" offset-xl="3">
            <b-card
              class="rounded-lg"
              body-bg-variant="gray-300"
              footer-bg-variant="light"
              header-bg-variant="light"
              style="margin: 0 auto 1rem"
            >
              <site-logo class="d-block mb-3 mx-auto" color="#1D1D1D" />
              <b-container class="py-3" fluid>
                <b-row>
                  <b-col>
                    <b-form>
                      <b-form-group label="Waste Type" label-for="job-type-input" label-cols-sm="4" class="mb-3">
                        <b-input-group id="job-type-input">
                          <b-form-select v-model="jobDetails.wasteType" name="wasteType">
                            <b-form-select-option
                              v-if="!jobDetails.wasteType"
                              :value="null"
                              :disabled="jobDetails.wasteType"
                            >
                              --- Please Select an Option ---
                            </b-form-select-option>
                            <b-form-select-option
                              v-for="wasteType in wasteTypes"
                              :key="wasteType.key"
                              :value="wasteType"
                            >
                              {{ wasteType.label }}
                            </b-form-select-option>
                          </b-form-select>
                          <b-form-select
                            v-if="jobDetails.wasteType?.hasOwnProperty('types')"
                            v-model="jobDetails.wasteSubType"
                            name="wasteSubType"
                          >
                            <b-form-select-option
                              v-if="!jobDetails.wasteSubType"
                              :disabled="jobDetails.wasteSubType"
                              :value="null"
                            >
                              --- Please Select an Option ---
                            </b-form-select-option>
                            <b-form-select-option
                              v-for="subType in jobDetails.wasteType.types"
                              :key="subType.key"
                              :value="subType"
                            >
                              {{ subType.label }}
                            </b-form-select-option>
                          </b-form-select>
                        </b-input-group>
                      </b-form-group>
                      <b-form-group label="Details" label-for="job-details-input" label-cols-sm="4" class="mb-3">
                        <b-form-textarea
                          id="job-details-input"
                          v-model="jobDetails.details"
                          name="details"
                          :disabled="!isDetailsEnabled"
                        ></b-form-textarea>
                      </b-form-group>
                      <b-form-group label="Date" label-for="job-date-input" label-cols-sm="4" class="mb-3">
                        <b-input-group>
                          <b-form-select
                            id="job-date-input"
                            v-model="jobDetails.dateDeterminer"
                            name="date"
                            :disabled="!isDateEnabled || jobDetails.anyDate"
                          >
                            <b-form-select-option
                              v-if="!jobDetails.dateDeterminer"
                              :value="null"
                              :disabled="jobDetails.dateDeterminer"
                            >
                              --- Please Select an Option ---
                            </b-form-select-option>
                            <b-form-select-option :value="DateDeterminers.BEFORE">
                              Needs moving before
                            </b-form-select-option>
                            <b-form-select-option :value="DateDeterminers.ON"> Move on this date </b-form-select-option>
                            <b-form-select-option :value="DateDeterminers.AFTER">
                              Available to move after
                            </b-form-select-option>
                          </b-form-select>
                          <b-form-input
                            id=""
                            v-model="jobDetails.requiredDate"
                            type="date"
                            :disabled="jobDetails.anyDate || !jobDetails.dateDeterminer"
                            min="2024-01-29"
                          />
                        </b-input-group>
                        <b-form-text>
                          <b-form-checkbox
                            id="job-date-any-checkbox"
                            v-model="jobDetails.anyDate"
                            :disabled="!isDateEnabled"
                            switch
                          >
                            As Soon As Possible
                          </b-form-checkbox>
                        </b-form-text>
                      </b-form-group>
                      <b-form-group label="Time" label-for="job-time-input" label-cols-sm="4" class="mb-3">
                        <b-input-group>
                          <b-form-select
                            id="job-time-input"
                            v-model="jobDetails.timeDeterminer"
                            name="time"
                            :disabled="!isTimeEnabled || jobDetails.anyTime"
                          >
                            <b-form-select-option
                              v-if="!jobDetails.timeDeterminer"
                              :value="null"
                              :disabled="jobDetails.timeDeterminer"
                            >
                              --- Please Select an Option ---
                            </b-form-select-option>
                            <b-form-select-option :value="TimeDeterminers.AFTER">
                              It's only access after
                            </b-form-select-option>
                            <b-form-select-option :value="TimeDeterminers.BEFORE">
                              It's only accessible before
                            </b-form-select-option>
                          </b-form-select>
                          <b-form-input
                            v-model="jobDetails.requiredTime"
                            type="time"
                            :disabled="jobDetails.anyTime || !jobDetails.timeDeterminer"
                            min="06:00"
                            step="5 * 60 * 60"
                          />
                        </b-input-group>
                        <b-form-text>
                          <b-form-checkbox
                            id="job-time-any-checkbox"
                            v-model="jobDetails.anyTime"
                            :disabled="!isTimeEnabled"
                            switch
                          >
                            Any Time
                          </b-form-checkbox>
                        </b-form-text>
                      </b-form-group>
                      <b-form-group label="Notes" label-for="job-notes-input" label-cols-sm="4" class="mb-3">
                        <b-form-textarea v-model="jobDetails.notes" :disabled="!isNotesEnabled"></b-form-textarea>
                      </b-form-group>
                      <b-form-group label="Images" label-for="job-notes-input" label-cols-sm="4" class="mb-3">
                        <b-form-file v-model="jobDetails.images" :disabled="!isNotesEnabled" multiple />
                      </b-form-group>
                      <div class="d-flex justify-content-end align-items-center">
                        <b-button @click="onSubmit">Submit</b-button>
                      </div>
                    </b-form>
                  </b-col>
                </b-row>
              </b-container>
            </b-card>
          </b-col>
        </b-row>
        <b-row v-else-if="sent">
          <b-col cols="12" lg="8" offset-lg="2" xl="6" offset-xl="3">
            <b-card
              class="rounded-lg"
              body-bg-variant="gray-300"
              footer-bg-variant="light"
              header-bg-variant="light"
              style="margin: 0 auto 1rem"
            >
              <b-container fluid>
                <b-row>
                  <b-col cols="12">
                    <pre-code v-model="jobDetails" />
                    <B-button @click="onUnSubmit">Un-send</B-button>
                  </b-col>
                </b-row>
              </b-container>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script setup>
  import { DateDeterminers, TimeDeterminers } from "~/constants";
  import SiteLogo from "~/components/SiteLogo";

  definePageMeta({
    layout: "home"
  });
</script>

<script>
  import headerBg from "~/assets/images/rubbish-truck.jpg";

  export default {
    data() {
      return {
        headerBg,
        jobDetails: {
          anyDate: false,
          anyTime: false,
          dateDeterminer: null,
          details: "",
          images: [],
          notes: "",
          requiredDate: null,
          requiredTime: "12:00",
          timeDeterminer: null,
          wasteType: null,
          wasteSubType: null
        },
        sent: false,
        submitted: false,
        wasteTypes: [
          {
            key: "FURNITURE_WHITEGOODS",
            label: "Furniture & White Goods"
          },
          {
            key: "BOXES",
            label: "Boxes"
          },
          {
            key: "VEHICLES",
            label: "Vehicles",
            types: [
              { key: "BOAT", label: "Boat" },
              { key: "CAR", label: "Car" },
              { key: "MOTORCYCLE", label: "Motorcycle" },
              { key: "OTHER_VEHICLE", label: "Other Vehicle" },
              { key: "VEHICLE_PARTS", label: "Vehicle Parts" }
            ]
          },
          {
            key: "HOUSE_CLEARANCE",
            label: "House Clearance"
          },
          {
            key: "PIANOS",
            label: "Pianos"
          },
          {
            key: "OTHER",
            label: "Other"
          }
        ]
      };
    },
    computed: {
      isDateEnabled() {
        /**
         * The date field should be enabled if the details field is enabled and a non-null value
         */
        const { isDetailsEnabled, jobDetails } = this;

        return isDetailsEnabled && jobDetails.details?.length > 0;
      },
      isDetailsEnabled() {
        /**
         * The details field should fbe enabled if the user has chosen a waste type and either:
         *
         * * The chosen waste type DOES NOT have any sub-types
         * * The user has chosen a valid sub-type from the chosen waste type
         */
        const { jobDetails } = this;

        return jobDetails.wasteType && (!jobDetails.wasteType.hasOwnProperty("types") || jobDetails.wasteSubType);
      },
      isNotesEnabled() {
        /**
         * The notes field should be enabled if the time field is enabled and either:
         *
         * * A valid time AND time determiner has been selected
         * * The user has selected the "Any Time" option
         */
        const { isTimeEnabled, jobDetails } = this;

        return isTimeEnabled && ((jobDetails.timeDeterminer && jobDetails.time) || jobDetails.anyTime);
      },
      isTimeEnabled() {
        /**
         * The time field should be enabled if the date field is enabled and either:
         *
         * * A valid date AND date determiner has been selected
         * * The user has selected the "As Soon As Possible" option
         */
        const { isDateEnabled, jobDetails } = this;

        return isDateEnabled && ((jobDetails.dateDeterminer && jobDetails.date) || jobDetails.anyDate);
      }
    },
    methods: {
      onSubmit() {
        // this.submitted = true;
        // this.sent = true;
      },
      onUnSubmit() {
        this.submitted = false;
        this.sent = false;
      },
      onProvidersFound() {}
    }
  };
</script>

<style lang="scss" scoped>
  @import "node_modules/bootstrap/scss/functions";
  @import "~/assets/scss/variables";
  @import "node_modules/bootstrap/scss/variables";
  @import "node_modules/bootstrap/scss/variables-dark";

  .custom-text-field {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid $dark;
    border-radius: 0px;
  }

  .overlay {
    z-index: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: auto;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.7);
    /*can be anything, of course*/
  }
</style>
