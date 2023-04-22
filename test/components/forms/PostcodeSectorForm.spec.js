import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import PostcodeSectorForm from "@/components/forms/PostcodeSectorForm";

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

describe("PostcodeSectorForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PostcodeSectorForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("PostcodeSectorForm has correct defaults", () => {
  const wrapper = mount(PostcodeSectorForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("PostcodeSectorForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
