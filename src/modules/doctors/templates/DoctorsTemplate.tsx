import { getTranslations } from "next-intl/server";
import { doctors } from "@/data/doctors";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Sparkles, Users } from "lucide-react";

export async function DoctorsTemplate() {
  const t = await getTranslations();

  return (
    <div className="flex flex-col gap-16">
      {/* Header */}
      <section className="relative pt-16 sm:pt-24 border-b border-border/70 pb-20 bg-gradient-to-b from-primary/[0.05] via-card/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 backdrop-blur-md shadow-sm mb-6">
              <Users className="w-3.5 h-3.5" />
              <span>{t("doctors.badge")}</span>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-[1.1]">
              {t("doctors.title")}
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="mt-4 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
              {t("doctors.subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {doctors.map((doctor, idx) => (
            <MotionWrapper key={doctor.id} delay={idx * 0.07}>
              <DoctorCard doctor={doctor} />
            </MotionWrapper>
          ))}
        </div>
      </section>
    </div>
  );
}

