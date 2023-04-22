import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import PostcodeDistrictForm from "@/components/forms/PostcodeDistrictForm";

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

describe("PostcodeDistrictForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PostcodeDistrictForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("PostcodeDistrictForm has correct defaults", () => {
  const wrapper = mount(PostcodeDistrictForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("PostcodeDistrictForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
