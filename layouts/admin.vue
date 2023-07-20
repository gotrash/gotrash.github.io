<template>
  <div>
    <slot />
  </div>
</template>

<script>
  import FrontendNavbar from "~/components/navbars/FrontendNavbar";

  export default defineComponent({
    components: { FrontendNavbar: FrontendNavbar }
  });
</script>
