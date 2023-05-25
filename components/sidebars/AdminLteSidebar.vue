<template>
  <aside class="main-sidebar sidebar-dark-green elevation-4">
    <slot name="brand-link" />
    <!-- Sidebar -->
    <div ref="sidebar" class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <slot name="user-panel" />

      <slot name="search" />

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <slot>
            <template v-if="menu">
              <component
                :is="menuItem.isDropdown ? 'sidebar-dropdown' : 'sidebar-link'"
                v-for="menuItem in menu"
                :key="`sidebar-menu-item-${menuItem.route}`"
                :icon="menuItem.icon"
                :route="menuItem.route"
                :text="$t(menuItem.text)"
                :items="menuItem.isDropdown ? menuItem.items : []"
              />
            </template>
          </slot>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
  export default {
    components: {
      SidebarDropdown: () => import("~/components/SidebarDropdown"),
      SidebarLink: () => import("~/components/SidebarLink")
    },
    props: {
      menu: {
        type: Array,
        required: false,
        default() {
          return null;
        }
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
    mounted() {
      this.setHeight();
      this.setWidth();

      this.setupListeners();
    },
    unmounted() {
      this.removeListeners();
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
      }
    }
  };
</script>
