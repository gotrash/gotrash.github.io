import { maxLength, maxValue, minLength, numeric, required } from "vuelidate/lib/validators";

export const Form = {
  countryName: {
    required: true
  },
  twoLetterCountryCode: {
    required: true,
    maxlength: 2,
    minlength: 2
  },
  threeLetterCountryCode: {
    required: true,
    maxlength: 3,
    minlength: 3
  },
  countryNumber: {
    max: 1000,
    type: "number"
  },
  enabled: {
    required: true,
    type: "checkbox",
    max: 1000
  },
  continentCode: {
    required: true,
    maxlength: 3,
    minlength: 2
  }
};

export const ModelValidator = model => {
  return model && typeof model === "object";
};

export const Validations = {
  form: {
    countryName: {
      required
    },
    twoLetterCountryCode: {
      required,
      maxLength: maxLength(2),
      minLength: minLength(2)
    },
    threeLetterCountryCode: {
      required,
      maxLength: maxLength(3),
      minLength: minLength(3)
    },
    countryNumber: {
      maxValue: maxValue(1000),
      numeric
    },
    enabled: {
      required,
      isBoolean: bool => bool === null || [true, false].includes(bool),
      maxValue: maxValue(1000)
    },
    continentCode: {
      required,
      maxLength: maxLength(3),
      minLength: minLength(2)
    }
  }
};

export default {
  form: Form,
  validations: Validations
};
