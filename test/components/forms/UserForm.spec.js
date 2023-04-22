import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import UserForm from "@/components/forms/UserForm";

const componentDefaults = {
  propsData: {
    value: {
      email: null
    }
  },
  stubs: {
    "b-form": BForm
  }
};

describe("UserForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(UserForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("UserForm has correct defaults", () => {
  const wrapper = mount(UserForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("UserForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
