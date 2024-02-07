<script>
  import { h } from "vue";
  import { BNav } from "bootstrap-vue-next";
  import SidebarNavItem from "./SidebarNavItem";

  const DEFAULT_NAV_ATTRS = {
    class: "mt-2 nav-sidebar flex-column",
    "data-widget": "treeview",
    role: "menu",
    "data-accordion": "false",
    pills: true
  };

  const getPropsFromMenuItem = menuItem => ({ route: { name: menuItem.route }, textTranslation: menuItem.text });
  const getRenderedMenuItem = menuItem => h(SidebarNavItem, getPropsFromMenuItem(menuItem));
  const getRenderedMenuItems = menu => menu.map(menuItem => getRenderedMenuItem(menuItem));
  const getRenderedNavList = menu => h(BNav, DEFAULT_NAV_ATTRS, () => getRenderedMenuItems(menu));

  export default {
    props: { menu: Array },
    render() {
      const { menu } = this;

      return h("nav", { class: "mt-2" }, getRenderedNavList(menu));
    }
  };
</script>
