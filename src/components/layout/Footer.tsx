import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { getContactAddressLines, siteConfig } from "@/lib/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-800 text-white">
      <div className="container-custom py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Firm Intro */}
          <div className="space-y-4">
            <Logo variant="light" size="footer" />
            <p className="text-navy-200 text-sm leading-relaxed">
              A Canadian law firm providing practical legal services in
              corporate law, civil matters, property law, and immigration.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-navy-200 hover:text-gold-500 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Areas of Practice */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">
              Areas of Practice
            </h3>
            <ul className="space-y-2">
              {siteConfig.practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={area.href}
                    className="text-navy-200 hover:text-gold-500 transition-colors text-sm"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading text-lg text-white mb-4">Contact</h3>
            <ul className="space-y-3 mb-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                  className="text-navy-200 hover:text-gold-500 transition-colors text-sm"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-navy-200 hover:text-gold-500 transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="text-navy-200 text-sm">
                {getContactAddressLines().map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </li>
            </ul>
            <Button href="/contact-us" variant="primary" size="sm">
              Book a Consultation
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-700 my-8" />

        {/* Disclaimer */}
        <div className="space-y-4">
          <p className="text-navy-300 text-xs leading-relaxed max-w-4xl">
            The information on this website is for general information only and
            does not constitute legal advice. Viewing this website or contacting
            the firm through this website does not create a lawyer-client
            relationship.
          </p>

          {/* Copyright */}
          <p className="text-navy-400 text-xs">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
