<template>
  <div>
    <div
      class="d-flex align-items-center pb-10 position-relative"
      :style="{
        'background-image': `url(${require('~/assets/images/rubbish-truck.jpg')})`,
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

    <frontpage-app-links-section />
    <frontpage-useful-links-section />
    <frontpage-social-links-section />
  </div>
</template>

<script>
  import FrontpageAppLinksSection from "~/components/sections/FrontpageAppLinksSection";
  import FrontpageSocialLinksSection from "~/components/sections/FrontpageSocialLinksSection";
  import FrontpageUsefulLinksSection from "~/components/sections/FrontpageUsefulLinksSection";
  import PostcodeChecker from "~/components/PostcodeChecker";
  import SiteLogo from "~/components/SiteLogo";

  export default {
    name: "HomePage",
    auth: false,
    components: {
      FrontpageAppLinksSection,
      FrontpageSocialLinksSection,
      FrontpageUsefulLinksSection,
      PostcodeChecker,
      SiteLogo
    },
    layout: "home",
    data() {
      return {
        currentstep: 1,

        steps: [
          {
            id: 1,
            title: "Personal",
            icon: "user"
          },
          {
            id: 2,
            title: "Details",
            icon: "th"
          },
          {
            id: 3,
            title: "Send",
            icon: ["far", "paper-plane"]
          }
        ]
      };
    },
    computed: {
      height() {
        if (!process.client) return null;

        return window.innerHeight + "px";
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs["postcode-checker"].focus();
      });
    },
    methods: {
      onProvidersFound() {
        this.$router.push({ name: "trash-something" });
      },
      onSubmit() {},
      stepChanged(step) {
        this.currentstep = step;
      }
    }
  };
</script>

<style lang="scss">
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
