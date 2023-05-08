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
    name: "CurrentUserPage"
  };
</script>
