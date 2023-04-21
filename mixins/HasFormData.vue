<script>
  import HasDto from "~/mixins/HasDto";

  export default {
    mixins: [HasDto],
    data() {
      const { Dto } = this.$options;

      return {
        error: null,
        errors: [],
        form: new Dto()
      };
    }
  };
</script>
