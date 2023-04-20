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
      onCancel() {
        this.$emit("cancel");
      },
      onReset() {
        this.$nextTick(() => {
          this.$v.$reset();
        });

        this.$emit("reset");
      },
      onSubmit() {
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
