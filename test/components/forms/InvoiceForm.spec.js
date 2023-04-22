import { BForm } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import InvoiceForm from "@/components/forms/InvoiceForm";

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

describe("InvoiceForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(InvoiceForm, componentDefaults);
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });
});

describe("InvoiceForm has correct defaults", () => {
  const wrapper = mount(InvoiceForm, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("InvoiceForm");
  });

  const form = wrapper.getComponent(BForm);

  test("wrapper uses correct component", () => {
    expect(form.is(BForm)).toBe(true);
  });
});
