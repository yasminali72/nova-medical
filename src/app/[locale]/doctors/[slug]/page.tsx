import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { specialties } from "@/data/specialties";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ServiceCard } from "@/components/cards/ServiceCard";
import {
  Star,
  Award,
  Calendar,
  GraduationCap,
  Sparkles,
  Globe,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export default async function DoctorDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const isRtl = locale === "ar";
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) {
    notFound();
  }

  const relatedServices = services.filter(
    (s) => s.specialtyId === doctor.specialtyId
  );
  const specialty = specialties.find((sp) => sp.id === doctor.specialtyId);

  return (
    <div className="flex flex-col gap-16 sm:gap-24 pb-24">
      {/* Breadcrumb & Hero */}
      <section className="relative pt-10 sm:pt-16 border-b border-border/70 pb-16 bg-card/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">
              {t("navigation.home")}
            </Link>
            <ChevronIcon className="w-3.5 h-3.5" />
            <Link href="/doctors" className="hover:text-foreground">
              {t("navigation.doctors")}
            </Link>
            <ChevronIcon className="w-3.5 h-3.5" />
            <span className="text-foreground font-medium truncate">
              {t(doctor.nameKey)}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border border-border/80 shadow-xl bg-muted">
                <Image
                  src={doctor.image}
                  alt={t(doctor.nameKey)}
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{doctor.rating.toFixed(1)} / 5.0 Rating</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground font-heading">
                {t(doctor.nameKey)}
              </h1>

              <p className="text-lg text-accent font-medium">
                {t(doctor.titleKey)}
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t(doctor.bioKey)}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                <div className="flex items-center gap-1.5 bg-card px-3.5 py-2 rounded-xl border border-border/80 text-foreground">
                  <Award className="w-4 h-4 text-primary" />
                  <span>
                    {t("doctors.yearsExperience", {
                      years: doctor.experienceYears,
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-card px-3.5 py-2 rounded-xl border border-border/80 text-foreground">
                  <Globe className="w-4 h-4 text-primary" />
                  <span>
                    {doctor.languagesKeys.map((k) => t(k)).join(", ")}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-card px-3.5 py-2 rounded-xl border border-border/80 text-foreground">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{t(doctor.scheduleDaysKey)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Qualifications & Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Education & Credentials */}
          <div className="p-8 rounded-3xl bg-card border border-border/80 space-y-6">
            <h3 className="text-xl font-bold text-foreground font-heading flex items-center gap-2.5">
              <GraduationCap className="w-6 h-6 text-primary" />
              <span>{t("doctors.education")}</span>
            </h3>
            <div className="space-y-4">
              {doctor.educationKeys.map((key) => (
                <div
                  key={key}
                  className="p-4 rounded-2xl bg-muted/40 border border-border/60 text-sm font-medium text-foreground"
                >
                  {t(key)}
                </div>
              ))}
            </div>
          </div>

          {/* Areas of Expertise */}
          <div className="p-8 rounded-3xl bg-card border border-border/80 space-y-6">
            <h3 className="text-xl font-bold text-foreground font-heading flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-primary" />
              <span>{t("doctors.areasOfExpertise")}</span>
            </h3>
            <div className="space-y-4">
              {doctor.expertiseKeys.map((key) => (
                <div
                  key={key}
                  className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-sm font-medium text-foreground"
                >
                  {t(key)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 border-t border-border/70">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground font-heading">
              {specialty ? t(specialty.nameKey) : ""} —{" "}
              {t("specialties.availableServices")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((srv) => (
              <ServiceCard key={srv.id} service={srv} />
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="rounded-3xl bg-primary/10 border border-primary/20 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-start">
            <h3 className="text-2xl font-bold text-foreground font-heading">
              {t("doctors.bookInquiry")}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t(doctor.scheduleDaysKey)}
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-95 shadow-md shadow-primary/20 transition-all"
          >
            {t("navigation.bookInquiry")}
          </Link>
        </div>
      </section>
    </div>
  );
}
