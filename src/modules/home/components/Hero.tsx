import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Activity, ArrowRight, ArrowLeft, Shield, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export async function Hero() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-8 sm:pt-14 lg:pt-20 pb-16 overflow-hidden">
      {/* Dynamic ambient background glows */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 start-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 end-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[130px]" />
        <div className="absolute -bottom-20 start-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-start">
            {/* Top pill badge */}
            <MotionWrapper direction="down">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-xs font-bold text-primary shadow-sm hover:border-primary/40 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>{t("home.hero.badge")}</span>
                <span className="w-px h-3 bg-primary/30 mx-0.5" />
                <span className="text-foreground/75 font-medium flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-primary" /> ISO 9001
                </span>
              </div>
            </MotionWrapper>

            {/* Main Headline */}
            <MotionWrapper delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-foreground leading-[1.08]">
                {t("home.hero.title")}
              </h1>
            </MotionWrapper>

            {/* Subtitle */}
            <MotionWrapper delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
                {t("home.hero.description")}
              </p>
            </MotionWrapper>

            {/* CTAs */}
            <MotionWrapper delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-base shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:opacity-95 transition-all duration-300 active:scale-[0.98] group"
                >
                  <span>{t("home.hero.primaryCTA")}</span>
                  <ArrowIcon className="w-4 h-4 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-card/90 backdrop-blur-md border border-border text-foreground font-bold text-base hover:bg-muted/80 hover:border-primary/30 transition-all duration-200 shadow-sm"
                >
                  <span>{t("home.hero.secondaryCTA")}</span>
                </Link>
              </div>
            </MotionWrapper>

            {/* Trust highlights & Avatars */}
            <MotionWrapper delay={0.4}>
              <div className="pt-6 border-t border-border/70 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5 rtl:space-x-reverse">
                    {[
                      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
                    ].map((src, i) => (
                      <img
                        key={i}
                        className="w-10 h-10 rounded-full ring-2 ring-background object-cover shadow-sm"
                        src={src}
                        alt="Verified Patient"
                      />
                    ))}
                  </div>
                  <div className="text-start">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                      <span className="text-xs font-bold text-foreground ms-1">4.9/5</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {t("home.hero.activePatientsLabel")}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-border" />

                <div className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>JCI Accredited Facility</span>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Right Visual composition */}
          <div className="lg:col-span-5 relative">
            <MotionWrapper direction="left" delay={0.15}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glowing border wrapper */}
                <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-xl opacity-70" />
                
                {/* Main Hero Image Container */}
                <div className="relative rounded-[2.25rem] overflow-hidden border border-border/80 shadow-2xl aspect-[4/5] bg-card">
                  <Image
                    src="/mo.png"
                    alt="NOVA Medical Center Doctors"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                  {/* Floating badge Top Right */}
                  <div className="absolute top-5 end-5 px-3.5 py-1.5 rounded-full bg-card/90 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-2 text-xs font-bold text-foreground">
                    <Award className="w-4 h-4 text-amber-500" />
                    <span>Top Rated 2026</span>
                  </div>

                  {/* Floating card Bottom */}
                  <div className="absolute bottom-5 inset-x-5 p-4 sm:p-5 rounded-2xl bg-card/90 backdrop-blur-xl border border-white/15 shadow-2xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center shrink-0 shadow-md shadow-primary/30">
                        <Activity className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <p className="text-sm font-black text-foreground">{t("common.centerName")}</p>
                        <p className="text-xs text-muted-foreground font-medium">{t("home.hero.emergencyBadge")}</p>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
                      Live
                    </span>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

