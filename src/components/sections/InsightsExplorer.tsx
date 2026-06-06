"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import type { Article, ArticleCategory } from "@/lib/insights-data";

interface InsightsExplorerProps {
  articles: Article[];
}

type FilterCategory = "All Insights" | ArticleCategory;

const filterCategories: FilterCategory[] = [
  "All Insights",
  "Corporate Law",
  "Civil Law",
  "Property Law",
  "Immigration Law",
  "Legal Guide",
];

export function InsightsExplorer({ articles }: InsightsExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>("All Insights");

  // Filter articles based on search query and category
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Filter by category
    if (activeCategory !== "All Insights") {
      // Map "Legal Guide" filter to "Legal Guide" category
      const categoryToMatch = activeCategory;
      filtered = filtered.filter(
        (article) => article.category === categoryToMatch,
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.excerpt.toLowerCase().includes(query),
      );
    }

    return filtered;
  }, [articles, searchQuery, activeCategory]);

  const resetFilters = () => {
    setSearchQuery("");
    setActiveCategory("All Insights");
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, legal guides, updates, or practice areas..."
            className={cn(
              "w-full pl-12 pr-4 py-4 rounded-lg",
              "border-2 border-navy-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20",
              "text-navy-800 placeholder:text-navy-400",
              "transition-all duration-200",
            )}
            aria-label="Search articles"
          />
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filterCategories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={isActive}
              className={cn(
                "px-5 py-2.5 rounded-md font-medium text-sm transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-gold-500/50",
                isActive
                  ? "bg-navy-700 text-white shadow-md"
                  : "bg-white border-2 border-navy-200 text-navy-700 hover:border-navy-300 hover:bg-navy-50",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              variant="elevated"
              hover
              className="flex flex-col h-full"
            >
              <div className="space-y-4 flex-1 flex flex-col">
                {/* Category Label */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-semibold text-navy-800 leading-tight">
                  {article.title}
                </h3>

                {/* Meta: Date & Read Time */}
                <div className="text-sm text-navy-500">
                  {article.date} · {article.readTime}
                </div>

                {/* Excerpt */}
                <p className="text-navy-600 leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                {/* Read More Link */}
                {/* NOTE: This currently points to "#" - will link to individual article pages when CMS/routes are added */}
                <Link
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-medium text-sm transition-colors group"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        // Empty State
        <div className="text-center py-16 space-y-6">
          <p className="text-lg text-navy-600">
            No insights found. Try a different search or category.
          </p>
          <button
            onClick={resetFilters}
            className={cn(
              "px-6 py-3 rounded-md font-medium",
              "bg-navy-700 text-white hover:bg-navy-800",
              "transition-colors duration-200",
            )}
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
