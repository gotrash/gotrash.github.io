import BaseAuditableDto from "./BaseAuditableDto";
import UserProfileRoleDto from "./UserProfileRoleDto";

export default class UserProfileDto extends BaseAuditableDto {
  // Address
  addressLineOne = "";
  addressLineTwo = "";
  town = "";
  county = "";
  postcode = "";

  // User Data
  name = "";
  userAddresses = ["One", "Two", "Three", "Four", "Five"];

  // Contact Details
  email = "";
  telephone = "";
  mobile = "";

  // Access Control
  roles = [];

  constructor(data = {}) {
    super(data);

    if (data && typeof data === "object") {
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
      if (Object.prototype.hasOwnProperty.call(data, "name") && typeof data.name === "string") this.name = data.name;
      if (
        Object.prototype.hasOwnProperty.call(data, "userAddresses") &&
        Array.isArray(data?.userAddresses) &&
        data.userAddresses.length > 0
      )
        this.userAddresses = data.userAddresses;

      // Contact Details
      if (Object.prototype.hasOwnProperty.call(data, "email") && typeof data.email === "string")
        this.email = data.email;
      if (Object.prototype.hasOwnProperty.call(data, "telephone") && typeof data.telephone === "string")
        this.telephone = data.telephone;
      if (Object.prototype.hasOwnProperty.call(data, "mobile") && typeof data.mobile === "string")
        this.mobile = data.mobile;

      // Access Control
      if (Object.prototype.hasOwnProperty.call(data, "roles") && Array.isArray(data?.roles))
        this.roles = data.roles.map(role => (role instanceof UserProfileRoleDto ? role : new UserProfileRoleDto(role)));
    }
  }

  clone() {
    return new UserProfileDto(this, this.debug);
  }

  toJSON() {
    const {
      // ID
      id,

      // Name
      name,
      userAddresses,

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
      name,
      userAddresses,

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
