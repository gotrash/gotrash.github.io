import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import PrivilegeForm from "@/components/forms/PrivilegeForm";

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

describe("PrivilegeForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PrivilegeForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("PrivilegeForm has correct defaults", () => {
  const wrapper = mount(PrivilegeForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("PrivilegeForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
