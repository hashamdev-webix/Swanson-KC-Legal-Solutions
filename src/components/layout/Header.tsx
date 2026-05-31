"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isPracticeAreasExpanded, setIsPracticeAreasExpanded] = useState(false);
  const pathname = usePathname();
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsPracticeAreasExpanded(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle mega menu open with delay
  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setIsMegaMenuOpen(true);
  };

  // Handle mega menu close with delay
  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 150);
  };

  // Handle keyboard navigation
  const handleMegaMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsMegaMenuOpen(false);
    }
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-white border-b border-navy-100 transition-shadow duration-200",
          isScrolled && "shadow-md",
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo variant="dark" />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Home */}
              <Link
                href="/"
                className={cn(
                  "text-navy-700 hover:text-gold-600 transition-colors font-medium relative group",
                  isActiveLink("/") && "text-gold-600",
                )}
              >
                Home
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all group-hover:w-full",
                    isActiveLink("/") && "w-full",
                  )}
                />
              </Link>

              {/* Areas of Practice with Mega Menu */}
              <div
                className="relative"
                onMouseEnter={handleMegaMenuEnter}
                onMouseLeave={handleMegaMenuLeave}
                onKeyDown={handleMegaMenuKeyDown}
              >
                <Link
                  href="/areas-of-practice"
                  className={cn(
                    "flex items-center gap-1 text-navy-700 hover:text-gold-600 transition-colors font-medium relative group",
                    isActiveLink("/areas-of-practice") && "text-gold-600",
                  )}
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                  onFocus={handleMegaMenuEnter}
                >
                  Areas of Practice
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isMegaMenuOpen && "rotate-180",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all group-hover:w-full",
                      isActiveLink("/areas-of-practice") && "w-full",
                    )}
                  />
                </Link>
              </div>

              {/* Other Nav Links */}
              {siteConfig.nav
                .filter(
                  (item) =>
                    item.href !== "/" &&
                    item.href !== "/areas-of-practice" &&
                    item.href !== "/contact-us",
                )
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-navy-700 hover:text-gold-600 transition-colors font-medium relative group",
                      isActiveLink(item.href) && "text-gold-600",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-600 transition-all group-hover:w-full",
                        isActiveLink(item.href) && "w-full",
                      )}
                    />
                  </Link>
                ))}
            </nav>

            {/* Contact Button (Desktop) */}
            <div className="hidden lg:block">
              <Button href="/contact-us" variant="primary" size="md">
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-navy-700 hover:text-gold-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        {isMegaMenuOpen && (
          <div
            ref={megaMenuRef}
            className="hidden lg:block absolute top-full left-0 w-full bg-white shadow-lg border-t border-navy-100 animate-fade-in"
            onMouseEnter={handleMegaMenuEnter}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className="container-custom py-8">
              {/* Mega Menu Header */}
              <div className="mb-6">
                <h3 className="font-heading text-2xl text-navy-800 mb-2">
                  Areas of Practice
                </h3>
                <p className="text-navy-600 text-sm max-w-3xl">
                  Practical legal services for individuals, families,
                  businesses, property clients, and newcomers across Canada.
                </p>
              </div>

              {/* Practice Areas Grid */}
              <div className="grid grid-cols-4 gap-8 mb-6">
                {siteConfig.practiceAreas.map((area) => (
                  <div key={area.slug} className="space-y-3">
                    <Link
                      href={area.href}
                      className="font-heading text-lg text-navy-800 hover:text-gold-600 transition-colors block"
                    >
                      {area.title}
                    </Link>
                    <p className="text-sm text-navy-600">{area.tagline}</p>
                    <ul className="space-y-2">
                      {area.menuLinks.map((link) => (
                        <li
                          key={link}
                          className="text-sm text-navy-700 flex items-start"
                        >
                          <span className="text-gold-600 mr-2">•</span>
                          {link}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={area.href}
                      className="inline-flex items-center gap-1 text-sm text-gold-600 hover:text-gold-700 font-medium transition-colors mt-2"
                    >
                      View {area.title}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>

              {/* CTA Strip */}
              <div className="bg-navy-50 -mx-8 px-8 py-4 flex items-center justify-between">
                <p className="text-navy-700">
                  Need help choosing the right legal service?
                </p>
                <Button href="/contact-us" variant="primary" size="sm">
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-900/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bottom-0 bg-white overflow-y-auto">
            <nav className="container-custom py-6 space-y-1">
              {/* Home */}
              <Link
                href="/"
                className={cn(
                  "block px-4 py-3 text-navy-700 hover:bg-navy-50 hover:text-gold-600 rounded-md transition-colors font-medium",
                  isActiveLink("/") && "bg-navy-50 text-gold-600",
                )}
              >
                Home
              </Link>

              {/* Areas of Practice Accordion */}
              <div>
                <div className="flex items-center">
                  <Link
                    href="/areas-of-practice"
                    className={cn(
                      "flex-1 px-4 py-3 text-navy-700 hover:bg-navy-50 hover:text-gold-600 rounded-l-md transition-colors font-medium",
                      isActiveLink("/areas-of-practice") &&
                        "bg-navy-50 text-gold-600",
                    )}
                  >
                    Areas of Practice
                  </Link>
                  <button
                    onClick={() =>
                      setIsPracticeAreasExpanded(!isPracticeAreasExpanded)
                    }
                    className={cn(
                      "px-4 py-3 text-navy-700 hover:bg-navy-50 hover:text-gold-600 rounded-r-md transition-colors",
                      isActiveLink("/areas-of-practice") &&
                        "bg-navy-50 text-gold-600",
                    )}
                    aria-expanded={isPracticeAreasExpanded}
                    aria-label="Toggle Areas of Practice submenu"
                  >
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 transition-transform",
                        isPracticeAreasExpanded && "rotate-180",
                      )}
                    />
                  </button>
                </div>
                {isPracticeAreasExpanded && (
                  <div className="mt-2 ml-4 space-y-1 border-l-2 border-gold-500 pl-4">
                    {siteConfig.practiceAreas.map((area) => (
                      <Link
                        key={area.slug}
                        href={area.href}
                        className="block py-2 text-navy-600 hover:text-gold-600 transition-colors"
                      >
                        <div className="font-medium">{area.title}</div>
                        <div className="text-sm text-navy-500">
                          {area.tagline}
                        </div>
                      </Link>
                    ))}
                    <Link
                      href="/areas-of-practice"
                      className="block py-2 text-gold-600 hover:text-gold-700 font-medium transition-colors"
                    >
                      View all Areas of Practice →
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Nav Links */}
              {siteConfig.nav
                .filter(
                  (item) =>
                    item.href !== "/" && item.href !== "/areas-of-practice",
                )
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 text-navy-700 hover:bg-navy-50 hover:text-gold-600 rounded-md transition-colors font-medium",
                      isActiveLink(item.href) && "bg-navy-50 text-gold-600",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}

              {/* Contact Button */}
              <div className="pt-4">
                <Button
                  href="/contact-us"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
