import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { Phone, Heart, Calendar, Menu } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export async function Navbar() {
  const t = await getTranslations();

  const navLinks = [
    { href: "/", label: t("navigation.home") },
    { href: "/about", label: t("navigation.about") },
    { href: "/services", label: t("navigation.services") },
    { href: "/specialties", label: t("navigation.specialties") },
    { href: "/doctors", label: t("navigation.doctors") },
    { href: "/facilities", label: t("navigation.facilities") },
    { href: "/contact", label: t("navigation.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/85 border-b border-border/70 transition-colors">
      {/* Top emergency / quick info banner */}
      <div className="w-full bg-primary/10 border-b border-primary/20 py-1.5 px-4 text-xs font-medium text-primary hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t("home.hero.emergencyBadge")}</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:+97148006682"
              className="inline-flex items-center gap-1.5 hover:underline"
            >
              <Phone className="w-3 h-3" />
              <span dir="ltr">{t("common.phone")}</span>
            </a>
            <span>{t("common.monToFri")}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-200">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-foreground font-heading">
              NOVA
            </span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Medical Center
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/60 rounded-xl transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side CTAs & controls */}
        <div className="hidden sm:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-95 shadow-sm shadow-primary/30 transition-all duration-200 active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>{t("navigation.bookInquiry")}</span>
          </Link>
        </div>

        {/* Mobile controls & hamburger */}
        <div className="flex items-center gap-2 sm:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <MobileMenu
            navLinks={navLinks}
            bookInquiryLabel={t("navigation.bookInquiry")}
            centerName={t("common.centerName")}
            centerTagline={t("common.centerTagline")}
          />
        </div>
      </div>
    </header>
  );
}
