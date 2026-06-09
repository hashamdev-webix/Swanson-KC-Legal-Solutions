import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { InsightsExplorer } from "@/components/sections/InsightsExplorer";
import { NewsletterSignup } from "@/components/sections/NewsletterSignup";
import {
  Briefcase,
  Scale,
  Home,
  Globe,
  BookOpen,
  ListChecks,
  Megaphone,
  HelpCircle,
  GraduationCap,
  Newspaper,
  Info,
  ArrowRight,
} from "lucide-react";
import { featuredArticle, articles } from "@/lib/insights-data";

export const metadata: Metadata = {
  title: "Legal Insights & Updates",
  description:
    "Practical legal articles, guides, and updates on corporate, civil, property, and immigration law in Canada from Swanson KC Legal Solutions.",
  keywords: [
    "legal insights",
    "legal blog",
    "Canadian law articles",
    "corporate law articles",
    "civil law guides",
    "property law resources",
    "immigration law updates",
    "legal resources Canada",
  ],
  openGraph: {
    title: "Legal Insights & Updates",
    description:
      "Practical legal articles, guides, and updates on corporate, civil, property, and immigration law in Canada from Swanson KC Legal Solutions.",
    type: "website",
  },
};

export default function InsightsPage() {
  return (
    <>
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop"
            alt="Laptop with legal documents and coffee on desk"
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
              items={[{ label: "Home", href: "/" }, { label: "Insights" }]}
              className="[&_a]:text-white [&_a:hover]:text-gold-400 [&_span]:text-gold-400"
            />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
              Legal Insights & Updates
            </h1>
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-heading text-gold-400">
                Practical legal articles, updates, and guides on corporate law,
                civil law, property law, and immigration law in Canada.
              </p>
              <p className="text-xl leading-relaxed text-navy-100 max-w-3xl">
                At Swanson KC Legal Solutions, we believe clients should have
                access to clear and useful legal information. Our Insights
                section shares practical articles and updates to help
                individuals, families, businesses, property clients, and
                newcomers better understand common legal issues and next steps.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#latest-articles" variant="primary" size="lg">
                Explore Articles
              </Button>
              <Button href="/contact-us" variant="outline-light" size="lg">
                Contact the Firm
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
              Practical Legal Information for Real-Life Decisions
            </h2>
            <div className="space-y-4 text-lg text-navy-600 leading-relaxed">
              <p>
                Legal questions often arise before a client is ready to contact
                a law firm. A business owner may need to understand contract
                risks, a property buyer may want to know what happens before
                closing, a person involved in a dispute may need to understand
                demand letters, or a newcomer may be researching Canadian
                immigration options.
              </p>
              <p>
                Our legal insights are written to help readers understand common
                legal topics in clear language. These articles are for general
                information only and are not a substitute for legal advice based
                on your specific circumstances.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 - FEATURED ARTICLE */}
      <Section background="cream">
        <Container>
          <SectionHeading
            eyebrow="FEATURED"
            title="Featured Insight"
            align="center"
            className="mb-12"
          />

          <Card variant="elevated" className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image */}
              <div className="relative h-[300px] lg:h-full min-h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional consultation meeting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-6 py-4 lg:py-8">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-semibold uppercase tracking-wider text-gold-600">
                    {featuredArticle.category}
                  </span>
                  <span className="text-navy-500">
                    {featuredArticle.date} · {featuredArticle.readTime}
                  </span>
                </div>

                <h3 className="font-heading text-3xl md:text-4xl font-bold text-navy-800 leading-tight">
                  {featuredArticle.title}
                </h3>

                <p className="text-lg text-navy-600 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="text-sm text-navy-600">
                  <span className="font-medium">Related Practice Areas:</span>{" "}
                  Corporate Law · Civil Law · Property Law · Immigration Law
                </div>

                {/* NOTE: This currently points to "#" - will link to the actual featured article page when CMS/routes are added */}
                <div className="inline-block">
                  <span className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md bg-navy-700 text-white cursor-not-allowed opacity-60">
                    Read Featured Article
                  </span>
                  <p className="text-sm text-navy-500 mt-2">
                    Full article coming soon
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </Container>
      </Section>

      {/* SECTION 4 - LATEST ARTICLES (with search + filter) */}
      <Section background="white" id="latest-articles">
        <Container>
          <SectionHeading
            title="Latest Legal Articles"
            description="Explore practical legal articles and resources from our team."
            align="center"
            className="mb-12"
          />

          <InsightsExplorer articles={articles} />

          {/* Load More Button - Presentational only */}
          <div className="mt-12 text-center">
            {/* NOTE: This is presentational only - pagination/load-more will be wired up when a CMS/backend is added */}
            <button
              disabled
              className="px-8 py-4 rounded-md font-medium text-navy-400 bg-navy-50 cursor-not-allowed opacity-60"
              aria-disabled="true"
            >
              Load More Articles
            </button>
            <p className="text-sm text-navy-500 mt-3">
              More articles coming soon
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 - BROWSE BY PRACTICE AREA */}
      <Section background="navy-soft">
        <Container>
          <SectionHeading
            title="Browse Insights by Practice Area"
            description="Find articles related to the legal topic that matters to you."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="elevated" hover className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-navy-800">
                  Corporate Law
                </h3>
              </div>
              <p className="text-navy-600 leading-relaxed">
                Articles about business formation, contracts, shareholder
                agreements, corporate records, and business transactions.
              </p>
              {/* NOTE: These links currently point to "#" - will link to category archive pages when implemented */}
              <span className="inline-flex items-center gap-2 text-gold-600 font-medium cursor-not-allowed opacity-60">
                View Corporate Law Articles
                <ArrowRight className="w-4 h-4" />
              </span>
            </Card>

            <Card variant="elevated" hover className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center">
                  <Scale className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-navy-800">
                  Civil Law
                </h3>
              </div>
              <p className="text-navy-600 leading-relaxed">
                Articles about disputes, demand letters, debt recovery,
                settlement negotiations, and court-related matters.
              </p>
              {/* NOTE: These links currently point to "#" - will link to category archive pages when implemented */}
              <span className="inline-flex items-center gap-2 text-gold-600 font-medium cursor-not-allowed opacity-60">
                View Civil Law Articles
                <ArrowRight className="w-4 h-4" />
              </span>
            </Card>

            <Card variant="elevated" hover className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center">
                  <Home className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-navy-800">
                  Property Law
                </h3>
              </div>
              <p className="text-navy-600 leading-relaxed">
                Articles about real estate, closings, leases, title transfers,
                refinancing, and property disputes.
              </p>
              {/* NOTE: These links currently point to "#" - will link to category archive pages when implemented */}
              <span className="inline-flex items-center gap-2 text-gold-600 font-medium cursor-not-allowed opacity-60">
                View Property Law Articles
                <ArrowRight className="w-4 h-4" />
              </span>
            </Card>

            <Card variant="elevated" hover className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-navy-100 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-navy-600" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-navy-800">
                  Immigration Law
                </h3>
              </div>
              <p className="text-navy-600 leading-relaxed">
                Articles about permanent residence, Express Entry, work permits,
                study permits, visitor visas, family sponsorship, citizenship
                applications, and immigration refusals.
              </p>
              {/* NOTE: These links currently point to "#" - will link to category archive pages when implemented */}
              <span className="inline-flex items-center gap-2 text-gold-600 font-medium cursor-not-allowed opacity-60">
                View Immigration Law Articles
                <ArrowRight className="w-4 h-4" />
              </span>
            </Card>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 - TYPES OF INSIGHTS */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Types of Insights You Will Find Here"
            description="Our resources are designed to help readers understand legal topics in a practical way."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={BookOpen}
              title="Legal Guides"
              description="Clear explanations of common legal topics and client questions."
              iconVariant="gold"
            />
            <FeatureCard
              icon={ListChecks}
              title="Practical Checklists"
              description="Simple preparation lists for consultations, document organization, and next steps."
              iconVariant="gold"
            />
            <FeatureCard
              icon={Megaphone}
              title="Law Firm Updates"
              description="Updates from the firm, including announcements, resources, and service updates."
              iconVariant="gold"
            />
            <FeatureCard
              icon={HelpCircle}
              title="FAQ Articles"
              description="Answers to common questions about legal processes, documents, and consultation preparation."
              iconVariant="gold"
            />
            <FeatureCard
              icon={GraduationCap}
              title="Client Education"
              description="Helpful information for individuals, families, businesses, property clients, and newcomers."
              iconVariant="gold"
            />
            <FeatureCard
              icon={Newspaper}
              title="Practice Area News"
              description="General updates about business, civil, property, and immigration-related topics."
              iconVariant="gold"
            />
          </div>
        </Container>
      </Section>

      {/* SECTION 7 - NEWSLETTER / UPDATES CTA */}
      <Section background="navy">
        <Container>
          <NewsletterSignup />
        </Container>
      </Section>

      {/* SECTION 8 - DISCLAIMER / INFORMATION NOTICE */}
      <Section background="cream">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card variant="bordered" className="bg-navy-50 border-navy-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center">
                    <Info className="w-5 h-5 text-navy-600" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-navy-800">
                    Important Information
                  </h3>
                  <p className="text-navy-600 leading-relaxed">
                    The articles and resources on this website are provided for
                    general information only. They are not legal advice and
                    should not be relied on as advice for your specific
                    situation. Legal requirements may change, and outcomes
                    depend on the facts of each matter. If you need advice about
                    your own legal matter, contact Swanson KC Legal Solutions to
                    discuss whether the firm can assist you.
                  </p>
                  <Button href="/contact-us" variant="secondary">
                    Contact the Firm
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* SECTION 9 - CTA BANNER */}
      <CTASection
        title="Have a Legal Question After Reading?"
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

      {/* SECTION 10 - FAQ */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Insights FAQs"
            align="center"
            className="mb-12"
          />
          <div className="max-w-4xl mx-auto">
            <FAQAccordion
              items={[
                {
                  question: "Are the articles on this page legal advice?",
                  answer:
                    "No. The articles and resources on this page are for general information only. They do not replace legal advice based on your specific facts and do not create a lawyer-client relationship.",
                },
                {
                  question: "How often will new insights be added?",
                  answer:
                    "New articles and legal resources can be added regularly as the firm publishes updates, guides, and information related to corporate law, civil law, property law, and immigration law.",
                },
                {
                  question:
                    "Can I request an article on a specific legal topic?",
                  answer:
                    "You may contact the firm with topic suggestions or questions. The firm may use general questions to develop future educational resources, but specific legal advice requires a consultation and formal engagement.",
                },
                {
                  question:
                    "Can I rely on old articles if the law has changed?",
                  answer:
                    "Legal requirements, procedures, forms, and timelines can change. Articles should be treated as general information only. Contact the firm for current advice about your specific matter.",
                },
                {
                  question: "What topics does the Insights page cover?",
                  answer:
                    "The Insights page covers general topics related to corporate law, civil law, property law, immigration law, consultation preparation, legal documents, and common client questions.",
                },
                {
                  question:
                    "Does contacting the firm after reading an article create a lawyer-client relationship?",
                  answer:
                    "No. Contacting the firm or submitting a website form does not create a lawyer-client relationship. A formal relationship begins only after the firm confirms it can act for you and an engagement agreement is completed.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* SECTION 11 - FINAL CONTACT */}
      <ContactSection
        heading="Contact Swanson KC Legal Solutions"
        description="Have a legal question after reading one of our articles? Contact our office to discuss your corporate, civil, property, or immigration matter."
      />
    </>
  );
}
