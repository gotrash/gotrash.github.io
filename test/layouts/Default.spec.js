import { mount, shallowMount } from "@vue/test-utils";
import { BDropdown, BNavItem, BNavbar, BNavbarBrand, BNavbarNav } from "bootstrap-vue";
import DefaultLayout from "~/layouts/default.vue";
import i18n from "~/lang/config";
import lang from "~/lang/en/index";
import NuxtLogo from "~/components/NuxtLogo";
import SiteNavbar from "~/components/navbars/SiteNavbar";
const $t = msg => lang[msg];

const componentDefaults = {
  mocks: {
    $t,
    $i18n: {
      locales: [...i18n.locales, ...i18n.locales]
    }
  },
  stubs: {
    "b-dropdown": BDropdown,
    "b-nav-item": BNavItem,
    "b-navbar": BNavbar,
    "b-navbar-brand": BNavbarBrand,
    "b-navbar-nav": BNavbarNav,
    Nuxt: NuxtLogo
  }
};

describe("Default Layout", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(DefaultLayout, componentDefaults);
  });

  describe("Component Instance", () => {
    test("Is a Vue instance", () => {
      expect(wrapper.vm).toBeTruthy();
    });

    test("Has correct name", () => {
      expect(wrapper.vm.$options.name).toBe("DefaultLayout");
    });
  });

  describe("Wrapper", () => {
    const wrapper = mount(DefaultLayout, componentDefaults);

    test("Has correct ID", () => {
      expect(wrapper.attributes("id")).toBe("default-page-layout");
    });
  });

  describe("Navbar", () => {
    let navbar;

    beforeAll(() => {
      navbar = wrapper.findComponent(SiteNavbar);
    });

    test("Exists in layout", () => {
      expect(navbar.vm).toBeTruthy();
    });

    test("Is a Bootstrap navbar", () => {
      expect(navbar.classes()).toContain("navbar");
    });

    test("Is light variant", () => {
      expect(navbar.classes()).toContain("navbar-light");
    });

    test("Is expanded", () => {
      expect(navbar.classes()).toContain("navbar-expand");
    });
  });

  describe("Router Output", () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallowMount(DefaultLayout, componentDefaults);
    });

    test("Contains the router output component", () => {
      const routerOutput = wrapper.findComponent(NuxtLogo);

      expect(routerOutput.vm).toBeTruthy();
    });
  });
});
