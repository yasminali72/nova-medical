import { getTranslations, setRequestLocale } from "next-intl/server";
import { specialties } from "@/data/specialties";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { SpecialtyCard } from "@/components/cards/SpecialtyCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecialtyIcon } from "@/components/ui/SpecialtyIcon";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export default async function SpecialtiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <div className="flex flex-col gap-20 pb-24">
      {/* Header */}
      <section className="relative pt-16 sm:pt-24 border-b border-border/70 pb-16 bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper direction="down">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6 border border-primary/20">
              {t("specialties.badge")}
            </span>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading">
              {t("specialties.title")}
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("specialties.subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Specialties Detail Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-20">
        {specialties.map((spec) => {
          const specDoctors = doctors.filter((d) => d.specialtyId === spec.id);
          const specServices = services.filter((s) => s.specialtyId === spec.id);

          return (
            <div
              key={spec.id}
              id={spec.slug}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-card border border-border/80 space-y-8"
            >
              {/* Specialty Head */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/60">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <SpecialtyIcon name={spec.icon} className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground font-heading">
                      {t(spec.nameKey)}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {t(spec.descriptionKey)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Services in this department */}
              {specServices.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("specialties.availableServices")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specServices.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </div>
              )}

              {/* Related Doctors in this department */}
              {specDoctors.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-border/60">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {t("specialties.viewDoctors")}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {specDoctors.map((doctor) => (
                      <DoctorCard key={doctor.id} doctor={doctor} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
}
