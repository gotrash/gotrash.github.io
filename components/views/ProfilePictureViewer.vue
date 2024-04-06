<template>
  <div>
    <div class="d-flex justify-content-around align-items-center">
      <div class="position-relative user-profile-img-wrapper" style="max-width: 100px; height: 100px; cursor: pointer">
        <div
          class="user-profile-img rounded-circle h-100"
          :style="{
            'background-image': `url(${src})`,
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center'
          }"
        ></div>
        <div :class="['user-profile-img-overlay', { busy }]" @click="doClick">
          <fa-icon :icon="busy ? 'spinner' : 'camera'" :class="['fa-2x text-light', { 'fa-spin': busy }]" />
        </div>
      </div>
    </div>

    <input ref="file" type="file" class="form-control d-none" accept="image/*" @change="onFileInput" />
  </div>
</template>

<script>
  export default defineComponent({
    props: ["busy", "file", "linkOnly"],
    emits: ["input"],
    data() {
      return {
        url: null
      };
    },
    computed: {
      canView() {
        const { isImage } = this;

        return isImage;
      },
      fileType() {
        return this.file?.type || "";
      },
      isImage() {
        return this.fileType.split("/")[0] === "image";
      },
      src() {
        return this.url || "/images/user-placeholder.png";
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
    methods: {
      doClick() {
        this.$refs.file.click();
      },
      onFileInput(evt) {
        const file = evt.target.files[0];

        if (file) {
          this.$emit("input", file);
        }
      }
    }
  });
</script>

<style lang="scss" scoped>
  .user-profile-img-wrapper {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    .user-profile-img-overlay {
      position: absolute;
      opacity: 0;
      transition: all 0.3s;
      display: flex;
      cursor: pointer;
      top: 0;
      left: 50%;
      width: 100px;
      height: 100px;
      background-color: rgba(0, 0, 0, 0.6);
      transform: scale(100%, 100%) translateX(-50%);
      align-items: center;
      justify-content: space-around;
      border-radius: 50%;
      &.busy {
        opacity: 1;
        cursor: not-allowed;
      }
    }
    &:hover {
      .user-profile-img-overlay {
        opacity: 1;
      }
    }
  }
</style>
