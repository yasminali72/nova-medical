import { getTranslations, setRequestLocale } from "next-intl/server";
import { facilities } from "@/data/facilities";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { CheckCircle2 } from "lucide-react";

export default async function FacilitiesPage({
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
              {t("facilities.badge")}
            </span>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-heading">
              {t("facilities.title")}
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("facilities.subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Facilities Showcase List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16">
        {facilities.map((fac, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={fac.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 rounded-3xl bg-card border border-border/80 shadow-sm`}
            >
              {/* Image */}
              <div
                className={`lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/80 shadow-md ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={fac.image}
                  alt={t(fac.nameKey)}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text info */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {t(fac.tagKey)}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-heading mt-2">
                    {t(fac.nameKey)}
                  </h2>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed">
                  {t(fac.descriptionKey)}
                </p>

                <div className="space-y-3 pt-2">
                  {fac.featuresKeys.map((key) => (
                    <div key={key} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium text-foreground">
                        {t(key)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
