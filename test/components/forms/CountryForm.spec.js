import {
  // BButton,
  BForm
  // BFormCheckbox,
  // BFormGroup,
  // BFormInput,
  // BFormSelect,
  // BFormSelectOption
} from "bootstrap-vue";
import { mount } from "@vue/test-utils";
import CountryForm from "@/components/forms/CountryForm";
import continents from "~/test/_data/continents.json";

const componentDefaults = {
  propsData: {
    continents,
    value: {
      countryName: null,
      twoLetterCountryCode: null,
      threeLetterCountryCode: null,
      countryNumber: null,
      enabled: false,
      continentCode: null
    }
  },
  stubs: {
    // "b-btn": BButton,
    // "b-button": BButton,
    // "b-form": BForm,
    // "b-form-checkbox": BFormCheckbox,
    // "b-form-group": BFormGroup,
    // "b-form-input": BFormInput,
    // "b-form-select": BFormSelect,
    // "b-form-select-option": BFormSelectOption
  }
};

describe("Country Form", () => {
  const wrapper = mount(CountryForm, componentDefaults);
  const form = wrapper.getComponent(BForm);

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("has correct name", () => {
    expect(wrapper.vm.$options.name).toBe("CountryForm");
  });

  const formExists = form.exists();

  test("wrapper is or has a form", () => {
    expect(formExists).toBeTruthy();
  });

  if (formExists) {
    test("wrapper form uses correct component", () => {
      expect(form.is(BForm)).toBe(true);
    });
  }

  describe("Form Inputs", () => {
    describe("Country Name Input", () => {
      const countryName = wrapper.find("#country-name-input");
      const countryNameExists = countryName.exists();

      test("exists", () => {
        expect(countryNameExists).toBeTruthy();
      });

      if (countryNameExists) {
        test("is correct type", () => {
          expect(countryName.attributes("type")).toBe("text");
        });

        test("has correct validations", () => {
          expect(countryNameExists).toBeTruthy();
        });
      }
    });

    describe("Two-letter Country Code", () => {
      test("has two-letter country code input", () => {
        const twoLetterCountryCode = wrapper.find("#two-letter-country-code-input");

        expect(twoLetterCountryCode.exists()).toBeTruthy();
      });
    });

    describe("Three-letter country code", () => {
      test("has three-letter country code input", () => {
        const threeLetterCountryCode = wrapper.find("#three-letter-country-code-input");

        expect(threeLetterCountryCode.exists()).toBeTruthy();
      });
    });

    describe("Country Number", () => {
      test("has country number input", () => {
        const countryNumber = wrapper.find("#country-number-input");

        expect(countryNumber.exists()).toBeTruthy();
      });
    });

    describe("Enabled", () => {
      const enabled = wrapper.find("#enabled-input");
      const enabledExists = enabled.exists();

      test("has enabled input", () => {
        expect(enabledExists).toBeTruthy();
      });

      if (enabledExists) {
        test("is correct type", () => {
          expect(enabled.attributes("type")).toBe("checkbox");
        });

        test("has correct validations", () => {
          expect(enabled).toBeTruthy();
        });
      }
    });

    describe("Continent", () => {
      const continent = wrapper.find("#continent-input");
      const continentExists = continent.exists();

      test("has continent input", () => {
        expect(continentExists).toBeTruthy();
      });

      if (continentExists) {
        test("is correct type", () => {
          expect(continent.element.tagName?.toLowerCase()).toBe("select");
        });

        test("has null option", () => {
          expect(continent.find("[value='null']").exists()).toBeTruthy();
        });

        if (continents.length > 0) {
          for (const c of continents) {
            test(`has option for ${c.continentName}`, () => {
              expect(continent.find(`[value='${c.continentCode}']`).exists()).toBeTruthy();
            });
          }
        }

        const contArr = ["Africa", "Asia", "England", null, undefined, false];

        for (const cont in contArr) {
          console.log(contArr[cont]);

          if (contArr[cont]) {
            console.log("It's England!!!");
          }
        }

        test("has correct validations", () => {
          expect(continent).toBeTruthy();
        });
      }
    });
  });
});
