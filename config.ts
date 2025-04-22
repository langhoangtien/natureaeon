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

export const PRODUCT_NAME = process.env.NEXT_PUBLIC_PRODUCT_NAME;
export const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME;
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
export const CONTACT_PHONE = process.env.NEXT_PUBLIC_CONTACT_PHONE;
export const CONTACT_ADDRESS = process.env.NEXT_PUBLIC_CONTACT_ADDRESS;
export const CONTACT_WEBSITE = process.env.NEXT_PUBLIC_CONTACT_WEBSITE;
export const PRODUCT_SLUG = process.env.NEXT_PUBLIC_PRODUCT_SLUG;
