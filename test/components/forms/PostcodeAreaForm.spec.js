import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import PostcodeAreaForm from "@/components/forms/PostcodeAreaForm";

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

describe("PostcodeAreaForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PostcodeAreaForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("PostcodeAreaForm has correct defaults", () => {
  const wrapper = mount(PostcodeAreaForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("PostcodeAreaForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
