import { email, required } from "vuelidate/lib/validators";

export const Form = {
  email: {
    type: "email",
    required: false
  }
};

export const ModelValidator = model => {
  return (
    Object.prototype.hasOwnProperty.call(model, "email") &&
    (() => {
      const { email } = model;

      return email === null || typeof email === "string";
    })
  );
};

export const Validations = {
  form: {
    email: {
      email,
      required
    }
  }
};

export default {
  form: Form,
  validations: Validations
};
