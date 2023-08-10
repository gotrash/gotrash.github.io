import BaseDto from "./BaseDto";

export default class UserFeedbackStatisticDto extends BaseDto {
  positive = 0;
  negative = 0;

  constructor(data = {}) {
    super(data);

    if (data && typeof data === "object") {
      if (data?.positive && !isNaN(data?.positive)) this.positive = parseInt(parseFloat(data.positive));
      if (data?.negative && !isNaN(data?.negative)) this.negative = parseInt(parseFloat(data.negative));
    }
  }

  clone() {
    return new UserFeedbackStatisticDto(this);
  }

  get ratio() {
    const { positive, total } = this;

    return positive / total;
  }

  get ratioPercent() {
    const { positive, negative, ratio } = this;

    if (positive === 0 || negative === 0) return positive ? 100 : 0;

    return parseFloat(ratio * 100);
  }

  get total() {
    const { positive, negative } = this;

    return positive + negative;
  }

  toJSON() {
    const { positive, negative, ratio, ratioPercent, total } = this;

    return { positive, negative, ratio, ratioPercent, total };
  }
}
