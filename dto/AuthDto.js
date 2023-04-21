import BaseDto from "./BaseDto";

export default class AuthDto extends BaseDto {
  email = null;
  password = null;
  rememberMe = false;

  constructor(data = {}) {
    super();

    if (data?.email) this.email = data.email;
    if (data?.password) this.password = data.password;
    if (typeof data?.rememberMe === "boolean") this.rememberMe = data.rememberMe;
  }

  clone() {
    return new AuthDto(this);
  }

  equals(obj) {
    return this.email === obj.email && this.password === obj.password && this.rememberMe === obj.rememberMe;
  }

  toJSON() {
    const { email, password } = this;

    return { email, password };
  }
}
