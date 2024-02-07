<script>
  import { h } from "vue";
  import { BLink } from "bootstrap-vue-next";

  const USER_IMAGE_ELEVATION = 2;

  export default defineComponent({
    async setup() {
      const { getSession } = useAuth();
      const session = await getSession();

      return { session };
    },
    render() {
      const { $t } = this;

      return h("div", { class: "user-panel mt-3 pb-3 mb-3 d-flex" }, [
        h("div", { class: "image" }, [
          h("img", {
            alt: $t("GENERAL.LABEL.USER_AVATAR"),
            class: `img-circle elevation-${USER_IMAGE_ELEVATION}`,
            src: "/images/user-placeholder.png"
          })
        ]),
        h("div", { class: "info" }, [
          h(
            BLink,
            { "exact-active-class": "active text-success", class: "d-block", to: this.localePath({ name: "user" }) },
            () => this.session?.session?.user?.name
          )
        ])
      ]);
    }
  });
</script>
