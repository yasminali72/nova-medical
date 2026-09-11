import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { testimonials } from "@/data/facilities";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export async function Testimonials() {
  const t = await getTranslations();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
      <SectionHeading
        badge={t("home.testimonials.badge")}
        title={t("home.testimonials.title")}
        subtitle={t("home.testimonials.subtitle")}
        centered
        className="mb-16"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((test, idx) => (
          <MotionWrapper key={test.id} delay={idx * 0.1}>
            <div className="group relative p-8 sm:p-9 rounded-3xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col justify-between h-full space-y-6 overflow-hidden">
              {/* Subtle quote watermark */}
              <div className="absolute top-4 end-4 text-primary/10 pointer-events-none group-hover:text-primary/15 transition-colors">
                <Quote className="w-16 h-16 rotate-180" />
              </div>

              <div className="relative z-10 space-y-4">
                {/* Stars */}
                <div className="flex gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-base text-foreground/90 leading-relaxed font-normal">
                  &ldquo;{t(test.textKey)}&rdquo;
                </p>
              </div>

              <div className="relative z-10 pt-5 border-t border-border/60 flex items-center justify-between">
                <div>
                  <p className="text-base font-bold text-foreground flex items-center gap-1.5">
                    <span>{t(test.nameKey)}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  </p>
                  <p className="text-xs text-primary font-bold mt-0.5">{t(test.serviceKey)}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {t(test.roleKey)} &bull; {t(test.dateKey)}
                  </p>
                </div>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}

