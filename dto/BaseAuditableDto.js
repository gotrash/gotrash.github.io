import BaseDto from "./BaseDto";

export default class BaseAuditableDto extends BaseDto {
  createdAt = null;
  updatedAt = null;

  constructor(data = {}) {
    super(data);

    if (data && typeof data === "object") {
      if (data?.createdAt && typeof data.createdAt === "string") this.createdAt = data.createdAt;
      if (data?.updatedAt && typeof data.updatedAt === "string") this.updatedAt = data.updatedAt;
    }
  }
}
