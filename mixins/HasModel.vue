<script>
  export default {
    props: {
      value: {
        type: [Array, Number, Object, String],
        required: false,
        default: null
      }
    },
    computed: {
      model: {
        get() {
          return this.value;
        },
        set(model) {
          this.$emit("input", model);
        }
      }
    }
  };
</script>
