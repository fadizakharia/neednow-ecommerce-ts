import {
  postcodeValidator,
  postcodeValidatorExistsForCountry,
} from "postcode-validator";
import countries from "i18n-iso-countries";
import { code } from "./postCodeValidatorTypes";

export const validatePostCode = (postCode: string, country: string) => {
  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  let postalCode;
  let code;

  if (country !== "United States")
    code = countries.getAlpha2Code(country, "en").toUpperCase();
  if (country === "United States") code = "US";

  if (code) {
    if (postcodeValidatorExistsForCountry(code as code)) {
      postalCode = postcodeValidator(postCode, code as code);
    }

    if (postalCode !== undefined) {
      return postalCode;
    }
    return true;
  }
};
