"use client";

import { useState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import {
  Heart,
  Phone,
  Menu,
  X,
  ChevronDown,
  Activity,
  Stethoscope,
  Users,
  Building2,
  Mail,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
  children?: { href: string; label: string; icon: React.ReactNode; description: string }[];
}

interface NavbarClientProps {
  locale: string;
  navLinks: NavLink[];
  bookInquiryLabel: string;
  centerName: string;
  centerTagline: string;
  callLabel: string;
  phone: string;
}

export function NavbarClient({
  locale,
  navLinks,
  bookInquiryLabel,
  centerName,
  centerTagline,
  callLabel,
  phone,
}: NavbarClientProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Sticky Navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-background/92 backdrop-blur-xl border-b border-border/80 shadow-sm shadow-black/5"
            : "bg-background/70 backdrop-blur-sm border-b border-transparent"
        )}
      >
        {/* Emergency top ribbon */}
        <div className="hidden lg:block bg-gradient-to-r from-primary/8 via-primary/5 to-accent/8 border-b border-border/40 py-1.5">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs font-medium">
            <div className="flex items-center gap-2 text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-foreground/80">24/7 Emergency & Rapid Diagnostics Available</span>
            </div>
            <div className="flex items-center gap-5 text-muted-foreground">
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Phone className="w-3 h-3" />
                <span dir="ltr">{phone}</span>
              </a>
              <span className="text-border">|</span>
              <span>Sat–Thu: 8AM–9PM</span>
            </div>
          </div>
        </div>

        {/* Main Nav Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-6">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md shadow-primary/25 group-hover:shadow-primary/40 group-hover:scale-105 transition-all duration-300">
                <Heart className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-background animate-pulse" />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-foreground leading-none">
                NOVA
              </div>
              <div className="text-[9px] font-semibold tracking-[0.2em] uppercase text-primary/70 mt-0.5">
                Medical Center
              </div>
            </div>
          </Link>

          {/* Desktop Nav Pills */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-0.5 relative">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              const hasChildren = link.children && link.children.length > 0;
              const dropdownOpen = activeDropdown === link.href;

              return (
                <div key={link.href} className="relative">
                  {hasChildren ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(dropdownOpen ? null : link.href)
                      }
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150",
                        active
                          ? "text-primary bg-primary/8"
                          : "text-foreground/75 hover:text-foreground hover:bg-muted/70"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 text-muted-foreground transition-transform duration-200",
                          dropdownOpen && "rotate-180"
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "relative flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150",
                        active
                          ? "text-primary bg-primary/8"
                          : "text-foreground/75 hover:text-foreground hover:bg-muted/70"
                      )}
                    >
                      {link.label}
                      {active && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  )}

                  {/* Mega Dropdown */}
                  {hasChildren && dropdownOpen && (
                    <div className="absolute top-full start-0 mt-2 w-72 rounded-2xl bg-card border border-border/80 shadow-xl shadow-black/10 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="p-2">
                        {link.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/70 transition-colors group"
                          >
                            <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                              {child.icon}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-foreground">
                                {child.label}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {child.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            <LanguageSwitcher />
            <ThemeToggle />

            <div className="w-px h-5 bg-border mx-0.5" />

            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm active:scale-[0.97]",
                "bg-primary text-white hover:opacity-90 shadow-primary/25 hover:shadow-primary/35 hover:shadow-md"
              )}
            >
              <Sparkles className="w-4 h-4" />
              <span>{bookInquiryLabel}</span>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="w-10 h-10 rounded-xl border border-border/70 bg-card/80 flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 sm:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Slide-in panel */}
          <div
            className={cn(
              "absolute top-0 bottom-0 w-[min(85vw,320px)] bg-card border-border/80 shadow-2xl flex flex-col animate-in slide-in-from-start duration-300",
              isRtl ? "left-auto right-0 border-s" : "right-auto left-0 border-e"
            )}
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-border/70 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
                <div>
                  <p className="text-base font-black text-foreground">NOVA</p>
                  <p className="text-[9px] tracking-widest uppercase text-primary/70 font-semibold">Medical Center</p>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center"
              >
                <X className="w-4 h-4 text-foreground" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-muted/80"
                    )}
                  >
                    <span>{link.label}</span>
                    <ArrowIcon className="w-4 h-4 text-muted-foreground" />
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Footer CTA */}
            <div className="p-4 border-t border-border/70 space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-primary text-white font-bold text-sm shadow-md shadow-primary/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>{bookInquiryLabel}</span>
              </Link>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-muted text-foreground text-xs font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span dir="ltr">{phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
