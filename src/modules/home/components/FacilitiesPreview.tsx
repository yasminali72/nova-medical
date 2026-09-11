import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { facilities } from "@/data/facilities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";

export async function FacilitiesPreview() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading
          badge={t("home.facilitiesPreview.badge")}
          title={t("home.facilitiesPreview.title")}
          subtitle={t("home.facilitiesPreview.subtitle")}
        />
        <Link
          href="/facilities"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:underline shrink-0 group"
        >
          <span>{t("home.facilitiesPreview.viewAll")}</span>
          <ArrowIcon className="w-4 h-4 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Editorial grid: 1 large + 2 small */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main large card */}
        <div className="md:col-span-7 group relative rounded-[2rem] overflow-hidden aspect-video sm:aspect-[16/10] border border-border/80 shadow-xl bg-card md:h-full md:w-full">
          <Image
            src={facilities[0].image}
            alt={t(facilities[0].nameKey)}
            fill
            sizes="(max-width: 1024px) 100vw, 650px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-0 start-0 end-0 p-8 sm:p-10 text-white">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white mb-3 shadow-sm">
              <Sparkles className="w-3 h-3" />
              {t(facilities[0].tagKey)}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">{t(facilities[0].nameKey)}</h3>
            <p className="text-sm text-zinc-300 mt-2 line-clamp-2 max-w-lg leading-relaxed">
              {t(facilities[0].descriptionKey)}
            </p>
          </div>
        </div>

        {/* 2 smaller cards */}
        <div className="md:col-span-5 grid grid-rows-2 gap-6">
          {facilities.slice(1, 3).map((f) => (
            <div
              key={f.id}
              className="group relative rounded-[2rem] overflow-hidden aspect-video border border-border/80 shadow-lg bg-card"
            >
              <Image
                src={f.image}
                alt={t(f.nameKey)}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute bottom-0 start-0 end-0 p-6 text-white">
                <span className="inline-flex px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white mb-2">
                  {t(f.tagKey)}
                </span>
                <h4 className="text-lg font-bold line-clamp-1">{t(f.nameKey)}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

