import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-3",
        centered ? "mx-auto text-center" : "",
        className
      )}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-primary/10 text-primary border border-primary/20">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground font-heading">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
