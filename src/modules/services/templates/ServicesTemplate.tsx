import { getTranslations } from "next-intl/server";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Activity, Sparkles } from "lucide-react";

export async function ServicesTemplate() {
  const t = await getTranslations();

  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <section className="relative pt-16 sm:pt-24 border-b border-border/70 pb-20 bg-gradient-to-b from-primary/[0.05] via-card/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 backdrop-blur-md shadow-sm mb-6">
              <Activity className="w-3.5 h-3.5" />
              <span>{t("services.badge")}</span>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
              {t("services.title")}
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="mt-4 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
              {t("services.subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <MotionWrapper key={service.id} delay={idx * 0.07}>
              <ServiceCard service={service} />
            </MotionWrapper>
          ))}
        </div>
      </section>
    </div>
  );
}

