<template>
  <div>
    <div
      class="d-flex align-items-center pb-10 position-relative"
      :style="{
        'background-image': `url(${headerBg})`,
        'background-size': 'cover',
        'background-position': 'center center',
        'background-attachment': 'fixed',
        'padding-top': '12.75rem'
      }"
    >
      <div class="overlay"></div>
      <b-container fluid>
        <b-row>
          <b-col cols="12" sm="6" offset-sm="3" lg="4" offset-lg="4">
            <b-card
              class="rounded-lg"
              body-bg-variant="gray-300"
              footer-bg-variant="light"
              header-bg-variant="light"
              style="max-width: 420px; margin: 0 auto 1rem"
            >
              <site-logo class="d-block mb-3 mx-auto" color="#1D1D1D" />
              <postcode-checker ref="postcode-checker" @providers-found="onProvidersFound" />
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
  import headerBg from "~/assets/images/rubbish-truck.jpg";

  definePageMeta({
    layout: "home"
  });

  export default {
    data() {
      return {
        headerBg,
        submitted: false
      };
    },
    methods: {
      onSubmit() {
        this.submitted = true;
      },
      onProvidersFound() {}
    }
  };
</script>

<style lang="scss">
  @import "node_modules/bootstrap/scss/functions";
  @import "~/assets/scss/variables";
  @import "node_modules/bootstrap/scss/variables";
  @import "node_modules/bootstrap/scss/variables-dark";

  .custom-text-field {
    background-color: transparent;
    border: none;
    border-bottom: 2px solid $dark;
    border-radius: 0px;
  }
  .overlay {
    z-index: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: auto;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.7); /*can be anything, of course*/
  }
</style>
