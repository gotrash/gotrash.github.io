<template>
  <div>
    <div v-if="!file">No Attachment</div>
    <b-link v-else-if="file && (linkOnly || !canView)" :href="url" target="_blank"> View Attachment </b-link>
    <b-img v-else-if="isImage" :src="url" fluid />
    <b-embed v-else-if="isPdf" :src="url + '#toolbar=0&navpanes=0'" />
    <b-embed v-else-if="isVideo" type="video">
      <source :src="url" :type="fileType" />
    </b-embed>
  </div>
</template>

<script>
  export default defineComponent({
    props: ["file", "linkOnly"],
    data() {
      return {
        url: null
      };
    },
    computed: {
      canView() {
        const { isImage, isPdf, isVideo } = this;

        return isImage || isPdf || isVideo;
      },
      fileType() {
        return this.file?.type || "";
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
    },
    watch: {
      file: {
        handler(newFile, oldFile) {
          if (!oldFile || newFile !== oldFile) {
            if (this.url) URL.revokeObjectURL(this.url);

            if (newFile) this.url = URL.createObjectURL(newFile);
          }
        },
        deep: true,
        immediate: true
      }
    },
    mounted() {
      if (this.file) this.url = URL.createObjectURL(this.file);
    },
    beforeUnmount() {
      if (this.url) {
        URL.revokeObjectURL(this.url);

        this.url = null;
      }
    },
    methods: {}
  });
</script>
