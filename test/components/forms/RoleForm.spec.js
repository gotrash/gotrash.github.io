import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import RoleForm from "@/components/forms/RoleForm";

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

describe("RoleForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(RoleForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("RoleForm has correct defaults", () => {
  const wrapper = mount(RoleForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("RoleForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
