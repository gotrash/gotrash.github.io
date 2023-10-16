import BaseDto from "./BaseDto";

export default class UserAddressDto extends BaseDto {
  id = null;
  label = null;
  addressLineOne = null;
  addressLineTwo = null;
  town = null;
  county = null;
  postcode = null;
  country = null;
  latitude = null;
  longitude = null;
  googlePlaceId = null;

  constructor(address = {}) {
    super();

    if (address) {
      console.log("Creating Address: %o", address);
      if (address?.id) this.id = address.id;
      if (address?.label) this.label = address.label;
      if (address?.addressLineOne) this.addressLineOne = address.addressLineOne;
      if (address?.addressLineTwo) this.addressLineTwo = address.addressLineTwo;
      if (address?.town) this.town = address.town;
      if (address?.county) this.county = address.county;
      if (address?.postcode) this.postcode = address.postcode;
      if (address?.country) this.country = address.country;
      if (address?.latitude) this.latitude = address.latitude;
      if (address?.longitude) this.longitude = address.longitude;
      if (address?.googlePlaceId) this.googlePlaceId = address.googlePlaceId;

      console.log("THIS: %o", this);
    }
  }

  clone() {
    return new UserAddressDto(this);
  }

  equals(that) {
    return (
      this.id === that.id &&
      this.label === that.label &&
      this.addressLineOne === that.addressLineOne &&
      this.addressLineTwo === that.addressLineTwo &&
      this.town === that.town &&
      this.county === that.county &&
      this.postcode === that.postcode &&
      this.country === that.country &&
      this.latitude === that.latitude &&
      this.longitude === that.longitude &&
      this.googlePlaceId === that.googlePlaceId
    );
  }

  toJSON() {
    const {
      id,
      label,
      addressLineOne,
      addressLineTwo,
      town,
      county,
      postcode,
      country,
      latitude,
      longitude,
      googlePlaceId
    } = this;

    return {
      id,
      label,
      addressLineOne,
      addressLineTwo,
      town,
      county,
      postcode,
      country,
      latitude,
      longitude,
      googlePlaceId
    };
  }
}
