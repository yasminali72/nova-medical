import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { Heart, Sparkles, ArrowRight, ArrowLeft, ShieldCheck, CheckCircle2, Award } from "lucide-react";
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
    <div className="flex flex-col gap-24 sm:gap-32 overflow-hidden">
      {/* HERO */}
      <section className="relative pt-16 sm:pt-24 border-b border-border/70 pb-24 bg-gradient-to-b from-primary/[0.05] via-card/50 to-transparent">
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 start-1/3 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionWrapper direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t("about.hero.badge")}</span>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground max-w-4xl mx-auto leading-[1.1]">
              {t("about.hero.title")}
            </h1>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal">
              {t("about.hero.subtitle")}
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <SectionHeading badge={t("about.whoWeAre.badge")} title={t("about.whoWeAre.title")} />
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-normal">{t("about.whoWeAre.p1")}</p>
            <p className="text-base text-muted-foreground leading-relaxed font-normal">{t("about.whoWeAre.p2")}</p>
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border/80">
              <div className="p-4 rounded-2xl bg-card border border-border/60">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">12+</span>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">{t("common.yearsExperience")}</p>
              </div>
              <div className="p-4 rounded-2xl bg-card border border-border/60">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">10K+</span>
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">{t("common.patientsServed")}</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] border border-border/80 shadow-2xl bg-card">
            <Image
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200"
              alt="NOVA Medical interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 start-6 end-6 p-4 rounded-2xl bg-card/90 backdrop-blur-md border border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
              <p className="text-xs font-bold text-foreground">Accredited by International Medical Quality Board</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative bg-card/60 backdrop-blur-md border-y border-border/70 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-background border border-border/80 space-y-5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-sm">
                <Heart className="w-7 h-7 fill-current" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-foreground">{t("about.mission.title")}</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-normal">{t("about.mission.description")}</p>
            </div>
            <div className="p-8 sm:p-12 rounded-3xl bg-background border border-border/80 space-y-5 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center shadow-sm">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-foreground">{t("about.vision.title")}</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-normal">{t("about.vision.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading badge={t("about.values.badge")} title={t("about.values.title")} centered className="mb-16" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <MotionWrapper key={v.title} delay={i * 0.1}>
              <div className="p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 space-y-3.5 h-full">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  0{i + 1}
                </div>
                <h4 className="text-xl font-bold text-foreground">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-normal">{v.desc}</p>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative bg-card/60 backdrop-blur-md border-y border-border/70 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading badge={t("about.timeline.badge")} title={t("about.timeline.title")} centered className="mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, i) => (
              <MotionWrapper key={m.year} delay={i * 0.1}>
                <div className="p-8 h-full rounded-3xl bg-background border border-border/80 space-y-3 hover:border-primary/40 transition-all duration-300">
                  <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent block">{m.year}</span>
                  <h4 className="text-lg font-bold text-foreground">{m.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed font-normal">{m.desc}</p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-[2.5rem] bg-gradient-to-tr from-primary via-primary/95 to-accent p-12 sm:p-16 text-center text-white space-y-6 shadow-2xl shadow-primary/25 overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black">{t("home.cta.title")}</h2>
            <p className="text-white/90 max-w-xl mx-auto text-base sm:text-lg font-normal leading-relaxed">{t("home.cta.description")}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-foreground font-black hover:bg-slate-50 transition-all duration-200 shadow-xl active:scale-[0.98]"
            >
              <span>{t("common.contactUs")}</span>
              <ArrowIcon className="w-4 h-4 text-primary" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

