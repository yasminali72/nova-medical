import { getTranslations } from "next-intl/server";
import { specialties } from "@/data/specialties";
import { SpecialtyCard } from "@/components/cards/SpecialtyCard";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export async function SpecialtiesTemplate() {
  const t = await getTranslations();

  return (
    <div className="flex flex-col gap-16 pb-28">
      {/* Header */}
      <section className="pt-16 sm:pt-24 border-b border-border/70 pb-16 bg-gradient-to-b from-primary/3 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-6">
            {t("specialties.badge")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            {t("specialties.title")}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("specialties.subtitle")}
          </p>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, idx) => (
            <MotionWrapper key={specialty.id} delay={idx * 0.07}>
              <SpecialtyCard specialty={specialty} />
            </MotionWrapper>
          ))}
        </div>
      </section>
    </div>
  );
}
