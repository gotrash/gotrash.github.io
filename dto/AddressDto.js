import BaseDto from "./BaseDto";

export default class AddressDto extends BaseDto {
  addressLineOne = null;
  addressLineTwo = null;
  town = null;
  county = null;
  postcode = null;
  country = null;
  latitude = null;
  longitude = null;

  constructor(data = {}) {
    super();

    if (data?.addressLineOne) this.addressLineOne = data.addressLineOne;
    if (data?.addressLineTwo) this.addressLineTwo = data.addressLineTwo;
    if (data?.town) this.town = data.town;
    if (data?.county) this.county = data.county;
    if (data?.postcode) this.postcode = data.postcode;
    if (data?.country) this.country = data.country;
    if (data?.latitude) this.latitude = data.latitude;
    if (data?.longitude) this.longitude = data.longitude;
  }

  clone() {
    return new AddressDto(this);
  }

  equals(obj) {
    if (!(obj instanceof AddressDto)) throw new TypeError("Must be an instance of `AddressDto`");
    const { addressLineOne, addressLineTwo, town, county, postcode, country, latitude, longitude } = this;

    return (
      addressLineOne === obj.addressLineOne &&
      addressLineTwo === obj.addressLineTwo &&
      town === obj.town &&
      county === obj.county &&
      postcode === obj.postcode &&
      country === obj.country &&
      latitude === obj.latitude &&
      longitude === obj.longitude
    );
  }

  toJSON() {
    const { addressLineOne, addressLineTwo, town, county, postcode, country, latitude, longitude } = this;

    return { addressLineOne, addressLineTwo, town, county, postcode, country, latitude, longitude };
  }
}
