<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <pre>
          <code>
            {{ $auth?.user }}
          </code>
        </pre>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: "CurrentUserPage",
    layout: "admin",
    mounted() {
      this.$axios.get("http://localhost:9000/userinfo").then(res => {
        console.log(res.data);
      });
    }
  };
</script>
