<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <b-link :to="{ name: 'index' }" class="brand-link">
      <img
        v-if="false"
        src="dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: 0.8"
      />
      <span class="brand-text font-weight-light"><b>Go</b>Trash</span>
    </b-link>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img v-if="false" src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" />
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
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

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <b-link :to="{ name: 'messages' }" :class="['nav-link', { active: $route.name === 'messages' }]">
              <i class="nav-icon fas fa-th"></i>
              <p>{{ $t("NAV__MESSAGES") }}</p>
            </b-link>
          </li>
          <li class="nav-item">
            <b-link :to="{ name: 'user' }" :class="['nav-link', { active: $route.name === 'user' }]">
              <i class="nav-icon fas fa-th"></i>
              <p>{{ $t("NAV__USER") }}</p>
            </b-link>
          </li>
          <li :class="['nav-item', { active: $route.name === 'menu-open' }]">
            <a href="#" :class="['nav-link', { active: $route.name === 'admin' }]">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Admin
                <fa-icon icon="angle-left" class="right" />
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <b-link :to="{ name: 'admin' }" :class="['nav-link', { active: $route.name === 'admin' }]">
                  <fa-icon :icon="['far', 'circle']" class="nav-icon" />
                  <p>Admin</p>
                </b-link>
              </li>
            </ul>
          </li>
          <li :class="['nav-item', { active: $route.name === 'menu-open' }]">
            <a href="#" :class="['nav-link', { active: $route.name === 'admin-oauth-registered-clients' }]">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                {{ $t("NAV__OAUTH") }}
                <fa-icon icon="angle-left" class="right" />
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <b-link
                  :to="{ name: 'admin-oauth-registered-clients' }"
                  :class="['nav-link', { active: $route.name === 'admin-oauth-registered-clients' }]"
                >
                  <fa-icon :icon="['far', 'circle']" class="nav-icon" />
                  <p>{{ $t("NAV__REGISTERED_CLIENTS") }}</p>
                </b-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
  export default {
    name: "AdminSidebar"
  };
</script>
