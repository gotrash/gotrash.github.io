<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <b-container fluid>
          <b-row>
            <b-col cols="12" md="6">
              <pre><code>{{original.toJson ? original.toJson() : original}}</code></pre>
            </b-col>
            <b-col cols="12" md="6">
              <pre><code>{{jobType.toJson ? jobType.toJson() : jobType}}</code></pre>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <b-card-title>{{ $t("PAGE_TITLE__EDIT_JOB_TYPE") }}</b-card-title>
          </b-card-header>
          <b-card-body>
            <job-type-form v-model="jobType" :job-types="jobTypes" />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import JobType from "~/entity/JobType";
  export default {
    components: {
      JobTypeForm: () => import("~/components/forms/JobTypeForm")
    },
    layout: "admin",
    data() {
      const jobType = new JobType();
      return {
        original: jobType.clone(),
        jobType,
        jobTypes: []
      };
    },
    async fetch() {
      this.jobTypes = await this.$axios.get("/job-types/all").then(res => res.data);
    },
    computed: {
      jobTypeOptions() {
        return this.jobTypes.map(jobType => {
          return {
            value: jobType,
            text: this.$t(`JOB_TYPES.LABEL.${jobType.machineName}`)
          };
        });
      }
    }
  };
</script>
