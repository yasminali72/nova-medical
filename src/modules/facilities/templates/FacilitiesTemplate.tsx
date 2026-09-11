import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { facilities } from "@/data/facilities";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { CheckCircle } from "lucide-react";

export async function FacilitiesTemplate() {
  const t = await getTranslations();

  return (
    <div className="flex flex-col gap-20 pb-28">
      {/* Header */}
      <section className="pt-16 sm:pt-24 border-b border-border/70 pb-16 bg-gradient-to-b from-primary/3 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20 mb-6">
            {t("facilities.badge")}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            {t("facilities.title")}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("facilities.subtitle")}
          </p>
        </div>
      </section>

      {/* Facilities — alternating layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-20">
        {facilities.map((facility, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <MotionWrapper key={facility.id} delay={0.1}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                  !isEven ? "lg:flex lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative rounded-3xl overflow-hidden aspect-[16/10] border border-border/80 shadow-xl bg-muted">
                  <Image
                    src={facility.image}
                    alt={t(facility.nameKey)}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="space-y-5">
                  <span className="inline-flex px-3 py-1 rounded-full bg-primary/8 text-primary text-xs font-semibold border border-primary/15">
                    {t(facility.tagKey)}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-foreground leading-tight">
                    {t(facility.nameKey)}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {t(facility.descriptionKey)}
                  </p>
                  {facility.highlights && (
                    <ul className="space-y-2.5 pt-2">
                      {facility.highlights.map((h: string) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/90">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                          <span>{t(h)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </MotionWrapper>
          );
        })}
      </section>
    </div>
  );
}
