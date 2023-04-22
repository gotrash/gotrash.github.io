import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import PaymentForm from "@/components/forms/PaymentForm";

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

describe("PaymentForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(PaymentForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("PaymentForm has correct defaults", () => {
  const wrapper = mount(PaymentForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("PaymentForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
