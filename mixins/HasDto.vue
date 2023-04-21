<script>
  export default {
    mounted() {
      if ([undefined, null].includes(this.$options.Dto)) {
        throw new Error("Components implementing `HasDto` require the DTO to be added to the component options");
      }
    }
  };
</script>
