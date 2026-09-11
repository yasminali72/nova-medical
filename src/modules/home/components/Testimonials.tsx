import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { testimonials } from "@/data/facilities";
import { Star } from "lucide-react";

export async function Testimonials() {
  const t = await getTranslations();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <SectionHeading
        badge={t("home.testimonials.badge")}
        title={t("home.testimonials.title")}
        subtitle={t("home.testimonials.subtitle")}
        centered
        className="mb-14"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {testimonials.map((test, idx) => (
          <MotionWrapper key={test.id} delay={idx * 0.1}>
            <div className="group p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                {/* Quote */}
                <p className="text-sm text-foreground/90 leading-relaxed italic">
                  &ldquo;{t(test.textKey)}&rdquo;
                </p>
              </div>
              <div className="pt-5 border-t border-border/60">
                <p className="text-sm font-bold text-foreground">{t(test.nameKey)}</p>
                <p className="text-xs text-primary font-medium mt-0.5">{t(test.serviceKey)}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  {t(test.roleKey)} &bull; {t(test.dateKey)}
                </p>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </section>
  );
}
