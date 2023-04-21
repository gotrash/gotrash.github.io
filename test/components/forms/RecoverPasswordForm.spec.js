import {
  BButton,
  BCol,
  BForm,
  BFormGroup,
  BFormInput,
  BFormRow,
  BInputGroup,
  BInputGroupText,
  BLink
} from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import RecoverPasswordForm from "@/components/forms/RecoverPasswordForm";
import lang from "~/lang/en/index";

library.add(faEye);

const $t = msg => lang[msg];

const componentDefaults = {
  propsData: {
    value: {
      confirmPassword: null,
      password: null
    }
  },
  mocks: { $t },
  stubs: {
    "b-btn": BButton,
    "b-col": BCol,
    "b-form": BForm,
    "b-form-group": BFormGroup,
    "b-form-input": BFormInput,
    "b-form-row": BFormRow,
    "b-input-group": BInputGroup,
    "b-input-group-text": BInputGroupText,
    "b-link": BLink,
    "fa-icon": FontAwesomeIcon
  }
};

describe("RecoverPasswordForm", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(RecoverPasswordForm, componentDefaults);

    expect(wrapper.vm).toBeTruthy();
  });
});

describe("RecoverPasswordForm has correct defaults", () => {
  const wrapper = mount(RecoverPasswordForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("RecoverPasswordForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });

  // describe("navbar contains the branding", () => {
  //   const navbarBrand = navbar.findComponent(BNavbarBrand);

  //   test("navbar contains a `BNavbarBrand` component", () => {
  //     expect(navbarBrand).toBeTruthy();
  //   });

  //   if (navbarBrand) {
  //     test("navbar brand is the correct text", () => {
  //       expect(navbarBrand.text()).toBe("GoTrash");
  //     });

  //     describe("navbar brand should have a boldly 'Go' where no navbar brand has gone before", () => {
  //       const b = navbarBrand.find("b");

  //       test("navbar brand has a bold section", () => {
  //         expect(b).toBeTruthy();
  //       });

  //       test("bold section should contain the word 'Go'", () => {
  //         expect(b.text()).toBe("Go");
  //       });
  //     });
  //   }
  // });

  // describe("navbar has the correct nav menus", () => {
  //   const navMenus = navbar.findAllComponents(BNavbarNav);

  //   test("navbar contains 2 nav menus", () => {
  //     expect(navMenus.length).toBe(2);
  //   });

  //   // if (navMenus.length === 2) {
  //   //   test("first nav menu contains a link to home", () => {
  //   //     expect(navMenus[0].findComponent(BNavItem)).toBeTruthy();
  //   //   });
  //   // }
  // });
});
