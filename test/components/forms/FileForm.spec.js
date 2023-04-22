import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import FileForm from "@/components/forms/FileForm";

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

describe("FileForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FileForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("FileForm has correct defaults", () => {
  const wrapper = mount(FileForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("FileForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
