import AddressDto from "../dto/AddressDto";

export default class ServiceProvider extends AddressDto {
  owner = null;
  name = null;
  stripeAccountId = null;
  telephone = null;
  mobile = null;
  email = null;
  createdAt = null;
  updatedAt = null;

  constructor(data = {}) {
    super(data);

    if (data?.owner) this.owner = data.owner;
    if (data?.name) this.name = data.name;
    if (data?.stripeAccountId) this.stripeAccountId = data.stripeAccountId;
    if (data?.telephone) this.telephone = data.telephone;
    if (data?.mobile) this.mobile = data.mobile;
    if (data?.email) this.email = data.email;
    if (data?.createdAt) this.createdAt = data.createdAt;
    if (data?.updatedAt) this.updatedAt = data.updatedAt;
  }

  clone() {
    return new ServiceProvider(this);
  }

  equals(obj) {
    if (!(obj instanceof ServiceProvider)) throw new TypeError("Must be an instance of `ServiceProvider`");
    const { owner, name, stripeAccountId, telephone, mobile, email, createdAt, updatedAt } = this;

    return (
      owner === obj.owner &&
      name === obj.name &&
      stripeAccountId === obj.stripeAccountId &&
      telephone === obj.telephone &&
      mobile === obj.mobile &&
      email === obj.email &&
      createdAt === obj.createdAt &&
      updatedAt === obj.updatedAt &&
      super.equals(obj)
    );
  }

  toJSON() {
    const {
      owner,
      name,
      addressLineOne,
      addressLineTwo,
      town,
      county,
      postcode,
      country,
      stripeAccountId,
      latitude,
      longitude,
      telephone,
      mobile,
      email,
      createdAt,
      updatedAt
    } = this;

    return {
      owner,
      name,
      addressLineOne,
      addressLineTwo,
      town,
      county,
      postcode,
      country,
      stripeAccountId,
      latitude,
      longitude,
      telephone,
      mobile,
      email,
      createdAt,
      updatedAt
    };
  }
}
