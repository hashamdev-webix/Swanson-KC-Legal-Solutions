import type { Metadata } from "next";
import { PracticeAreaPage } from "@/components/sections/PracticeAreaPage";
import { practiceAreaContent } from "@/lib/practice-area-data";

const content = practiceAreaContent["civil-law"];

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: [
    "civil law",
    "civil litigation",
    "contract disputes",
    "debt recovery",
    "demand letters",
    "settlement negotiations",
    "small claims",
    "Canadian civil lawyer",
  ],
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: "website",
  },
};

export default function CivilLawPage() {
  return <PracticeAreaPage content={content} />;
}
