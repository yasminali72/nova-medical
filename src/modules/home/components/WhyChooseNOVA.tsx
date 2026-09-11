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
    <section className="bg-card/50 border-y border-border/70 py-20">
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
              <div className="group p-7 rounded-2xl bg-background border border-border/80 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{t(titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(descKey)}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
