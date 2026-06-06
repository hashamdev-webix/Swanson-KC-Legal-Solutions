"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // NOTE: This is presentational only - real subscription handling will be added later
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      // Reset after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">
          Stay Informed With Legal Insights
        </h2>
        <p className="text-xl text-navy-100">
          Receive practical legal updates and resources from Swanson KC Legal
          Solutions.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-3"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className={cn(
            "flex-1 px-5 py-4 rounded-md",
            "border-2 border-white/20 bg-white/10 backdrop-blur-sm",
            "text-white placeholder:text-navy-200",
            "focus:border-gold-400 focus:ring-2 focus:ring-gold-400/30 focus:outline-none",
            "transition-all duration-200",
          )}
          aria-label="Email address"
        />
        <Button type="submit" variant="primary" size="lg" className="shrink-0">
          Subscribe
        </Button>
      </form>

      {isSubscribed && (
        <div className="text-center animate-fade-in">
          <p className="text-gold-400 font-medium">
            Thank you for subscribing!
          </p>
        </div>
      )}

      <div className="space-y-2 text-center max-w-2xl mx-auto">
        <p className="text-sm text-navy-200">
          We may share legal resources, firm updates, and general information
          about corporate law, civil law, property law, and immigration law. You
          can unsubscribe at any time.
        </p>
        <p className="text-xs text-navy-300">
          By subscribing, you agree to receive email updates from Swanson KC
          Legal Solutions.
        </p>
      </div>
    </div>
  );
}
