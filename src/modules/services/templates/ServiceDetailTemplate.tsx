import { getTranslations, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { services } from "@/data/services";
import { ArrowRight, ArrowLeft, Clock, CheckCircle, Stethoscope } from "lucide-react";

export async function ServiceDetailTemplate({ slug }: { slug: string }) {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const service = services.find((s) => s.id === slug || s.slug === slug);
  if (!service) notFound();

  return (
    <div className="flex flex-col gap-16 pb-28">
      {/* Header */}
      <section className="pt-16 sm:pt-24 border-b border-border/70 pb-16 bg-gradient-to-b from-primary/3 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            {t("common.backToServices")}
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20 mb-4">
            {t("services.badge")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground mt-3">
            {t(service.titleKey)}
          </h1>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">{t(service.descriptionKey)}</p>
        </div>
      </section>

      {/* Detail content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: features */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-8 rounded-3xl bg-card border border-border/80">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-primary" />
                {t("services.detail.whatWeOffer")}
              </h2>
              <ul className="space-y-4">
                {service.featuresKeys?.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{t(f)}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            {service.benefitsKeys && service.benefitsKeys.length > 0 && (
              <div className="p-8 rounded-3xl bg-card border border-border/80">
                <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {t("services.detail.benefits")}
                </h2>
                <ul className="space-y-4">
                  {service.benefitsKeys.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <span className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>{t(b)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: info card */}
          <div className="space-y-5">
            <div className="p-7 rounded-3xl bg-primary/5 border border-primary/15 space-y-5">
              {service.duration && (
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">{t("services.detail.duration")}</p>
                    <p className="text-sm font-semibold text-foreground">{service.duration}</p>
                  </div>
                </div>
              )}
              {service.suitableForKey && (
                <div>
                  <p className="text-xs text-muted-foreground font-medium mb-1">{t("services.detail.suitableFor")}</p>
                  <p className="text-sm text-foreground">{t(service.suitableForKey)}</p>
                </div>
              )}
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary text-white text-sm font-bold shadow-md shadow-primary/25 hover:opacity-90 transition"
              >
                {t("common.bookConsultation")} <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
