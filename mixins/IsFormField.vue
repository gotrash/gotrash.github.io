<script>
  import { FrontendFormTextAttributes } from "~/constants";
  import { HasModel } from "~/mixins";

  export default {
    mixins: [HasModel],
    FormTextAttributes: FrontendFormTextAttributes,
    props: {
      id: {
        type: String,
        required: true
      },
      invalidFeedback: {
        type: String,
        required: false,
        default: "Field Invalid"
      },
      label: {
        type: String,
        required: true
      },
      state: {
        type: [Boolean, String],
        required: false,
        default: null
      },
      description: {
        type: String,
        required: false,
        default: null
      }
    }
  };
</script>
