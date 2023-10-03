import BaseDto from "./BaseAuditableDto";

export default class UserProfileRoleDto extends BaseDto {
  id = null;
  label = null;
  machineName = null;

  constructor(data = {}, debug = false) {
    super(data, debug);

    if (data && typeof data === "object") {
      // ID
      if (Object.prototype.hasOwnProperty.call(data, "id") && !isNaN(data.id)) this.id = parseInt(parseFloat(data.id));

      // Metadata
      if (Object.prototype.hasOwnProperty.call(data, "label") && typeof data.label === "string")
        this.label = data.label;
      if (Object.prototype.hasOwnProperty.call(data, "machineName") && typeof data.machineName === "string")
        this.machineName = data.machineName;
    }
  }

  clone() {
    return new UserProfileRoleDto(this, this.debug);
  }

  toJSON() {
    const { id, label, machineName } = this;

    return { id, label, machineName };
  }
}
