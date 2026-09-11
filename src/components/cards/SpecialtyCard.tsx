import { Specialty } from "@/types/medical";
import { Link } from "@/i18n/navigation";
import { SpecialtyIcon } from "@/components/ui/SpecialtyIcon";
import { ArrowRight, ArrowLeft } from "lucide-react";
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
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <SpecialtyIcon name={specialty.icon} className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {t(specialty.nameKey)}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-6">
          {t(specialty.descriptionKey)}
        </p>
      </div>

      <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-primary">
        <span>{t("common.learnMore")}</span>
        <ArrowIcon className="w-4 h-4 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
