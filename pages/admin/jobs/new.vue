<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <b-card-title> {{ $t("GENERAL.LABEL.DEBUG") }} </b-card-title>
          </b-card-header>
          <b-card-body>
            <b-container fluid>
              <b-row>
                <b-col cols="12" md="6">
                  <pre><code>{{original.toJson ? original.toJson() : job}}</code></pre>
                </b-col>
                <b-col cols="12" md="6">
                  <pre><code>{{job.toJson ? job.toJson() : job}}</code></pre>
                </b-col>
              </b-row>
            </b-container>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-header>
            <b-card-title> {{ $t("NAV__NEW_JOB") }} </b-card-title>
          </b-card-header>
          <b-card-body>
            <b-form>
              <b-form-group :label="$t('JOBS.LABEL.JOB_TYPE')" :label-for="`job-type-select`">
                <b-form-select id="job-type-select" v-model="job.jobType" :options="jobTypeOptions" />
              </b-form-group>
              <b-form-group :label="$t('JOBS.LABEL.ASSIGNEE')" :label-for="`assignee-select`">
                <b-form-select id="assignee-select" disabled plaintext readonly />
              </b-form-group>
              <b-form-group :label="$t('JOBS.LABEL.CREATOR')" :label-for="`creator-select`">
                <b-form-select id="creator-select" disabled plaintext readonly />
              </b-form-group>
              <b-form-group :label="$t('JOBS.LABEL.START_DATE_REQUIRED')" label-for="start-date-required-input">
                <b-form-input id="start-date-required-input" v-model="job.startDateRequired" />
              </b-form-group>
              <b-form-group :label="$t('JOBS.LABEL.END_DATE_REQUIRED')" label-for="end-date-required-input">
                <b-form-input id="end-date-required-input" v-model="job.createdAt" />
              </b-form-group>
              <b-form-group :label="$t('JOBS.LABEL.CREATED_AT')" label-for="created-at-input">
                <b-form-input v-model="job.createdAt" disabled plaintext readonly />
              </b-form-group>
              <b-form-group :label="$t('JOBS.LABEL.UPDATED_AT')" label-for="updated-at-input">
                <b-form-input id="updated-at-input" v-model="job.updatedAt" disabled plaintext readonly />
              </b-form-group>
              <b-form-group :label="$t('JOBS.LABEL.PUBLISHED_AT')" label-for="published-at-input">
                <b-form-input id="published-at-input" v-model="job.publishedAt" disabled plaintext readonly />
              </b-form-group>
            </b-form>

            <b-card no-body>
              <b-card-header>
                <b-card-title>Job Items</b-card-title>
              </b-card-header>
              <b-card-body>
                <b-container fluid>
                  <b-row>
                    <b-col class="py-5 d-flex align-items-center text-center justify-content-around" cols="12">
                      <b-btn variant="outline-primary" @click="onAddItem">
                        <fa-icon icon="plus" class="fa-2x m-2" /><br />
                        <span class="mb-2">
                          {{ $t("JOBS.LABEL.ADD_ITEM") }}
                        </span>
                      </b-btn>
                    </b-col>
                  </b-row>
                  <b-row v-for="(item, itemIndex) in job.items" :key="`job-item-${itemIndex + 1}`">
                    <b-col cols="12">
                      <div class="d-flex align-items-center justify-content-between">
                        <div>Item {{ item.id }}</div>
                        <div>
                          <b-btn @click="onDeleteItem(itemIndex)">Delete Item</b-btn>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </b-container>
              </b-card-body>
            </b-card>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Job from "~/entity/Job";
  export default {
    fetchOnServer: false,
    layout: "admin",
    data() {
      const job = new Job();

      return {
        editing: false,
        original: job.clone(),
        job,
        jobTypes: []
      };
    },
    async fetch() {
      this.jobTypes = await this.$axios.get("/job-types/all").then(res => res.data);
    },
    computed: {
      jobTypeOptions() {
        const jobTypeOptions = [{ value: null, text: "Please select a job type" }];

        jobTypeOptions.push(
          ...this.jobTypes.map(jt => {
            return { value: jt.id, text: this.$t(`JOB_TYPES.TYPE.${jt.machineName}`) };
          })
        );

        return jobTypeOptions;
      }
    },
    mounted() {},
    methods: {
      onAddItem() {
        const maxId = Math.max(
          ...this.job.items.map(i => {
            console.log(i, i.id);

            return i.id;
          })
        );

        const id = maxId === -Infinity ? 1 : maxId + 1;
        this.job.items.push({ id, order: id });
      },
      onDeleteItem(itemIndex) {
        this.job.items.splice(itemIndex, 1);
      }
    }
  };
</script>
