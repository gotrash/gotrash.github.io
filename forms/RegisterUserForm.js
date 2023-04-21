import { email, maxLength, minLength, required } from "vuelidate/lib/validators";
import { MaxFieldLengths, MinFieldLengths } from "~/constants";
import { PasswordStrength } from "~/validators";

export const Data = () => {
  return {
    showPassword: false,
    showConfirmPassword: false
  };
};

export const Form = {
  username: {
    type: "text",
    required: false
  },
  password: {
    type: "password",
    required: false
  },
  confirmPassword: {
    type: "password",
    required: false
  }
};

export const Validations = {
  form: {
    email: {
      email,
      required,
      maxLength: maxLength(345)
    },
    password: {
      required,
      maxLength: maxLength(MaxFieldLengths.PASSWORD),
      minLength: minLength(MinFieldLengths.PASSWORD),
      passwordStrength: PasswordStrength
    },
    confirmPassword: {
      required,
      maxLength: maxLength(MaxFieldLengths.PASSWORD),
      minLength: minLength(MinFieldLengths.PASSWORD)
    }
  }
};

export default {
  data: Data,
  form: Form,
  validations: Validations
};
