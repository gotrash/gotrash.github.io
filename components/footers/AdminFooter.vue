<template>
  <!-- /.content-wrapper -->
  <footer ref="footer" class="main-footer">
    <strong>Copyright &copy; 2023 <b-link href="http://gotrash.co.uk" class="text-success">GoTrash</b-link>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block"><b></b></div>
  </footer>
</template>

<script>
  export default {
    name: "AdminFooter",
    computed: {
      footerHeight: {
        get() {
          return this.$store.getters("layout/getHeight")("footer");
        },
        set(height) {
          this.$store.commit("layout/setHeight", { key: "footer", height });
        }
      },
      footerWidth: {
        get() {
          return this.$store.getters("layout/getWidth")("footer");
        },
        set(width) {
          this.$store.commit("layout/setWidth", { key: "footer", width });
        }
      }
    },
    mounted() {
      this.setHeight();
      this.setWidth();

      this.$nextTick(() => {
        this.setupListeners();
      });
    },
    beforeDestroy() {
      this.removeListeners();
    },
    methods: {
      removeListeners() {
        window.removeEventListener("resize", this.setHeight);
        window.removeEventListener("resize", this.setWidth);
      },
      setHeight() {
        this.footerHeight = this.$refs.footer.clientHeight + 1;
      },
      setWidth() {
        this.footerWidth = this.$refs.footer.clientWidth;
      },
      setupListeners() {
        window.addEventListener("resize", this.setHeight);
        window.addEventListener("resize", this.setWidth);
      }
    }
  };
</script>
