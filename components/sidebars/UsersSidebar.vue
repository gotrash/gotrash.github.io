<script>
  import menu from "~/menus/UsersSidebar";
  import IsAdminLteSidebar from "~/mixins/IsAdminLteSidebar";

  export default {
    name: "UsersSidebar",
    mixins: [IsAdminLteSidebar],
    data() {
      return {
        menu
      };
    }
  };
</script>
