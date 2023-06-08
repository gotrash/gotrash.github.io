import BaseEntity from "./BaseEntity";

export default class User extends BaseEntity {
  id = null;
  machineName = null;
  imageFilename = null;

  constructor(data = {}) {
    super();

    if (data?.id) this.id = data.id;
    if (data?.machineName) this.machineName = data.machineName;
    if (data?.imageFilename) this.imageFilename = data.imageFilename;
  }

  clone() {
    return new User(this);
  }

  equals(obj) {
    if (!(obj instanceof User)) throw new TypeError("Must be an instance of `JobType`");

    const { id, machineName, imageFilename } = this;

    return id === obj.id && machineName === obj.machineName && imageFilename === obj.imageFilename;
  }

  toJSON() {
    const { id, machineName, imageFilename } = this;

    return { id, machineName, imageFilename };
  }
}
