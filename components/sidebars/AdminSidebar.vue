<script>
  import menu from "~/menus/AdminSidebar";
  import IsAdminLteSidebar from "~/mixins/IsAdminLteSidebar";

  export default {
    name: "AdminSidebar",
    mixins: [IsAdminLteSidebar],
    data() {
      return {
        menu
      };
    }
  };
</script>
