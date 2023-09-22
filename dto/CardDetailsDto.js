export default class CardDetailsDto {
  cvv = null;
  cardNumber = null;
  expMonth = null;
  expYear = null;
  cardHoldersName = null;

  constructor(params = {}) {
    this.cvc = params.cvc || null;
    this.cardHoldersName = params.cardHoldersName || null;
    this.cardNumber = params.cardNumber || null;
    this.expMonth = params.expMonth || null;
    this.expYear = params.expYear || null;
  }

  clone() {
    return new CardDetailsDto(this);
  }
}
