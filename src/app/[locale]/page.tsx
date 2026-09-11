import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { specialties } from "@/data/specialties";
import { services } from "@/data/services";
import { doctors } from "@/data/doctors";
import { facilities, testimonials } from "@/data/facilities";
import { SpecialtyCard } from "@/components/cards/SpecialtyCard";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { DoctorCard } from "@/components/cards/DoctorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import {
  Shield,
  Clock,
  Sparkles,
  Users,
  Award,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ArrowLeft,
  Quote,
  Star,
  Activity,
  HeartHandshake,
} from "lucide-react";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="flex flex-col gap-24 sm:gap-32 pb-24 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-start">
              <MotionWrapper direction="down">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>{t("home.hero.badge")}</span>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.1}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15] font-heading">
                  {t("home.hero.title")}
                </h1>
              </MotionWrapper>

              <MotionWrapper delay={0.2}>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  {t("home.hero.description")}
                </p>
              </MotionWrapper>

              <MotionWrapper delay={0.3}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link
                    href="/services"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:opacity-95 hover:shadow-primary/35 transition-all duration-200 active:scale-98"
                  >
                    <span>{t("home.hero.primaryCTA")}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-card border border-border text-foreground font-semibold hover:bg-muted/80 transition-all duration-200"
                  >
                    <span>{t("home.hero.secondaryCTA")}</span>
                  </Link>
                </div>
              </MotionWrapper>

              {/* Patient Trust Indicator */}
              <MotionWrapper delay={0.4}>
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs font-medium text-muted-foreground border-t border-border/60">
                  <div className="flex -space-x-2 rtl:space-x-reverse">
                    <img
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-background object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120"
                      alt="Patient"
                    />
                    <img
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-background object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120"
                      alt="Patient"
                    />
                    <img
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-background object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120"
                      alt="Patient"
                    />
                  </div>
                  <span>{t("home.hero.activePatientsLabel")}</span>
                </div>
              </MotionWrapper>
            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5 relative">
              <MotionWrapper direction="none" delay={0.2}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Backdrop border box */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-primary/30 to-accent/20 blur-xl opacity-70" />

                  <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card aspect-[4/5]">
                    <Image
                      src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000"
                      alt="NOVA Medical Consultation"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

                    {/* Floating Doctor Credential Card */}
                    <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-card/90 backdrop-blur-md border border-border/80 shadow-lg flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Activity className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">
                          {t("common.centerName")}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {t("home.hero.emergencyBadge")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / STATISTICS SECTION */}
      <section className="border-y border-border/70 bg-card/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <MotionWrapper delay={0.1}>
              <div className="text-center sm:text-start space-y-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary font-heading">
                  {t("home.stats.specialists")}
                </span>
                <p className="text-sm font-medium text-foreground">
                  {t("home.stats.specialistsLabel")}
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <div className="text-center sm:text-start space-y-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary font-heading">
                  {t("home.stats.departments")}
                </span>
                <p className="text-sm font-medium text-foreground">
                  {t("home.stats.departmentsLabel")}
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <div className="text-center sm:text-start space-y-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary font-heading">
                  {t("home.stats.patients")}
                </span>
                <p className="text-sm font-medium text-foreground">
                  {t("home.stats.patientsLabel")}
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <div className="text-center sm:text-start space-y-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary font-heading">
                  {t("home.stats.experience")}
                </span>
                <p className="text-sm font-medium text-foreground">
                  {t("home.stats.experienceLabel")}
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 3. MEDICAL SPECIALTIES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge={t("home.specialtiesPreview.badge")}
            title={t("home.specialtiesPreview.title")}
            subtitle={t("home.specialtiesPreview.subtitle")}
          />
          <Link
            href="/specialties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline self-start md:self-end"
          >
            <span>{t("home.specialtiesPreview.viewAll")}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, idx) => (
            <MotionWrapper key={specialty.id} delay={idx * 0.08}>
              <SpecialtyCard specialty={specialty} />
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE NOVA */}
      <section className="bg-primary/5 py-20 border-y border-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t("home.whyChooseUs.badge")}
            title={t("home.whyChooseUs.title")}
            subtitle={t("home.whyChooseUs.subtitle")}
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MotionWrapper delay={0.1}>
              <div className="p-7 rounded-2xl bg-card border border-border/80 space-y-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {t("home.whyChooseUs.item1.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("home.whyChooseUs.item1.description")}
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <div className="p-7 rounded-2xl bg-card border border-border/80 space-y-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {t("home.whyChooseUs.item2.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("home.whyChooseUs.item2.description")}
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <div className="p-7 rounded-2xl bg-card border border-border/80 space-y-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {t("home.whyChooseUs.item3.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("home.whyChooseUs.item3.description")}
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.4}>
              <div className="p-7 rounded-2xl bg-card border border-border/80 space-y-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  {t("home.whyChooseUs.item4.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("home.whyChooseUs.item4.description")}
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 5. MEDICAL SERVICES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge={t("home.servicesPreview.badge")}
            title={t("home.servicesPreview.title")}
            subtitle={t("home.servicesPreview.subtitle")}
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline self-start md:self-end"
          >
            <span>{t("home.servicesPreview.viewAll")}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, idx) => (
            <MotionWrapper key={service.id} delay={idx * 0.1}>
              <ServiceCard service={service} />
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* 6. FACILITIES VISUAL SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge={t("home.facilitiesPreview.badge")}
            title={t("home.facilitiesPreview.title")}
            subtitle={t("home.facilitiesPreview.subtitle")}
          />
          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline self-start md:self-end"
          >
            <span>{t("home.facilitiesPreview.viewAll")}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Modern Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 group relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[16/8] border border-border/80">
            <Image
              src={facilities[0].image}
              alt={t(facilities[0].nameKey)}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 start-6 end-6 text-white space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                {t(facilities[0].tagKey)}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                {t(facilities[0].nameKey)}
              </h3>
              <p className="text-sm text-zinc-200 line-clamp-1 max-w-xl">
                {t(facilities[0].descriptionKey)}
              </p>
            </div>
          </div>

          <div className="md:col-span-4 grid grid-cols-1 gap-6">
            {facilities.slice(1, 3).map((f) => (
              <div
                key={f.id}
                className="group relative rounded-3xl overflow-hidden aspect-[16/9] border border-border/80"
              >
                <Image
                  src={f.image}
                  alt={t(f.nameKey)}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 start-4 end-4 text-white space-y-0.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                    {t(f.tagKey)}
                  </span>
                  <h4 className="text-base font-bold line-clamp-1">
                    {t(f.nameKey)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MEET OUR SPECIALISTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge={t("home.doctorsPreview.badge")}
            title={t("home.doctorsPreview.title")}
            subtitle={t("home.doctorsPreview.subtitle")}
          />
          <Link
            href="/doctors"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline self-start md:self-end"
          >
            <span>{t("home.doctorsPreview.viewAll")}</span>
            <ArrowIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, idx) => (
            <MotionWrapper key={doctor.id} delay={idx * 0.1}>
              <DoctorCard doctor={doctor} />
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* 8. PATIENT EXPERIENCE JOURNEY (3 STEPS) */}
      <section className="bg-card py-20 border-y border-border/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={t("home.journey.badge")}
            title={t("home.journey.title")}
            subtitle={t("home.journey.subtitle")}
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <MotionWrapper delay={0.1}>
              <div className="p-8 rounded-3xl bg-background border border-border/80 space-y-4 relative">
                <span className="text-4xl font-extrabold text-primary/30 font-heading">
                  {t("home.journey.step1.number")}
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {t("home.journey.step1.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("home.journey.step1.description")}
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <div className="p-8 rounded-3xl bg-background border border-border/80 space-y-4 relative">
                <span className="text-4xl font-extrabold text-primary/30 font-heading">
                  {t("home.journey.step2.number")}
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {t("home.journey.step2.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("home.journey.step2.description")}
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <div className="p-8 rounded-3xl bg-background border border-border/80 space-y-4 relative">
                <span className="text-4xl font-extrabold text-primary/30 font-heading">
                  {t("home.journey.step3.number")}
                </span>
                <h3 className="text-xl font-bold text-foreground">
                  {t("home.journey.step3.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("home.journey.step3.description")}
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeading
          badge={t("home.testimonials.badge")}
          title={t("home.testimonials.title")}
          subtitle={t("home.testimonials.subtitle")}
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <MotionWrapper key={test.id} delay={idx * 0.1}>
              <div className="p-8 rounded-3xl bg-card border border-border/80 flex flex-col justify-between h-full space-y-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed italic">
                    "{t(test.textKey)}"
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <p className="text-sm font-bold text-foreground">
                    {t(test.nameKey)}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {t(test.serviceKey)}
                  </p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">
                    {t(test.roleKey)} • {t(test.dateKey)}
                  </p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </section>

      {/* 10. FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="relative rounded-3xl bg-gradient-to-tr from-primary to-accent/90 p-10 sm:p-16 text-primary-foreground overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-6 text-center sm:text-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading">
              {t("home.cta.title")}
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/90 leading-relaxed">
              {t("home.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-background text-foreground font-bold hover:bg-card transition-colors shadow-lg active:scale-95 text-center"
              >
                {t("home.cta.button")}
              </Link>
              <Link
                href="/specialties"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-foreground/15 border border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/25 transition-colors text-center"
              >
                {t("home.cta.secondaryButton")}
              </Link>
            </div>
          </div>

          {/* Decorative background shape */}
          <div className="absolute end-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-96 h-96 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        </div>
      </section>
    </div>
  );
}
