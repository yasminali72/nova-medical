import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { locales, defaultLocale } from "./routing";

/** All feature modules that have their own messages folder */
const MODULES = [
  "home",
  "about",
  "services",
  "specialties",
  "doctors",
  "facilities",
  "contact",
] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : defaultLocale;

  // Load global shared messages (common, navigation, footer)
  const globalMessages = (
    await import(`../../messages/${locale}.json`)
  ).default;

  // Load and merge every module's messages
  const moduleMessages = await Promise.all(
    MODULES.map((mod) =>
      import(`../modules/${mod}/messages/${locale}.json`).then(
        (m) => m.default
      )
    )
  );

  const messages = Object.assign({}, globalMessages, ...moduleMessages);

  return { locale, messages };
});
