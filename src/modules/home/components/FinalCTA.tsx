import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";

export async function FinalCTA() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="relative rounded-[2rem] bg-gradient-to-tr from-primary via-primary/90 to-accent/80 p-12 sm:p-16 overflow-hidden shadow-2xl shadow-primary/20">
        {/* Decorative circles */}
        <div className="absolute end-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[480px] h-[480px] rounded-full bg-white/5 blur-xl pointer-events-none" />
        <div className="absolute start-1/3 top-0 -translate-y-1/2 w-72 h-72 rounded-full bg-white/5 blur-xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {t("home.cta.title")}
          </h2>
          <p className="text-base sm:text-lg text-white/85 leading-relaxed">
            {t("home.cta.description")}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-foreground font-bold shadow-lg hover:bg-slate-50 transition-colors active:scale-[0.97]"
            >
              {t("home.cta.button")}
              <ArrowIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/specialties"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              {t("home.cta.secondaryButton")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
