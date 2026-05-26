import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Component = "h2",
  light = false,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "space-y-4",
        isCenter && "text-center mx-auto max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-sm uppercase tracking-wider font-semibold",
            light ? "text-gold-400" : "text-gold-600",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Component
        className={cn(
          "font-heading text-3xl md:text-4xl lg:text-5xl font-semibold",
          light ? "text-white" : "text-navy-800",
        )}
      >
        {title}
      </Component>
      {description && (
        <p
          className={cn(
            "text-lg leading-relaxed max-w-2xl",
            light ? "text-navy-100" : "text-navy-600",
            isCenter && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
