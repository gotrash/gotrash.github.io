<script>
  import { h } from "vue";
  import { BNavItem } from "bootstrap-vue-next";

  export default defineComponent({
    props: ["items", "route", "text", "textTranslation"],
    render() {
      const { localePath, $t, route, text, textTranslation } = this;

      return h(
        BNavItem,
        {
          "active-class": "active",
          to: localePath(route)
        },
        () => (textTranslation ? $t(textTranslation) : text)
      );
    }
  });
</script>
