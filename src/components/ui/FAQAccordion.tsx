"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function FAQAccordion({
  items,
  allowMultiple = false,
  className,
}: FAQAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index],
      );
    } else {
      setOpenItems((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn("divide-y divide-navy-200", className)}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        const itemId = `faq-item-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={index} className="py-4">
            <button
              id={itemId}
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center justify-between gap-4 text-left group"
            >
              <span
                className={cn(
                  "font-heading text-lg font-semibold transition-colors",
                  isOpen
                    ? "text-gold-600"
                    : "text-navy-800 group-hover:text-gold-600",
                )}
              >
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "w-5 h-5 flex-shrink-0 transition-all",
                  isOpen
                    ? "rotate-180 text-gold-600"
                    : "text-navy-600 group-hover:text-gold-600",
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={itemId}
              className={cn(
                "overflow-hidden transition-all duration-200",
                isOpen ? "mt-4 opacity-100" : "max-h-0 opacity-0",
              )}
            >
              <p className="text-navy-600 leading-relaxed">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
