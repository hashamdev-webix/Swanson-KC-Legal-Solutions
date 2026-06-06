import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { TeamGrid } from "@/components/sections/TeamGrid";
import {
  Ear,
  Search,
  MessageSquare,
  ArrowRight,
  Target,
  ListChecks,
  Layers,
  Users,
  ShieldCheck,
} from "lucide-react";
import { teamMembers } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "Our Team | Meet Our Legal Professionals | Swanson KC Legal Solutions",
  description:
    "Meet the legal team at Swanson KC Legal Solutions — experienced professionals serving clients across corporate, civil, property, and immigration law in Canada.",
  keywords: [
    "legal team",
    "lawyers",
    "corporate lawyer",
    "civil lawyer",
    "property lawyer",
    "immigration lawyer",
    "Canadian law firm",
    "Swanson KC",
  ],
  openGraph: {
    title:
      "Our Team | Meet Our Legal Professionals | Swanson KC Legal Solutions",
    description:
      "Meet the legal team at Swanson KC Legal Solutions — experienced professionals serving clients across corporate, civil, property, and immigration law in Canada.",
    type: "website",
  },
};

export default function OurTeamPage() {
  return (
    <>
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&h=900&fit=crop"
            alt="Professional law office team meeting"
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
              items={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
              className="[&_a]:text-white [&_a:hover]:text-gold-400 [&_span]:text-gold-400"
            />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
              Meet Our Legal Team
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-navy-100 max-w-3xl">
              Experienced legal professionals providing clear, practical, and
              client-focused legal services across corporate law, civil law,
              property law, and immigration law. At Swanson KC Legal Solutions,
              our team is committed to helping individuals, families,
              businesses, property clients, and newcomers understand their legal
              options and move forward with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact-us" variant="primary" size="lg">
                Book a Consultation
              </Button>
              <Button
                href="/areas-of-practice"
                variant="outline-light"
                size="lg"
              >
                View Areas of Practice
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
              A Team Built Around Trust, Clarity, and Practical Legal Support
            </h2>
            <div className="space-y-4 text-lg text-navy-600 leading-relaxed">
              <p>
                Choosing a law firm is an important decision. Clients want to
                know who they are working with, how their matter will be
                handled, and whether their legal team understands their
                concerns. Our team is focused on clear communication, careful
                preparation, and practical advice tailored to each client&apos;s
                situation.
              </p>
              <p>
                Swanson KC Legal Solutions brings together legal professionals
                who assist clients across corporate law, civil law, property
                law, and immigration law. Whether you are starting a business,
                dealing with a dispute, completing a property transaction, or
                navigating a Canadian immigration matter, our team is here to
                guide you through the process.
              </p>
            </div>
            <div className="pt-4">
              <Button href="/contact-us" variant="secondary" size="lg">
                Contact Our Team
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 - MEET OUR TEAM (with filter) */}
      <Section background="cream">
        <Container>
          <TeamGrid members={teamMembers} />
        </Container>
      </Section>

      {/* SECTION 4 - HOW OUR TEAM WORKS */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="How Our Team Works"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Ear}
              title="Listen First"
              description="We take time to understand the client's goals, concerns, and priorities."
              iconVariant="gold"
            />
            <FeatureCard
              icon={Search}
              title="Review Carefully"
              description="We review documents, timelines, facts, risks, and legal requirements before recommending next steps."
              iconVariant="gold"
            />
            <FeatureCard
              icon={MessageSquare}
              title="Explain Clearly"
              description="We explain legal options in plain language so clients can make informed decisions."
              iconVariant="gold"
            />
            <FeatureCard
              icon={ArrowRight}
              title="Support Next Steps"
              description="We help clients move forward with documents, filings, negotiation, or advice."
              iconVariant="gold"
            />
          </div>
        </Container>
      </Section>

      {/* SECTION 5 - PRACTICE AREA TEAM SUPPORT */}
      <Section background="navy-soft">
        <Container>
          <SectionHeading
            title="Practice Areas Our Team Supports"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="elevated" hover className="space-y-4">
              <h3 className="font-heading text-2xl font-semibold text-navy-800">
                Corporate Law
              </h3>
              <p className="text-navy-600 leading-relaxed">
                Our team assists with incorporation, business contracts,
                shareholder agreements, corporate records, and business
                transactions.
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
                Our team assists with contract disputes, demand letters, debt
                recovery, settlement negotiations, small claims, and civil
                litigation support.
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
                Our team assists with real estate closings, leasing,
                refinancing, title transfers, and property-related legal
                concerns.
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
                Our team assists with permanent residence, Express Entry, work
                permits, study permits, visitor visas, family sponsorship,
                citizenship applications, and immigration refusals.
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

      {/* SECTION 6 - WHY WORK WITH OUR TEAM */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Why Work With Our Team"
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={MessageSquare}
              title="Clear Communication"
              description="We explain legal options and next steps in plain language."
              iconVariant="navy"
            />
            <FeatureCard
              icon={Target}
              title="Practical Advice"
              description="We focus on realistic legal solutions that match the client's goals and needs."
              iconVariant="navy"
            />
            <FeatureCard
              icon={ListChecks}
              title="Organized Process"
              description="We help keep documents, deadlines, and next steps clear and manageable."
              iconVariant="navy"
            />
            <FeatureCard
              icon={Layers}
              title="Multi-Practice Support"
              description="Clients can receive support across corporate, civil, property, and immigration matters."
              iconVariant="navy"
            />
            <FeatureCard
              icon={Users}
              title="Client-Focused Service"
              description="We take the time to understand each client's matter and priorities."
              iconVariant="navy"
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Professional Support"
              description="Our team assists individuals, families, businesses, property clients, and newcomers."
              iconVariant="navy"
            />
          </div>
        </Container>
      </Section>

      {/* SECTION 7 - CTA BANNER */}
      <CTASection
        title="Ready to Speak With Our Team?"
        description="Contact Swanson KC Legal Solutions to discuss your corporate, civil, property, or immigration matter. Our team can help you understand your options and determine the next step."
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

      {/* SECTION 8 - FAQ */}
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
                  question: "How do I know which team member to contact?",
                  answer:
                    "You do not need to know the exact person before contacting the firm. You can describe your matter, and our team can help direct your inquiry to the appropriate person or practice area.",
                },
                {
                  question: "Can I choose a specific lawyer or team member?",
                  answer:
                    "You may request a specific team member, and the firm will confirm availability and whether that person is the right fit for your matter.",
                },
                {
                  question:
                    "Does the firm handle both personal and business legal matters?",
                  answer:
                    "Yes. Swanson KC Legal Solutions assists individuals, families, businesses, property clients, and newcomers across corporate law, civil law, property law, and immigration law.",
                },
                {
                  question:
                    "Will contacting a team member create a lawyer-client relationship?",
                  answer:
                    "No. Contacting the firm or a team member does not create a lawyer-client relationship. A formal relationship begins only after the firm confirms it can act for you and an engagement agreement is completed.",
                },
                {
                  question:
                    "Can team member photos and full profiles be added later?",
                  answer:
                    "Yes. The website can launch with name, title, practice focus, quote, and short bio. Professional photos and full profile pages can be added later when available.",
                },
                {
                  question:
                    "What should visitors do if they are unsure about the right practice area?",
                  answer:
                    'Visitors can choose "Not Sure" in the contact form and briefly describe their matter. The firm can then route the inquiry internally to the appropriate practice area or team member.',
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* SECTION 9 - FINAL CONTACT */}
      <ContactSection
        heading="Contact Swanson KC Legal Solutions"
        description="Want to speak with a member of our legal team? Contact our office to discuss your legal matter and we will help direct your inquiry to the right person."
      />
    </>
  );
}
