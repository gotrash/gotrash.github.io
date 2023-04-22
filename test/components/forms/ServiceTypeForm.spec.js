import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import ServiceTypeForm from "@/components/forms/ServiceTypeForm";

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

describe("ServiceTypeForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ServiceTypeForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("ServiceTypeForm has correct defaults", () => {
  const wrapper = mount(ServiceTypeForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("ServiceTypeForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
