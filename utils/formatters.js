import { format } from "date-fns";
import { DateTimeFormats } from "~/constants";

export const addressFormatter = (address = {}) => {
  const keys = ["addressLineOne", "addressLineTwo", "town", "county", "postcode"];
  const addressParts = keys.map(key => address[key]);
  const filtered = addressParts.filter(part => part !== null && part !== undefined && part.length > 0);

  return filtered.join(", ") + ".";
};

export const dateFormatter = dateValue => {
  return format(new Date(dateValue), DateTimeFormats.DISPLAY_DATE);
};

export default { addressFormatter, dateFormatter };
