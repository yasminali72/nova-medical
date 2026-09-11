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
  Sparkles,
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
    <footer className="w-full bg-card border-t border-border/80 mt-28 transition-colors relative overflow-hidden">
      {/* Background ambient accent */}
      <div className="absolute top-0 start-1/2 -translate-x-1/2 w-3/4 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner */}
      <div className="bg-primary/8 border-b border-border/60 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-start">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-primary/15 text-primary flex items-center justify-center shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">
                {t("footer.emergencyText")}
              </p>
              <p className="text-xs text-muted-foreground font-medium">
                {t("common.emergencyNotice")}
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-xl bg-primary text-white hover:opacity-95 transition-opacity shrink-0 shadow-sm shadow-primary/20"
          >
            <span>{t("common.contactUs")}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-md shadow-primary/25 group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-foreground">
                  NOVA
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold">
                  Medical Center
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm font-normal">
              {t("footer.tagline")}
            </p>
            <div className="pt-2 text-xs text-muted-foreground/80 italic border-t border-border/50 max-w-sm">
              {t("footer.disclaimer")}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>{t("footer.quickLinks")}</span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{t("footer.departments")}</span>
            </h4>
            <ul className="space-y-3">
              {specialties.slice(0, 5).map((spec) => (
                <li key={spec.id}>
                  <Link
                    href={`/specialties#${spec.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block font-medium"
                  >
                    {t(spec.nameKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{t("footer.hours")}</span>
            </h4>
            <div className="space-y-3.5 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{t("common.address")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+97148006682"
                  className="hover:text-primary transition-colors text-xs font-semibold"
                  dir="ltr"
                >
                  {t("common.phone")}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:care@novamedicalcenter.com"
                  className="hover:text-primary transition-colors text-xs font-semibold"
                >
                  {t("common.email")}
                </a>
              </div>
              <div className="flex items-start gap-3 pt-2 border-t border-border/50">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div className="text-xs space-y-1 font-medium">
                  <p>{t("common.monToFri")}</p>
                  <p>{t("common.friday")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {t("common.centerName")}.{" "}
            {t("footer.rights")}
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link href="/about" className="hover:text-primary transition-colors">
              {t("navigation.about")}
            </Link>
            <Link href="/services" className="hover:text-primary transition-colors">
              {t("navigation.services")}
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              {t("navigation.contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

