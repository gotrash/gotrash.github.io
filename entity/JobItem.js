import BaseEntity from "./BaseEntity";

export default class JobItem extends BaseEntity {
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
    return new JobItem(this);
  }

  equals(obj) {
    if (!(obj instanceof JobItem)) throw new TypeError("Must be an instance of `JobItem`");

    const { id, machineName, imageFilename } = this;

    return id === obj.id && machineName === obj.machineName && imageFilename === obj.imageFilename;
  }

  toJSON() {
    const { id, machineName, imageFilename } = this;

    return { id, machineName, imageFilename };
  }
}
