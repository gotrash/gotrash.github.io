<template>
  <b-link v-if="linkOnly || !canView" :href="url" target="_blank"> View Attachment </b-link>
  <b-img v-else-if="isImage" :src="url" fluid />
  <b-embed v-else-if="isPdf" :src="url + '#toolbar=0&navpanes=0'" />
  <b-embed v-else-if="isVideo" type="video">
    <source :src="url" :type="fileType" />
  </b-embed>
  <div v-else>No Attachment</div>
</template>

<script>
  export default {
    props: {
      fileType: {
        type: String,
        required: true
      },
      linkOnly: Boolean,
      url: {
        type: String,
        required: true
      }
    },
    computed: {
      canView() {
        const { isImage, isPdf, isVideo } = this;

        return isImage || isPdf || isVideo;
      },
      isImage() {
        return this.fileType.split("/")[0] === "image";
      },
      isPdf() {
        return this.fileType === "application/pdf";
      },
      isVideo() {
        return this.fileType.split("/")[0] === "video";
      }
    }
  };
</script>
