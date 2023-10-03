<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <h1 ref="logo-element" class="position-relative">
          Go<span ref="little-t" class="to-hide">t </span><span ref="movable-text" class="to-move">Trash<span
              ref="question-mark" class="to-hide">?</span></span>
        </h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { gsap } from "gsap";
export default {
  data() {
    return {
      hideElements: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.init();
    }, 300);
  },
  methods: {
    init() {
      const logoWidth = this.$refs["logo-element"].clientWidth;
      const littleTOffset = this.$refs["little-t"].getBoundingClientRect().left;
      const questionMarkOffset = this.$refs["question-mark"].getBoundingClientRect().left;
      const movableTextOffset = this.$refs["movable-text"].getBoundingClientRect().left;

      gsap.fromTo(
        this.$refs["little-t"],
        {
          autoAlpha: 1
        },
        {
          autoAlpha: 0,
          display: "none",
          duration: 0.35
        }
      );
      gsap.fromTo(
        this.$refs["question-mark"],
        {
          autoAlpha: 1
        },
        {
          autoAlpha: 0,
          display: "none",
          duration: 0.35
        }
      );

      gsap.fromTo(
        this.$refs["movable-text"],
        {
          left: movableTextOffset,
          position: "absolute"
        },
        {
          left: littleTOffset - 6,
          duration: 0.35
        }
      );

      gsap.fromTo(
        this.$refs["movable-text"],
        {
          left: 0
        },
        {
          delay: 0.35,
          left: 0,
          position: "relative"
        }
      );
    }
  }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
