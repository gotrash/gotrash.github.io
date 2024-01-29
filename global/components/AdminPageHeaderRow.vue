<script>
  import { BRow, BCol } from "bootstrap-vue-next";
  import PageSummary from "./PageSummary.vue";
  import PageTitle from "./PageTitle.vue";
  import { h } from "vue";

  export default {
    props: {
      slug: {
        type: String,
        required: true
      }
    },
    render() {
      return h(BRow, {}, () => [
        h(BCol, { class: "text-center mb-4", props: { cols: 12 } }, () => [
          h(PageTitle, {}, () => [this.$t(`PAGE_TITLE__${this.slug}`)]),
          h(PageSummary, {}, () => [this.$t(`PAGE_SUMMARY__${this.slug}`)])
        ])
      ]);
    }
  };
</script>
