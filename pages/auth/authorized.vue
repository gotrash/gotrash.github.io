<template>
  <div class="d-flex align-items-center justify-content-around" style="height: 100vh">
    <message-spinner :message="$t('AUTH.MESSAGE.AUTHORIZING')" show-ellipsis />
  </div>
</template>

<script>
  export default {
    layout: "blank"
  };
</script>
