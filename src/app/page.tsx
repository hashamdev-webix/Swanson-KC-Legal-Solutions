import type { Metadata } from "next";
import Image from "next/image";
import {
  Briefcase,
  Scale,
  Home,
  Globe,
  CheckCircle,
  MessageSquare,
  Target,
  Clock,
  Layers,
  Users,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StepCard } from "@/components/ui/StepCard";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Trusted Canadian Legal Services for Individuals, Families & Businesses | Swanson KC Legal Solutions",
  description:
    "Swanson KC Legal Solutions is a Canadian law firm providing legal services in corporate law, civil law, property law, and immigration law. We assist individuals, families, businesses, property owners, and newcomers.",
  keywords: [
    "Canadian law firm",
    "corporate law",
    "civil law",
    "property law",
    "immigration law",
    "legal services Canada",
    "business lawyer",
    "real estate lawyer",
    "immigration lawyer",
  ],
  openGraph: {
    title:
      "Trusted Canadian Legal Services for Individuals, Families & Businesses | Swanson KC Legal Solutions",
    description:
      "Swanson KC Legal Solutions is a Canadian law firm providing legal services in corporate law, civil law, property law, and immigration law. We assist individuals, families, businesses, property owners, and newcomers.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero Slideshow */}
      <HeroSlideshow />

      {/* Section 2 - What We Do */}
      <Section background="white">
        <Container>
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Clear, practical legal guidance across key areas of Canadian law."
            description="We provide reliable legal services for clients who need clear advice, strong documentation, and practical solutions. Our firm assists with business matters, civil disputes, property transactions, and immigration applications across Canada."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Briefcase}
              title="Corporate Law"
              description="We support companies, entrepreneurs, and business owners with incorporation, contracts, shareholder matters, corporate records, and transactions."
              href={siteConfig.practiceAreas[0].href}
            />
            <FeatureCard
              icon={Scale}
              title="Civil Law"
              description="We assist with civil disputes, contract issues, debt recovery, demand letters, settlement negotiations, and court-related matters."
              href={siteConfig.practiceAreas[1].href}
            />
            <FeatureCard
              icon={Home}
              title="Property Law"
              description="We help clients with real estate purchases, sales, refinancing, title transfers, leases, property disputes, and landlord-tenant matters."
              href={siteConfig.practiceAreas[2].href}
            />
            <FeatureCard
              icon={Globe}
              title="Immigration Law"
              description="We guide individuals, families, workers, students, and newcomers through immigration applications, permits, sponsorships, and related matters."
              href={siteConfig.practiceAreas[3].href}
            />
          </div>
        </Container>
      </Section>

      {/* Section 3 - Who We Are */}
      <Section background="cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <SectionHeading
                eyebrow="WHO WE ARE"
                title="A Canadian Law Firm Built on Trust and Practical Guidance"
              />
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Swanson KC Legal Solutions is a Canadian law firm committed to
                  delivering professional, practical, and client-focused legal
                  services. We work with individuals, families, business owners,
                  property clients, and newcomers who need clear legal guidance
                  and dependable representation.
                </p>
                <p>
                  Our approach is built on communication, preparation, and
                  trust. We take the time to understand each client&apos;s
                  matter, explain the legal options available, and provide a
                  path forward that is practical, efficient, and tailored to the
                  client&apos;s goals.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Client-focused legal advice",
                  "Clear communication at every stage",
                  "Practical solutions for complex matters",
                  "Support for individuals and businesses",
                  "Professional representation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Button href="/about-us" variant="primary">
                  Learn More About Our Firm
                </Button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                alt="Professional law office consultation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 4 - Areas of Practice */}
      <Section background="white">
        <Container>
          <SectionHeading
            eyebrow="AREAS OF PRACTICE"
            title="Our Main Areas of Practice"
            description="Our firm provides legal services in key areas that affect businesses, families, property owners, and individuals navigating legal or immigration matters in Canada."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Corporate Law */}
            <Card variant="bordered" className="space-y-6">
              <IconBadge icon={Briefcase} variant="gold" size="lg" />
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Corporate Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Our corporate law services help businesses establish, manage,
                and grow with the right legal structure and documentation.
              </p>
              <ul className="space-y-2">
                {[
                  "Incorporation",
                  "Business Contracts",
                  "Shareholder Agreements",
                  "Partnership Agreements",
                  "Corporate Records",
                  "Buying or Selling a Business",
                ].map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2 text-navy-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                    {service}
                  </li>
                ))}
              </ul>
              <Button
                href={siteConfig.practiceAreas[0].href}
                variant="outline"
                className="w-full sm:w-auto"
              >
                View Corporate Law <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Civil Law */}
            <Card variant="bordered" className="space-y-6">
              <IconBadge icon={Scale} variant="gold" size="lg" />
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Civil Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We provide legal guidance for individuals and businesses
                involved in disputes, focused on resolving matters efficiently
                through advice, negotiation, settlement, or court
                representation.
              </p>
              <ul className="space-y-2">
                {[
                  "Civil Litigation",
                  "Contract Disputes",
                  "Debt Recovery",
                  "Demand Letters",
                  "Settlement Negotiations",
                  "Small Claims Matters",
                ].map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2 text-navy-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                    {service}
                  </li>
                ))}
              </ul>
              <Button
                href={siteConfig.practiceAreas[1].href}
                variant="outline"
                className="w-full sm:w-auto"
              >
                View Civil Law <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Property Law */}
            <Card variant="bordered" className="space-y-6">
              <IconBadge icon={Home} variant="gold" size="lg" />
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Property Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We help clients with residential and commercial property
                matters, including transactions, leases, refinancing, title
                transfers, and property-related concerns.
              </p>
              <ul className="space-y-2">
                {[
                  "Purchase & Sale Transactions",
                  "Real Estate Closings",
                  "Commercial Leasing",
                  "Residential Leasing",
                  "Mortgage & Refinancing",
                  "Title Transfers",
                ].map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2 text-navy-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                    {service}
                  </li>
                ))}
              </ul>
              <Button
                href={siteConfig.practiceAreas[2].href}
                variant="outline"
                className="w-full sm:w-auto"
              >
                View Property Law <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Immigration Law */}
            <Card variant="bordered" className="space-y-6">
              <IconBadge icon={Globe} variant="gold" size="lg" />
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Immigration Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We assist clients with Canadian immigration matters by helping
                them understand eligibility, prepare documentation, and navigate
                application processes.
              </p>
              <ul className="space-y-2">
                {[
                  "Permanent Residence",
                  "Express Entry",
                  "Work Permits",
                  "Study Permits",
                  "Visitor Visas",
                  "Family Sponsorship",
                ].map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2 text-navy-700"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                    {service}
                  </li>
                ))}
              </ul>
              <Button
                href={siteConfig.practiceAreas[3].href}
                variant="outline"
                className="w-full sm:w-auto"
              >
                View Immigration Law <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Section 5 - How Our Process Works */}
      <Section background="navy-soft">
        <Container>
          <SectionHeading
            eyebrow="OUR PROCESS"
            title="How Our Process Works"
            description="We make the legal process clear from the beginning, so you understand what to expect and how your matter will move forward."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StepCard
              step="01"
              title="Initial Consultation"
              description="We begin by learning about your legal matter, goals, concerns, and timelines."
            />
            <StepCard
              step="02"
              title="Document & Matter Review"
              description="Our team reviews the relevant documents, facts, legal requirements, and available options."
            />
            <StepCard
              step="03"
              title="Legal Strategy"
              description="We explain your options and recommend a practical legal approach based on your matter."
            />
            <StepCard
              step="04"
              title="Resolution & Next Steps"
              description="We assist with applications, agreements, negotiations, filings, closings, or representation as required."
            />
          </div>
        </Container>
      </Section>

      {/* Section 6 - Why Choose Us */}
      <Section background="white">
        <Container>
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title="Why Choose Swanson KC Legal Solutions"
            description="Choosing the right law firm can make a meaningful difference in how your legal matter is handled. We focus on clear communication, practical solutions, and professional service."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={MessageSquare}
              title="Clear Legal Advice"
              description="We explain legal options in plain language so clients understand their position before making decisions."
            />
            <FeatureCard
              icon={Target}
              title="Practical Strategy"
              description="Our approach is focused on realistic solutions that match the client's needs, timeline, and objectives."
            />
            <FeatureCard
              icon={Clock}
              title="Responsive Communication"
              description="We keep clients informed and provide timely updates throughout the legal process."
            />
            <FeatureCard
              icon={Layers}
              title="Multiple Practice Areas"
              description="Our firm supports clients across corporate, civil, property, and immigration matters."
            />
            <FeatureCard
              icon={Users}
              title="Client-Focused Service"
              description="Every matter is handled with attention, care, and respect for the client's goals."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Professional Legal Support"
              description="We provide dependable legal assistance for individuals, families, businesses, property clients, and newcomers."
            />
          </div>
        </Container>
      </Section>

      {/* Section 7 - Mid-Page CTA Banner */}
      <CTASection
        title="Need Legal Guidance? Speak With Our Team Today."
        description="Whether you are starting a business, dealing with a dispute, buying property, or navigating an immigration matter, our team is ready to help you understand your options."
        primaryCta={{ label: "Book a Consultation", href: "/contact-us" }}
        secondaryCta={{ label: "Contact the Firm", href: "/contact-us" }}
        background="navy"
      />

      {/* Section 8 - Legal Insights & Updates */}
      <Section background="cream">
        <Container>
          <SectionHeading
            eyebrow="INSIGHTS"
            title="Legal Insights & Updates"
            description="Read practical legal updates, guides, and articles from our team."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Card variant="elevated" hover as="article">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gold-100 text-gold-800 rounded-full">
                  Corporate Law
                </span>
                <h3 className="font-heading text-xl font-semibold text-navy-800">
                  What to Know Before Incorporating a Business in Canada
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  A short guide for entrepreneurs and business owners
                  considering incorporation, legal structure, and corporate
                  documentation.
                </p>
                <a
                  href="/insights"
                  className="inline-flex items-center gap-2 text-gold-600 font-medium hover:text-gold-700 transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Card>

            {/* Article 2 */}
            <Card variant="elevated" hover as="article">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gold-100 text-gold-800 rounded-full">
                  Property Law
                </span>
                <h3 className="font-heading text-xl font-semibold text-navy-800">
                  Common Issues in Property Transactions
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  Learn about legal considerations that can arise when buying,
                  selling, leasing, or refinancing property.
                </p>
                <a
                  href="/insights"
                  className="inline-flex items-center gap-2 text-gold-600 font-medium hover:text-gold-700 transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Card>

            {/* Article 3 */}
            <Card variant="elevated" hover as="article">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gold-100 text-gold-800 rounded-full">
                  Immigration Law
                </span>
                <h3 className="font-heading text-xl font-semibold text-navy-800">
                  Understanding Canadian Immigration Application Requirements
                </h3>
                <p className="text-navy-600 leading-relaxed">
                  An overview of key documents, eligibility considerations, and
                  common challenges in Canadian immigration matters.
                </p>
                <a
                  href="/insights"
                  className="inline-flex items-center gap-2 text-gold-600 font-medium hover:text-gold-700 transition-colors"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Button href="/insights" variant="primary">
              View All Insights
            </Button>
          </div>
        </Container>
      </Section>

      {/* Section 9 - Contact Preview */}
      <ContactSection />
    </main>
  );
}
