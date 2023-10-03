import BaseAuditableDto from "./BaseAuditableDto";

export default class RoleDto extends BaseAuditableDto {
  label = null;
  machineName = null;

  constructor(data = {}, debug = false) {
    super(data, debug);

    if (data && typeof data === "object") {
      if (Object.prototype.hasOwnProperty.call(data, "label") && typeof data.label === "string")
        this.label = data.label;
      if (Object.prototype.hasOwnProperty.call(data, "machineName") && typeof data.machineName === "string")
        this.machineName = data.machineName;
    }
  }

  toJSON() {
    const { id, label, machineName, createdAt, updatedAt } = this;

    return { id, label, machineName, createdAt, updatedAt };
  }
}
