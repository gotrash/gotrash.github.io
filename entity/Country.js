import BaseDto from "../dto/BaseDto";
import Continent from "./Continent";

export default class Country extends BaseDto {
  id = null;
  countryName = null;
  twoLetterCountryCode = null;
  threeLetterCountryCode = null;
  countryNumber = null;
  enabled = false;
  createdAt = null;
  updatedAt = null;
  continent = null;

  constructor(data = {}) {
    super();

    if (data?.id) this.id = data.id;
    if (data?.countryName) this.countryName = data.countryName;
    if (data?.twoLetterCountryCode) this.twoLetterCountryCode = data.twoLetterCountryCode;
    if (data?.threeLetterCountryCode) this.threeLetterCountryCode = data.threeLetterCountryCode;
    if (data?.countryNumber) this.countryNumber = data.countryNumber;
    if (typeof data?.enabled === "boolean") this.enabled = data.enabled;
    if (data?.createdAt) this.createdAt = data.createdAt;
    if (data?.updatedAt) this.updatedAt = data.updatedAt;
    if (data?.continent)
      this.continent = data.continent instanceof Continent ? data.continent : new Continent(data.continent);
  }

  clone() {
    return new Country(this);
  }

  equals(obj) {
    if (!(obj instanceof Country)) throw new TypeError("Must be an instance of `Country`");

    const {
      id,
      countryName,
      twoLetterCountryCode,
      threeLetterCountryCode,
      countryNumber,
      enabled,
      createdAt,
      updatedAt,
      continent
    } = this;

    return (
      id === obj.id &&
      countryName === obj.countryName &&
      twoLetterCountryCode === obj.twoLetterCountryCode &&
      threeLetterCountryCode === obj.threeLetterCountryCode &&
      countryNumber === obj.countryNumber &&
      enabled === obj.enabled &&
      createdAt === obj.createdAt &&
      updatedAt === obj.updatedAt &&
      ((!continent && !obj.continent) ||
        (continent instanceof Continent && continent.equals(obj.continent)) ||
        continent === obj.continent)
    );
  }

  toJSON() {
    const {
      id,
      countryName,
      twoLetterCountryCode,
      threeLetterCountryCode,
      countryNumber,
      enabled,
      createdAt,
      updatedAt,
      continent
    } = this;

    return {
      id,
      countryName,
      twoLetterCountryCode,
      threeLetterCountryCode,
      countryNumber,
      enabled,
      createdAt,
      updatedAt,
      continent
    };
  }
}
