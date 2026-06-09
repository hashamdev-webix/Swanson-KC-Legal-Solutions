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
import { CTASection } from "@/components/sections/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ContactPageForm } from "@/components/sections/ContactPageForm";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Lock,
  MessageSquare,
  Layers,
  Target,
} from "lucide-react";
import {
  getContactAddressLines,
  getGoogleMapsEmbedUrl,
  getGoogleMapsUrl,
  siteConfig,
} from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us | Book a Consultation",
  description:
    "Contact Swanson KC Legal Solutions to discuss your corporate, civil, property, or immigration legal matter. Schedule a confidential consultation with our team in Canada.",
  keywords: [
    "contact law firm",
    "book consultation",
    "legal consultation Canada",
    "contact lawyer",
    "Swanson KC contact",
    "law firm consultation",
    "legal services contact",
  ],
  openGraph: {
    title: "Contact Us | Book a Consultation",
    description:
      "Contact Swanson KC Legal Solutions to discuss your corporate, civil, property, or immigration legal matter. Schedule a confidential consultation with our team in Canada.",
    type: "website",
  },
};

export default function ContactUsPage() {
  const mapsUrl = getGoogleMapsUrl();
  const addressLines = getContactAddressLines();

  return (
    <>
      {/* SECTION 1 - HERO */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
            alt="Modern law office reception area"
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
              items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
              className="[&_a]:text-white [&_a:hover]:text-gold-400 [&_span]:text-gold-400"
            />
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
              Contact Swanson KC Legal Solutions
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-navy-100 max-w-3xl">
              Have a legal question or need help with a corporate, civil,
              property, or immigration matter? Our team is here to help. Contact
              our office to schedule a confidential consultation and discuss
              your legal needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={`tel:${siteConfig.contact.phone}`}
                variant="primary"
                size="lg"
              >
                Call Now
              </Button>
              <Button href="#contact-form" variant="outline-light" size="lg">
                Send a Message
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 - CONTACT METHODS */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Get in Touch"
            description="Reach out through whichever method is most convenient for you."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Call Us */}
            <Card variant="elevated" className="text-center space-y-4">
              <div className="flex justify-center">
                <IconBadge icon={Phone} size="lg" variant="gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy-800">
                Call Us
              </h3>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="block text-lg font-medium text-gold-600 hover:text-gold-700 transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
              <p className="text-sm text-navy-600">
                Speak with our team directly.
              </p>
            </Card>

            {/* Email Us */}
            <Card variant="elevated" className="text-center space-y-4">
              <div className="flex justify-center">
                <IconBadge icon={Mail} size="lg" variant="gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy-800">
                Email Us
              </h3>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block text-lg font-medium text-gold-600 hover:text-gold-700 transition-colors break-all"
              >
                {siteConfig.contact.email}
              </a>
              <p className="text-sm text-navy-600">
                Send us details about your matter.
              </p>
            </Card>

            {/* Visit Us */}
            <Card variant="elevated" className="text-center space-y-4">
              <div className="flex justify-center">
                <IconBadge icon={MapPin} size="lg" variant="gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy-800">
                Visit Us
              </h3>
              <div className="text-navy-700 font-medium space-y-0.5">
                {addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
              <p className="text-sm text-navy-600">
                Meet with us at our office.
              </p>
            </Card>

            {/* Office Hours */}
            <Card variant="elevated" className="text-center space-y-4">
              <div className="flex justify-center">
                <IconBadge icon={Clock} size="lg" variant="gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-navy-800">
                Office Hours
              </h3>
              <p className="text-navy-700 font-medium">
                {siteConfig.contact.hours}
              </p>
              <p className="text-sm text-navy-600">
                We&apos;re available during business hours.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 - MAIN CONTACT FORM + INFO */}
      <Section background="cream" id="contact-form">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* LEFT - Main Form (60%) */}
            <div className="lg:col-span-3">
              <Card variant="elevated" className="bg-white">
                <ContactPageForm />
              </Card>
            </div>

            {/* RIGHT - Info Column (40%) */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy-800">
                  Speak With Our Team
                </h2>
                <p className="text-navy-600 leading-relaxed">
                  Whether you are starting a business, dealing with a dispute,
                  handling a property matter, or navigating a Canadian
                  immigration application, our team is ready to help you
                  understand your options and next steps.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-start gap-3 text-navy-700 hover:text-gold-600 transition-colors group"
                >
                  <Phone className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-navy-600 group-hover:text-gold-600">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3 text-navy-700 hover:text-gold-600 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-navy-600 group-hover:text-gold-600 break-all">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-navy-700">
                  <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Office</div>
                    <div className="text-navy-600">
                      {siteConfig.contact.address}
                      <br />
                      {siteConfig.contact.city}, {siteConfig.contact.province}
                      <br />
                      {siteConfig.contact.country}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-navy-700">
                  <Clock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold">Hours</div>
                    <div className="text-navy-600">
                      {siteConfig.contact.hours}
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-navy-800">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600">
                      A response from our team
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600">
                      A discussion of your legal matter
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600">
                      Clear information about possible next steps
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-600">
                      A confidential, professional consultation
                    </span>
                  </li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-4">
                <Button
                  href={`tel:${siteConfig.contact.phone}`}
                  variant="primary"
                  size="lg"
                  className="w-full"
                >
                  Call Now
                </Button>
                <Button
                  href={mapsUrl}
                  variant="outline"
                  size="lg"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 - OFFICE LOCATION / MAP */}
      <Section background="white">
        <Container>
          <SectionHeading
            title="Our Office"
            description="Visit us at our office to discuss your legal matter in person."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <iframe
                src={getGoogleMapsEmbedUrl()}
                width="100%"
                height="400"
                className="h-[400px] w-full rounded-lg border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Swanson KC Legal Solutions office location on Google Maps"
              />
            </div>

            {/* OFFICE DETAILS */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-semibold text-navy-800">
                  Swanson KC Legal Solutions
                </h3>
                <div className="space-y-3 text-navy-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-navy-700">Address</p>
                      <div className="space-y-0.5">
                        {addressLines.map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-navy-700">Phone</p>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-gold-600 hover:text-gold-700 transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-navy-700">Email</p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-gold-600 hover:text-gold-700 transition-colors break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-navy-700">Office Hours</p>
                      <p>{siteConfig.contact.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  href={mapsUrl}
                  variant="secondary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 5 - WHY CONTACT US / REASSURANCE */}
      <Section background="navy-soft">
        <Container>
          <SectionHeading
            title="Why Reach Out to Swanson KC Legal Solutions"
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Lock}
              title="Confidential Consultations"
              description="We handle inquiries with discretion and professionalism."
              iconVariant="navy"
            />
            <FeatureCard
              icon={MessageSquare}
              title="Clear Communication"
              description="We explain your options and next steps in plain language."
              iconVariant="navy"
            />
            <FeatureCard
              icon={Layers}
              title="Multiple Practice Areas"
              description="We assist with corporate, civil, property, and immigration matters."
              iconVariant="navy"
            />
            <FeatureCard
              icon={Target}
              title="Practical Guidance"
              description="We focus on realistic, practical legal support for your situation."
              iconVariant="navy"
            />
          </div>
        </Container>
      </Section>

      {/* SECTION 6 - FAQ */}
      <Section background="cream">
        <Container>
          <SectionHeading
            title="Contact & Consultation FAQs"
            align="center"
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto">
            <FAQAccordion
              items={[
                {
                  question: "How quickly will the firm respond to my inquiry?",
                  answer:
                    "We aim to respond to inquiries as promptly as possible during business hours. Response times may vary depending on the nature and volume of inquiries.",
                },
                {
                  question: "Is my consultation confidential?",
                  answer:
                    "We handle inquiries with discretion and professionalism. However, please do not share confidential or sensitive details through the website form until a formal engagement has been established.",
                },
                {
                  question:
                    "Does contacting the firm create a lawyer-client relationship?",
                  answer:
                    "No. Contacting the firm or submitting a form does not create a lawyer-client relationship. A formal relationship begins only after the firm confirms it can act for you and an engagement agreement is completed.",
                },
                {
                  question:
                    "What information should I prepare before contacting the firm?",
                  answer:
                    "It can help to have a brief description of your matter, relevant dates, the names of any parties involved, and any key documents available. You do not need everything ready to make initial contact.",
                },
                {
                  question:
                    "What if I am not sure which practice area my matter falls under?",
                  answer:
                    'You can select "Not Sure / Other" on the form and briefly describe your situation. Our team can help direct your inquiry to the appropriate practice area.',
                },
                {
                  question: "Is there a fee for the initial consultation?",
                  answer:
                    "Consultation arrangements can vary depending on the matter. You can ask about consultation details when you contact the firm.",
                },
              ]}
            />
          </div>
        </Container>
      </Section>

      {/* SECTION 7 - FINAL CTA BANNER */}
      <CTASection
        title="We're Here to Help With Your Legal Matter"
        description="Reach out to Swanson KC Legal Solutions today. Our team can help you understand your options and determine the right next step."
        primaryCta={{
          label: "Call Now",
          href: `tel:${siteConfig.contact.phone}`,
        }}
        secondaryCta={{
          label: "Send a Message",
          href: "#contact-form",
        }}
        background="navy"
      />
    </>
  );
}
