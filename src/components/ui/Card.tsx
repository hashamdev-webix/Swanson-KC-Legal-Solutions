import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "elevated" | "navy";
  hover?: boolean;
  as?: "div" | "article";
}

const variantStyles = {
  default: "bg-white border border-navy-100 shadow-sm",
  bordered: "bg-white border-2 border-navy-200",
  elevated: "bg-white shadow-lg",
  navy: "bg-navy-700 text-white border border-navy-600",
};

const hoverStyles = {
  default:
    "hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer",
  bordered:
    "hover:border-navy-300 hover:shadow-sm hover:-translate-y-1 transition-all duration-200 cursor-pointer",
  elevated:
    "hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer",
  navy: "hover:border-gold-500 hover:shadow-lg hover:shadow-gold-500/10 hover:-translate-y-1 transition-all duration-200 cursor-pointer",
};

export function Card({
  children,
  className,
  variant = "default",
  hover = false,
  as: Component = "div",
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-lg p-6",
        variantStyles[variant],
        hover && hoverStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
