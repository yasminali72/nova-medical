import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { getLocale } from "next-intl/server";

export async function PatientExperience() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

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
    <section className="relative bg-card/60 backdrop-blur-md border-y border-border/70 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t("home.journey.badge")}
          title={t("home.journey.title")}
          subtitle={t("home.journey.subtitle")}
          centered
          className="mb-20"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Dashed connector for desktop */}
          <div className="hidden md:block absolute top-16 start-[calc(20%+1rem)] end-[calc(20%+1rem)] border-t-2 border-dashed border-primary/25 pointer-events-none -z-0" />

          {steps.map((step, i) => (
            <MotionWrapper key={step.number} delay={i * 0.12}>
              <div className="relative p-9 rounded-3xl bg-background border border-border/80 text-center space-y-4 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col items-center">
                {/* Step Number Circle with Glow */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/25 mx-auto mb-2">
                  <span className="text-2xl font-black">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground leading-snug">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

