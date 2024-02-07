<template>
  <!-- This is to alert the user if there is no providers in their area.        -->
  <!-- It should be visible if the user has previously checked a postcode       -->
  <!-- and no providers where found.                                            -->
  <b-alert :model-value="showError" class="text-center mb-4" dismissible variant="danger" @close="onAlertDismissed">
    <h4 class="mb-2">
      <u>{{ $t("FRONTEND.LABEL.NO_PROVIDERS_ALERT") }}</u>
    </h4>
    <p class="mb-1">
      {{ $t("FRONTEND.MESSAGE.POSTCODE_CHECKER_NO_PROVIDERS") }}
    </p>
  </b-alert>

  <!-- Simple help message for users                                            -->
  <p v-if="!hideMessage" class="mb-3 text-center">
    {{ $t("MSG__CHECK_FOR_PROVIDERS_COVERING_YOUR_AREA") }}
  </p>

  <!-- This is the actual form, which also contains the validation logic.       -->
  <!-- The form itself does not check the postcode, it merely emits an event    -->
  <!-- telling this parent page to check the postcode currently in the forms    -->
  <!-- model value.                                                             -->
  <simple-postcode-form
    ref="form"
    v-model="form"
    :disabled="noProviders"
    :busy="busy"
    @submit.stop.prevent="checkPostcode"
  />
</template>

<script>
  import SimplePostcodeForm from "~/components/forms/SimplePostcodeForm";

  export const POSTCODE_COOKIE_MAX_AGE = 60 * 24 * 7;
  export const HAS_PROVIDERS_COOKIE_MAX_AGE = 60;

  export default {
    components: { SimplePostcodeForm },
    props: {
      hideMessage: Boolean
    },
    emits: ["postcode:checked", "providers:found", "providers:not-found"],
    data() {
      return {
        busy: false,
        form: {
          postcode: null
        },
        noProviders: null
      };
    },
    computed: {
      showError() {
        const { noProviders } = this;

        return noProviders === true ? true : false;
      }
    },
    watch: {
      "form.postcode": {
        handler(postcode, oldPostcode) {
          if (postcode !== oldPostcode) this.noProviders = null;
        }
      }
    },
    created() {
      if (this.$route.query.noProviders) this.noProviders = true;
    },
    mounted() {
      const hasProviders = this.getHasProvidersCookie(true);
      const lastCheckedPostcode = this.getPostcodeCookie(true);

      if (hasProviders.value !== null) this.$nextTick(() => (this.noProviders = !hasProviders.value));
      if (lastCheckedPostcode) this.form.postcode = lastCheckedPostcode.value;
    },
    methods: {
      async checkPostcode() {
        this.busy = true;

        const { postcode } = this.form;
        const config = useRuntimeConfig();

        await new Promise(resolve => setTimeout(resolve, 500));

        this.$nextTick(async () => {
          const cookie = this.getPostcodeCookie();
          cookie.value = postcode;

          await $fetch(`${config.public.apiUrl}/check-postcode`, { params: { postcode } })
            .then(res => {
              this.noProviders = !res;

              const hasProviders = this.getHasProvidersCookie();
              hasProviders.value = !!res;

              this.$emit("postcode:checked", res);

              if (res) {
                this.$emit("providers:found");
              } else {
                this.$emit("providers:not-found");
              }
            })
            .catch(_err => {
              console.error(_err);
              this.busy = false;
              this.focus();
            })
            .finally(() => {
              this.$nextTick(() => {
                this.busy = false;
              });
            });
        });
      },
      focus() {
        this.$nextTick(() => {
          this.$refs.form.focus();
        });
      },
      getHasProvidersCookie(readonly = false) {
        return useCookie("hasProviders", {
          default: () => null,
          maxAge: HAS_PROVIDERS_COOKIE_MAX_AGE,
          readonly
        });
      },
      getPostcodeCookie(readonly = false) {
        return useCookie("lastCheckedPostcode", {
          maxAge: POSTCODE_COOKIE_MAX_AGE,
          readonly: false,
          sameSite: true
        });
      },
      onAlertDismissed() {
        this.noProviders = null;
        const hasProviders = this.getHasProvidersCookie();
        hasProviders.value = null;
      }
    }
  };
</script>
