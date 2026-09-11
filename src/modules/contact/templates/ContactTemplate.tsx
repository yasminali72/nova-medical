import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageSquare, AlertCircle } from "lucide-react";
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
      <section className="relative pt-16 sm:pt-24 border-b border-border/70 pb-20 bg-gradient-to-b from-primary/[0.05] via-card/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 backdrop-blur-md shadow-sm mb-6">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t("contact.badge")}</span>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
              {t("contact.title")}
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="mt-4 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
              {t("contact.subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Contact grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info column */}
          <div className="lg:col-span-5 space-y-5">
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <MotionWrapper key={label} delay={i * 0.1}>
                <div className="p-7 rounded-3xl bg-card border border-border/80 flex items-start gap-4 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-base font-bold text-foreground hover:text-primary transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-base font-bold text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              </MotionWrapper>
            ))}

            {/* Emergency notice card */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-red-500/10 via-rose-500/5 to-transparent border border-red-500/25 space-y-3 shadow-md">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="text-base font-bold text-red-600 dark:text-red-400">
                  {t("contact.emergency.title")}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                {t("contact.emergency.description")}
              </p>
              <a
                href="tel:911"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 text-white font-bold text-xs hover:bg-red-700 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t("contact.emergency.callNow")}</span>
              </a>
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <MotionWrapper direction="left" delay={0.1}>
              <div className="p-8 sm:p-12 rounded-[2.5rem] bg-card border border-border/80 shadow-xl shadow-primary/5">
                <h2 className="text-2xl sm:text-3xl font-black text-foreground mb-2">
                  {t("contact.form.title")}
                </h2>
                <p className="text-sm text-muted-foreground mb-8 font-normal">
                  {t("contact.form.subtitle")}
                </p>
                <ContactForm />
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Map embed / aesthetic banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-[2.5rem] overflow-hidden border border-border/80 h-[340px] bg-gradient-to-br from-card via-muted to-card flex items-center justify-center relative shadow-sm">
          <div className="text-center space-y-3 z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto shadow-sm">
              <MapPin className="w-7 h-7" />
            </div>
            <p className="text-base font-bold text-foreground">{t("contact.mapPlaceholder")}</p>
            <p className="text-xs text-muted-foreground">Main Boulevard, Medical District, Suite 400</p>
          </div>
        </div>
      </section>
    </div>
  );
}

