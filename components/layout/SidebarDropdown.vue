<template>
  <li class="nav-item">
    <a
      :class="['nav-link', { active: $route.name.includes(routeRoot) }, isOpen ? 'not-collapsed' : 'collapsed']"
      href="#"
      @click="_toggleCollapse"
    >
      <slot name="label">{{ label }}</slot>
      <fa-icon icon="angle-left" class="right sidebar-dropdown-icon" />
    </a>
    <b-collapse
      :id="`sidebar-dropdown-${section}-collapse`"
      :visible="isOpen"
      class="nav"
      tag="ul"
      @hide="emit('hide')"
      @hidden="emit('hidden')"
      @show="emit('show')"
      @shown="emit('shown')"
    >
      <slot>
        <sidebar-dropdown-item
          v-for="(dropdownItem, dropdownItemIndex) in items"
          :key="`${routeRoot}-sidebar-dropdown-item-${dropdownItemIndex + 1}`"
          :to="localePath({ name: dropdownItem.routeName })"
          :text="dropdownItem.text"
        />
      </slot>
    </b-collapse>
  </li>
</template>

<script setup>
  import SidebarDropdownItem from "./SidebarDropdownItem.vue";

  const isOpen = ref(false);

  const emit = defineEmits(["hide", "hidden", "show", "shown"]);

  const props = defineProps({
    label: {
      type: String,
      required: false
    },
    items: {
      type: Array,
      required: false,
      validator: arr => arr.every(item => item.text && item.routeName)
    },
    section: {
      type: String,
      required: true
    },
    routeRoot: {
      type: String,
      required: true
    }
  });

  const _toggleCollapse = () => {
    isOpen.value = !isOpen.value;
  };

  const route = useRoute();

  isOpen.value = route.name.includes(props.routeRoot);
</script>

<style>
  .not-collapsed .sidebar-dropdown-icon {
    transform: rotate(-90deg);
  }
</style>
