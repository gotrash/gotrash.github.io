import BaseAuditableDto from "./BaseAuditableDto";

export default class UserProfileDto extends BaseAuditableDto {
  // ID
  id = null;

  // Address
  addressLineOne = "";
  addressLineTwo = "";
  town = "";
  county = "";
  postcode = "";

  // Name
  firstName = "";
  middleNames = "";
  lastName = "";

  // Contact Details
  email = "";
  telephone = "";
  mobile = "";

  // Access Control
  roles = [];

  constructor(data = {}) {
    super(data);

    if (data) {
      // ID
      if (Object.prototype.hasOwnProperty.call(data, "id") && !isNaN(data.id)) this.id = parseInt(parseFloat(data.id));

      // Address
      if (Object.prototype.hasOwnProperty.call(data, "addressLineOne") && typeof data.addressLineOne === "string")
        this.addressLineOne = data.addressLineOne;
      if (Object.prototype.hasOwnProperty.call(data, "addressLineTwo") && typeof data.addressLineTwo === "string")
        this.addressLineTwo = data.addressLineTwo;
      if (Object.prototype.hasOwnProperty.call(data, "town") && typeof data.town === "string") this.town = data.town;
      if (Object.prototype.hasOwnProperty.call(data, "county") && typeof data.county === "string")
        this.county = data.county;
      if (Object.prototype.hasOwnProperty.call(data, "postcode") && typeof data.postcode === "string")
        this.postcode = data.postcode;

      // Name
      if (Object.prototype.hasOwnProperty.call(data, "firstName") && typeof data.firstName === "string")
        this.firstName = data.firstName;
      if (Object.prototype.hasOwnProperty.call(data, "middleNames") && typeof data.middleNames === "string")
        this.middleNames = data.middleNames;
      if (Object.prototype.hasOwnProperty.call(data, "lastName") && typeof data.lastName === "string")
        this.lastName = data.lastName;

      // Contact Details
      if (Object.prototype.hasOwnProperty.call(data, "email") && typeof data.email === "string")
        this.email = data.email;
      if (Object.prototype.hasOwnProperty.call(data, "telephone") && typeof data.telephone === "string")
        this.telephone = data.telephone;
      if (Object.prototype.hasOwnProperty.call(data, "mobile") && typeof data.mobile === "string")
        this.mobile = data.mobile;

      // Access Control
      if (Object.prototype.hasOwnProperty.call(data, "roles") && Array.isArray(data?.roles)) this.roles = data.roles;
    }
  }

  toJSON() {
    const {
      // ID
      id,

      // Name
      firstName,
      middleNames,
      lastName,

      // Address
      addressLineOne,
      addressLineTwo,
      town,
      county,
      postcode,

      // Contact Details
      email,
      telephone,
      mobile,

      // Access Control
      roles,

      // Audit Data
      createdAt,
      updatedAt
    } = this;

    return {
      // ID
      id,

      // Name
      firstName,
      middleNames,
      lastName,

      // Address
      addressLineOne,
      addressLineTwo,
      town,
      county,
      postcode,

      // Contact Details
      email,
      telephone,
      mobile,

      // Access Control
      roles,

      // Audit Data
      createdAt,
      updatedAt
    };
  }
}
