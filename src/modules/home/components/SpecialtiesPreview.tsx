import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { specialties } from "@/data/specialties";
import { SpecialtyCard } from "@/components/cards/SpecialtyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { ArrowRight, ArrowLeft } from "lucide-react";

export async function SpecialtiesPreview() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading
          badge={t("home.specialtiesPreview.badge")}
          title={t("home.specialtiesPreview.title")}
          subtitle={t("home.specialtiesPreview.subtitle")}
        />
        <Link
          href="/specialties"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline shrink-0"
        >
          {t("home.specialtiesPreview.viewAll")}
          <ArrowIcon className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialties.map((specialty, idx) => (
          <MotionWrapper key={specialty.id} delay={idx * 0.07}>
            <SpecialtyCard specialty={specialty} />
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
