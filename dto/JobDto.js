import BaseDto from "./BaseDto";

export default class Job extends BaseDto {
  id = null;
  summary = null;
  images = [];
  isBuilderWaste = null;
  isRecyclable = null;
  isBusiness = null;
  isEasyAccess = null;
  loadSize = null;
  collection = null;
  detailedDescription = null;
  createdAt = null;
  deletedAt = null;
  publishedAt = null;
  updatedAt = null;

  constructor(data = {}) {
    super(data);

    if (data) {
      if (Object.prototype.hasOwnProperty.call(data, "id") && !isNaN(data.id)) this.id = parseInt(parseFloat(data.id));
      if (Object.prototype.hasOwnProperty.call(data, "summary") && typeof data.summary === "string")
        this.summary = data.summary;
      if (Object.prototype.hasOwnProperty.call(data, "images") && data.images && Array.isArray(data.images))
        this.images = data.images;
      if (Object.prototype.hasOwnProperty.call(data, "isBuilderWaste"))
        this.isBuilderWaste = this.#checkBool(data.isBuilderWaste);
      if (Object.prototype.hasOwnProperty.call(data, "isRecyclable"))
        this.isRecyclable = this.#checkBool(data.isRecyclable);
      if (Object.prototype.hasOwnProperty.call(data, "isBusiness")) this.isBusiness = this.#checkBool(data.isBusiness);
      if (Object.prototype.hasOwnProperty.call(data, "isEasyAccess"))
        this.isEasyAccess = this.#checkBool(data.isEasyAccess);
      if (Object.prototype.hasOwnProperty.call(data, "loadSize") && typeof data.loadSize === "string")
        this.loadSize = data.loadSize;
      if (
        Object.prototype.hasOwnProperty.call(data, "detailedDescription") &&
        typeof data.detailedDescription === "string"
      )
        this.detailedDescription = data.detailedDescription;
    }
  }

  #checkBool(bool) {
    return !!bool && bool !== "0";
  }

  toJSON() {
    const {
      id,
      summary,
      images,
      isBuilderWaste,
      isRecyclable,
      isBusiness,
      isEasyAccess,
      loadSize,
      detailedDescription
    } = this;

    return {
      id,
      summary,
      images,
      isBuilderWaste,
      isRecyclable,
      isBusiness,
      isEasyAccess,
      loadSize,
      detailedDescription
    };
  }
}
