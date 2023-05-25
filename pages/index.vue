<template>
  <div class="d-flex align-items-center justify-content-around h-100">
    <b-card class="rounded-lg" body-bg-variant="dark" footer-bg-variant="dark" header-bg-variant="dark">
      <div>
        <h1>{{ $t("PAGE_TITLE__HOME") }}</h1>
      </div>
      <b-form>
        <b-form-group label="Postcode">
          <b-form-input id="postcode-input" class="custom-text-field" />
        </b-form-group>
      </b-form>
    </b-card>
  </div>
</template>

<script>
  export default {
    name: "HomePage",
    auth: false,
    layout: "home",
    computed: {
      height() {
        if (!process.client) return null;

        return window.innerHeight + "px";
      }
    }
  };
</script>

<style lang="scss">
  .custom-text-field {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid $white;
    border-radius: 0px;
  }
</style>
