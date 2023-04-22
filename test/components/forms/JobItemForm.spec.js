import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import JobItemForm from "@/components/forms/JobItemForm";

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

describe("JobItemForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(JobItemForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("JobItemForm has correct defaults", () => {
  const wrapper = mount(JobItemForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("JobItemForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
