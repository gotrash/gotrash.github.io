<script>
  import { useLayoutStore } from "~/store/layout";
  export default {
    components: {
      AdminFooter: () => import("~/components/footers/AdminFooter"),
      AdminNavbar: () => import("~/components/navbars/AdminNavbar"),
      AdminLteSidebar: () => import("~/components/sidebars/AdminLteSidebar"),
      ControlSidebar: () => import("~/components/sidebars/ControlSidebar")
    },
    head() {
      return {
        bodyAttrs: {
          class: "sidebar-mini layout-fixed"
        },
        script: [
          {
            src: "/js/jquery.min.js",
            type: "text/javascript"
          },
          {
            src: "/js/adminlte.min.js",
            type: "text/javascript"
          }
        ]
      };
    },
    computed: {
      contentHeight() {
        if (this.maxHeight === this.controlSidebarHeight) {
          return this.maxHeight;
        } else if (this.maxHeight === this.windowHeight) {
          return this.maxHeight - this.headerHeight - this.footerHeight;
        } else {
          return this.maxHeight - this.headerHeight - this.footerHeight;
        }
      },
      controlSidebarHeight() {
        const store = useLayoutStore();

        return store.getHeight("controlSidebar");
      },
      footerHeight() {
        const store = useLayoutStore();

        return store.getHeight("footer");
      },
      headerHeight() {
        const store = useLayoutStore();

        return store.getHeight("header");
      },
      maxHeight() {
        const store = useLayoutStore();

        return store.getMaxHeight;
      },
      sidebarHeight() {
        const store = useLayoutStore();

        return store.getHeight("sidebar");
      },
      windowHeight: {
        get() {
          const store = useLayoutStore();

          return store.getHeight("window");
        },
        set(height) {
          const store = useLayoutStore();

          store.heights.window = height;
        }
      },
      windowWidth: {
        get() {
          const store = useLayoutStore();

          return store.getWidth("window");
        },
        set(width) {
          const store = useLayoutStore();

          store.widths.window = width;
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.init();

        this.setupListeners();
      });
    },
    unmounted() {
      this.removeListeners();
    },
    methods: {
      init() {
        this.setHeight();
        this.setWidth();
      },
      setHeight() {
        this.windowHeight = window.innerHeight;
      },
      setWidth() {
        this.windowWidth = window.innerWidth;
      },
      setupListeners() {
        window.addEventListener("resize", this.setHeight);
        window.addEventListener("resize", this.setWidth);
      },
      removeListeners() {
        window.removeEventListener("resize", this.setHeight);
        window.removeEventListener("resize", this.setWidth);
      }
    }
  };
</script>
