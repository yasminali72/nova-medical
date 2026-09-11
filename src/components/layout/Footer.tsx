import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { specialties } from "@/data/specialties";

export async function Footer() {
  const t = await getTranslations();

  const quickLinks = [
    { href: "/", label: t("navigation.home") },
    { href: "/about", label: t("navigation.about") },
    { href: "/services", label: t("navigation.services") },
    { href: "/specialties", label: t("navigation.specialties") },
    { href: "/doctors", label: t("navigation.doctors") },
    { href: "/facilities", label: t("navigation.facilities") },
    { href: "/contact", label: t("navigation.contact") },
  ];

  return (
    <footer className="w-full bg-card border-t border-border mt-20 transition-colors">
      {/* Top Banner */}
      <div className="bg-primary/5 border-b border-border/60 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {t("footer.emergencyText")}
              </p>
              <p className="text-xs text-muted-foreground">
                {t("common.emergencyNotice")}
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity shrink-0"
          >
            <span>{t("common.contactUs")}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-primary-foreground shadow-sm shadow-primary/20">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground font-heading">
                  NOVA
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                  Medical Center
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
            <div className="pt-2 text-xs text-muted-foreground/80 italic">
              {t("footer.disclaimer")}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              {t("footer.departments")}
            </h4>
            <ul className="space-y-2.5">
              {specialties.slice(0, 5).map((spec) => (
                <li key={spec.id}>
                  <Link
                    href={`/specialties#${spec.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {t(spec.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              {t("footer.hours")}
            </h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{t("common.address")}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+97148006682"
                  className="hover:text-primary transition-colors"
                  dir="ltr"
                >
                  {t("common.phone")}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:care@novamedicalcenter.com"
                  className="hover:text-primary transition-colors"
                >
                  {t("common.email")}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p>{t("common.monToFri")}</p>
                  <p>{t("common.friday")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {t("common.centerName")}.{" "}
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:underline">
              {t("navigation.about")}
            </Link>
            <Link href="/services" className="hover:underline">
              {t("navigation.services")}
            </Link>
            <Link href="/contact" className="hover:underline">
              {t("navigation.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
