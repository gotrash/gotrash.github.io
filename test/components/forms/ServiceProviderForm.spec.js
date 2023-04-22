import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import ServiceProviderForm from "@/components/forms/ServiceProviderForm";

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

describe("ServiceProviderForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ServiceProviderForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("ServiceProviderForm has correct defaults", () => {
  const wrapper = mount(ServiceProviderForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("ServiceProviderForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
