import BaseDto from "./BaseDto";
import UserFeedbackStatisticDto from "./UserFeedbackStatisticDto";

export default class UserFeedbackStatisticsDto extends BaseDto {
  three = new UserFeedbackStatisticDto();
  six = new UserFeedbackStatisticDto();
  twelve = new UserFeedbackStatisticDto();
  total = new UserFeedbackStatisticDto();

  constructor(data = {}) {
    super(data);

    if (data) {
      console.log("UserFeedbackStatisticsDto: %o", data);
      if (data?.three)
        this.three =
          data.three instanceof UserFeedbackStatisticDto ? data.three : new UserFeedbackStatisticDto(data.three);
      if (data?.six)
        this.six = data.six instanceof UserFeedbackStatisticDto ? data.six : new UserFeedbackStatisticDto(data.six);
      if (data?.twelve)
        this.twelve =
          data.twelve instanceof UserFeedbackStatisticDto ? data.twelve : new UserFeedbackStatisticDto(data.twelve);
      if (data?.total)
        this.total =
          data.total instanceof UserFeedbackStatisticDto ? data.total : new UserFeedbackStatisticDto(data.total);
    }
  }

  clone() {
    return new UserFeedbackStatisticsDto(this);
  }

  toJSON() {
    const { three, six, twelve, total } = this;

    return { three, six, twelve, total };
  }
}
