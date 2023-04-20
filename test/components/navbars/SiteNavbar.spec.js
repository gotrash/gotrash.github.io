import { BDropdown, BNavItem, BNavbar, BNavbarBrand, BNavbarNav } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import SiteNavbar from "@/components/navbars/SiteNavbar.vue";
import i18nConfig from "~/config/i18n";
import lang from "~/lang/en/index";

const $t = msg => lang[msg];

const componentDefaults = {
  mocks: {
    $t,
    $i18n: {
      locales: [...i18nConfig.locales, ...i18nConfig.locales]
    }
  },
  stubs: {
    "b-dropdown": BDropdown,
    "b-nav-item": BNavItem,
    "b-navbar": BNavbar,
    "b-navbar-brand": BNavbarBrand,
    "b-navbar-nav": BNavbarNav
  }
};

describe("SiteNavbar", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(SiteNavbar, componentDefaults);

    expect(wrapper.vm).toBeTruthy();
  });
});

describe("SiteNavbar has correct defaults", () => {
  const wrapper = mount(SiteNavbar, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("SiteNavbar");
  });

  const navbar = wrapper.getComponent(BNavbar);

  test("wrapper uses correct component", () => {
    expect(navbar.is(BNavbar)).toBe(true);
  });

  describe("navbar contains the branding", () => {
    const navbarBrand = navbar.findComponent(BNavbarBrand);

    test("navbar contains a `BNavbarBrand` component", () => {
      expect(navbarBrand).toBeTruthy();
    });

    if (navbarBrand) {
      test("navbar brand is the correct text", () => {
        expect(navbarBrand.text()).toBe("GoTrash");
      });

      describe("navbar brand should have a boldly 'Go' where no navbar brand has gone before", () => {
        const b = navbarBrand.find("b");

        test("navbar brand has a bold section", () => {
          expect(b).toBeTruthy();
        });

        test("bold section should contain the word 'Go'", () => {
          expect(b.text()).toBe("Go");
        });
      });
    }
  });

  describe("navbar has the correct nav menus", () => {
    const navMenus = navbar.findAllComponents(BNavbarNav);

    test("navbar contains 2 nav menus", () => {
      expect(navMenus.length).toBe(2);
    });
  });
});
