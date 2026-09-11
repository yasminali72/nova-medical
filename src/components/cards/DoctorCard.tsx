import { Doctor } from "@/types/medical";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Star, Award, Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

interface DoctorCardProps {
  doctor: Doctor;
}

export async function DoctorCard({ doctor }: DoctorCardProps) {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="group flex flex-col justify-between rounded-2xl bg-card border border-border/80 overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div>
        {/* Doctor Photo */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={doctor.image}
            alt={t(doctor.nameKey)}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

          {/* Rating Badge */}
          <div className="absolute top-3 end-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-bold text-foreground shadow-sm">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{doctor.rating.toFixed(1)}</span>
          </div>

          {/* Experience tag */}
          <div className="absolute bottom-3 start-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-md">
            <Award className="w-3.5 h-3.5" />
            <span>{t("doctors.yearsExperience", { years: doctor.experienceYears })}</span>
          </div>
        </div>

        {/* Bio info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {t(doctor.nameKey)}
          </h3>
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">
            {t(doctor.titleKey)}
          </p>

          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
            {t(doctor.bioKey)}
          </p>

          <div className="space-y-1.5 text-xs text-muted-foreground/90">
            <div className="flex items-center gap-1.5 text-foreground/80 font-medium">
              <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="line-clamp-1">{t(doctor.scheduleDaysKey)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-border/60 mt-4 flex items-center justify-between">
        <Link
          href={`/doctors/${doctor.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          <span>{t("common.viewProfile")}</span>
          <ArrowIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/contact"
          className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-foreground transition-all"
        >
          {t("navigation.bookInquiry")}
        </Link>
      </div>
    </div>
  );
}
