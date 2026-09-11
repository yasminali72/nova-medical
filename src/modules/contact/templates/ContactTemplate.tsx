import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/ui/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export async function ContactTemplate() {
  const t = await getTranslations();

  const contactInfo = [
    {
      icon: Phone,
      label: t("contact.info.phone.label"),
      value: t("contact.info.phone.value"),
      href: `tel:${t("common.phone").replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: t("contact.info.email.label"),
      value: t("contact.info.email.value"),
      href: `mailto:${t("contact.info.email.value")}`,
    },
    {
      icon: MapPin,
      label: t("contact.info.address.label"),
      value: t("contact.info.address.value"),
      href: "#",
    },
    {
      icon: Clock,
      label: t("contact.info.hours.label"),
      value: t("contact.info.hours.value"),
      href: undefined,
    },
  ];

  return (
    <div className="flex flex-col gap-20 pb-28">
      {/* Header */}
      <section className="pt-16 sm:pt-24 border-b border-border/70 pb-16 bg-gradient-to-b from-primary/3 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-6">
            {t("contact.badge")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            {t("contact.title")}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info column */}
          <div className="lg:col-span-4 space-y-5">
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <MotionWrapper key={label} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-card border border-border/80 flex items-start gap-4 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              </MotionWrapper>
            ))}

            {/* Emergency notice */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-rose-500/5 border border-red-500/20 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span className="text-sm font-bold text-red-600 dark:text-red-400">
                  {t("contact.emergency.title")}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("contact.emergency.description")}
              </p>
              <a
                href="tel:911"
                className="inline-block mt-1 text-xs font-bold text-red-600 dark:text-red-400 hover:underline"
              >
                {t("contact.emergency.callNow")}
              </a>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-8">
            <MotionWrapper direction="left" delay={0.1}>
              <div className="p-8 sm:p-10 rounded-3xl bg-card border border-border/80 shadow-sm">
                <h2 className="text-2xl font-black text-foreground mb-2">
                  {t("contact.form.title")}
                </h2>
                <p className="text-sm text-muted-foreground mb-8">
                  {t("contact.form.subtitle")}
                </p>
                <ContactForm />
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl overflow-hidden border border-border/80 h-[320px] bg-muted flex items-center justify-center">
          <div className="text-center space-y-2">
            <MapPin className="w-8 h-8 text-primary mx-auto" />
            <p className="text-sm font-medium text-muted-foreground">{t("contact.mapPlaceholder")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
