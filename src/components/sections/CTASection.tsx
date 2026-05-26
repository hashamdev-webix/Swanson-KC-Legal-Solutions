import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  title: string;
  description?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  background?: "navy" | "gold-soft";
}

export function CTASection({
  title,
  description,
  primaryCta,
  secondaryCta,
  background = "navy",
}: CTASectionProps) {
  const isNavy = background === "navy";

  return (
    <Section background={isNavy ? "navy" : "cream"}>
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <SectionHeading
            title={title}
            description={description}
            align="center"
            light={isNavy}
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={primaryCta.href}
              variant={isNavy ? "primary" : "secondary"}
              size="lg"
            >
              {primaryCta.label}
            </Button>
            {secondaryCta && (
              <Button
                href={secondaryCta.href}
                variant={isNavy ? "outline-light" : "outline"}
                size="lg"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
