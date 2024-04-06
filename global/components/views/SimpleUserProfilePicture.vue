<template>
  <div
    class="position-relative"
    :style="{
      height: !Number.isNaN(props.size) ? props.size : props.size + 'px',
      width: !Number.isNaN(props.size) ? props.size : props.size + 'px',
      margin: `.15rem 0 .15rem ${((props.elevation || 1) * 2) / 10}rem`
    }"
  >
    <img
      ref="image"
      :alt="$t('GENERAL.LABEL.USER_AVATAR')"
      :class="['img-circle', `elevation-${elevation}`, 'm-0']"
      :src="store.profilePicture || '/images/user-placeholder.png'"
      style="object-fit: cover; height: 100%; width: 100%"
    />
    <div
      v-if="store.loadingProfilePicture"
      class="position-absolute d-flex align-items-center justify-content-around text-success rounded-circle"
      :style="{ top: 0, left: 0, width: '100%', height: '100%', 'background-color': overlayColor }"
    >
      <fa-icon icon="spinner" :class="iconClasses" />
    </div>
  </div>
</template>
>

<script setup>
  import { useUserStore } from "@/store/user";
  const store = useUserStore();
  import AllowedIconSizes from "~/constants/AllowedIconSizes";

  const props = defineProps({
    elevation: {
      type: [String, Number],
      requireD: false,
      default() {
        return 2;
      }
    },
    iconSize: {
      type: String,
      default() {
        return "lg";
      },
      validator(iconSize) {
        return AllowedIconSizes.includes(iconSize);
      }
    },
    overlayIconClasses: {
      default() {
        return null;
      }
    },
    overlayColor: {
      type: String,
      required: false,
      default() {
        return "rgba(0, 0, 0, 0.8)";
      }
    },
    size: {
      type: [String, Number],
      requireD: false,
      default() {
        return "2.1rem";
      }
    },
    animationMode: {
      type: String,
      default() {
        return "spin";
      },
      validator(animationMode) {
        return ["pulse", "spin"].includes(animationMode);
      }
    }
  });

  const iconClasses = computed(() => {
    const classes = [`fa-${props.animationMode}`, `fa-${props.iconSize}`];

    if (props.overlayIconClasses) classes.push(props.overlayIconClasses);

    return classes;
  });

  store.FETCH_PROFILE_PICTURE();

  onMounted(() => {
    console.log("Is Mounted");
  });
</script>
