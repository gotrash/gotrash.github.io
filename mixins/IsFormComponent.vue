<script>
  import { validationMixin } from "vuelidate";

  export default {
    mixins: [validationMixin],
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
        if (evt) {
          evt.stopPropagation();
          evt.preventDefault();
        }

        await this.onReset();

        this.$emit("cancel");
      },
      async onReset(evt) {
        if (evt) {
          evt.stopPropagation();
          evt.preventDefault();
        }

        await new Promise(resolve => {
          this.$nextTick(() => {
            this.$v.$reset();

            resolve();
          });
        });

        this.$emit("reset");
      },
      onSubmit(evt) {
        if (evt) {
          evt.stopPropagation();
          evt.preventDefault();
        }

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
