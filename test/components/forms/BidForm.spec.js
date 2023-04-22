import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import BidForm from "@/components/forms/BidForm";

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

describe("BidForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(BidForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("BidForm has correct defaults", () => {
  const wrapper = mount(BidForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("BidForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
