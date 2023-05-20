<template>
  <div class="d-flex align-items-center justify-content-around" style="height: 100vh">
    <message-spinner :message="$t('AUTH.MESSAGE.AUTHORIZING')" show-ellipsis />
  </div>
</template>

<script>
  export default {
    components: {
      MessageSpinner: () => import("~/components/global/MessageSpinner.vue")
    },
    layout: "blank"
    // auth: "guest"
  };
</script>
