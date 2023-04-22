import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import ServiceForm from "@/components/forms/ServiceForm";

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

describe("ServiceForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ServiceForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("ServiceForm has correct defaults", () => {
  const wrapper = mount(ServiceForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("ServiceForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
