"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { Menu, X, Calendar, ArrowRight, ArrowLeft } from "lucide-react";
import { useLocale } from "next-intl";

interface MobileMenuProps {
  navLinks: { href: string; label: string }[];
  bookInquiryLabel: string;
  centerName: string;
  centerTagline: string;
}

export function MobileMenu({
  navLinks,
  bookInquiryLabel,
  centerName,
  centerTagline,
}: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-xl border border-border bg-card flex items-center justify-center text-foreground hover:bg-muted transition-colors focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-0 top-[73px] bottom-0 bg-background/95 backdrop-blur-lg z-50 p-6 flex flex-col justify-between border-t border-border animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <div className="mb-4 pb-3 border-b border-border/60">
              <p className="font-bold text-foreground text-lg">{centerName}</p>
              <p className="text-xs text-muted-foreground">{centerTagline}</p>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium text-foreground hover:bg-muted/80 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowIcon className="w-4 h-4 text-muted-foreground" />
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/20"
            >
              <Calendar className="w-4 h-4" />
              <span>{bookInquiryLabel}</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
