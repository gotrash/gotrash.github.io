import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import JobTypeForm from "@/components/forms/JobTypeForm";

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

describe("JobTypeForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(JobTypeForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("JobTypeForm has correct defaults", () => {
  const wrapper = mount(JobTypeForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("JobTypeForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
