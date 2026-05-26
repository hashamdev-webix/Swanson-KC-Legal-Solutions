import {
  Container,
  Section,
  SectionHeading,
  Card,
  FeatureCard,
  StepCard,
  Breadcrumbs,
  FAQAccordion,
} from "@/components/ui";
import { CTASection } from "@/components/sections/CTASection";
import { Scale, Building2, Home, Globe, Shield, Users } from "lucide-react";

export default function ComponentShowcase() {
  const faqItems = [
    {
      question: "What areas of law does your firm practice?",
      answer:
        "We specialize in corporate law, civil law, property law, and immigration law, providing comprehensive legal services to individuals, families, and businesses across Canada.",
    },
    {
      question: "How do I schedule a consultation?",
      answer:
        "You can schedule a consultation by calling our office, sending us an email, or using the contact form on our website. We typically respond within 24 hours.",
    },
    {
      question: "What should I bring to my first consultation?",
      answer:
        "Please bring any relevant documents related to your legal matter, a list of questions you'd like to discuss, and a form of identification. We'll guide you through what else might be needed during our initial conversation.",
    },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Areas of Practice", href: "/areas-of-practice" },
    { label: "Corporate Law" },
  ];

  return (
    <>
      {/* Hero Section with SectionHeading */}
      <Section background="cream">
        <Container>
          <div className="space-y-12">
            <SectionHeading
              eyebrow="Component Showcase"
              title="UI Component Library"
              description="A comprehensive set of reusable components for the Swanson KC Legal Solutions website. This page demonstrates all available UI elements."
              align="center"
            />

            {/* Breadcrumbs Example */}
            <div>
              <h3 className="text-xl font-heading font-semibold text-navy-800 mb-4">
                Breadcrumbs
              </h3>
              <Breadcrumbs items={breadcrumbItems} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Card Variants */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Card Variants"
            description="Different card styles for various use cases"
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="default">
              <h3 className="font-heading text-lg font-semibold text-navy-800 mb-2">
                Default Card
              </h3>
              <p className="text-navy-600 text-sm">
                White background with subtle border and soft shadow.
              </p>
            </Card>
            <Card variant="bordered">
              <h3 className="font-heading text-lg font-semibold text-navy-800 mb-2">
                Bordered Card
              </h3>
              <p className="text-navy-600 text-sm">
                White background with stronger navy border, no shadow.
              </p>
            </Card>
            <Card variant="elevated">
              <h3 className="font-heading text-lg font-semibold text-navy-800 mb-2">
                Elevated Card
              </h3>
              <p className="text-navy-600 text-sm">
                White background with larger soft shadow, no border.
              </p>
            </Card>
            <Card variant="navy">
              <h3 className="font-heading text-lg font-semibold text-white mb-2">
                Navy Card
              </h3>
              <p className="text-navy-100 text-sm">
                Navy background with light text for dark sections.
              </p>
            </Card>
          </div>

          <div className="mt-8">
            <h4 className="font-heading text-lg font-semibold text-navy-800 mb-4">
              Hover Effects
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="default" hover>
                <h3 className="font-heading text-lg font-semibold text-navy-800 mb-2">
                  Hover Default
                </h3>
                <p className="text-navy-600 text-sm">
                  Hover to see lift effect
                </p>
              </Card>
              <Card variant="bordered" hover>
                <h3 className="font-heading text-lg font-semibold text-navy-800 mb-2">
                  Hover Bordered
                </h3>
                <p className="text-navy-600 text-sm">
                  Hover to see lift effect
                </p>
              </Card>
              <Card variant="elevated" hover>
                <h3 className="font-heading text-lg font-semibold text-navy-800 mb-2">
                  Hover Elevated
                </h3>
                <p className="text-navy-600 text-sm">
                  Hover to see lift effect
                </p>
              </Card>
              <Card variant="navy" hover>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  Hover Navy
                </h3>
                <p className="text-navy-100 text-sm">
                  Hover to see glow effect
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Cards */}
      <Section background="navy-soft">
        <Container>
          <SectionHeading
            title="Feature Cards"
            description="Composed cards with icons for benefits and services"
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Scale}
              title="Corporate Law"
              description="Comprehensive legal services for businesses, from incorporation to contracts and compliance."
              href="/areas-of-practice/corporate-law"
            />
            <FeatureCard
              icon={Building2}
              title="Civil Law"
              description="Expert representation in civil disputes, litigation, and conflict resolution."
              href="/areas-of-practice/civil-law"
              iconVariant="navy"
            />
            <FeatureCard
              icon={Home}
              title="Property Law"
              description="Guidance on real estate transactions, property disputes, and land use matters."
              href="/areas-of-practice/property-law"
              iconVariant="navy-solid"
            />
          </div>
        </Container>
      </Section>

      {/* Feature Cards on Navy Background */}
      <Section background="navy">
        <Container>
          <SectionHeading
            title="Feature Cards on Dark Background"
            description="Navy variant cards for dark sections"
            light
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Globe}
              title="Immigration Law"
              description="Professional assistance with visas, work permits, permanent residence, and citizenship."
              href="/areas-of-practice/immigration-law"
              cardVariant="navy"
              iconVariant="gold"
            />
            <FeatureCard
              icon={Shield}
              title="Experienced Team"
              description="Our lawyers bring decades of combined experience in Canadian law."
              cardVariant="navy"
              iconVariant="gold"
            />
            <FeatureCard
              icon={Users}
              title="Client-Focused"
              description="We prioritize clear communication and personalized legal strategies."
              cardVariant="navy"
              iconVariant="gold"
            />
          </div>
        </Container>
      </Section>

      {/* Step Cards */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Process Steps"
            description="Numbered step cards for process explanations"
            className="mb-8"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StepCard
              step="01"
              title="Initial Consultation"
              description="We begin with a thorough consultation to understand your legal needs and objectives."
            />
            <StepCard
              step="02"
              title="Strategy Development"
              description="Our team develops a tailored legal strategy designed to achieve your goals."
            />
            <StepCard
              step="03"
              title="Implementation"
              description="We execute the strategy with precision, keeping you informed every step of the way."
            />
          </div>
        </Container>
      </Section>

      {/* FAQ Accordion */}
      <Section background="cream">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Frequently Asked Questions"
              description="Common questions about our legal services"
              align="center"
              className="mb-8"
            />
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* CTA Section - Navy Background */}
      <CTASection
        title="Ready to Get Started?"
        description="Schedule a consultation with our experienced legal team today."
        primaryCta={{
          label: "Book a Consultation",
          href: "/contact-us",
        }}
        secondaryCta={{
          label: "Learn More",
          href: "/about-us",
        }}
        background="navy"
      />

      {/* CTA Section - Gold Soft Background */}
      <CTASection
        title="Have Questions About Your Legal Matter?"
        description="Our team is here to help. Reach out for a free initial consultation."
        primaryCta={{
          label: "Contact Us",
          href: "/contact-us",
        }}
        secondaryCta={{
          label: "View Our Services",
          href: "/areas-of-practice",
        }}
        background="gold-soft"
      />

      {/* Section Heading Variants */}
      <Section background="white">
        <Container>
          <div className="space-y-12">
            <SectionHeading
              eyebrow="Left Aligned"
              title="Section Heading with Eyebrow"
              description="This is a left-aligned section heading with an eyebrow label, title, and description."
            />
            <SectionHeading
              title="Section Heading Without Eyebrow"
              description="This heading has no eyebrow label, just a title and description."
              align="center"
            />
          </div>
        </Container>
      </Section>

      {/* Light Section Heading on Dark Background */}
      <Section background="navy">
        <Container>
          <SectionHeading
            eyebrow="Dark Background"
            title="Light Section Heading"
            description="This section heading uses light colors for visibility on dark backgrounds."
            light
            align="center"
          />
        </Container>
      </Section>
    </>
  );
}
