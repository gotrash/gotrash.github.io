<script>
export default defineNuxtComponent({
  fetchKey: "data",
  data() {
    return {
      currentPage: 0,
      totalPages: 0,
      perPage: 20,
      totalElements: 0,
    }
  },
  computed: {
    _endpoint() {
      let endpoint = this.$options.endpoint;

      if (!endpoint) return;

      if (endpoint[0] !== "/") endpoint = "/" + endpoint;

      return endpoint
    }
  },
  mounted() {
    if (!this.$options.endpoint) throw new Error("`HasJpaResults` mixin used without endpoint configured in page options")
    if (typeof this.$options.endpoint !== "string") throw new TypeError("`HasJpaResults` endpoint must be a string")
  }
})
</script>
