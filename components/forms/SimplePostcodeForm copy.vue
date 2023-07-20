<template>

</template>

<script>
  import { required, maxLength } from '@vuelidate/validators';
  import { HasModel, IsFormComponent } from "~/mixins";
  import { IsUkPostcode } from "~/validators";

  export default {
    name: "SimplePostcodeForm",
    mixins: [HasModel, IsFormComponent],
    props: {
      busy: Boolean,
      value: {
        type: Object,
        required: true,
        validator: form => Object.prototype.hasOwnProperty.call(form, "postcode")
      }
    },
    validations: {
      model: {
        postcode: {
          isPostcode: postcode => IsUkPostcode(postcode),
          required,
          maxLength: maxLength(9)
        }
      }
    },
    methods: {
      focus() {
        this.$nextTick(() => {
          this.$refs["postcode-input"].focus();
        });
      },
      onSubmit() {
        this.$v.model.$touch();

        if (this.$v.model.$invalid) {
          return;
        }

        this.$emit("submit");
      },

    }
  };
</script>
