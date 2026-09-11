import { getTranslations } from "next-intl/server";
import { getLocale } from "next-intl/server";
import { Activity, Stethoscope, Users, Building2 } from "lucide-react";
import { NavbarClient } from "./NavbarClient";

export async function Navbar() {
  const t = await getTranslations();
  const locale = await getLocale();

  const navLinks = [
    { href: "/", label: t("navigation.home") },
    { href: "/about", label: t("navigation.about") },
    {
      href: "/services",
      label: t("navigation.services"),
      children: [
        {
          href: "/services",
          label: t("navigation.services"),
          icon: <Activity className="w-4 h-4" />,
          description: "All clinical programs",
        },
        {
          href: "/specialties",
          label: t("navigation.specialties"),
          icon: <Stethoscope className="w-4 h-4" />,
          description: "Medical departments",
        },
      ],
    },
    { href: "/doctors", label: t("navigation.doctors") },
    { href: "/facilities", label: t("navigation.facilities") },
    { href: "/contact", label: t("navigation.contact") },
  ];

  return (
    <NavbarClient
      locale={locale}
      navLinks={navLinks}
      bookInquiryLabel={t("navigation.bookInquiry")}
      centerName={t("common.centerName")}
      centerTagline={t("common.centerTagline")}
      callLabel={t("common.callUs")}
      phone={t("common.phone")}
    />
  );
}
