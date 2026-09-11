import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { facilities } from "@/data/facilities";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline shrink-0"
        >
          {t("home.facilitiesPreview.viewAll")}
          <ArrowIcon className="w-4 h-4" />
        </Link>
      </div>

      {/* Editorial grid: 1 large + 2 small */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Main large card */}
        <div className="md:col-span-7 group relative rounded-3xl overflow-hidden aspect-video border border-border/70 shadow-sm">
          <Image
            src={facilities[0].image}
            alt={t(facilities[0].nameKey)}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 start-0 end-0 p-7 text-white">
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300 mb-2 block">
              {t(facilities[0].tagKey)}
            </span>
            <h3 className="text-2xl font-bold">{t(facilities[0].nameKey)}</h3>
            <p className="text-sm text-zinc-300 mt-1.5 line-clamp-1 max-w-md">
              {t(facilities[0].descriptionKey)}
            </p>
          </div>
        </div>

        {/* 2 smaller cards */}
        <div className="md:col-span-5 grid grid-rows-2 gap-5">
          {facilities.slice(1, 3).map((f) => (
            <div
              key={f.id}
              className="group relative rounded-3xl overflow-hidden aspect-video border border-border/70 shadow-sm"
            >
              <Image
                src={f.image}
                alt={t(f.nameKey)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 start-0 end-0 p-5 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-300 block mb-1">
                  {t(f.tagKey)}
                </span>
                <h4 className="text-base font-bold line-clamp-1">{t(f.nameKey)}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
