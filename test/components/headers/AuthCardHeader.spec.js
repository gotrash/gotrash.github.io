import { BCardHeader, BLink } from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfo, faEye } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { createI18n } from "vue-i18n";
import AuthCardHeader from "@/components/headers/AuthCardHeader.vue";

library.add(faEye);
library.add(faInfo);

const componentDefaults = {
  // propsData: {
  //   text: "Message"
  // },
  stubs: {
    "b-card-header": BCardHeader,
    "b-link": BLink
  }
};

describe("AuthCardHeader", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(AuthCardHeader, componentDefaults);

    expect(wrapper.vm).toBeTruthy();
  });
});

describe("AuthCardHeader has correct defaults", () => {
  const wrapper = mount(AuthCardHeader, componentDefaults);

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("AuthCardHeader");
  });

  test("wrapper uses correct component", () => {
    expect(wrapper.is(AuthCardHeader)).toBe(true);
  });

  test("wrapper is centered", () => {
    expect(wrapper.classes()).toContain("text-center");
  });

  describe("has correct link", () => {
    const link = wrapper.findComponent(BLink);

    test("has link", () => {
      expect(link).toBeTruthy();
    });

    test("has one link", () => {
      expect(wrapper.findAllComponents(BLink).length).toEqual(1);
    });

    test("is h1 header", () => {
      expect(link.classes()).toContain("h1");
    });

    test("is the business name", () => {
      expect(link.text()).toBe("GoTrash");
    });

    describe("link boldly goes where no link has gone before", () => {
      const b = link.find("b");

      test("has bold section", () => {
        expect(b).toBeTruthy();
      });

      if (b) {
        test("b is Go", () => {
          expect(b.text()).toBe("Go");
        });
      }
    });

    test("link goes to home page", () => {
      expect(link.props("to")).toEqual({ name: "index" });
    });
  });

  // Correct variant used
  // test("correct variant used", () => {
  //   const icon = wrapper.find("span.info-box-icon");
  //   const iconExists = icon.exists();

  //   expect(iconExists).toBe(true);

  //   if (iconExists) {
  //     expect(icon.classes()).toContain("bg-info");
  //   }
  // });
});

describe("AuthCardHeader sets custom data correctly", () => {
  const wrapper = mount(AuthCardHeader, {
    ...componentDefaults
    // propsData: {
    //   ...componentDefaults.propsData,
    //   icon: "eye",
    //   shadow: "none",
    //   statistic: "1,234",
    //   text: "Custom",
    //   variant: "success"
    // }
  });

  // const content = wrapper.find("div.info-box-content");

  // // Correct variant used
  // test("correct variant used", () => {
  //   const icon = wrapper.find("span.info-box-icon");
  //   const iconExists = icon.exists();

  //   expect(iconExists).toBe(true);

  //   if (iconExists) {
  //     expect(icon.classes()).not.toContain("bg-info");
  //     expect(icon.classes()).toContain("bg-success");
  //   }
  // });

  // // The icon element should exist
  // test("icon rendered correctly", () => {
  //   const icon = wrapper.find("span.info-box-icon");
  //   const iconExists = icon.exists();

  //   expect(icon.exists()).toBe(true);

  //   if (iconExists) {
  //     const fa = icon.find(".svg-inline--fa");
  //     const faExists = fa.exists();

  //     expect(faExists).toBe(true);
  //     expect(fa.classes()).toContain("fa-eye");
  //   }
  // });

  // // Text element should exist and the content should equal the text prop provided above
  // test("text rendered correctly", () => {
  //   const text = content.find("span.info-box-text");
  //   const textExists = text.exists();

  //   expect(textExists).toBe(true);

  //   if (textExists) {
  //     expect(text.text()).toBe("Custom");
  //   }
  // });

  // // Statistic should be hidden by default
  // test("statistic rendered correctly", () => {
  //   const statistic = content.find("span.info-box-number");
  //   const statisticExists = statistic.exists();

  //   expect(statisticExists).toBe(true);

  //   if (statisticExists) {
  //     expect(statistic.text()).toBe("1,234");
  //   }
  // });

  // // Shadow should be set as-per prop value
  // test("shadow set correctly", () => {
  //   expect(wrapper.classes()).toContain("shadow-none");
  // });
});
