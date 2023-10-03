import BaseDto from "./BaseDto";

export default class CardDetailsDto extends BaseDto {
  cvc = null;
  cardNumber = null;
  expMonth = null;
  expYear = null;
  cardHoldersName = null;

  constructor(params = {}) {
    super();

    this.cvc = params.cvc || null;
    this.cardHoldersName = params.cardHoldersName || null;
    this.cardNumber = params.cardNumber || null;
    this.expMonth = params.expMonth || null;
    this.expYear = params.expYear || null;
  }

  clone() {
    return new CardDetailsDto(this);
  }

  toJSON() {
    const { cvc, cardNumber, expMonth, expYear, cardHoldersName } = this;

    return { cvc, cardNumber, expMonth, expYear, cardHoldersName };
  }
}
