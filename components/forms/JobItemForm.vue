<template>
  <b-form>
    <b-form-group>
      <b-form-input />
    </b-form-group>
    <b-form-group>
      <b-form-input />
    </b-form-group>
    <b-form-group>
      <b-form-input />
    </b-form-group>
    <b-form-group>
      <b-form-input />
    </b-form-group>
    <b-form-group>
      <b-form-input />
    </b-form-group>
  </b-form>
</template>

<script>
  import { IsFormComponent } from "~/mixins";
  export default {
    name: "JobItemForm",
    mixins: [IsFormComponent]
  };
</script>
