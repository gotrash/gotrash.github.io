<script>
  import { useVuelidate } from "@vuelidate/core";

  export default {
    props: {
      isDisabled: Boolean,
      isBusy: Boolean,
      showCancel: Boolean,
      showReset: Boolean,
      hideSubmit: Boolean
    },
    emits: ["input", "cancel", "reset", "submit"],
    setup() {
      return { v$: useVuelidate() };
    },
    computed: {
      form: {
        get() {
          return this.value;
        },
        set(form) {
          this.$emit("input", form);
        }
      }
    },
    methods: {
      async onCancel(evt) {
        if (evt) this.stopPrevent(evt);

        await this.onReset();

        this.$emit("cancel");
      },
      async onReset(evt) {
        if (evt) this.stopPrevent(evt);

        await new Promise(resolve => {
          this.$nextTick(() => {
            this.$v.$reset();

            resolve();
          });
        });

        this.$emit("reset");
      },
      onSubmit(evt) {
        if (evt) this.stopPrevent(evt);

        this.$v.form.$touch();

        if (this.$v.form.$anyError) {
          return;
        }

        this.$emit("submit");
      },
      validateState(name) {
        const { $dirty, $error } = this.$v.form[name];

        return $dirty ? !$error : null;
      }
    }
  };
</script>
