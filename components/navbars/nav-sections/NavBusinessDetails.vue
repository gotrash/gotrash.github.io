<template>
  <b-nav-text class="py-0">
    <a :href="`mailto:${link}`">{{ link }}</a>
    <div>Mon-Fri: 9am-6pm</div>
  </b-nav-text>
</template>

<script>
  export default {
    data() {
      return {
        link: "support@gotrash.co.uk"
      };
    }
  };
</script>
