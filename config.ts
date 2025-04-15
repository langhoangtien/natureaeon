import packageJson from "./package.json";
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
export const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "";

export type ConfigValue = {
  appName: string;
  appVersion: string;
  serverUrl: string;
  assetsDir: string;
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  appName: "Natureaeon",
  appVersion: packageJson.version,
  serverUrl: "",
  assetsDir: "",
  /**
   * Auth
   * @method jwt | amplify | firebase | supabase | auth0
   */
};

export const SETTINGS = {
  PRODUCT_NAME: "Naturaeon ™",
  COMPANY_NAME: "Naturaeon",
  CONTACT_EMAIL: "contact@naturaeon.com",
  CONTACT_PHONE: "+1 213 800 9944",
  CONTACT_ADDRESS: "1111B S Governors Ave STE 29227 Dover, DE 19904",
  CONTACT_WEBSITE: "https://www.naturaeon.com",
};
export const PRODUCT_NAME = SETTINGS.PRODUCT_NAME;
export const COMPANY_NAME = SETTINGS.COMPANY_NAME;
export const CONTACT_EMAIL = SETTINGS.CONTACT_EMAIL;
export const CONTACT_PHONE = SETTINGS.CONTACT_PHONE;
export const CONTACT_ADDRESS = SETTINGS.CONTACT_ADDRESS;
export const CONTACT_WEBSITE = SETTINGS.CONTACT_WEBSITE;
