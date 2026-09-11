import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowLeft, Phone, Calendar, Sparkles } from "lucide-react";

export async function FinalCTA() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
      <div className="relative rounded-[2.5rem] bg-gradient-to-tr from-primary via-primary/95 to-accent p-12 sm:p-16 lg:p-20 overflow-hidden shadow-2xl shadow-primary/25">
        {/* Dynamic decorative backdrop spheres */}
        <div className="absolute end-[-10%] top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute start-1/4 -top-24 w-80 h-80 rounded-full bg-accent/20 blur-2xl pointer-events-none" />
        <div className="absolute start-[-5%] -bottom-24 w-96 h-96 rounded-full bg-black/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Next-Generation Healthcare</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white leading-[1.1]">
            {t("home.cta.title")}
          </h2>
          <p className="text-base sm:text-xl text-white/90 leading-relaxed font-normal max-w-xl">
            {t("home.cta.description")}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-primary font-black text-base shadow-2xl hover:bg-slate-50 transition-all duration-200 active:scale-[0.98] group"
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span>{t("home.cta.button")}</span>
              <ArrowIcon className="w-4 h-4 text-primary transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/specialties"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/30 text-white font-bold text-base hover:bg-white/10 hover:border-white transition-all duration-200"
            >
              <span>{t("home.cta.secondaryButton")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

