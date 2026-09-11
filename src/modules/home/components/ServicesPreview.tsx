import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { ArrowRight, ArrowLeft } from "lucide-react";

export async function ServicesPreview() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading
          badge={t("home.servicesPreview.badge")}
          title={t("home.servicesPreview.title")}
          subtitle={t("home.servicesPreview.subtitle")}
        />
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline shrink-0"
        >
          {t("home.servicesPreview.viewAll")}
          <ArrowIcon className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, 3).map((service, idx) => (
          <MotionWrapper key={service.id} delay={idx * 0.1}>
            <ServiceCard service={service} />
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
