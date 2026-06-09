import type { SiteConfig } from "@/types";

// ============================================================================
// UPDATE THESE WHEN REAL DETAILS ARE AVAILABLE
// ============================================================================
// This is the single source of truth for all contact information across the site.
// Before going live, update:
// - siteUrl: Your actual production domain
// - contact.phone: The firm's real phone number
// - contact.email: The firm's real email address (now real)
// - contact.address: The firm's real street address (now real)
// - contact.city: The firm's real city (now real)
// - contact.province: The firm's real province (now real)
// - contact.postalCode: The firm's real postal code (now real)
// - contact.country: The firm's real country (now real)
// - contact.hours: The firm's real business hours
// - social.linkedin: The firm's LinkedIn URL (or remove if not used)
// - social.facebook: The firm's Facebook URL (or remove if not used)
// - social.twitter: The firm's Twitter/X URL (or remove if not used)
// ============================================================================

export const siteConfig: SiteConfig = {
  name: "Swanson KC Legal Solutions",
  shortName: "Swanson KC",
  description:
    "Swanson KC Legal Solutions is a Canadian law firm providing legal services in corporate law, civil law, property law, and immigration law. We assist individuals, families, businesses, property owners, and newcomers with practical legal guidance and professional representation.",

  // Production site URL - update before deployment
  siteUrl: "https://www.swansonkclegal.ca",

  // Contact information - update all fields below with real details
  contact: {
    phone: "(000) 000-0000",
    email: "Admin@swansonkclegalsolutions.com",
    address: "#304 3016 - 5th Ave NE",
    city: "Calgary",
    province: "Alberta",
    postalCode: "T2A 6K4",
    country: "Canada",
    hours: "Monday to Friday, 9:00 AM - 5:00 PM",
  },

  // Social media links - update with real URLs or remove unused platforms
  social: {
    linkedin: "#", // Update with: https://www.linkedin.com/company/your-firm
    facebook: "#", // Update with: https://www.facebook.com/your-firm
    twitter: "#", // Update with: https://twitter.com/your-firm
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Areas of Practice", href: "/areas-of-practice" },
    { label: "Our Team", href: "/our-team" },
    { label: "About Us", href: "/about-us" },
    { label: "Insights", href: "/insights" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  practiceAreas: [
    {
      title: "Corporate Law",
      slug: "corporate-law",
      href: "/areas-of-practice/corporate-law",
      description:
        "Comprehensive legal services for businesses, from incorporation to contracts and compliance.",
      tagline: "Business and commercial legal support.",
      menuLinks: [
        "Incorporation",
        "Business Contracts",
        "Shareholder Agreements",
        "Partnership Agreements",
        "Corporate Records",
        "Buying or Selling a Business",
        "Commercial Legal Advice",
      ],
    },
    {
      title: "Civil Law",
      slug: "civil-law",
      href: "/areas-of-practice/civil-law",
      description:
        "Expert representation in civil disputes, litigation, and conflict resolution.",
      tagline: "Support for disputes, claims, and resolution.",
      menuLinks: [
        "Civil Litigation",
        "Contract Disputes",
        "Debt Recovery",
        "Demand Letters",
        "Settlement Negotiations",
        "Small Claims Matters",
        "Court Representation",
      ],
    },
    {
      title: "Property Law",
      slug: "property-law",
      href: "/areas-of-practice/property-law",
      description:
        "Guidance on real estate transactions, property disputes, and land use matters.",
      tagline: "Legal help for real estate and property matters.",
      menuLinks: [
        "Real Estate Law",
        "Purchase & Sale Transactions",
        "Commercial Leasing",
        "Residential Leasing",
        "Mortgage & Refinancing",
        "Title Transfers",
        "Property Disputes",
      ],
    },
    {
      title: "Immigration Law",
      slug: "immigration-law",
      href: "/areas-of-practice/immigration-law",
      description:
        "Professional assistance with visas, work permits, permanent residence, and citizenship applications.",
      tagline: "Guidance for Canadian immigration applications.",
      menuLinks: [
        "Permanent Residence",
        "Express Entry",
        "Work Permits",
        "Study Permits",
        "Visitor Visas",
        "Family Sponsorship",
        "Citizenship Applications",
      ],
    },
  ],
};

// Helper to format phone number for tel: links (strips non-digits and adds +1 for Canada/US)
export function getPhoneHref(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  return `tel:+1${cleaned}`;
}

export function getContactAddressLines(): string[] {
  const { address, city, province, postalCode, country } = siteConfig.contact;

  return [address, `${city}, ${province} ${postalCode}`, country];
}

export function getGoogleMapsUrl(): string {
  const { address, city, province, postalCode, country } = siteConfig.contact;
  const query = encodeURIComponent(
    `${address}, ${city}, ${province} ${postalCode}, ${country}`,
  );
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function getGoogleMapsEmbedUrl(): string {
  const { address, city, province, postalCode, country } = siteConfig.contact;
  const query = encodeURIComponent(
    `${address}, ${city}, ${province} ${postalCode}, ${country}`,
  );
  return `https://www.google.com/maps?q=${query}&output=embed`;
}
