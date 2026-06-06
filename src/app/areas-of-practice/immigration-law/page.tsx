import type { Metadata } from "next";
import { PracticeAreaPage } from "@/components/sections/PracticeAreaPage";
import { practiceAreaContent } from "@/lib/practice-area-data";

const content = practiceAreaContent["immigration-law"];

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: [
    "immigration law",
    "permanent residence",
    "Express Entry",
    "work permits",
    "study permits",
    "visitor visas",
    "family sponsorship",
    "citizenship applications",
    "Canadian immigration lawyer",
  ],
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: "website",
  },
};

export default function ImmigrationLawPage() {
  return <PracticeAreaPage content={content} />;
}
