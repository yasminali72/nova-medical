import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export async function PatientExperience() {
  const t = await getTranslations();

  const steps = [
    {
      number: t("home.journey.step1.number"),
      title: t("home.journey.step1.title"),
      desc: t("home.journey.step1.description"),
    },
    {
      number: t("home.journey.step2.number"),
      title: t("home.journey.step2.title"),
      desc: t("home.journey.step2.description"),
    },
    {
      number: t("home.journey.step3.number"),
      title: t("home.journey.step3.title"),
      desc: t("home.journey.step3.description"),
    },
  ];

  return (
    <section className="bg-card/50 border-y border-border/60 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t("home.journey.badge")}
          title={t("home.journey.title")}
          subtitle={t("home.journey.subtitle")}
          centered
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Dashed connector for desktop */}
          <div className="hidden md:block absolute top-12 start-[calc(33%+2rem)] end-[calc(33%+2rem)] border-t-2 border-dashed border-primary/20 pointer-events-none" />

          {steps.map((step, i) => (
            <MotionWrapper key={step.number} delay={i * 0.12}>
              <div className="relative p-8 rounded-2xl bg-background border border-border/80 text-center space-y-4">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 mx-auto mb-2">
                  <span className="text-xl font-black text-primary">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
