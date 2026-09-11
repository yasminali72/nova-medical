import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Heart, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { getLocale } from "next-intl/server";

export async function AboutTemplate() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const milestones = [
    { year: t("about.timeline.y2014.year"), title: t("about.timeline.y2014.title"), desc: t("about.timeline.y2014.desc") },
    { year: t("about.timeline.y2017.year"), title: t("about.timeline.y2017.title"), desc: t("about.timeline.y2017.desc") },
    { year: t("about.timeline.y2021.year"), title: t("about.timeline.y2021.title"), desc: t("about.timeline.y2021.desc") },
    { year: t("about.timeline.y2026.year"), title: t("about.timeline.y2026.title"), desc: t("about.timeline.y2026.desc") },
  ];

  const values = [
    { title: t("about.values.compassion.title"), desc: t("about.values.compassion.description") },
    { title: t("about.values.excellence.title"), desc: t("about.values.excellence.description") },
    { title: t("about.values.innovation.title"), desc: t("about.values.innovation.description") },
    { title: t("about.values.trust.title"), desc: t("about.values.trust.description") },
  ];

  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-28 overflow-hidden">
      {/* HERO */}
      <section className="relative pt-16 sm:pt-24 border-b border-border/70 pb-20 bg-gradient-to-b from-primary/3 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper direction="down">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
              {t("about.hero.badge")}
            </span>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground max-w-4xl mx-auto leading-tight">
              {t("about.hero.title")}
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="mt-6 text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("about.hero.subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="space-y-6">
            <SectionHeading badge={t("about.whoWeAre.badge")} title={t("about.whoWeAre.title")} />
            <p className="text-base text-muted-foreground leading-relaxed">{t("about.whoWeAre.p1")}</p>
            <p className="text-base text-muted-foreground leading-relaxed">{t("about.whoWeAre.p2")}</p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border/70">
              <div>
                <span className="text-3xl font-black text-primary">12+</span>
                <p className="text-xs text-muted-foreground font-medium mt-1">{t("common.yearsExperience")}</p>
              </div>
              <div>
                <span className="text-3xl font-black text-primary">10K+</span>
                <p className="text-xs text-muted-foreground font-medium mt-1">{t("common.patientsServed")}</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-border/80 shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
              alt="NOVA Medical interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-card/50 border-y border-border/70 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-background border border-border/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("about.mission.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.mission.description")}</p>
            </div>
            <div className="p-8 sm:p-10 rounded-3xl bg-background border border-border/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{t("about.vision.title")}</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.vision.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading badge={t("about.values.badge")} title={t("about.values.title")} centered className="mb-14" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <MotionWrapper key={v.title} delay={i * 0.1}>
              <div className="p-7 rounded-2xl bg-card border border-border/80 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all space-y-3 h-full">
                <h4 className="text-lg font-bold text-foreground">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-card/50 border-y border-border/70 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge={t("about.timeline.badge")} title={t("about.timeline.title")} centered className="mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <MotionWrapper key={m.year} delay={i * 0.1}>
                <div className="p-7 rounded-2xl bg-background border border-border/80 space-y-3">
                  <span className="text-3xl font-black text-primary">{m.year}</span>
                  <h4 className="text-base font-bold text-foreground">{m.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-primary p-10 sm:p-14 text-center text-white space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black">{t("home.cta.title")}</h2>
          <p className="text-white/85 max-w-xl mx-auto text-base sm:text-lg">{t("home.cta.description")}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-foreground font-bold hover:bg-slate-50 transition-colors shadow-lg"
          >
            {t("common.contactUs")} <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
