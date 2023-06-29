<template>
  <div>
    <p v-if="!hideMessage">
      {{ $t("MSG__CHECK_FOR_PROVIDERS_COVERING_YOUR_AREA") }}
    </p>
    <b-alert class="text-center" :show="noProviders" variant="danger" dismissible @dismissed="onAlertDismissed">
      <h4 class="mb-2">
        <u>{{ $t("FRONTEND.LABEL.NO_PROVIDERS_ALERT") }}</u>
      </h4>
      <p class="mb-1">
        {{ $t("FRONTEND.MESSAGE.POSTCODE_CHECKER_NO_PROVIDERS") }}
      </p>
    </b-alert>
    <simple-postcode-form ref="form" v-model="form" :busy="busy" @submit="checkPostcode" />
  </div>
</template>

<script>
  import SimplePostcodeForm from "~/components/forms/SimplePostcodeForm";

  export default {
    components: { SimplePostcodeForm },
    props: {
      hideMessage: Boolean
    },
    data() {
      return {
        busy: false,
        form: {
          postcode: null
        },
        noProviders: false
      };
    },
    mounted() {
      const lastCheckedPostcode = this.$storage.getUniversal("lastCheckedPostcode");

      if (lastCheckedPostcode) this.form.postcode = lastCheckedPostcode;
    },
    methods: {
      async checkPostcode() {
        this.busy = true;
        this.noProviders = false;
        const { postcode } = this.form;

        await new Promise(resolve => setTimeout(resolve, 500));

        this.$nextTick(() => {
          this.$storage.setUniversal("lastCheckedPostcode", postcode);

          this.$axios
            .post("/check-postcode", { postcode })
            .then(({ data }) => {
              this.noProviders = !data;

              this.$emit("postcode:checked", data);

              if (data) this.$emit("providers-found");

              this.busy = false;
            })
            .catch(err => {
              console.error(err);
              this.busy = false;
            })
            .finally(() => {
              this.focus();
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
