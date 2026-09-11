import { getTranslations } from "next-intl/server";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export async function Statistics() {
  const t = await getTranslations();

  const stats = [
    { value: t("home.stats.specialists"), label: t("home.stats.specialistsLabel") },
    { value: t("home.stats.departments"), label: t("home.stats.departmentsLabel") },
    { value: t("home.stats.patients"), label: t("home.stats.patientsLabel") },
    { value: t("home.stats.experience"), label: t("home.stats.experienceLabel") },
  ];

  return (
    <section className="relative border-y border-border/80 bg-gradient-to-r from-primary/[0.04] via-card/90 to-accent/[0.04] py-16 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x rtl:sm:divide-x-reverse divide-border/60">
          {stats.map((stat, i) => (
            <MotionWrapper key={stat.label} delay={i * 0.1} className={i > 0 ? "pt-6 sm:pt-0 sm:ps-8" : ""}>
              <div className="text-center sm:text-start space-y-2 group">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary bg-clip-text bg-gradient-to-r from-primary to-accent tracking-tight transition-transform duration-300 group-hover:scale-105 inline-block">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

