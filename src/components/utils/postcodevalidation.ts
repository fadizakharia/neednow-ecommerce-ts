import {
  postcodeValidator,
  postcodeValidatorExistsForCountry,
} from "postcode-validator";
import countries from "i18n-iso-countries";
type code =
  | "UK"
  | "JE"
  | "GG"
  | "IM"
  | "US"
  | "CA"
  | "IE"
  | "DE"
  | "JP"
  | "FR"
  | "AU"
  | "IT"
  | "CH"
  | "AT"
  | "ES"
  | "NL"
  | "BE"
  | "DK"
  | "SE"
  | "NO"
  | "BR"
  | "PT"
  | "FI"
  | "AX"
  | "KR"
  | "CN"
  | "TW"
  | "SG"
  | "DZ"
  | "AD"
  | "AR"
  | "AM"
  | "AZ"
  | "BH"
  | "BD"
  | "BB"
  | "BY"
  | "BM"
  | "BA"
  | "IO"
  | "BN"
  | "BG"
  | "KH"
  | "CV"
  | "CL"
  | "CR"
  | "HR"
  | "CY"
  | "CZ"
  | "DO"
  | "EC"
  | "EG"
  | "EE"
  | "FO"
  | "GE"
  | "GR"
  | "GL"
  | "GT"
  | "HT"
  | "HN"
  | "HU"
  | "IS"
  | "IN"
  | "ID"
  | "IL"
  | "JO"
  | "KZ"
  | "KE"
  | "KW"
  | "LA"
  | "LV"
  | "LB"
  | "LI"
  | "LT"
  | "LU"
  | "MK"
  | "MY"
  | "MV"
  | "MT"
  | "MU"
  | "MX"
  | "MD"
  | "MC"
  | "MA"
  | "NP"
  | "NZ"
  | "NI"
  | "NG"
  | "OM"
  | "PK"
  | "PY"
  | "PH"
  | "PL"
  | "PR"
  | "RO"
  | "RU"
  | "SM"
  | "SA"
  | "SN"
  | "SK"
  | "SI"
  | "ZA"
  | "LK"
  | "TJ"
  | "TH"
  | "TN"
  | "TR"
  | "TM"
  | "UA"
  | "UY"
  | "UZ"
  | "VA"
  | "VE"
  | "ZM"
  | "AS"
  | "CC"
  | "CK"
  | "RS"
  | "ME"
  | "CS"
  | "YU"
  | "CX"
  | "ET"
  | "FK"
  | "NF"
  | "FM"
  | "GF"
  | "GN"
  | "GP"
  | "GS"
  | "GU"
  | "GW"
  | "HM"
  | "IQ"
  | "KG"
  | "LR"
  | "LS"
  | "MG"
  | "MH"
  | "MN"
  | "MP"
  | "MQ"
  | "NC"
  | "NE"
  | "VI"
  | "PF"
  | "PG"
  | "PM"
  | "PN"
  | "PW"
  | "RE"
  | "SH"
  | "SJ"
  | "SO"
  | "SZ"
  | "TC"
  | "WF"
  | "XK"
  | "YT"
  | "INTL";

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
