import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { Link } from "@/i18n/navigation";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { SpecialtyIcon } from "@/components/ui/SpecialtyIcon";
import {
  Clock,
  CheckCircle2,
  HelpCircle,
  Calendar,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const isRtl = locale === "ar";
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const service = services.find((s) => s.slug === slug);
  if (!service) {
    notFound();
  }

  // Related doctors
  const relatedDoctors = doctors.filter(
    (d) => d.specialtyId === service.specialtyId
  );

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24">
      {/* Breadcrumb & Hero */}
      <section className="relative pt-10 sm:pt-16 border-b border-border/70 pb-16 bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">
              {t("navigation.home")}
            </Link>
            <ChevronIcon className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-foreground">
              {t("navigation.services")}
            </Link>
            <ChevronIcon className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium truncate">
              {t(service.titleKey)}
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-2">
              <SpecialtyIcon name={service.icon} className="w-7 h-7" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-heading">
              {t(service.titleKey)}
            </h1>
            <p className="text-lg text-accent font-medium">
              {t(service.subtitleKey)}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t(service.descriptionKey)}
            </p>
          </div>
        </div>
      </section>

      {/* Main Details & Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left / Main Content */}
          <div className="lg:col-span-8 space-y-12">
            {/* What is included */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground font-heading">
                {t("services.keyFeatures")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.featuresKeys.map((key) => (
                  <div
                    key={key}
                    className="p-4 rounded-xl bg-card border border-border/70 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">
                      {t(key)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground font-heading">
                {t("services.benefits")}
              </h2>
              <div className="space-y-3">
                {service.benefitsKeys.map((key) => (
                  <div
                    key={key}
                    className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">
                      {t(key)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {service.faqKeys && service.faqKeys.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground font-heading flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-primary" />
                  <span>{t("services.frequentlyAsked")}</span>
                </h2>
                <div className="space-y-4">
                  {service.faqKeys.map((faq, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-card border border-border/80 space-y-2"
                    >
                      <h3 className="text-base font-bold text-foreground">
                        {t(faq.questionKey)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(faq.answerKey)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-7 rounded-2xl bg-card border border-border/80 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground">
                {t("services.inquireService")}
              </h3>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {t("services.durationLabel")}
                  </span>
                  <div className="flex items-center gap-2 font-medium text-foreground mt-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {t("services.suitableForLabel")}
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                    {t(service.suitableForKey)}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/20 hover:opacity-95 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>{t("navigation.bookInquiry")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Doctors */}
      {relatedDoctors.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 border-t border-border/70">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground font-heading">
              {t("services.relatedDoctors")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedDoctors.map((doc) => (
              <DoctorCard key={doc.id} doctor={doc} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
