import {
  HeartPulse,
  Sparkles,
  Baby,
  Smile,
  Bone,
  Stethoscope,
  Activity,
  LucideIcon,
} from "lucide-react";

interface SpecialtyIconProps {
  name: string;
  className?: string;
}

export function SpecialtyIcon({ name, className = "w-6 h-6" }: SpecialtyIconProps) {
  const iconMap: Record<string, LucideIcon> = {
    HeartPulse,
    Sparkles,
    Baby,
    Smile,
    Bone,
    Stethoscope,
  };

  const IconComponent = iconMap[name] || Activity;
  return <IconComponent className={className} />;
}
