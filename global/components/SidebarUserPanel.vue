<template>
  <b-link
    class="sidebar-user-panel mt-2 mb-3 pb-2 d-flex align-items-center"
    exact-active-class="active text-success"
    :to="localePath({ name: 'user' })"
  >
    <simple-user-profile-picture />
    <div class="sidebar-user-panel--user-name">
      {{ session?.session?.user?.name }}
    </div>
  </b-link>
</template>

<script>
  import { BLink } from "bootstrap-vue-next";

  export default defineComponent({
    async setup() {
      const { getSession } = useAuth();
      const session = await getSession();

      return { session };
    }
  });
</script>

<style lang="scss">
  .sidebar-user-panel {
    border-bottom: 1px solid #dee2e6;
    position: relative;
    white-space: nowrap;
    .sidebar-user-panel--user-name {
      display: inline-block;
      padding: 5px 5px 5px 10px;
      white-space: nowrap;
    }
  }
</style>
