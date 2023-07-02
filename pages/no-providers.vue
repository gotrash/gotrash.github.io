<template>
  <fullscreen-section>
    <b-alert class="px-6 py-4 text-center" variant="danger" show>
      <h1 class="mb-4">No Providers</h1>
      <p class="mb-4">Unfortunately no providers could be found that cover your postcode.</p>
      <div>
        <b-link :to="{ name: 'index' }">Go Home</b-link>
      </div>
    </b-alert>
  </fullscreen-section>
</template>

<script>
  import FullscreenSection from "~/components/sections/FullscreenSection";
  export default {
    components: {
      FullscreenSection
    }
  };
</script>
