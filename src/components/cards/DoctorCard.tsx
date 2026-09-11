import { Doctor } from "@/types/medical";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  Star,
  Award,
  Calendar,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

interface DoctorCardProps {
  doctor: Doctor;
}

export async function DoctorCard({ doctor }: DoctorCardProps) {
  const t = await getTranslations();

  return (
    <div className="group relative flex flex-col justify-between rounded-3xl bg-card border border-border/80 overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300">
      <div>
        {/* Doctor Photo with overlay */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={doctor.image}
            alt={t(doctor.nameKey)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"

          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Rating Badge */}
          <div className="absolute top-3 end-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-background/90 backdrop-blur-md text-xs font-bold text-foreground shadow-md">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{doctor.rating.toFixed(1)}</span>
          </div>

          {/* Experience tag */}
          <div className="absolute bottom-3 start-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/95 text-white text-xs font-bold shadow-lg backdrop-blur-sm">
            <Award className="w-3.5 h-3.5" />
            <span>
              {t("doctors.yearsExperience", { years: doctor.experienceYears })}
            </span>
          </div>
        </div>

        {/* Bio info */}
        <div className="p-6">
          {doctor.verified && (
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>{t(doctor.verified)}</span>
            </div>
          )}

          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">

            {t(doctor.nameKey)}
          </h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 mt-0.5">
            {t(doctor.titleKey)}
          </p>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
            {t(doctor.bioKey)}
          </p>

          <div className="flex items-center gap-2 text-xs text-foreground/80 font-medium py-2 px-3 rounded-xl bg-muted/60 border border-border/50">
            <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="line-clamp-1">{t(doctor.scheduleDaysKey)}</span>
          </div>
        </div>
      </div>

      <div className="p-6 pt-2 border-t border-border/60 mt-2 flex items-center justify-between">
        <Link
          href={`/doctors/${doctor.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
        >
          <span>{t("common.viewProfile")}</span>
          <ArrowLeft className="w-3.5 h-3.5 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform ltr:rotate-180" />
        </Link>
        <Link
          href="/contact"
          className="px-3.5 py-1.5 text-xs font-bold rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
        >
          {t("navigation.bookInquiry")}
        </Link>
      </div>
    </div>
  );
}
