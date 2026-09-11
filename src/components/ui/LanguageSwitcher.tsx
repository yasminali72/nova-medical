"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { useTransition } from "react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const nextLocale = locale === "en" ? "ar" : "en";
  const displayLabel = locale === "en" ? "العربية" : "English";

  const handleToggle = () => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-border bg-card/80 hover:bg-muted text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50"
      aria-label={`Switch language to ${displayLabel}`}
      title={`Switch to ${displayLabel}`}
    >
      <Globe className="w-3.5 h-3.5 text-primary" />
      <span>{displayLabel}</span>
    </button>
  );
}
