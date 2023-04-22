import { mount } from "@vue/test-utils";
import { BDropdown, BNavItem, BNavbar, BNavbarBrand, BNavbarNav } from "bootstrap-vue";
import AuthLayout from "~/layouts/auth.vue";
import i18nConfig from "~/config/i18n";
import lang from "~/lang/en/index";
import NuxtLogo from "~/components/NuxtLogo";

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
    "b-navbar-nav": BNavbarNav,
    Nuxt: NuxtLogo
  }
};

describe("AuthLayout", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(AuthLayout, componentDefaults);
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("AuthLayout has correct defaults", () => {
  const wrapper = mount(AuthLayout, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("AuthLayout");
  });

  test("wrapper has correct ID", () => {
    expect(wrapper.attributes("id")).toBe("auth-page-layout");
  });
});
