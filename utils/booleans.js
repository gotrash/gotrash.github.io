/**
 *
 * @param {Boolean} bool A boolean value
 * @returns If the bool is falsy then it will return false, otherwise it will return null.
 */
export const booleanOrFalse = bool => (booleanIsFalsy(bool) ? false : null);

/**
 *
 * @param {Boolean} bool A boolean value
 * @returns Returns true if the boolean is exactly false
 */
export const booleanIsFalse = bool => bool === false;

/**
 *
 * @param {Boolean} bool A boolean value
 * @returns Returns true if the boolean provided is any falsy value
 */
export const booleanIsFalsy = bool => [0, false, null, undefined].includes(bool);

export default { booleanOrFalse, booleanIsFalse, booleanIsFalsy };
