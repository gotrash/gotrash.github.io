import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import ContinentForm from "@/components/forms/ContinentForm";

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

describe("ContinentForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(ContinentForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("ContinentForm has correct defaults", () => {
  const wrapper = mount(ContinentForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("ContinentForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
