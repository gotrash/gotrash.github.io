<script>
  import menu from "~/menus/BusinessSidebar";
  import IsAdminLteSidebar from "~/mixins/IsAdminLteSidebar";

  export default {
    name: "BusinessSidebar",
    mixins: [IsAdminLteSidebar],
    data() {
      return {
        menu
      };
    }
  };
</script>
