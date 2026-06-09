export interface NavItem {
  label: string;
  href: string;
}

export interface PracticeArea {
  title: string;
  slug: string;
  href: string;
  description: string;
  tagline: string;
  menuLinks: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
  hours: string;
}

export interface SocialLinks {
  linkedin?: string;
  facebook?: string;
  twitter?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  siteUrl: string;
  contact: ContactInfo;
  social: SocialLinks;
  nav: NavItem[];
  practiceAreas: PracticeArea[];
}
