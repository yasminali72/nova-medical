import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales, isRTL, Locale } from "@/i18n/routing";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isArabic = locale === "ar";

  return {
    title: {
      template: `%s | ${isArabic ? "مركز نوفا الطبي" : "NOVA Medical Center"}`,
      default: isArabic
        ? "مركز نوفا الطبي | رعاية صحية متطورة بلمسة إنسانية راقية"
        : "NOVA Medical Center | Modern & Trustworthy Healthcare",
    },
    description: isArabic
      ? "مركز طبي متميز في العيادات الخارجية والتخصصات الدقيقة بأحدث التقنيات التشخيصية."
      : "Premium outpatient medical center offering 8 specialized clinical departments and state-of-the-art diagnostic care.",
    keywords: [
      "Medical Center",
      "Healthcare",
      "Cardiology",
      "Dermatology",
      "Pediatrics",
      "Dentistry",
      "Orthopedics",
      "Internal Medicine",
      "مركز طبي",
      "رعاية صحية",
    ],
    metadataBase: new URL("https://nova-medical-center.local"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ar: "/ar",
      },
    },
    openGraph: {
      type: "website",
      locale: isArabic ? "ar_AE" : "en_US",
      siteName: isArabic ? "مركز نوفا الطبي" : "NOVA Medical Center",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = isRTL(locale) ? "rtl" : "ltr";
  const fontClass = isRTL(locale) ? ibmPlexSansArabic.className : inter.className;

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`${fontClass} antialiased min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
