<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        {{ $spatial }}
        <pre>
          <code>
{{ user }}
          </code>
        </pre>
        <b-button @click="onClearData">Clear Data</b-button>
        <b-button @click="onGetData">Get Data</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "CurrentUserPage",
    data() {
      return {
        user: null
      };
    },
    methods: {
      onClearData() {
        this.user = null;
      },
      async onGetData() {
        const { getSession } = useAuth();
        const session = await getSession();

        const { data: response } = await useFetch("http://localhost:9000/userinfo", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${session.session.access_token}`
          }
        });

        console.log("Response: %o", response);

        this.user = response;

        await this.$nextTick(() => {
          return Promise.resolve();
        });
      }
    }
    // layout: "admin"
  };
</script>
