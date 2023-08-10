import BaseDto from "./BaseDto";

export default class BaseAuditableDto extends BaseDto {
  // ID
  id = null;

  // Audit Metadata
  createdAt = null;
  updatedAt = null;

  constructor(data = {}) {
    super(data);

    if (data && typeof data === "object") {
      // ID
      if (Object.prototype.hasOwnProperty.call(data, "id") && !isNaN(data.id)) this.id = parseInt(parseFloat(data.id));

      // Audit Metadata
      if (data?.createdAt && typeof data.createdAt === "string") this.createdAt = data.createdAt;
      if (data?.updatedAt && typeof data.updatedAt === "string") this.updatedAt = data.updatedAt;
    }
  }
}
