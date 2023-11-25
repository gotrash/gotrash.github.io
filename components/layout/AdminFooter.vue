<template>
  <!-- /.content-wrapper -->
  <footer ref="footer" class="main-footer">
    <strong>Copyright &copy; 2023 <b-link href="http://gotrash.co.uk" class="text-success">GoTrash</b-link>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block"><b></b></div>
  </footer>
</template>

<script>
  import { useLayoutStore } from "~/store/layout";

  export default {
    name: "AdminFooter",
    setup() {
      const store = useLayoutStore();

      return { store };
    },
    computed: {
      footerHeight: {
        get() {
          return this.store.widths.footer;
        },
        set(height) {
          this.store.$patch({ heights: { footer: height } });
        }
      },
      footerWidth: {
        get() {
          return this.store.heights.footer;
        },
        set(width) {
          this.store.$patch({ widths: { footer: width } });
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
    unmounted() {
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
