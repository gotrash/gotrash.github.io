<template>
  <div class="login-box">
    <h1>{{ $t("PAGE_TITLE__SIGNUP") }}</h1>
    <b-card>
      <auth-card-header />
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "SignupPage",
    components: {
      AuthCardHeader: () => import("~/components/global/AuthCardHeader")
    },
    layout: "auth"
  };
</script>
