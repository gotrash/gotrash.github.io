import {
  BButton,
  BCol,
  BForm,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BFormInvalidFeedback,
  BFormRow,
  BInputGroup,
  BInputGroupText,
  BLink
} from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import RegisterUserForm from "@/components/forms/RegisterUserForm";
import lang from "~/lang/en/index";

library.add(faEnvelope);
library.add(faEye);

const $t = msg => lang[msg];

const componentDefaults = {
  propsData: {
    value: {
      email: null,
      password: null,
      confirmPassword: null
    }
  },
  mocks: { $t },
  stubs: {
    "b-btn": BButton,
    "b-col": BCol,
    "b-form": BForm,
    "b-form-checkbox": BFormCheckbox,
    "b-form-group": BFormGroup,
    "b-form-input": BFormInput,
    "b-form-invalid-feedback": BFormInvalidFeedback,
    "b-form-row": BFormRow,
    "b-input-group": BInputGroup,
    "b-input-group-text": BInputGroupText,
    "b-link": BLink,
    "fa-icon": FontAwesomeIcon
  }
};

describe("RegisterUserForm", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(RegisterUserForm, componentDefaults);

    expect(wrapper.vm).toBeTruthy();
  });
});

describe("RegisterUserForm has correct defaults", () => {
  const wrapper = mount(RegisterUserForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("RegisterUserForm");
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

describe("RegisterUserForm sets custom data correctly", () => {});
