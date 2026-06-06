import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { IconBadge } from "@/components/ui/IconBadge";
import { StepCard } from "@/components/ui/StepCard";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import {
  Target,
  Compass,
  Heart,
  MessageSquare,
  ListChecks,
  Layers,
  Users,
  ShieldCheck,
  Handshake,
  BookOpen,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | A Canadian Law Firm | Swanson KC Legal Solutions",
  description:
    "Learn about Swanson KC Legal Solutions, a Canadian law firm providing practical legal services in corporate, civil, property, and immigration law for clients across Canada.",
  keywords: [
    "Canadian law firm",
    "about Swanson KC",
    "legal services Canada",
    "corporate law firm",
    "civil law firm",
    "property law firm",
    "immigration law firm",
    "Toronto lawyers",
  ],
  openGraph: {
    title: "About Us | A Canadian Law Firm | Swanson KC Legal Solutions",
    description:
      "Learn about Swanson KC Legal Solutions, a Canadian law firm providing practical legal services in corporate, civil, property, and immigration law for clients across Canada.",
    type: "website",
  },
};

export default function AboutUsPage() {
  return (
    <>
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=900&fit=crop"
            alt="Canadian city skyline with modern architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-navy-900/75" />
        </div>

        {/* Content */}
        <Container className="relative z-10 text-white">
          <div className="max-w-4xl space-y-8">
            <Breadcrumbs
              items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
              className="[&_a]:text-white [&_a:hover]:text-gold-400 [&_span]:text-gold-400"
            />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
              About Swanson KC Legal Solutions
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-navy-100 max-w-3xl">
              A Canadian law firm providing practical, professional, and
              client-focused legal services across corporate law, civil law,
              property law, and immigration law. At Swanson KC Legal Solutions,
              we believe legal support should be clear, organized, and focused
              on the client&apos;s goals. We assist individuals, families,
              businesses, property clients, and newcomers with legal matters
              that require careful advice, strong documentation, and practical
              next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact-us" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button href="/our-team" variant="outline-light" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 - INTRODUCTION */}
      <Section background="white">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy-800">
              Practical Legal Guidance Built Around Client Needs
            </h2>
            <div className="space-y-4 text-lg text-navy-600 leading-relaxed">
              <p>
                Legal matters can be stressful, time-sensitive, and difficult to
                navigate without clear guidance. Our firm was built to help
                clients understand their legal options, protect their interests,
                and move forward with confidence.
              </p>
              <p>
                Swanson KC Legal Solutions provides legal services in key areas
                of Canadian law, including corporate law, civil law, property
                law, and immigration law. We work with clients who need reliable
                legal advice, careful document preparation, organized support,
                and practical solutions tailored to their circumstances. Whether
                you are starting a business, handling a dispute, completing a
                property transaction, or navigating a Canadian immigration
                matter, our team is here to provide professional legal support
                from the first conversation to the next step.
              </p>
            </div>
            <div className="pt-4">
              <Button href="/contact-us" variant="secondary" size="lg">
                Contact the Firm
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 - OUR STORY */}
      <Section background="cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <SectionHeading
                eyebrow="OUR STORY"
                title="Built to Make Legal Matters More Manageable"
              />
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  Swanson KC Legal Solutions was established with a simple
                  purpose: to provide clients with practical legal support that
                  is clear, dependable, and focused on real-world outcomes.
                </p>
                <p>
                  We understand that every client comes to the firm with a
                  different concern. Some clients need help protecting a
                  business. Some need support during a dispute. Others need
                  guidance with property documents or immigration applications.
                  Our role is to listen carefully, explain legal options
                  clearly, prepare documents properly, and help clients take
                  informed steps.
                </p>
                <p>
                  We aim to make legal matters more manageable through
                  communication, planning, and professional service.
                </p>
              </div>
              <Button href="/our-team" variant="secondary">
                Learn About Our Team
              </Button>
            </div>

            {/* Right - Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Modern law office consultation room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 - MISSION / VISION / VALUES */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Our Mission, Vision & Values"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="elevated" className="text-center space-y-6">
              <div className="flex justify-center">
                <IconBadge icon={Target} size="lg" variant="gold" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Our Mission
              </h3>
              <p className="text-navy-600 leading-relaxed">
                To provide professional, practical, and client-focused legal
                services that help individuals, families, businesses, property
                clients, and newcomers understand their options and move forward
                with confidence.
              </p>
            </Card>

            <Card variant="elevated" className="text-center space-y-6">
              <div className="flex justify-center">
                <IconBadge icon={Compass} size="lg" variant="gold" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Our Vision
              </h3>
              <p className="text-navy-600 leading-relaxed">
                To be a trusted Canadian law firm known for clear advice, strong
                client communication, and dependable support across key areas of
                law. We want clients to feel heard, prepared, and supported at
                every stage.
              </p>
            </Card>

            <Card variant="elevated" className="text-center space-y-6">
              <div className="flex justify-center">
                <IconBadge icon={Heart} size="lg" variant="gold" />
              </div>
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Our Values
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We value clarity, preparation, integrity, professionalism,
                respect, responsiveness, and practical problem-solving. We aim
                to treat every client matter with care, attention, and respect.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 - WHAT MAKES US DIFFERENT */}
      <Section background="navy-soft">
        <Container>
          <SectionHeading
            title="What Makes Us Different"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={MessageSquare}
              title="Clear Communication"
              description="We explain legal options, documents, timelines, and next steps in plain language."
              iconVariant="navy"
            />
            <FeatureCard
              icon={Target}
              title="Practical Advice"
              description="We focus on realistic legal solutions that match the client's goals, needs, and circumstances."
              iconVariant="navy"
            />
            <FeatureCard
              icon={ListChecks}
              title="Organized Support"
              description="We help clients keep documents, deadlines, and next steps structured and manageable."
              iconVariant="navy"
            />
            <FeatureCard
              icon={Layers}
              title="Multi-Practice Legal Support"
              description="We assist clients across corporate, civil, property, and immigration law."
              iconVariant="navy"
            />
            <FeatureCard
              icon={Users}
              title="Client-Focused Approach"
              description="We take time to understand each client's situation, concerns, and goals."
              iconVariant="navy"
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Professional Service"
              description="We provide dependable support for individuals, families, businesses, property clients, and newcomers."
              iconVariant="navy"
            />
          </div>
        </Container>
      </Section>

      {/* SECTION 6 - OUR APPROACH */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Our Approach"
            description="We follow a clear, organized process so clients understand their options and next steps."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard
              step="01"
              title="Listen Carefully"
              description="We begin by understanding the client's issue, concerns, goals, and priorities."
            />
            <StepCard
              step="02"
              title="Review Thoroughly"
              description="We review the facts, documents, timelines, risks, and legal requirements before recommending action."
            />
            <StepCard
              step="03"
              title="Explain Clearly"
              description="We explain the available options, risks, and possible next steps in clear language."
            />
            <StepCard
              step="04"
              title="Act Practically"
              description="We help clients move forward with documents, applications, agreements, negotiation, or advice."
            />
          </div>
        </Container>
      </Section>

      {/* SECTION 7 - PRACTICE AREAS SNAPSHOT */}
      <Section background="cream">
        <Container>
          <SectionHeading
            title="Our Areas of Practice"
            description="We provide legal services across four key areas of Canadian law."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="elevated" hover className="space-y-4">
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Corporate Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We assist with business incorporation, contracts, shareholder
                agreements, corporate records, and business transactions.
              </p>
              <Button
                href="/areas-of-practice/corporate-law"
                variant="outline"
                size="sm"
              >
                View Corporate Law
              </Button>
            </Card>

            <Card variant="elevated" hover className="space-y-4">
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Civil Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We assist with contract disputes, demand letters, debt recovery,
                settlement negotiations, small claims, and civil litigation.
              </p>
              <Button
                href="/areas-of-practice/civil-law"
                variant="outline"
                size="sm"
              >
                View Civil Law
              </Button>
            </Card>

            <Card variant="elevated" hover className="space-y-4">
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Property Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We assist with real estate transactions, leases, refinancing,
                title transfers, and property disputes.
              </p>
              <Button
                href="/areas-of-practice/property-law"
                variant="outline"
                size="sm"
              >
                View Property Law
              </Button>
            </Card>

            <Card variant="elevated" hover className="space-y-4">
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Immigration Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                We assist with permanent residence, Express Entry, work permits,
                study permits, visitor visas, family sponsorship, citizenship
                applications, and immigration refusals.
              </p>
              <Button
                href="/areas-of-practice/immigration-law"
                variant="outline"
                size="sm"
              >
                View Immigration Law
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 - WHO WE SERVE */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Who We Serve"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card variant="bordered" className="space-y-2">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Individuals
              </h3>
              <p className="text-sm text-navy-600">
                We help individuals with disputes, property matters, documents,
                and legal next steps.
              </p>
            </Card>

            <Card variant="bordered" className="space-y-2">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Families
              </h3>
              <p className="text-sm text-navy-600">
                We assist families with immigration, sponsorship, property
                issues, and legal planning.
              </p>
            </Card>

            <Card variant="bordered" className="space-y-2">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Business Owners
              </h3>
              <p className="text-sm text-navy-600">
                We support business owners with contracts, incorporation,
                corporate records, and transactions.
              </p>
            </Card>

            <Card variant="bordered" className="space-y-2">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Corporations
              </h3>
              <p className="text-sm text-navy-600">
                We assist companies with records, agreements, and legal support.
              </p>
            </Card>

            <Card variant="bordered" className="space-y-2">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Property Clients
              </h3>
              <p className="text-sm text-navy-600">
                We assist buyers, sellers, landlords, tenants, owners, and
                investors with property matters.
              </p>
            </Card>

            <Card variant="bordered" className="space-y-2">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Newcomers
              </h3>
              <p className="text-sm text-navy-600">
                We assist newcomers with Canadian immigration matters and legal
                concerns.
              </p>
            </Card>

            <Card variant="bordered" className="space-y-2">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Students & Workers
              </h3>
              <p className="text-sm text-navy-600">
                We assist students and workers with immigration, permits,
                property, and related legal matters.
              </p>
            </Card>

            <Card variant="bordered" className="space-y-2">
              <h3 className="font-heading text-lg font-semibold text-navy-800">
                Investors
              </h3>
              <p className="text-sm text-navy-600">
                We assist investors with business and property matters.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 - TEAM CTA */}
      <Section background="navy-soft">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-semibold text-navy-800">
                Meet the People Behind the Firm
              </h2>
              <p className="text-lg text-navy-600 leading-relaxed">
                Our team is made up of legal professionals who are committed to
                clear communication, practical guidance, and client-focused
                service. Learn more about the lawyers and legal professionals
                who support our clients across corporate, civil, property, and
                immigration matters.
              </p>
              <Button href="/our-team" variant="secondary" size="lg">
                Meet Our Team
              </Button>
            </div>

            {/* Right - Image */}
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop"
                alt="Professional team meeting in modern office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 - COMMUNITY / CLIENT COMMITMENT */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Our Commitment to Clients and Community"
            description="We understand that legal matters affect real people, real businesses, and important life decisions. Our firm is committed to serving clients with professionalism, respect, and practical legal support. We aim to be accessible, responsive, and clear in the way we communicate."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Handshake}
              title="Respectful Service"
              description="We treat client matters with care, attention, and professionalism."
              iconVariant="gold"
            />
            <FeatureCard
              icon={BookOpen}
              title="Accessible Guidance"
              description="We aim to make legal information easier to understand and act on."
              iconVariant="gold"
            />
            <FeatureCard
              icon={CheckCircle}
              title="Practical Support"
              description="We focus on realistic legal steps that help clients move forward."
              iconVariant="gold"
            />
          </div>
        </Container>
      </Section>

      {/* SECTION 11 - CTA BANNER */}
      <CTASection
        title="Ready to Discuss Your Legal Matter?"
        description="Contact Swanson KC Legal Solutions to speak with our team about corporate law, civil law, property law, or immigration law. We can help you understand your options and determine the next step."
        primaryCta={{
          label: "Book a Consultation",
          href: "/contact-us",
        }}
        secondaryCta={{
          label: "Contact the Firm",
          href: "/contact-us",
        }}
        background="navy"
      />

      {/* SECTION 12 - FAQ */}
      <Section background="cream">
        <Container>
          <SectionHeading
            title="Frequently Asked Questions"
            align="center"
            className="mb-12"
          />
          <div className="max-w-4xl mx-auto">
            <FAQAccordion
              items={[
                {
                  question:
                    "What type of law firm is Swanson KC Legal Solutions?",
                  answer:
                    "Swanson KC Legal Solutions is a Canadian law firm providing legal services in corporate law, civil law, property law, and immigration law for individuals, families, businesses, property clients, and newcomers.",
                },
                {
                  question: "What makes the firm's approach different?",
                  answer:
                    "Our approach focuses on clear communication, practical legal advice, careful document review, and organized support so clients can understand their options and next steps.",
                },
                {
                  question:
                    "Does the firm help both individuals and businesses?",
                  answer:
                    "Yes. We assist individuals, families, business owners, corporations, property clients, students, workers, newcomers, and commercial clients across multiple practice areas.",
                },
                {
                  question: "What areas of law does the firm handle?",
                  answer:
                    "The firm handles corporate law, civil law, property law, and immigration law. These include matters such as business contracts, civil disputes, real estate transactions, leases, permanent residence, work permits, study permits, and family sponsorship.",
                },
                {
                  question: "How do I know which service I need?",
                  answer:
                    "You do not need to know the exact legal category before contacting the firm. You can describe your matter, and our team can help direct your inquiry to the appropriate practice area.",
                },
                {
                  question:
                    "Does contacting the firm create a lawyer-client relationship?",
                  answer:
                    "No. Contacting the firm or submitting a website form does not create a lawyer-client relationship. A formal relationship begins only after the firm confirms it can act for you and an engagement agreement is completed.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* SECTION 13 - FINAL CONTACT */}
      <ContactSection
        heading="Contact Swanson KC Legal Solutions"
        description="Have a question about our firm or need help with a legal matter? Contact our office to speak with our team."
      />
    </>
  );
}
