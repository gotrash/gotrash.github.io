<script>
  export default {
    methods: {
      renderContainer(content = "No Content") {
        const h = this.$createElement;

        return h("b-container", { props: { fluid: true } }, [h("b-row", {}, [h("b-col", {}, content)])]);
      }
    }
  };
</script>
