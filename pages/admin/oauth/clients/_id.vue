<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <pre>
          <code>
            {{ client }}
          </code>
        </pre>
        <b-btn @click="onSave">Save</b-btn>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    fetchOnServer: false,
    layout: "admin",
    data() {
      return {
        client: "No Client"
      };
    },
    async fetch() {
      console.log(this.$route);
      await this.$axios
        .get(`/oauth/clients/${this.$route.params.id}`)
        .then(res => {
          this.client = res.data;
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
    methods: {
      onSave() {
        this.$axios
          .post(`/oauth/clients/${this.client.id}`, this.client)
          .then(res => (this.client = res.data))
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
