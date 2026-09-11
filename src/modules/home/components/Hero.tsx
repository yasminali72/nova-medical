import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Activity, ArrowRight, ArrowLeft } from "lucide-react";
import { MotionWrapper } from "@/components/ui/MotionWrapper";

export async function Hero() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 start-1/3 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/3 end-0 w-[400px] h-[400px] bg-accent/6 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <MotionWrapper direction="down">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {t("home.hero.badge")}
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-foreground leading-[1.1] font-heading">
                {t("home.hero.title")}
              </h1>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {t("home.hero.description")}
              </p>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-white font-bold text-sm shadow-xl shadow-primary/30 hover:shadow-primary/40 hover:opacity-95 transition-all duration-200 active:scale-[0.97]"
                >
                  {t("home.hero.primaryCTA")}
                  <ArrowIcon className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-card border border-border text-foreground font-semibold text-sm hover:bg-muted/80 transition-all duration-200"
                >
                  {t("home.hero.secondaryCTA")}
                </Link>
              </div>
            </MotionWrapper>

            {/* Trust avatars */}
            <MotionWrapper delay={0.4}>
              <div className="flex items-center gap-3 text-xs text-muted-foreground pt-4 border-t border-border/60">
                <div className="flex -space-x-2.5 rtl:space-x-reverse">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80",
                  ].map((src, i) => (
                    <img
                      key={i}
                      className="w-9 h-9 rounded-full ring-2 ring-background object-cover"
                      src={src}
                      alt="Patient"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 text-amber-400 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xs">★</span>
                    ))}
                  </div>
                  <span>{t("home.hero.activePatientsLabel")}</span>
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Right visual */}
          <div className="lg:col-span-5">
            <MotionWrapper direction="left" delay={0.15}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 blur-2xl opacity-60" />
                <div className="relative rounded-[2rem] overflow-hidden border border-border/60 shadow-2xl aspect-[4/5] bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=85&w=900"
                    alt="NOVA Medical Center"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                  {/* Floating card */}
                  <div className="absolute bottom-5 inset-x-5 p-4 rounded-2xl bg-card/90 backdrop-blur-md border border-white/10 shadow-xl flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                      <Activity className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{t("common.centerName")}</p>
                      <p className="text-xs text-muted-foreground">{t("home.hero.emergencyBadge")}</p>
                    </div>
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
