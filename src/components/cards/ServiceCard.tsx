import { Service } from "@/types/medical";
import { Link } from "@/i18n/navigation";
import { SpecialtyIcon } from "@/components/ui/SpecialtyIcon";
import { Clock, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

interface ServiceCardProps {
  service: Service;
}

export async function ServiceCard({ service }: ServiceCardProps) {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="group relative flex flex-col justify-between p-8 rounded-3xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 overflow-hidden h-full">
      {/* Ambient gradient */}
      <div className="absolute top-0 end-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 text-primary flex items-center justify-center group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground transition-all duration-300 shadow-sm shadow-primary/10">
            <SpecialtyIcon name={service.icon} className="w-7 h-7" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/80 text-xs font-semibold text-muted-foreground border border-border/60">
            <Clock className="w-3.5 h-3.5 text-primary" />
            <span>{service.duration}</span>
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
          {t(service.titleKey)}
        </h3>

        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3">
          {t(service.subtitleKey)}
        </p>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
          {t(service.descriptionKey)}
        </p>

        {/* Feature Highlights */}
        <div className="space-y-2.5 mb-6 pt-2 border-t border-border/60">
          {service.featuresKeys.slice(0, 2).map((key) => (
            <div key={key} className="flex items-start gap-2.5 text-xs font-medium text-foreground/85">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>{t(key)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 pt-5 border-t border-border/70 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
        >
          <span>{t("common.learnMore")}</span>
          <ArrowIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/contact"
          className="px-4 py-2 text-xs font-bold rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-sm active:scale-95"
        >
          {t("navigation.bookInquiry")}
        </Link>
      </div>
    </div>
  );
}

