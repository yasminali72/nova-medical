import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "@/i18n/routing";

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames, avoid api, _next, static assets
  matcher: ["/", "/(ar|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
