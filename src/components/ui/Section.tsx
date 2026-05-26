import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "cream" | "navy" | "navy-soft";
  id?: string;
}

const backgroundStyles = {
  white: "bg-white",
  cream: "bg-cream",
  navy: "bg-navy-800 text-white",
  "navy-soft": "bg-navy-50",
};

export function Section({
  children,
  className,
  background = "white",
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-16 lg:py-20",
        backgroundStyles[background],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
