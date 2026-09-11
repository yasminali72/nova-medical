import { getTranslations, setRequestLocale } from "next-intl/server";
import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default async function DoctorsPage({
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
              {t("doctors.badge")}
            </span>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading">
              {t("doctors.title")}
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("doctors.subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {doctors.map((doctor, idx) => (
            <MotionWrapper key={doctor.id} delay={idx * 0.08}>
              <DoctorCard doctor={doctor} />
            </MotionWrapper>
          ))}
        </div>
      </section>
    </div>
  );
}
