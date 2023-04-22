import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import JobForm from "@/components/forms/JobForm";

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

describe("JobForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(JobForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("JobForm has correct defaults", () => {
  const wrapper = mount(JobForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("JobForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
