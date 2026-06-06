export type ArticleCategory =
  | "Corporate Law"
  | "Civil Law"
  | "Property Law"
  | "Immigration Law"
  | "Legal Guide";

export interface Article {
  id: string;
  title: string;
  category: ArticleCategory;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

export const featuredArticle: Article = {
  id: "what-to-know-before-contacting-a-law-firm",
  title: "What to Know Before Contacting a Canadian Law Firm",
  category: "Legal Guide",
  excerpt:
    "Before speaking with a lawyer, it can help to organize your documents, write down key dates, identify the people involved, and prepare questions about your legal matter. This guide explains how clients can prepare for an initial legal consultation.",
  readTime: "5 min",
  date: "May 15, 2026",
  featured: true,
};

export const articles: Article[] = [
  {
    id: "what-to-know-before-incorporating-a-business-in-canada",
    title: "What to Know Before Incorporating a Business in Canada",
    category: "Corporate Law",
    excerpt:
      "Business owners should understand structure, ownership, records, and contracts before moving forward.",
    readTime: "4 min",
    date: "May 12, 2026",
  },
  {
    id: "what-happens-after-you-receive-a-demand-letter",
    title: "What Happens After You Receive a Demand Letter",
    category: "Civil Law",
    excerpt:
      "A demand letter can be an important step in a civil dispute. Learn what to review and how to think about your next steps.",
    readTime: "5 min",
    date: "May 10, 2026",
  },
  {
    id: "common-issues-in-property-transactions",
    title: "Common Issues in Property Transactions",
    category: "Property Law",
    excerpt:
      "Buying, selling, leasing, or refinancing property can involve key legal documents, deadlines, and title-related issues.",
    readTime: "4 min",
    date: "May 8, 2026",
  },
  {
    id: "understanding-canadian-immigration-application-requirements",
    title: "Understanding Canadian Immigration Application Requirements",
    category: "Immigration Law",
    excerpt:
      "Immigration applications often require careful documents, forms, timelines, and eligibility review.",
    readTime: "6 min",
    date: "May 5, 2026",
  },
  {
    id: "why-business-contracts-matter",
    title: "Why Business Contracts Matter",
    category: "Corporate Law",
    excerpt:
      "Strong business contracts can help clarify obligations, payment terms, responsibilities, and dispute procedures.",
    readTime: "4 min",
    date: "May 3, 2026",
  },
  {
    id: "settlement-options-in-civil-disputes",
    title: "Settlement Options in Civil Disputes",
    category: "Civil Law",
    excerpt:
      "Not every dispute needs to go to court. Learn how settlement discussions may help resolve civil matters.",
    readTime: "5 min",
    date: "May 1, 2026",
  },
  {
    id: "what-to-review-before-signing-a-commercial-lease",
    title: "What to Review Before Signing a Commercial Lease",
    category: "Property Law",
    excerpt:
      "Commercial leases can include important terms about rent, renewal, repairs, use, and default.",
    readTime: "4 min",
    date: "April 28, 2026",
  },
  {
    id: "preparing-documents-for-a-canadian-immigration-application",
    title: "Preparing Documents for a Canadian Immigration Application",
    category: "Immigration Law",
    excerpt:
      "Organized immigration documents can help clients better understand the application process and next steps.",
    readTime: "6 min",
    date: "April 25, 2026",
  },
  {
    id: "how-to-prepare-for-an-initial-consultation",
    title: "How to Prepare for an Initial Consultation",
    category: "Legal Guide",
    excerpt:
      "Preparing key documents, timelines, and questions can help make your first consultation more productive.",
    readTime: "3 min",
    date: "April 22, 2026",
  },
];
