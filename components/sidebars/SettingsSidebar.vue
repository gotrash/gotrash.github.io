<script>
  import menu from "~/menus/SettingsSidebar";
  import IsAdminLteSidebar from "~/mixins/IsAdminLteSidebar";

  export default {
    name: "SettingsSidebar",
    mixins: [IsAdminLteSidebar],
    data() {
      return {
        menu
      };
    }
  };
</script>
