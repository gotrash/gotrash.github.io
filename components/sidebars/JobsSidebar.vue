<script>
  import menu from "~/menus/JobsSidebar";
  import IsAdminLteSidebar from "~/mixins/IsAdminLteSidebar";

  export default {
    name: "JobsSidebar",
    mixins: [IsAdminLteSidebar],
    data() {
      return {
        menu
      };
    }
  };
</script>
