<template>
  <div>
    <frontend-navbar icon-classes="text-success" logo-color="#212529" />
    <slot />

    <frontend-app-links-section />
    <frontend-social-links-section />
    <frontend-useful-links-section />
    <site-footer />
  </div>
</template>

<script>
  import FrontendNavbar from "~/components/navbars/FrontendNavbar";
  import FrontendAppLinksSection from "~/components/sections/FrontpageAppLinksSection";
  import FrontendSocialLinksSection from "~/components/sections/FrontpageSocialLinksSection";
  import FrontendUsefulLinksSection from "~/components/sections/FrontpageUsefulLinksSection";
  import SiteFooter from "~/components/footers/SiteFooter";

  export default defineComponent({
    components: { FrontendNavbar, FrontendAppLinksSection, FrontendSocialLinksSection, FrontendUsefulLinksSection, SiteFooter }
  });
</script>
