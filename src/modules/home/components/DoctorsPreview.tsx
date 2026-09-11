import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { ArrowRight, ArrowLeft } from "lucide-react";

export async function DoctorsPreview() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading
          badge={t("home.doctorsPreview.badge")}
          title={t("home.doctorsPreview.title")}
          subtitle={t("home.doctorsPreview.subtitle")}
        />
        <Link
          href="/doctors"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline shrink-0"
        >
          {t("home.doctorsPreview.viewAll")}
          <ArrowIcon className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doctor, idx) => (
          <MotionWrapper key={doctor.id} delay={idx * 0.1}>
            <DoctorCard doctor={doctor} />
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
