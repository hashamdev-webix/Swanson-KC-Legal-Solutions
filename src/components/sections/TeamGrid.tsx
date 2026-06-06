"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamMemberCard } from "@/components/ui/TeamMemberCard";
import { cn } from "@/lib/utils";
import type { TeamMember, PracticeAreaTag } from "@/lib/team-data";

interface TeamGridProps {
  members: TeamMember[];
}

type FilterOption = "All" | PracticeAreaTag;

const filterOptions: FilterOption[] = [
  "All",
  "Corporate Law",
  "Civil Law",
  "Property Law",
  "Immigration Law",
];

export function TeamGrid({ members }: TeamGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");

  const filteredMembers =
    activeFilter === "All"
      ? members
      : members.filter((member) =>
          member.practiceAreaTags.includes(activeFilter as PracticeAreaTag),
        );

  return (
    <div className="space-y-12">
      <SectionHeading
        title="Meet Our Team"
        description="Our lawyers and legal professionals work with clients across a range of legal matters, providing organized support, clear advice, and practical guidance."
        align="center"
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {filterOptions.map((filter) => {
          const isActive = activeFilter === filter;
          const label = filter === "All" ? "All Team Members" : filter;

          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={cn(
                "px-5 py-2.5 rounded-md font-medium text-sm transition-all duration-200",
                "focus:outline-none focus:ring-2 focus:ring-gold-500/50",
                isActive
                  ? "bg-navy-700 text-white shadow-md"
                  : "bg-white border-2 border-navy-200 text-navy-700 hover:border-navy-300 hover:bg-navy-50",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Team Member Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredMembers.map((member, index) => (
          <div
            key={member.name}
            className="animate-fade-in"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-navy-600 text-lg">
            No team members found for this practice area.
          </p>
        </div>
      )}
    </div>
  );
}
