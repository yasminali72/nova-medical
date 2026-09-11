import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/forms/ContactForm";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { MapPin, Phone, Mail, Clock, HelpCircle } from "lucide-react";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="flex flex-col gap-16 sm:gap-20 pb-24">
      {/* Header */}
      <section className="relative pt-16 sm:pt-24 border-b border-border/70 pb-16 bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper direction="down">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/20">
              {t("contact.badge")}
            </span>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading">
              {t("contact.title")}
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info & Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground font-heading">
                {t("contact.infoTitle")}
              </h2>
              <p className="text-sm text-muted-foreground">
                {t("contact.infoSubtitle")}
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-card border border-border/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {t("common.ourLocation")}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    {t("common.address")}
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {t("common.callUs")}
                  </h4>
                  <a
                    href="tel:+97148006682"
                    className="text-xs text-primary font-semibold mt-1 inline-block hover:underline"
                    dir="ltr"
                  >
                    {t("common.phone")}
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {t("common.emailUs")}
                  </h4>
                  <a
                    href="mailto:care@novamedicalcenter.com"
                    className="text-xs text-primary font-semibold mt-1 inline-block hover:underline"
                  >
                    {t("common.email")}
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/80 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {t("common.workingHours")}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {t("common.monToFri")}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {t("common.friday")}
                  </p>
                </div>
              </div>
            </div>

            {/* Map Visual / Location Placeholder Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-border/80 aspect-[16/9] bg-muted flex items-center justify-center">
              <div className="text-center p-6 space-y-2">
                <MapPin className="w-8 h-8 text-primary mx-auto" />
                <p className="text-xs font-semibold text-foreground">
                  Healthcare City, Al Razi Building, Dubai
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Complimentary valet parking available on arrival
                </p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQs on Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 border-t border-border/70">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-2xl font-bold text-foreground font-heading flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-primary" />
            <span>{t("contact.faqSection.title")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-2">
            <h3 className="text-sm font-bold text-foreground">
              {t("contact.faqSection.q1")}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("contact.faqSection.a1")}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-2">
            <h3 className="text-sm font-bold text-foreground">
              {t("contact.faqSection.q2")}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("contact.faqSection.a2")}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-2">
            <h3 className="text-sm font-bold text-foreground">
              {t("contact.faqSection.q3")}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("contact.faqSection.a3")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
