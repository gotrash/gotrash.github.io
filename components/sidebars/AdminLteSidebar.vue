<script>
  let routeName = null;

  export default {
    props: {
      menu: {
        type: [Array, Object],
        required: true
      }
    },
    computed: {
      sidebarHeight: {
        get() {
          return this.$store.getters("layout/getHeight")("sidebar");
        },
        set(height) {
          this.$store.commit("layout/setHeight", { key: "sidebar", height });
        }
      },
      sidebarWidth: {
        get() {
          return this.$store.getters("layout/getWidth")("sidebar");
        },
        set(width) {
          this.$store.commit("layout/setWidth", { key: "sidebar", width });
        }
      }
    },
    created() {
      routeName = this.$route.name;
    },
    mounted() {
      this.setHeight();
      this.setWidth();

      this.$nextTick(() => {
        this.setupListeners();
      });
    },
    beforeDestroy() {
      this.removeListeners();
    },
    destroyed() {
      routeName = null;
    },
    methods: {
      removeListeners() {
        window.removeEventListener("resize", this.setHeight);
        window.removeEventListener("resize", this.setWidth);
      },
      setHeight() {
        this.sidebarHeight = this.$refs.sidebar.clientHeight;
      },
      setWidth() {
        this.sidebarWidth = this.$refs.sidebar.clientWidth;
      },
      setupListeners() {
        window.addEventListener("resize", this.setHeight);
        window.addEventListener("resize", this.setWidth);
      },
      renderBrandLink() {
        const h = this.$createElement;

        return h("b-link", { class: "brand-link", props: { to: { name: "index" } } }, [
          // h("img", {
          //   class: "brand-image img-circle elevation-3",
          //   domProps: { alt: "GoTrash Logo", src: "dist/img/AdminLTELogo.png" },
          //   style: "opacity: 0.8"
          // }),
          h("span", { class: "brand-text font-weight-light" }, [h("b", { class: "font-weight-bold" }, "Go"), "Trash"])
        ]);
      },
      renderNav() {
        const h = this.$createElement;
        const { menu, renderSidebarDropdown, renderSidebarLink } = this;

        return h("nav", { class: "mt-2" }, [
          h(
            "ul",
            {
              class: "nav nav-pills nav-sidebar flex-column",
              domProps: { "data-widget": "treeview", role: "menu", "data-accordion": "false" }
            },
            menu.map(menuItem => {
              return menuItem.isDropdown ? renderSidebarDropdown(menuItem) : renderSidebarLink(menuItem);
            })
          )
        ]);
      },
      renderNavIcon(icon) {
        return this.$createElement("fa-icon", { class: "nav-icon fa-fw", props: { icon } });
      },
      renderSearch() {
        const h = this.$createElement;

        return h(
          "div",
          {
            class: "input-group",
            domProps: {
              "data-widget": "sidebar-search"
            }
          },
          [
            h("input", {
              class: "form-control form-control-sidebar",
              domProps: { type: "search", placeholder: "Search", "aria-label": "Search" }
            }),
            h("div", { class: "input-group-append" }, [
              h("button", { class: "btn btn-sidebar" }, [
                h("fa-icon", { class: "fa-fw", props: { icon: ["fas", "search"] } })
              ])
            ])
          ]
        );
      },
      renderSidebar() {
        const {
          $createElement: h,
          renderUserPanel: user,
          // renderSearch: search,
          renderNav: nav
        } = this;

        return h("div", { class: "sidebar", ref: "sidebar" }, [
          user(),
          // search(),
          nav()
        ]);
      },
      renderSidebarDropdown(menuItem) {
        const { $createElement: h, $route, renderNavIcon, renderSidebarLink, renderText } = this;
        const { icon, items, route, text } = menuItem;

        console.log(routeName);

        return h(
          "li",
          {
            class: [
              "nav-item"
              // {
              //   "menu-is-opening menu-open": (items || []).map(item => item.route).includes(routeName)
              // }
            ]
          },

          [
            h(
              "a",
              {
                class: ["nav-link", { active: $route.name.includes(route) }],
                on: {
                  click: () => this.$root.$emit("bv::toggle::collapse", `sidebar-dropdown-collapse-${route}`)
                }
              },
              [
                renderNavIcon(icon),
                renderText(text),
                h("fa-icon", {
                  class: "right",
                  props: { icon: $route.fullPath.includes(route) ? "angle-left" : "angle-left" }
                })
              ]
            ),
            h(
              "b-collapse",
              {
                class: "nav",
                domProps: {
                  id: `sidebar-dropdown-collapse-${route}`
                },
                id: `sidebar-dropdown-collapse-${route}`,
                ref: `sidebar-dropdown-collapse-${route}`,
                props: {
                  appear: false,
                  visible: $route.fullPath.includes(route),
                  id: `sidebar-dropdown-collapse-${route}`,
                  tag: "ul"
                }
              },
              items.map(renderSidebarLink)
            )
          ]
        );
      },
      renderSidebarLink(menuItem) {
        const { $createElement: h, renderText } = this;
        const { icon, route, text } = menuItem;
        const linkContents = [];

        if (icon) linkContents.push(h("fa-icon", { class: "nav-icon fa-fw", props: { icon } }));

        linkContents.push(renderText(text));

        return h("li", { class: "nav-item" }, [
          h(
            "b-link",
            { class: "nav-link", props: { activeClass: "active", exact: true, to: { name: route } } },
            linkContents
          )
        ]);
      },
      renderText(text) {
        const $t = this.$t.bind(this);
        const { $createElement: h } = this;

        return h("p", $t(text));
      },
      renderUserPanel() {
        const h = this.$createElement;

        return h("div", { class: "user-panel mt-3 pb-3 mb-3 d-flex" }, [
          h("div", { class: "image" }, [
            h("img", {
              class: "img-circle elevation-2",
              domProps: { alt: "User Image", src: require("~/assets/images/user-placeholder.png") }
            }),
            h("div", { class: "info" }, [h("a", { class: "d-block", domProps: { href: "#" } }, [this.$auth.user.sub])])
          ])
        ]);
      }
    },
    render(h) {
      const { renderBrandLink: brand, renderSidebar: sidebar } = this;

      return h("aside", { class: "main-sidebar sidebar-light-primary elevation-4" }, [brand(), sidebar()]);
    }
  };
</script>
