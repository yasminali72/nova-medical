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
    <section className="border-y border-border/60 bg-gradient-to-r from-primary/3 via-card/80 to-accent/3 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {stats.map((stat, i) => (
            <MotionWrapper key={stat.label} delay={i * 0.1}>
              <div className="text-center space-y-1.5">
                <div className="text-4xl sm:text-5xl font-black text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-muted-foreground">
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
