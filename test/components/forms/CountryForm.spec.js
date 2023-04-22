import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import CountryForm from "@/components/forms/CountryForm";

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

describe("CountryForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(CountryForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("CountryForm has correct defaults", () => {
  const wrapper = mount(CountryForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("CountryForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
