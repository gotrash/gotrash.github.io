<script>
  export default {
    components: {
      SidebarLink: () => import("~/components/SidebarLink")
    },
    props: {
      items: {
        type: [Array],
        required: true
      },
      icon: {
        type: [Array, String],
        required: false,
        default() {
          return null;
        }
      },
      route: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    },
    methods: {
      getChevronAttrs() {
        const { $route, route } = this;
        const icon = $route.fullPath.includes(route) ? "angle-left" : "angle-left";

        return { class: "right", props: { icon } };
      },
      getDropdownAttrs() {
        const { isMenuOpen } = this;

        return { class: ["nav-item", { "menu-is-opening menu-open": isMenuOpen() }] };
      },
      getIconAttrs() {
        const { icon } = this;

        return { class: "nav-icon fa-fw", props: { icon } };
      },
      getLinkAttrs() {
        const { isActive } = this;

        return { class: ["nav-link", { active: isActive() }] };
      },
      getRootElements() {
        const { renderMenu, renderRootLink } = this;

        return [renderRootLink(), renderMenu()];
      },
      getSidebarLinkAttrs(item) {
        const $t = this.$t.bind(this);

        return {
          key: `sidebar-dropdown-item-${item.route}`,
          props: {
            icon: item.icon,
            route: item.route,
            text: $t(item.text)
          }
        };
      },
      isActive() {
        const { route } = this;

        return this.$route.name.includes(route);
      },
      isMenuOpen() {
        const { items } = this;

        return (items || []).map(item => item.route).includes(this.$route.name);
      },
      renderChevron() {
        const { getChevronAttrs } = this;
        const h = this.$createElement.bind(this);

        return h("fa-icon", getChevronAttrs());
      },
      renderIcon() {
        const { getIconAttrs } = this;
        const h = this.$createElement.bind(this);

        return h("fa-icon", getIconAttrs());
      },
      renderMenu() {
        const { renderSidebarLink, items } = this;

        if (items === null || items === undefined) throw new TypeError("Must be an array");

        const h = this.$createElement.bind(this);

        return h("ul", { class: "nav nav-treeview" }, items.map(renderSidebarLink));
      },
      renderRootLink() {
        const { getLinkAttrs, renderChevron, renderIcon, renderText } = this;
        const h = this.$createElement.bind(this);

        return h("a", getLinkAttrs(), [renderIcon(), renderText(), renderChevron()]);
      },
      renderSidebarLink(item) {
        const { getSidebarLinkAttrs } = this;
        const h = this.$createElement.bind(this);

        return h("sidebar-link", getSidebarLinkAttrs(item));
      },
      renderText() {
        const { text } = this;
        const h = this.$createElement.bind(this);

        return h("p", text);
      }
    },
    render(h) {
      const { getDropdownAttrs, getRootElements } = this;

      return h("li", getDropdownAttrs(), getRootElements());
    }
  };
</script>
