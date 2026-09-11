import { getTranslations, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { doctors } from "@/data/doctors";
import { specialties } from "@/data/specialties";
import {
  ArrowRight,
  ArrowLeft,
  Star,
  Clock,
  Globe,
  Stethoscope,
  BookOpen,
  MessageCircle,
} from "lucide-react";

export async function DoctorDetailTemplate({ slug }: { slug: string }) {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const doctor = doctors.find((d) => d.id === slug || d.slug === slug);
  if (!doctor) notFound();

  const specialty = specialties.find((s) => s.id === doctor.specialtyId);

  return (
    <div className="flex flex-col gap-16 pb-28">
      {/* Breadcrumb */}
      <section className="pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <Link
          href="/doctors"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("common.backToDoctors")}
        </Link>
      </section>

      {/* Doctor hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Image */}
          <div className="lg:col-span-4">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border border-border/80 shadow-xl bg-muted">
              <Image
                src={doctor.image}
                alt={t(doctor.nameKey)}
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              {/* Rating badge */}
              {doctor.rating && (
                <div className="absolute bottom-5 start-5 flex items-center gap-1.5 bg-white/95 text-foreground rounded-full px-4 py-2 shadow-lg">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-sm font-bold">{doctor.rating}</span>
                </div>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:col-span-8 space-y-7">
            {/* Name + specialty */}
            <div>
              {specialty && (
                <span className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20 mb-4">
                  {t(specialty.nameKey)}
                </span>
              )}
              <h1 className="text-3xl sm:text-5xl font-black text-foreground">
                {t(doctor.nameKey)}
              </h1>
              <p className="text-base text-muted-foreground mt-2">{t(doctor.titleKey)}</p>
            </div>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/80 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">
                  {doctor.experienceYears}+ {t("doctors.detail.yearsExp")}
                </span>
              </div>
              {doctor.languagesKeys?.length > 0 && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/80 text-sm">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">
                    {doctor.languagesKeys.map((lk) => t(lk)).join(", ")}
                  </span>
                </div>
              )}
            </div>

            {/* Bio */}
            <div>
              <p className="text-base text-foreground/85 leading-relaxed">{t(doctor.bioKey)}</p>
            </div>

            {/* Education */}
            {doctor.educationKeys?.length > 0 && (
              <div className="p-6 rounded-2xl bg-card border border-border/80 space-y-3">
                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-primary" />
                  {t("doctors.detail.education")}
                </h3>
                <ul className="space-y-2">
                  {doctor.educationKeys.map((edu) => (
                    <li key={edu} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      {t(edu)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Expertise */}
            {doctor.expertiseKeys?.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-primary" />
                  {t("doctors.detail.areasOfExpertise")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.expertiseKeys.map((exp) => (
                    <span
                      key={exp}
                      className="px-3 py-1.5 text-xs font-medium rounded-xl bg-primary/8 text-primary border border-primary/15"
                    >
                      {t(exp)}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Schedule */}
            {doctor.scheduleDaysKey && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>{t(doctor.scheduleDaysKey)}</span>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold shadow-md shadow-primary/25 hover:opacity-90 transition active:scale-[0.97]"
              >
                <MessageCircle className="w-4 h-4" />
                {t("common.bookConsultation")}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
