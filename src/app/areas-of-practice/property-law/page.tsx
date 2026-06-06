import type { Metadata } from "next";
import { PracticeAreaPage } from "@/components/sections/PracticeAreaPage";
import { practiceAreaContent } from "@/lib/practice-area-data";

const content = practiceAreaContent["property-law"];

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: [
    "property law",
    "real estate law",
    "commercial leasing",
    "residential leasing",
    "mortgage refinancing",
    "title transfers",
    "property disputes",
    "Canadian property lawyer",
  ],
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: "website",
  },
};

export default function PropertyLawPage() {
  return <PracticeAreaPage content={content} />;
}
