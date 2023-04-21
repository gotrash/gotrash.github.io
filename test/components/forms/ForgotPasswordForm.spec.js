import {
  BButton,
  BCol,
  BForm,
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
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import lang from "~/lang/en/index";

library.add(faEnvelope);

const $t = msg => lang[msg];

const componentDefaults = {
  propsData: {
    value: {
      email: null
    }
  },
  mocks: { $t },
  stubs: {
    "b-btn": BButton,
    "b-col": BCol,
    "b-form": BForm,
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

describe("ForgotPasswordForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ForgotPasswordForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("ForgotPasswordForm has correct defaults", () => {
  const wrapper = mount(ForgotPasswordForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("ForgotPasswordForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
