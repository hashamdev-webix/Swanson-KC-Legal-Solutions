import { Card } from "./Card";
import { cn } from "@/lib/utils";

interface StepCardProps {
  step: string | number;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({
  step,
  title,
  description,
  className,
}: StepCardProps) {
  return (
    <Card variant="bordered" className={cn("h-full", className)}>
      <div className="space-y-4">
        <div className="font-heading text-5xl font-bold text-gold-600">
          {step}
        </div>
        <h3 className="font-heading text-xl font-semibold text-navy-800">
          {title}
        </h3>
        <p className="text-navy-600 leading-relaxed">{description}</p>
      </div>
    </Card>
  );
}
