import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StepCard } from "@/components/ui/StepCard";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { getIcon } from "@/lib/icon-registry";
import type { PracticeAreaContent } from "@/lib/practice-area-data";

interface PracticeAreaPageProps {
  content: PracticeAreaContent;
}

export function PracticeAreaPage({ content }: PracticeAreaPageProps) {
  return (
    <main>
      {/* Section 1 - Hero */}
      <section className="relative w-full min-h-[55vh] md:min-h-[65vh] flex items-center">
        {/* Background Image */}
        <Image
          src={content.heroImage}
          alt={content.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/70" />

        {/* Content */}
        <Container className="relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center gap-2 flex-wrap">
                <li>
                  <Link
                    href="/"
                    className="text-sm text-navy-100 hover:text-gold-400 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-navy-400">/</li>
                <li>
                  <Link
                    href="/areas-of-practice"
                    className="text-sm text-navy-100 hover:text-gold-400 transition-colors"
                  >
                    Areas of Practice
                  </Link>
                </li>
                <li className="text-navy-400">/</li>
                <li>
                  <span className="text-sm text-gold-400 font-medium">
                    {content.name}
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {content.heroH1}
            </h1>
            <p className="text-xl md:text-2xl text-white font-semibold">
              {content.heroSubheading}
            </p>
            <p className="text-lg md:text-xl text-navy-100 leading-relaxed">
              {content.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                href={content.heroPrimaryCta.href}
                variant="primary"
                size="lg"
              >
                {content.heroPrimaryCta.label}
              </Button>
              <Button
                href={content.heroSecondaryCta.href}
                variant="outline-light"
                size="lg"
              >
                {content.heroSecondaryCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2 - Introduction */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy-800 text-center">
              {content.introHeading}
            </h2>
            <div className="space-y-4 text-lg text-navy-600 leading-relaxed">
              {content.introParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="text-center pt-4">
              <Button href={content.introCta.href} variant="primary">
                {content.introCta.label}
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 3 - Services */}
      <Section background="cream" id="services">
        <Container>
          <SectionHeading
            title={`${content.name} Services We Provide`}
            description="Our firm assists clients with legal services tailored to this practice area."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.services.map((service, index) => {
              const ServiceIcon = getIcon(service.iconName);
              return (
                <Card key={index} variant="default" className="space-y-6">
                  <IconBadge icon={ServiceIcon} variant="gold" size="lg" />
                  <h3 className="font-heading text-2xl font-semibold text-navy-800">
                    {service.title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-3">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {service.includes.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-navy-700"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    href={service.cta.href}
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    {service.cta.label}
                  </Button>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Section 4 - Who We Help */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Who We Help"
            description="Our services are designed for clients at different stages."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.whoWeHelp.map((item, index) => (
              <Card key={index} variant="bordered" className="space-y-3">
                <h3 className="font-heading text-lg font-semibold text-navy-800">
                  {item.title}
                </h3>
                <p className="text-sm text-navy-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 5 - Common Legal Needs */}
      <Section background="cream">
        <Container>
          <SectionHeading
            title={content.commonNeeds.title}
            description="Clients often contact us when they need help with key legal decisions or documents."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Panel */}
            <Card variant="elevated" className="space-y-6">
              <h3 className="font-heading text-xl font-semibold text-navy-800">
                You May Need Legal Help If
              </h3>
              <ul className="space-y-3">
                {content.commonNeeds.youMayNeedHelpIf.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button
                  href={content.commonNeeds.leftCta.href}
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  {content.commonNeeds.leftCta.label}
                </Button>
              </div>
            </Card>

            {/* Right Panel */}
            <Card variant="elevated" className="space-y-6">
              <h3 className="font-heading text-xl font-semibold text-navy-800">
                Our Team Can Assist With
              </h3>
              <ul className="space-y-3">
                {content.commonNeeds.ourTeamCanAssistWith.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button
                  href={content.commonNeeds.rightCta.href}
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  {content.commonNeeds.rightCta.label}
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Section 6 - Process */}
      <Section background="navy-soft">
        <Container>
          <SectionHeading
            title={`How Our ${content.name} Process Works`}
            description="We make the legal process organized and practical, so clients know what to expect."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.process.map((step, index) => (
              <StepCard
                key={index}
                step={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 7 - Why Choose Us */}
      <Section background="white">
        <Container>
          <SectionHeading
            title={`Why Choose Swanson KC Legal Solutions for ${content.name}`}
            description="We provide legal support that is practical, clear, and aligned with each client's goals."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.whyChooseUs.map((item, index) => {
              const ItemIcon = getIcon(item.iconName);
              return (
                <FeatureCard
                  key={index}
                  icon={ItemIcon}
                  title={item.title}
                  description={item.description}
                />
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Section 8 - Mid-Page CTA Banner */}
      <CTASection
        title={content.midCta.title}
        description={content.midCta.description}
        primaryCta={{
          label: content.midCta.primary.label,
          href: content.midCta.primary.href,
        }}
        secondaryCta={{
          label: content.midCta.secondary.label,
          href: content.midCta.secondary.href,
        }}
        background="navy"
      />

      {/* Section 9 - Related Practice Areas */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Related Areas of Practice"
            description="Some matters may connect with other areas of law."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.relatedAreas.map((area, index) => (
              <Card key={index} variant="elevated" hover className="space-y-4">
                <h3 className="font-heading text-xl font-semibold text-navy-800">
                  {area.title}
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  {area.description}
                </p>
                <Link
                  href={area.href}
                  className="inline-flex items-center gap-2 text-gold-600 font-medium hover:text-gold-700 transition-colors"
                >
                  {area.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Section 10 - FAQ */}
      <Section background="cream">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            align="center"
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={content.faqs} />
          </div>
        </Container>
      </Section>

      {/* Section 11 - Final Contact */}
      <ContactSection
        heading={content.contactSectionHeading}
        description={content.contactSectionDescription}
      />
    </main>
  );
}
