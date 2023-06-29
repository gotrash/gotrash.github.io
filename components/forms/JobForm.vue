<template>
  <b-form @submit.stop.prevent="onJobSubmit"> <b-form @submit.stop.prevent="onJobItemSubmit"></b-form></b-form>
</template>

<script>
  import { IsFormComponent } from "~/mixins";
  export default {
    name: "JobForm",
    mixins: [IsFormComponent],
    methods: {
      onJobSubmit() {
        console.log("Job Form Submitted");
      },
      onJobItemSubmit() {
        console.log("Job Item Form Submitted");
      }
    }
  };
</script>
