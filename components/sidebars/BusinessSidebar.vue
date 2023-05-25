<template>
  <admin-lte-sidebar :menu="menu">
    <!-- Brand Logo -->
    <template #brand-link>
      <b-link :to="{ name: 'index' }" class="brand-link">
        <img
          v-if="false"
          src="dist/img/AdminLTELogo.png"
          alt="GoTrash Logo"
          class="brand-image img-circle elevation-3"
          style="opacity: 0.8"
        />
        <span class="brand-text font-weight-light"><b>Go</b>Trash</span>
      </b-link>
    </template>

    <template v-if="false" #user-panel>
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img :src="require('~/assets/images/user-placeholder.png')" class="img-circle elevation-2" alt="User Image" />
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ $auth.user.sub }}</a>
        </div>
      </div>
    </template>

    <template v-if="false" #search>
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <fa-icon :icon="['fas', 'search']" class="fa-fw" />
            </button>
          </div>
        </div>
      </div>
    </template>
  </admin-lte-sidebar>
</template>

<script>
  import menu from "~/menus/BusinessSidebar";

  export default {
    name: "AdminSidebar",
    components: {
      AdminLteSidebar: () => import("~/components/sidebars/AdminLteSidebar"),
      SidebarDropdown: () => import("~/components/SidebarDropdown"),
      SidebarLink: () => import("~/components/SidebarLink")
    },
    data() {
      return {
        menu
      };
    }
  };
</script>
