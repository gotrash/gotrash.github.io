export const UK_POSTCODE =
  /(GIR 0AA)|((((?![QVX])[A-Z][0-9][0-9]?)|(((?![QVX])[A-Z](?![IJZ])[A-Z][0-9][0-9]?)|(((?![QVX])[A-Z][0-9][A-HJKSTUW])|((?![QVX])[A-Z](?![QVX])[A-Z][0-9][ABEHMNPRVWXY])))) ?[0-9]((?![CIKMOV])[A-Z]){2})/i;
export const STRONG_PASSWORD = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;

export default {
  UK_POSTCODE,
  STRONG_PASSWORD
};
