import { maxLength, minLength, required, sameAs } from "vuelidate/lib/validators";
import { MaxFieldLengths, MinFieldLengths } from "~/constants";

export const Form = {};

export const Validators = {
  password: {
    required,
    maxLength: maxLength(MaxFieldLengths.PASSWORD),
    minLength: minLength(MinFieldLengths.PASSWORD),
    sameAsPassword: sameAs(this.password)
  }
};

export default {
  form: Form,
  validators: Validators
};
