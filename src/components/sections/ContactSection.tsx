import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  getContactAddressLines,
  getGoogleMapsUrl,
  siteConfig,
} from "@/lib/site-config";
import { ContactForm } from "./ContactForm";

interface ContactSectionProps {
  heading?: string;
  description?: string;
}

export function ContactSection({
  heading = "Contact Swanson KC Legal Solutions",
  description = "Have a legal question or need assistance with a corporate, civil, property, or immigration matter? Contact our office to schedule a confidential consultation.",
}: ContactSectionProps) {
  return (
    <Section background="navy">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <SectionHeading
              eyebrow="GET IN TOUCH"
              title={heading}
              description={description}
              light
            />

            {/* Contact Details */}
            <div className="space-y-6">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-start gap-4 text-white hover:text-gold-400 transition-colors group"
              >
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-navy-100 group-hover:text-gold-400">
                    {siteConfig.contact.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-start gap-4 text-white hover:text-gold-400 transition-colors group"
              >
                <Mail className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-navy-100 group-hover:text-gold-400">
                    {siteConfig.contact.email}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 text-white">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Office</div>
                  <div className="text-navy-100">
                    {getContactAddressLines().map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 text-white">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div className="text-navy-100">
                    {siteConfig.contact.hours}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                href={`tel:${siteConfig.contact.phone}`}
                variant="primary"
              >
                Call Now
              </Button>
              <Button
                href={getGoogleMapsUrl()}
                variant="outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
