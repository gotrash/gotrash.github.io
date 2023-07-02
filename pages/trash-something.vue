<template>
  <b-container class="py-3">
    <b-row>
      <b-col order="2" order-lg="1" cols="12" lg="3">
        <b-card class="border border-success bg-gray-100" no-body>
          <b-card-header header-class="border border-success" header-bg-variant="success">FAQs</b-card-header>
          <b-card-body>
            <pre>
              <code>
{{ job.toJson && job.toJson() || job }}
              </code>
            </pre>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col order="1" order-lg="2" cols="12" lg="9">
        <b-container v-if="false" fluid>
          <b-row>
            <b-col cols="12">
              <h1>{{ $t("PAGE_TITLE__TRASH_SOMETHING") }}</h1>
            </b-col>
          </b-row>
        </b-container>
        <section>
          <b-card class="border border-success bg-gray-100" no-body>
            <b-card-header header-class="border border-success" header-bg-variant="success">
              Create a Job
            </b-card-header>
            <b-card-body>
              <job-form ref="form" v-model="job" show-cancel show-reset @submit="onSubmit" />
            </b-card-body>
          </b-card>
        </section>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Job from "~/dto/JobDto";
  import JobForm from "~/components/forms/JobForm";
  export default {
    name: "TrashSomething",
    components: { JobForm },
    middleware: ["has-providers"],
    data() {
      return {
        job: new Job({
          summary: "I'm a summary",
          detailedDescription:
            "I'm a very, very detailed description.  I'm such a good description, I should have an author tag.",
          isRecyclable: true,
          isBusiness: false,
          isBuilderWaste: false,
          isEasyAccess: true,
          loadSize: "SMALL"
        }),
        jobTypes: null
      };
    },
    fetch() {
      const getJobTypes = this.$axios.get("/job-types/all").then(res => {
        this.jobTypes = res.data;
      });

      return Promise.all([getJobTypes]);
    },
    methods: {
      onSubmit(job) {
        this.$axios
          .post("/jobs", job)
          .then(res => {
            console.log(res.data);

            this.job = new Job(res.data);
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
      }
    }
  };
</script>

<style lang="scss">
  .frontend-item-type-link {
    display: flex;
    flex-direction: column;
    .frontend-item-type-icon-wrapper {
      transition: 0.3s all;
      border: 2px solid $primary;
      border-radius: 50%;
      margin: 0 auto;
      text-align: center;
      align-items: center;
      color: #999;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      height: 100px;
      justify-content: center;
      margin: 0 auto 15px;
      width: 100px;
      > svg {
        font-size: 3em;
      }
      &:focus,
      &:hover {
        color: $primary;
      }
    }
  }
</style>
