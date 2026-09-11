import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Award, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

export async function WhyChooseNOVA() {
  const t = await getTranslations();

  const items = [
    { icon: Award, titleKey: "home.whyChooseUs.item1.title", descKey: "home.whyChooseUs.item1.description" },
    { icon: Sparkles, titleKey: "home.whyChooseUs.item2.title", descKey: "home.whyChooseUs.item2.description" },
    { icon: HeartHandshake, titleKey: "home.whyChooseUs.item3.title", descKey: "home.whyChooseUs.item3.description" },
    { icon: ShieldCheck, titleKey: "home.whyChooseUs.item4.title", descKey: "home.whyChooseUs.item4.description" },
  ];

  return (
    <section className="relative bg-card/60 backdrop-blur-md border-y border-border/70 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t("home.whyChooseUs.badge")}
          title={t("home.whyChooseUs.title")}
          subtitle={t("home.whyChooseUs.subtitle")}
          centered
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, titleKey, descKey }, i) => (
            <MotionWrapper key={titleKey} delay={i * 0.1}>
              <div className="group p-8 rounded-3xl bg-background border border-border/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {t(titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(descKey)}
                  </p>
                </div>
                <div className="pt-4 border-t border-border/50 text-[11px] font-bold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

