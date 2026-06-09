import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Large 404 */}
        <h1 className="font-heading text-9xl md:text-[12rem] text-navy-800 leading-none">
          404
        </h1>

        {/* Heading and Message */}
        <div className="space-y-4">
          <h2 className="font-heading text-3xl md:text-4xl text-navy-800">
            Page Not Found
          </h2>
          <p className="text-navy-600 text-lg">
            Sorry, the page you are looking for doesn&apos;t exist or may have
            been moved.
          </p>
        </div>

        {/* Primary Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Button href="/contact-us" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>

        {/* Quick Links */}
        <div className="pt-8 border-t border-navy-200">
          <h3 className="font-heading text-lg text-navy-800 mb-4">
            Quick Links
          </h3>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link
              href="/areas-of-practice"
              className="text-navy-600 hover:text-gold-600 transition-colors text-sm"
            >
              Areas of Practice
            </Link>
            <Link
              href="/our-team"
              className="text-navy-600 hover:text-gold-600 transition-colors text-sm"
            >
              Our Team
            </Link>
            <Link
              href="/about-us"
              className="text-navy-600 hover:text-gold-600 transition-colors text-sm"
            >
              About Us
            </Link>
            <Link
              href="/insights"
              className="text-navy-600 hover:text-gold-600 transition-colors text-sm"
            >
              Insights
            </Link>
            <Link
              href="/contact-us"
              className="text-navy-600 hover:text-gold-600 transition-colors text-sm"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
