export type PracticeAreaTag =
  | "Corporate Law"
  | "Civil Law"
  | "Property Law"
  | "Immigration Law";

export interface TeamMember {
  name: string;
  title: string;
  practiceFocus: string;
  quote: string;
  bio: string;
  practiceAreaTags: PracticeAreaTag[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ayesha Malik",
    title: "Managing Lawyer",
    practiceFocus: "Corporate Law, Business Advisory, Client Strategy",
    quote:
      "Clients deserve legal advice that is clear, practical, and focused on their goals.",
    bio: "Ayesha works with clients across business, civil, property, and immigration matters. She focuses on practical legal strategy, strong communication, and client-focused service.",
    practiceAreaTags: ["Corporate Law"],
  },
  {
    name: "Daniel Thompson",
    title: "Corporate Law Counsel",
    practiceFocus: "Business Contracts, Incorporation, Corporate Records",
    quote:
      "Strong business documents help create stronger business relationships.",
    bio: "Daniel assists business clients with corporate setup, commercial contracts, shareholder matters, and ongoing corporate record support.",
    practiceAreaTags: ["Corporate Law"],
  },
  {
    name: "Priya Singh",
    title: "Civil Litigation Lawyer",
    practiceFocus: "Civil Disputes, Demand Letters, Settlement Negotiations",
    quote:
      "A well-prepared dispute strategy starts with understanding the facts clearly.",
    bio: "Priya assists individuals and businesses with civil claims, contract disputes, debt recovery, demand letters, and settlement discussions.",
    practiceAreaTags: ["Civil Law"],
  },
  {
    name: "Michael Chen",
    title: "Property Law Lawyer",
    practiceFocus: "Real Estate, Leasing, Title Transfers, Property Disputes",
    quote:
      "Property matters require careful review, reliable documents, and clear communication.",
    bio: "Michael supports clients with purchase and sale transactions, commercial and residential leasing, refinancing, and title-related matters.",
    practiceAreaTags: ["Property Law"],
  },
  {
    name: "Sarah Ahmed",
    title: "Immigration Law Lawyer",
    practiceFocus:
      "Permanent Residence, Work Permits, Study Permits, Sponsorship",
    quote:
      "Immigration matters deserve careful preparation, honest guidance, and organized support.",
    bio: "Sarah assists clients with Canadian immigration matters, including permanent residence, temporary residence, family sponsorship, citizenship, and refusal concerns.",
    practiceAreaTags: ["Immigration Law"],
  },
];
