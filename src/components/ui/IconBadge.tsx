import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBadgeProps {
  icon: LucideIcon;
  size?: "sm" | "md";
  variant?: "gold" | "navy" | "navy-solid";
  className?: string;
}

const sizeStyles = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
};

const iconSizeStyles = {
  sm: "w-5 h-5",
  md: "w-6 h-6",
};

const variantStyles = {
  gold: "bg-gold-100 text-gold-700",
  navy: "bg-navy-100 text-navy-600",
  "navy-solid": "bg-navy-600 text-white",
};

export function IconBadge({
  icon: Icon,
  size = "md",
  variant = "gold",
  className,
}: IconBadgeProps) {
  return (
    <div
      className={cn(
        "rounded-lg flex items-center justify-center",
        sizeStyles[size],
        variantStyles[variant],
        className,
      )}
    >
      <Icon className={iconSizeStyles[size]} />
    </div>
  );
}
