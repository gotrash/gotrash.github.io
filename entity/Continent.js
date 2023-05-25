import BaseEntity from "./BaseEntity";

export default class Continent extends BaseEntity {
  continentCode = null;
  continentName = null;
  createdAt = null;
  updatedAt = null;

  constructor(data = {}) {
    super();

    if (data?.continentCode) this.continentCode = data.continentCode;
    if (data?.continentName) this.continentName = data.continentName;
    if (data?.createdAt) this.createdAt = data.createdAt;
    if (data?.updatedAt) this.updatedAt = data.updatedAt;
  }

  clone() {
    return new Continent(this);
  }

  equals(obj) {
    if (!(obj instanceof Continent)) throw new TypeError("Must be an instance of `Continent`");
    const { continentCode, continentName, createdAt, updatedAt } = this;

    return (
      continentCode === obj.continentCode &&
      continentName === obj.continentName &&
      createdAt === obj.createdAt &&
      updatedAt === obj.updatedAt
    );
  }

  toJSON() {
    const { continentCode, continentName, createdAt, updatedAt } = this;

    return { continentCode, continentName, createdAt, updatedAt };
  }
}
