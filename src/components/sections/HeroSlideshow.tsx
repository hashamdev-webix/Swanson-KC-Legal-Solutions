"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  heading: string;
  subheading: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  imageUrl: string;
  imageAlt: string;
  isH1?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    heading:
      "Trusted Canadian Legal Services for Individuals, Families & Businesses",
    subheading:
      "Swanson KC Legal Solutions provides practical, strategic, and client-focused legal support in corporate law, civil matters, property law, and immigration law.",
    primaryCta: { label: "Book a Consultation", href: "/contact-us" },
    secondaryCta: {
      label: "View Areas of Practice",
      href: "/areas-of-practice",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Professional business meeting in modern office",
    isH1: true,
  },
  {
    id: 2,
    heading: "Legal Support for Businesses, Entrepreneurs & Corporations",
    subheading:
      "From incorporation and contracts to corporate records and business transactions, we help businesses move forward with confidence.",
    primaryCta: { label: "Speak to a Corporate Lawyer", href: "/contact-us" },
    secondaryCta: {
      label: "Explore Corporate Law",
      href: "/areas-of-practice/corporate-law",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Business professionals in boardroom meeting",
  },
  {
    id: 3,
    heading: "Property Law Guidance for Buyers, Sellers & Investors",
    subheading:
      "We assist with real estate transactions, leasing, refinancing, title transfers, and property-related legal matters.",
    primaryCta: { label: "Get Property Legal Help", href: "/contact-us" },
    secondaryCta: {
      label: "View Property Services",
      href: "/areas-of-practice/property-law",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Modern residential property with keys",
  },
  {
    id: 4,
    heading: "Immigration Law Services for Your Canadian Journey",
    subheading:
      "Whether you are applying for permanent residence, a work permit, study permit, visitor visa, or family sponsorship, our team can guide you through the process.",
    primaryCta: { label: "Start Your Immigration Matter", href: "/contact-us" },
    secondaryCta: {
      label: "View Immigration Services",
      href: "/areas-of-practice/immigration-law",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Canadian flag and passport representing immigration",
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div
      className="relative w-full min-h-[600px] h-[85vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Hero slideshow"
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        const HeadingTag = slide.isH1 ? "h1" : "h2";

        return (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              isActive ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
            aria-hidden={!isActive}
          >
            {/* Background Image */}
            <Image
              src={slide.imageUrl}
              alt={slide.imageAlt}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
            />

            {/* Navy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/50" />

            {/* Content */}
            <div className="relative h-full flex items-center">
              <Container>
                <div className="max-w-3xl space-y-6 md:space-y-8">
                  <HeadingTag className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {slide.heading}
                  </HeadingTag>
                  <p className="text-lg md:text-xl text-navy-100 leading-relaxed">
                    {slide.subheading}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      href={slide.primaryCta.href}
                      variant="primary"
                      size="lg"
                    >
                      {slide.primaryCta.label}
                    </Button>
                    <Button
                      href={slide.secondaryCta.href}
                      variant="outline-light"
                      size="lg"
                    >
                      {slide.secondaryCta.label}
                    </Button>
                  </div>
                </div>
              </Container>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-navy-900",
              index === currentSlide
                ? "bg-gold-500 w-8"
                : "bg-white/50 hover:bg-white/75",
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? "true" : "false"}
          />
        ))}
      </div>
    </div>
  );
}
