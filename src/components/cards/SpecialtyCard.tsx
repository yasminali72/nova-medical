import { Specialty } from "@/types/medical";
import { Link } from "@/i18n/navigation";
import { SpecialtyIcon } from "@/components/ui/SpecialtyIcon";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

interface SpecialtyCardProps {
  specialty: Specialty;
}

export async function SpecialtyCard({ specialty }: SpecialtyCardProps) {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <Link
      href={`/specialties#${specialty.slug}`}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden"
    >
      {/* Subtle hover gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300 shadow-sm shadow-primary/10">
            <SpecialtyIcon name={specialty.icon} className="w-7 h-7" />
          </div>
          <span className="w-8 h-8 rounded-full bg-muted/60 text-muted-foreground flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            <ArrowIcon className="w-4 h-4 transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2.5 group-hover:text-primary transition-colors">
          {t(specialty.nameKey)}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-6">
          {t(specialty.descriptionKey)}
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-border/70 flex items-center justify-between text-xs font-bold text-primary">
        <span>{t("common.learnMore")}</span>
        <span className="text-[11px] font-medium text-muted-foreground group-hover:text-primary transition-colors">
          Specialty Clinic
        </span>
      </div>
    </Link>
  );
}

