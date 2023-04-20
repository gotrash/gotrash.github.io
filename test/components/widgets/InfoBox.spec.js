import { mount } from "@vue/test-utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfo, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import InfoBox from "@/components/widgets/InfoBox.vue";

library.add(faEye);
library.add(faInfo);

const componentDefaults = {
  propsData: {
    text: "Message"
  },
  stubs: {
    "fa-icon": FontAwesomeIcon
  }
};

describe("InfoBox", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(InfoBox, componentDefaults);

    expect(wrapper.vm).toBeTruthy();
  });
});

describe("InfoBox has correct defaults", () => {
  const wrapper = mount(InfoBox, componentDefaults);

  const content = wrapper.find("div.info-box-content");

  // Correct variant used
  test("correct variant used", () => {
    const icon = wrapper.find("span.info-box-icon");
    const iconExists = icon.exists();

    expect(iconExists).toBe(true);

    if (iconExists) {
      expect(icon.classes()).toContain("bg-info");
    }
  });

  // The icon element should exist
  test("icon exists and is correct", () => {
    const icon = wrapper.find("span.info-box-icon");
    const iconExists = icon.exists();

    expect(iconExists).toBe(true);

    if (iconExists) {
      const fa = icon.find(".svg-inline--fa");
      const faExists = fa.exists();

      expect(faExists).toBe(true);
      expect(fa.classes()).toContain("fa-info");
    }
  });

  // Text element should exist and the content should equal the text prop provided above
  test("info box text exists and has the correct content", () => {
    const text = content.find("span.info-box-text");
    const textExists = text.exists();

    expect(textExists).toBe(true);

    if (textExists) {
      expect(text.text()).toBe("Message");
    }
  });

  // Statistic should be hidden by default
  test("statistic not rendered by default", () => {
    const statistic = content.find("span.info-box-number");
    const statisticExists = statistic.exists();

    expect(statisticExists).toBe(false);
  });

  // Shadow class should not be added
  test("shadow class not added", () => {
    expect(wrapper.classes()).not.toContain("shadow-none");
    expect(wrapper.classes()).not.toContain("shadow-sm");
    expect(wrapper.classes()).not.toContain("shadow");
    expect(wrapper.classes()).not.toContain("shadow-lg");
  });
});

describe("InfoBox sets custom data correctly", () => {
  const wrapper = mount(InfoBox, {
    ...componentDefaults,
    propsData: {
      ...componentDefaults.propsData,
      icon: "eye",
      shadow: "none",
      statistic: "1,234",
      text: "Custom",
      variant: "success"
    }
  });

  const content = wrapper.find("div.info-box-content");

  // Correct variant used
  test("correct variant used", () => {
    const icon = wrapper.find("span.info-box-icon");
    const iconExists = icon.exists();

    expect(iconExists).toBe(true);

    if (iconExists) {
      expect(icon.classes()).not.toContain("bg-info");
      expect(icon.classes()).toContain("bg-success");
    }
  });

  // The icon element should exist
  test("icon rendered correctly", () => {
    const icon = wrapper.find("span.info-box-icon");
    const iconExists = icon.exists();

    expect(icon.exists()).toBe(true);

    if (iconExists) {
      const fa = icon.find(".svg-inline--fa");
      const faExists = fa.exists();

      expect(faExists).toBe(true);
      expect(fa.classes()).toContain("fa-eye");
    }
  });

  // Text element should exist and the content should equal the text prop provided above
  test("text rendered correctly", () => {
    const text = content.find("span.info-box-text");
    const textExists = text.exists();

    expect(textExists).toBe(true);

    if (textExists) {
      expect(text.text()).toBe("Custom");
    }
  });

  // Statistic should be hidden by default
  test("statistic rendered correctly", () => {
    const statistic = content.find("span.info-box-number");
    const statisticExists = statistic.exists();

    expect(statisticExists).toBe(true);

    if (statisticExists) {
      expect(statistic.text()).toBe("1,234");
    }
  });

  // Shadow should be set as-per prop value
  test("shadow set correctly", () => {
    expect(wrapper.classes()).toContain("shadow-none");
  });
});

describe("InfoBox sets shadows correctly", () => {
  test("removes shadow correctly", () => {
    const wrapper = mount(InfoBox, {
      ...componentDefaults,
      propsData: { ...componentDefaults.propsData, shadow: "none" }
    });
    expect(wrapper.classes()).toContain("shadow-none");
  });

  test("sets small shadow correctly", () => {
    const wrapper = mount(InfoBox, {
      ...componentDefaults,
      propsData: { ...componentDefaults.propsData, shadow: "sm" }
    });
    expect(wrapper.classes()).toContain("shadow-sm");
  });

  test("sets medium shadow correctly", () => {
    const wrapper = mount(InfoBox, {
      ...componentDefaults,
      propsData: { ...componentDefaults.propsData, shadow: "md" }
    });
    expect(wrapper.classes()).toContain("shadow");
  });

  test("sets large shadow correctly", () => {
    const wrapper = mount(InfoBox, {
      ...componentDefaults,
      propsData: { ...componentDefaults.propsData, shadow: "lg" }
    });
    expect(wrapper.classes()).toContain("shadow-lg");
  });
});
