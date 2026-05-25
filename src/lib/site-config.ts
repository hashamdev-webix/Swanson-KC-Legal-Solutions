import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Swanson KC Legal Solutions",
  shortName: "Swanson KC",
  description:
    "Swanson KC Legal Solutions is a Canadian law firm providing legal services in corporate law, civil law, property law, and immigration law. We assist individuals, families, businesses, property owners, and newcomers with practical legal guidance and professional representation.",
  contact: {
    phone: "(000) 000-0000",
    email: "info@swansonkclegal.ca",
    address: "123 Placeholder Street",
    city: "Toronto",
    province: "Ontario",
    country: "Canada",
    hours: "Monday to Friday, 9:00 AM - 5:00 PM",
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
    },
    {
      title: "Civil Law",
      slug: "civil-law",
      href: "/areas-of-practice/civil-law",
      description:
        "Expert representation in civil disputes, litigation, and conflict resolution.",
    },
    {
      title: "Property Law",
      slug: "property-law",
      href: "/areas-of-practice/property-law",
      description:
        "Guidance on real estate transactions, property disputes, and land use matters.",
    },
    {
      title: "Immigration Law",
      slug: "immigration-law",
      href: "/areas-of-practice/immigration-law",
      description:
        "Professional assistance with visas, work permits, permanent residence, and citizenship applications.",
    },
  ],
};
