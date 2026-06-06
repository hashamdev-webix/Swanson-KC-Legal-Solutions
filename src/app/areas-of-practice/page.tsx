import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Scale,
  Home,
  Globe,
  MessageSquare,
  Target,
  Users,
  Layers,
  FileText,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
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
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title:
    "Areas of Practice | Corporate, Civil, Property & Immigration Law | Swanson KC Legal Solutions",
  description:
    "Explore the legal services offered by Swanson KC Legal Solutions across corporate law, civil law, property law, and immigration law for clients across Canada.",
  keywords: [
    "legal services",
    "corporate law services",
    "civil law services",
    "property law services",
    "immigration law services",
    "Canadian law firm",
    "business legal services",
    "real estate legal services",
  ],
  openGraph: {
    title:
      "Areas of Practice | Corporate, Civil, Property & Immigration Law | Swanson KC Legal Solutions",
    description:
      "Explore the legal services offered by Swanson KC Legal Solutions across corporate law, civil law, property law, and immigration law for clients across Canada.",
    type: "website",
  },
};

export default function AreasOfPracticePage() {
  const faqItems = [
    {
      question: "What areas of law does Swanson KC Legal Solutions handle?",
      answer:
        "We assist clients with corporate law, civil law, property law, and immigration law.",
    },
    {
      question:
        "Do I need to know which practice area my issue falls under before contacting you?",
      answer:
        "No. You can contact our office with a brief description of your matter, and our team can help direct your inquiry to the appropriate area.",
    },
    {
      question:
        "Can the firm help with both business and personal legal matters?",
      answer:
        "Yes. Our firm supports business clients as well as individuals, families, property clients, and newcomers.",
    },
    {
      question: "Does contacting the firm create a lawyer-client relationship?",
      answer:
        "No. A lawyer-client relationship is only created after the firm confirms it can act for you and a formal engagement agreement is completed.",
    },
  ];

  return (
    <main>
      {/* Section 1 - Hero */}
      <section className="relative w-full min-h-[50vh] md:min-h-[60vh] flex items-center">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80"
          alt="Professional law office"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/85 to-navy-900/75" />

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
                  <span className="text-sm text-gold-400 font-medium">
                    Areas of Practice
                  </span>
                </li>
              </ol>
            </nav>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Areas of Practice
            </h1>
            <p className="text-lg md:text-xl text-navy-100 leading-relaxed max-w-3xl">
              Practical legal guidance for individuals, families, businesses,
              property clients, and newcomers across Canada. At Swanson KC Legal
              Solutions, we provide professional legal services across key areas
              of Canadian law. Whether you need support with a business matter,
              civil dispute, property transaction, or immigration application,
              our team is here to help you understand your options and move
              forward with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/contact-us" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button href="/contact-us" variant="outline-light" size="lg">
                Contact the Firm
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Section 2 - Introduction */}
      <Section background="white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy-800">
              Legal Services Designed Around Your Needs
            </h2>
            <div className="space-y-4 text-lg text-navy-600 leading-relaxed">
              <p>
                Legal matters often involve important decisions, strict
                timelines, and detailed documentation. Our role is to make the
                process clearer, more manageable, and better organized for our
                clients. We assist individuals, families, business owners,
                property clients, and newcomers with practical legal advice and
                carefully prepared legal solutions.
              </p>
              <p>
                Our areas of practice are focused on helping clients protect
                their interests, understand their rights, and take the right
                next steps. From business formation and civil disputes to
                property transactions and immigration applications, Swanson KC
                Legal Solutions provides dependable legal support across
                multiple practice areas.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Section 3 - Main Areas of Practice */}
      <Section background="cream">
        <Container>
          <SectionHeading
            title="Our Main Areas of Practice"
            description="Explore our legal services below and select the area that best matches your matter."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Corporate Law */}
            <Card variant="elevated" className="space-y-6">
              <IconBadge icon={Briefcase} variant="gold" size="lg" />
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Corporate Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Our corporate law services are designed for entrepreneurs,
                business owners, corporations, partnerships, and growing
                companies. We assist clients with legal documents, corporate
                structure, business transactions, and commercial decisions.
              </p>
              <div>
                <h4 className="font-semibold text-navy-800 mb-3">
                  Services Include:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Business Incorporation",
                    "Corporate Structuring",
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
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <p className="text-sm text-navy-600">
                  <span className="font-semibold text-navy-800">Best For:</span>{" "}
                  Startups, corporations, business owners, entrepreneurs, and
                  commercial clients.
                </p>
              </div>
              <Button
                href={siteConfig.practiceAreas[0].href}
                variant="primary"
                className="w-full sm:w-auto"
              >
                View Corporate Law <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Civil Law */}
            <Card variant="elevated" className="space-y-6">
              <IconBadge icon={Scale} variant="gold" size="lg" />
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Civil Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We assist individuals and businesses with civil disputes,
                contract issues, demand letters, settlement discussions, debt
                recovery, and court-related matters where required.
              </p>
              <div>
                <h4 className="font-semibold text-navy-800 mb-3">
                  Services Include:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Civil Litigation",
                    "Contract Disputes",
                    "Debt Recovery",
                    "Demand Letters",
                    "Settlement Negotiations",
                    "Small Claims Matters",
                    "Court Representation",
                  ].map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2 text-navy-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <p className="text-sm text-navy-600">
                  <span className="font-semibold text-navy-800">Best For:</span>{" "}
                  Individuals, companies, landlords, tenants, contractors, and
                  parties involved in legal disputes.
                </p>
              </div>
              <Button
                href={siteConfig.practiceAreas[1].href}
                variant="primary"
                className="w-full sm:w-auto"
              >
                View Civil Law <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Property Law */}
            <Card variant="elevated" className="space-y-6">
              <IconBadge icon={Home} variant="gold" size="lg" />
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Property Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Property matters require careful legal review and reliable
                documentation. We help clients with residential and commercial
                real estate matters, leasing, refinancing, title transfers, and
                property-related concerns.
              </p>
              <div>
                <h4 className="font-semibold text-navy-800 mb-3">
                  Services Include:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Real Estate Transactions",
                    "Purchase and Sale Closings",
                    "Commercial Leasing",
                    "Residential Leasing",
                    "Mortgage and Refinancing",
                    "Title Transfers",
                    "Property Disputes",
                  ].map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2 text-navy-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <p className="text-sm text-navy-600">
                  <span className="font-semibold text-navy-800">Best For:</span>{" "}
                  Buyers, sellers, property owners, investors, landlords,
                  tenants, and commercial property clients.
                </p>
              </div>
              <Button
                href={siteConfig.practiceAreas[2].href}
                variant="primary"
                className="w-full sm:w-auto"
              >
                View Property Law <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>

            {/* Immigration Law */}
            <Card variant="elevated" className="space-y-6">
              <IconBadge icon={Globe} variant="gold" size="lg" />
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Immigration Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We assist individuals, families, workers, students, visitors,
                and newcomers with Canadian immigration matters, including
                applications, documentation, eligibility review, and
                refusal-related concerns.
              </p>
              <div>
                <h4 className="font-semibold text-navy-800 mb-3">
                  Services Include:
                </h4>
                <ul className="space-y-2">
                  {[
                    "Permanent Residence",
                    "Express Entry",
                    "Work Permits",
                    "Study Permits",
                    "Visitor Visas",
                    "Family Sponsorship",
                    "Citizenship Applications",
                    "Immigration Refusals",
                  ].map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-2 text-navy-700"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <p className="text-sm text-navy-600">
                  <span className="font-semibold text-navy-800">Best For:</span>{" "}
                  Newcomers, families, students, workers, employers, and
                  visitors to Canada.
                </p>
              </div>
              <Button
                href={siteConfig.practiceAreas[3].href}
                variant="primary"
                className="w-full sm:w-auto"
              >
                View Immigration Law <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Section 4 - Which Service Do I Need? */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Not Sure Which Area Applies to Your Matter?"
            description="Many legal matters overlap. Use the guide below to help identify the right starting point."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="bordered" className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Choose Corporate Law
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Choose this area if you need help with business setup,
                contracts, shares, company records, or buying or selling a
                business.
              </p>
            </Card>

            <Card variant="bordered" className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Choose Civil Law
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Choose this area if you are facing a dispute, unpaid debt,
                broken contract, demand letter, negotiation, or court matter.
              </p>
            </Card>

            <Card variant="bordered" className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Choose Property Law
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Choose this area if your matter involves real estate, leasing,
                purchase, sale, title, refinancing, or property dispute.
              </p>
            </Card>

            <Card variant="bordered" className="space-y-3">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Choose Immigration Law
              </h3>
              <p className="text-sm text-navy-600 leading-relaxed">
                Choose this area if your matter involves visas, permanent
                residence, permits, citizenship, or family sponsorship.
              </p>
            </Card>
          </div>
          <div className="text-center mt-10 space-y-4">
            <p className="text-lg text-navy-700 font-medium">Still Unsure?</p>
            <p className="text-navy-600">
              Contact our team and we will help direct your inquiry.
            </p>
            <Button href="/contact-us" variant="primary">
              Speak With Our Team
            </Button>
          </div>
        </Container>
      </Section>

      {/* Section 5 - Why Clients Work With Us */}
      <Section background="navy-soft">
        <Container>
          <SectionHeading
            title="Why Clients Choose Swanson KC Legal Solutions"
            description="We provide clear advice, organized legal support, and practical guidance across multiple areas of Canadian law."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={MessageSquare}
              title="Clear Communication"
              description="We explain legal options clearly so clients know what to expect."
            />
            <FeatureCard
              icon={Target}
              title="Practical Solutions"
              description="We focus on realistic strategies that match the client's goals and timeline."
            />
            <FeatureCard
              icon={Users}
              title="Client-Focused Service"
              description="Every matter is handled with attention, care, and respect for client goals."
            />
            <FeatureCard
              icon={Layers}
              title="Multiple Practice Areas"
              description="Clients can receive support across business, civil, property, and immigration matters."
            />
            <FeatureCard
              icon={FileText}
              title="Strong Documentation"
              description="We help prepare, review, and organize important legal documents carefully."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Professional Support"
              description="We support individuals, families, businesses, and newcomers across Canada."
            />
          </div>
        </Container>
      </Section>

      {/* Section 6 - Process */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="How Our Legal Process Works"
            description="We make the process clear from the beginning, so you understand your options and next steps."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StepCard
              step="01"
              title="Initial Consultation"
              description="We learn about your matter, goals, concerns, and urgent deadlines."
            />
            <StepCard
              step="02"
              title="Matter Review"
              description="We review documents, facts, timelines, risks, and legal requirements."
            />
            <StepCard
              step="03"
              title="Legal Strategy"
              description="We explain options and recommend a practical way forward."
            />
            <StepCard
              step="04"
              title="Next Steps"
              description="We assist with filings, agreements, applications, negotiations, closings, or representation."
            />
          </div>
        </Container>
      </Section>

      {/* Section 7 - CTA Banner */}
      <CTASection
        title="Need Help With a Legal Matter?"
        description="Speak with Swanson KC Legal Solutions about your corporate, civil, property, or immigration matter. We can help you understand your options and determine the next step."
        primaryCta={{ label: "Book a Consultation", href: "/contact-us" }}
        secondaryCta={{ label: "Contact the Firm", href: "/contact-us" }}
        background="navy"
      />

      {/* Section 8 - FAQ */}
      <Section background="cream">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            align="center"
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </Section>

      {/* Section 9 - Final Contact */}
      <ContactSection
        heading="Contact Swanson KC Legal Solutions"
        description="Have a legal question or need help choosing the right practice area? Contact our office to schedule a confidential consultation."
      />
    </main>
  );
}
