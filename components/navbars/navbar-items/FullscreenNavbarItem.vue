<template>
  <b-nav-item role="button" @click="toggle">
    <fa-icon :icon="isFullscreen ? 'compress-arrows-alt' : 'expand-arrows-alt'" />
  </b-nav-item>
</template>

<script>
  export default {
    data() {
      return {
        isFullscreen: false
      };
    },
    methods: {
      toggle() {
        if (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
        ) {
          this.windowed();
          this.isFullscreen = false;
        } else {
          this.fullscreen();
          this.isFullscreen = true;
        }
      },
      fullscreen() {
        this.isFullscreen = true;

        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      },
      windowed() {
        this.isFullscreen = false;

        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  };
</script>
