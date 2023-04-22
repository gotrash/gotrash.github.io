import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import PostcodeUnitForm from "@/components/forms/PostcodeUnitForm";

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

describe("PostcodeUnitForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PostcodeUnitForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("PostcodeUnitForm has correct defaults", () => {
  const wrapper = mount(PostcodeUnitForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("PostcodeUnitForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
