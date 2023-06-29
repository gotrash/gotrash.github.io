<script>
  export default {
    methods: {
      onCreateJobClicked() {},
      onLoginClicked() {
        this.$auth.loginWith("oidc");
      },
      onSignupClicked() {},
      renderCreateJobButton() {
        const { onCreateJobClicked } = this;
        const h = this.$createElement;

        return h(
          "b-btn",
          {
            class: "text-center d-flex flex-column justify-content-around align-items-center mb-3 py-3 mx-auto w-100",
            props: { variant: "primary" }
          },
          [
            h("fa-icon", { class: "fa-2x mb-2", on: { click: onCreateJobClicked }, props: { icon: "trash" } }),
            this.$t("ACTION__CREATE_JOB")
          ]
        );
      },
      renderWrapper(children = []) {
        const h = this.$createElement;

        return h("div", { class: "mb-3" }, children);
      }
    },
    render(h) {
      if (this.$auth.loggedIn) {
        return this.renderWrapper([this.renderCreateJobButton()]);
      }

      const { onLoginClicked, onSignupClicked } = this;

      const buttons = [
        { click: onLoginClicked, text: this.$t("NAV__LOGIN") },
        { click: onSignupClicked, text: this.$t("NAV__SIGNUP") }
      ];

      const contents = [
        this.renderCreateJobButton(),
        h(
          "b-btn-group",
          { class: "d-flex align-items-center", props: { variant: "outline-primary" } },
          buttons.map(btn =>
            h("b-btn", { class: "w-50", on: { click: btn.click }, props: { size: "md", variant: "outline-primary" } }, [
              btn.text
            ])
          )
        )
      ];

      return this.renderWrapper(contents);
    }
  };
</script>
