<template>
  <div>
    <b-alert class="text-center mb-4" :show="noProviders" variant="danger">
      <h4 class="mb-2">
        <u>{{ $t("FRONTEND.LABEL.NO_PROVIDERS_ALERT") }}</u>
      </h4>
      <p class="mb-1">
        {{ $t("FRONTEND.MESSAGE.POSTCODE_CHECKER_NO_PROVIDERS") }}
      </p>
    </b-alert>
    <p v-if="!hideMessage" class="mb-3">
      {{ $t("MSG__CHECK_FOR_PROVIDERS_COVERING_YOUR_AREA") }}
    </p>
    <simple-postcode-form ref="form" v-model="form" :busy="busy" @submit.stop.prevent="checkPostcode" />
  </div>
</template>

<script>
  import SimplePostcodeForm from "~/components/forms/SimplePostcodeForm";

  export default {
    components: { SimplePostcodeForm },
    props: {
      hideMessage: Boolean
    },
    emits: ["postcode:checked", "providers-found"],
    data() {
      return {
        busy: false,
        form: {
          postcode: null
        },
        noProviders: false
      };
    },
    created() {
      if (this.$route.query.noProviders) this.noProviders = true;
    },
    mounted() {
      // const lastCheckedPostcode = this.$storage.getUniversal("lastCheckedPostcode");
      // if (lastCheckedPostcode) this.form.postcode = lastCheckedPostcode;
    },
    methods: {
      async checkPostcode() {
        this.busy = true;
        this.noProviders = false;
        const { postcode } = this.form;
        const config = useRuntimeConfig();

        await new Promise(resolve => setTimeout(resolve, 500));

        this.$nextTick(async () => {
          // this.$storage.setUniversal("lastCheckedPostcode", postcode);

          await $fetch(`${config.public.apiUrl}/check-postcode`, { params: { postcode } })
            .then(res => {
              this.noProviders = !res;

              // this.$storage.setUniversal("hasProviders", data);

              this.$emit("postcode:checked", res);

              if (res) {
                this.$emit("providers-found");
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
      onAlertDismissed() {
        this.noProviders = false;
      }
    }
  };
</script>
