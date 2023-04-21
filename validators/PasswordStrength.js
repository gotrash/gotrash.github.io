import { Regexes } from "~/constants";

export default value => Regexes.STRONG_PASSWORD.test(value);
