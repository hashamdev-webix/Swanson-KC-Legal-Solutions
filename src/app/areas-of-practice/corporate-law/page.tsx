import type { Metadata } from "next";
import { PracticeAreaPage } from "@/components/sections/PracticeAreaPage";
import { practiceAreaContent } from "@/lib/practice-area-data";

const content = practiceAreaContent["corporate-law"];

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: [
    "corporate law",
    "business incorporation",
    "business contracts",
    "shareholder agreements",
    "partnership agreements",
    "corporate records",
    "business transactions",
    "Canadian corporate lawyer",
  ],
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: "website",
  },
};

export default function CorporateLawPage() {
  return <PracticeAreaPage content={content} />;
}
