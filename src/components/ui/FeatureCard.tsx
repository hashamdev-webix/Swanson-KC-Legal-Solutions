import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";
import { Card } from "./Card";
import { IconBadge } from "./IconBadge";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  href?: string;
  iconVariant?: "gold" | "navy" | "navy-solid";
  cardVariant?: "default" | "bordered" | "elevated" | "navy";
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  href,
  iconVariant = "gold",
  cardVariant = "default",
  className,
}: FeatureCardProps) {
  const content = (
    <Card
      variant={cardVariant}
      hover={!!href}
      className={cn("h-full", className)}
    >
      <div className="space-y-4">
        {icon && <IconBadge icon={icon} variant={iconVariant} />}
        <h3
          className={cn(
            "font-heading text-xl font-semibold",
            cardVariant === "navy" ? "text-white" : "text-navy-800",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "leading-relaxed",
            cardVariant === "navy" ? "text-navy-100" : "text-navy-600",
          )}
        >
          {description}
        </p>
        {href && (
          <div
            className={cn(
              "flex items-center gap-2 font-medium text-sm",
              cardVariant === "navy" ? "text-gold-400" : "text-gold-600",
            )}
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
