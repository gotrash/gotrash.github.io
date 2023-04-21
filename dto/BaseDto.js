export default class BaseDto {
  toJson() {
    return this.toJSON();
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}
