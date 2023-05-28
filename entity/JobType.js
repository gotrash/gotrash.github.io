import BaseEntity from "./BaseEntity";

export default class JobType extends BaseEntity {
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
    return new JobType(this);
  }

  equals(obj) {
    if (!(obj instanceof JobType)) throw new TypeError("Must be an instance of `JobType`");

    const { id, machineName, imageFilename } = this;

    return id === obj.id && machineName === obj.machineName && imageFilename === obj.imageFilename;
  }

  toJSON() {
    const { id, machineName, imageFilename } = this;

    return { id, machineName, imageFilename };
  }
}
