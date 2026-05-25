export interface NavItem {
  label: string;
  href: string;
}

export interface PracticeArea {
  title: string;
  slug: string;
  href: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  city: string;
  province: string;
  country: string;
  hours: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  description: string;
  contact: ContactInfo;
  nav: NavItem[];
  practiceAreas: PracticeArea[];
}
