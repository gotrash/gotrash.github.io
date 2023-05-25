<template>
  <li class="nav-item">
    <b-link active-class="active" exact :to="{ name: route }" class="nav-link">
      <fa-icon v-if="icon" :icon="icon" class="nav-icon fa-fw" />
      <p>{{ text }}</p>
    </b-link>
  </li>
</template>

<script>
  export default {
    props: {
      icon: {
        type: [Array, String],
        required: false,
        default() {
          return null;
        }
      },
      isChild: Boolean,
      route: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  };
</script>
