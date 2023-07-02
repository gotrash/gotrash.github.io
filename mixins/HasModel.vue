<script>
  export default {
    props: {
      value: {
        type: [Array, Boolean, Number, Object, String],
        required: false,
        default() {
          return null;
        }
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
