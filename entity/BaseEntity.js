export default class BaseEntity {
  toJson() {
    return this.toJSON();
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }
}
