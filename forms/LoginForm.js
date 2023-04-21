import { email, maxLength, minLength, required } from "vuelidate/lib/validators";
import { MaxFieldLengths, MinFieldLengths } from "~/constants";
import { IsOptionalBoolean, PasswordStrength } from "~/validators";

export const Form = {
  email: {
    type: "email",
    required: true,
    label: "AUTH.LABEL.EMAIL"
  },
  password: {
    type: "password",
    required: true,
    label: "AUTH.LABEL.PASSWORD"
  }
};

export const ModelValidator = obj => {
  return (
    Object.prototype.hasOwnProperty.call(obj, "email") &&
    Object.prototype.hasOwnProperty.call(obj, "password") &&
    ((Object.prototype.hasOwnProperty.call(obj, "rememberMe") && typeof obj.rememberMe === "boolean") ||
      obj.rememberMe === null)
  );
};

export const Validations = {
  form: {
    email: {
      email,
      required,
      maxLength: maxLength(MaxFieldLengths.EMAIL)
    },
    password: {
      required,
      maxLength: maxLength(MaxFieldLengths.PASSWORD),
      minLength: minLength(MinFieldLengths.PASSWORD),
      passwordStrength: PasswordStrength
    },
    rememberMe: { isOptionalBoolean: IsOptionalBoolean }
  }
};

export default {
  form: Form,
  modelValidator: ModelValidator,
  validations: Validations
};
