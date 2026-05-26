"use client";

import { useState, FormEvent } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For now, just show a thank you message
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card variant="default" className="bg-white">
        <div className="text-center py-8 space-y-4">
          <div className="text-4xl">✓</div>
          <h3 className="font-heading text-2xl font-semibold text-navy-800">
            Thank You
          </h3>
          <p className="text-navy-600">
            We&apos;ve received your consultation request and will be in touch
            shortly.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="outline"
            size="sm"
          >
            Submit Another Request
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="default" className="bg-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="font-heading text-2xl font-semibold text-navy-800 mb-2">
            Consultation Request
          </h3>
          <p className="text-sm text-navy-600">
            Fill out the form below to request a consultation with our team.
          </p>
        </div>

        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-navy-700 mb-2"
          >
            Full Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy-700 mb-2"
          >
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-navy-700 mb-2"
          >
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
            placeholder="(000) 000-0000"
          />
        </div>

        <div>
          <label
            htmlFor="practiceArea"
            className="block text-sm font-medium text-navy-700 mb-2"
          >
            Area of Practice <span className="text-red-600">*</span>
          </label>
          <select
            id="practiceArea"
            name="practiceArea"
            required
            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white"
          >
            <option value="">Select an area...</option>
            <option value="corporate">Corporate Law</option>
            <option value="civil">Civil Law</option>
            <option value="property">Property Law</option>
            <option value="immigration">Immigration Law</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-navy-700 mb-2"
          >
            Message <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2 border border-navy-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
            placeholder="Please describe your legal matter..."
          />
        </div>

        <div>
          <Button type="submit" variant="primary" className="w-full">
            Submit Request
          </Button>
        </div>

        <p className="text-xs text-navy-500 leading-relaxed">
          Submitting this form does not create a lawyer-client relationship.
          Please do not include confidential information until a formal
          engagement has been established.
        </p>
      </form>
    </Card>
  );
}
