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
import LoginForm from "@/components/forms/LoginForm";
import lang from "~/lang/en/index";

library.add(faEnvelope);
library.add(faEye);

const $t = msg => lang[msg];

const componentDefaults = {
  propsData: {
    value: {
      email: null,
      password: null,
      rememberMe: false
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

describe("LoginForm", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(LoginForm, componentDefaults);

    expect(wrapper.vm).toBeTruthy();
  });
});

describe("LoginForm has correct defaults", () => {
  const wrapper = mount(LoginForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("LoginForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
