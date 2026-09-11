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
    <div className="group flex flex-col justify-between p-7 rounded-2xl bg-card border border-border/80 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
            <SpecialtyIcon name={service.icon} className="w-6 h-6" />
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>{service.duration}</span>
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {t(service.titleKey)}
        </h3>

        <p className="text-sm font-medium text-accent mb-3">
          {t(service.subtitleKey)}
        </p>

        <p className="text-sm text-muted-foreground line-clamp-2 mb-6 leading-relaxed">
          {t(service.descriptionKey)}
        </p>

        {/* Feature Highlights */}
        <div className="space-y-2 mb-6">
          {service.featuresKeys.slice(0, 2).map((key) => (
            <div key={key} className="flex items-start gap-2 text-xs text-foreground/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{t(key)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-5 border-t border-border/60 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
        >
          <span>{t("common.learnMore")}</span>
          <ArrowIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/contact"
          className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
        >
          {t("navigation.bookInquiry")}
        </Link>
      </div>
    </div>
  );
}
