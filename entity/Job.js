import { isEqual } from "lodash";
import BaseEntity from "./BaseEntity";
import JobItem from "./JobItem";
import JobType from "./JobType";
import User from "./User";

export default class Job extends BaseEntity {
  _editing = false;
  id = null;
  jobType = null;
  creator = null;
  assignee = null;
  startDateRequired = null;
  endDateRequired = null;
  createdAt = null;
  updatedAt = null;
  publishedAt = null;
  items = [];

  constructor(data = {}) {
    super();

    if (data?.id) this.id = data.id;
    if (data?.jobType)
      this.jobType = data.jobType instanceof JobType ? data.jobType.clone() : new JobType(data.jobType);
    if (data?.creator) this.creator = data.creator instanceof User ? data.creator.clone() : new User(data.creator);
    if (data?.assignee) this.assignee = data.assignee instanceof User ? data.assignee.clone() : new User(data.assignee);
    if (data?.startDateRequired) this.startDateRequired = data.startDateRequired;
    if (data?.endDateRequired) this.endDateRequired = data.endDateRequired;
    if (data?.createdAt) this.createdAt = data.createdAt;
    if (data?.updatedAt) this.updatedAt = data.updatedAt;
    if (data?.publishedAt) this.publishedAt = data.publishedAt;

    if (Array.isArray(data?.items) && data.items.length > 0)
      this.items = data.items.map(item => {
        return item instanceof JobItem ? item.clone() : new JobItem(item);
      });
  }

  clone() {
    return new Job(this);
  }

  equals(obj) {
    if (!(obj instanceof Job)) throw new TypeError("Must be an instance of `Job`");

    const {
      id,
      jobType,
      creator,
      assignee,
      startDateRequired,
      endDateRequired,
      createdAt,
      updatedAt,
      publishedAt,
      items
    } = this;

    return (
      id === obj.id &&
      isEqual(jobType, obj.jobType) &&
      isEqual(creator, obj.creator) &&
      isEqual(assignee, obj.assignee) &&
      startDateRequired === obj.startDateRequired &&
      endDateRequired === obj.endDateRequired &&
      createdAt === obj.createdAt &&
      updatedAt === obj.updatedAt &&
      publishedAt === obj.publishedAt &&
      isEqual(items, obj.items)
    );
  }

  toJSON() {
    const {
      id,
      jobType,
      creator,
      assignee,
      startDateRequired,
      endDateRequired,
      createdAt,
      updatedAt,
      publishedAt,
      items
    } = this;

    return {
      id,
      jobType,
      creator,
      assignee,
      startDateRequired,
      endDateRequired,
      createdAt,
      updatedAt,
      publishedAt,
      items: items.length
    };
  }
}
