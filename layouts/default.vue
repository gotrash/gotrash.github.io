<template>
  <div>
    <frontend-navbar icon-classes="text-success" logo-color="#212529" />
    <slot />
  </div>
</template>

<script setup>
  import FrontendNavbar from "~/components/navbars/FrontendNavbar";
</script>
