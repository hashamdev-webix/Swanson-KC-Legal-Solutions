"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  contactMethod: string;
  practiceArea: string;
  hearAbout: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  practiceArea?: string;
  message?: string;
  consent?: string;
}

export function ContactPageForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "Email",
    practiceArea: "",
    hearAbout: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    // Practice Area validation
    if (!formData.practiceArea) {
      newErrors.practiceArea = "Please select an area of practice";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Please provide a brief description of your matter";
    }

    // Consent validation
    if (!formData.consent) {
      newErrors.consent =
        "You must acknowledge that submitting this form does not create a lawyer-client relationship";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // NOTE: This is presentational only - real submission handling (API route / email service) will be added later
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate successful submission
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      // Scroll to top of form to show success message
      document.getElementById("contact-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      contactMethod: "Email",
      practiceArea: "",
      hearAbout: "",
      message: "",
      consent: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="space-y-8 text-center py-12">
        <div className="w-16 h-16 mx-auto rounded-full bg-gold-100 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-gold-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-semibold text-navy-800">
            Thank You for Contacting Swanson KC Legal Solutions
          </h3>
          <p className="text-lg text-navy-600 max-w-2xl mx-auto">
            We have received your request and will respond as soon as possible
            during business hours. A member of our team will reach out to
            discuss your legal matter.
          </p>
        </div>
        <Button onClick={resetForm} variant="secondary" size="lg">
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="font-heading text-2xl md:text-3xl font-semibold text-navy-800">
          Request a Consultation
        </h2>
        <p className="text-navy-600">
          Fill out the form below and a member of our team will get back to you.
          Fields marked with an asterisk (*) are required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-navy-700"
          >
            Full Name <span className="text-gold-600">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-md border-2",
              "focus:ring-2 focus:ring-gold-500/20 focus:outline-none transition-colors",
              errors.fullName
                ? "border-red-500 focus:border-red-500"
                : "border-navy-200 focus:border-gold-500",
            )}
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-sm text-red-600">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-navy-700"
          >
            Email Address <span className="text-gold-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-md border-2",
              "focus:ring-2 focus:ring-gold-500/20 focus:outline-none transition-colors",
              errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-navy-200 focus:border-gold-500",
            )}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-navy-700"
          >
            Phone Number <span className="text-gold-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-md border-2",
              "focus:ring-2 focus:ring-gold-500/20 focus:outline-none transition-colors",
              errors.phone
                ? "border-red-500 focus:border-red-500"
                : "border-navy-200 focus:border-gold-500",
            )}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-sm text-red-600">
              {errors.phone}
            </p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <div className="space-y-2">
          <label
            htmlFor="contactMethod"
            className="block text-sm font-medium text-navy-700"
          >
            Preferred Contact Method
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border-2 border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 focus:outline-none transition-colors"
          >
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Either">Either</option>
          </select>
        </div>

        {/* Area of Practice */}
        <div className="space-y-2">
          <label
            htmlFor="practiceArea"
            className="block text-sm font-medium text-navy-700"
          >
            Area of Practice <span className="text-gold-600">*</span>
          </label>
          <select
            id="practiceArea"
            name="practiceArea"
            value={formData.practiceArea}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-md border-2",
              "focus:ring-2 focus:ring-gold-500/20 focus:outline-none transition-colors",
              errors.practiceArea
                ? "border-red-500 focus:border-red-500"
                : "border-navy-200 focus:border-gold-500",
            )}
            aria-invalid={!!errors.practiceArea}
            aria-describedby={
              errors.practiceArea ? "practiceArea-error" : undefined
            }
          >
            <option value="">Select an area...</option>
            <option value="Corporate Law">Corporate Law</option>
            <option value="Civil Law">Civil Law</option>
            <option value="Property Law">Property Law</option>
            <option value="Immigration Law">Immigration Law</option>
            <option value="Not Sure / Other">Not Sure / Other</option>
          </select>
          {errors.practiceArea && (
            <p id="practiceArea-error" className="text-sm text-red-600">
              {errors.practiceArea}
            </p>
          )}
        </div>

        {/* How Did You Hear About Us */}
        <div className="space-y-2">
          <label
            htmlFor="hearAbout"
            className="block text-sm font-medium text-navy-700"
          >
            How Did You Hear About Us?
          </label>
          <select
            id="hearAbout"
            name="hearAbout"
            value={formData.hearAbout}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border-2 border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 focus:outline-none transition-colors"
          >
            <option value="">Select an option...</option>
            <option value="Google Search">Google Search</option>
            <option value="Referral">Referral</option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-navy-700"
          >
            Message / Brief Description of Your Legal Matter{" "}
            <span className="text-gold-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={cn(
              "w-full px-4 py-3 rounded-md border-2",
              "focus:ring-2 focus:ring-gold-500/20 focus:outline-none transition-colors resize-y",
              errors.message
                ? "border-red-500 focus:border-red-500"
                : "border-navy-200 focus:border-gold-500",
            )}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-600">
              {errors.message}
            </p>
          )}
        </div>

        {/* Consent Checkbox */}
        <div className="space-y-2">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className={cn(
                "mt-1 w-5 h-5 rounded border-2 text-gold-600 focus:ring-2 focus:ring-gold-500/20",
                errors.consent
                  ? "border-red-500"
                  : "border-navy-300 focus:border-gold-500",
              )}
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "consent-error" : undefined}
            />
            <label htmlFor="consent" className="text-sm text-navy-700">
              I understand that submitting this form does not create a
              lawyer-client relationship.{" "}
              <span className="text-gold-600">*</span>
            </label>
          </div>
          {errors.consent && (
            <p id="consent-error" className="text-sm text-red-600 ml-8">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Submit Request
        </Button>
      </form>

      {/* Disclaimer */}
      <div className="pt-4 border-t border-navy-200">
        <p className="text-xs text-navy-500 leading-relaxed">
          Submitting this form does not create a lawyer-client relationship.
          Please do not include confidential or sensitive information until a
          formal engagement has been established.
        </p>
      </div>
    </div>
  );
}
