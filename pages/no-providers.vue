<template>
  <div
    class="d-flex align-items-center position-relative"
    :style="{
      'background-image': `url(${headerBg})`,
      'background-size': 'cover',
      'background-position': 'center center',
      'background-attachment': 'fixed'
    }"
  >
    <div class="overlay"></div>
    <b-container fluid>
      <fullscreen-section>
        <b-alert class="px-6 py-4 text-center" variant="danger" :model-value="true">
          <h1 class="mb-4">No Providers</h1>
          <p class="mb-4">Unfortunately no providers could be found that cover your postcode.</p>
          <div>
            <b-link :to="localePath({ name: 'index' })">Go Home</b-link>
          </div>
        </b-alert>
      </fullscreen-section>
    </b-container>
  </div>
</template>

<script setup>
  import headerBg from "~/assets/images/rubbish-truck.jpg";
  import FullscreenSection from "~/components/sections/FullscreenSection";
</script>

<style>
  .overlay {
    z-index: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: auto;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 0, 0.8);
    /*can be anything, of course*/
  }
</style>
