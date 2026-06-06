import Link from "next/link";
import { Card } from "./Card";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/lib/team-data";

interface TeamMemberCardProps {
  member: TeamMember;
}

function getInitials(name: string): string {
  const parts = name.split(" ");
  if (parts.length >= 2) {
    return parts[0][0] + parts[parts.length - 1][0];
  }
  return name.slice(0, 2);
}

function getFirstName(name: string): string {
  return name.split(" ")[0];
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initials = getInitials(member.name);
  const firstName = getFirstName(member.name);

  return (
    <Card variant="elevated" className="h-full flex flex-col">
      <div className="space-y-6 flex-1 flex flex-col">
        {/* Avatar - Placeholder with initials */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-navy-100 to-gold-100 flex items-center justify-center border-2 border-navy-200">
            <span className="font-heading text-4xl font-bold text-navy-700">
              {initials}
            </span>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center space-y-2">
          <h3 className="font-heading text-2xl font-semibold text-navy-800">
            {member.name}
          </h3>
          <p className="text-gold-600 font-medium">{member.title}</p>
        </div>

        {/* Practice Focus */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-navy-700 uppercase tracking-wide">
            Practice Focus:
          </p>
          <p className="text-navy-600 text-sm leading-relaxed">
            {member.practiceFocus}
          </p>
        </div>

        {/* Quote */}
        <blockquote className="border-l-4 border-gold-500 pl-4 py-2 bg-cream/50 rounded-r">
          <p className="italic text-navy-700 leading-relaxed">
            &ldquo;{member.quote}&rdquo;
          </p>
        </blockquote>

        {/* Bio */}
        <div className="flex-1">
          <p className="text-navy-600 leading-relaxed">{member.bio}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-navy-100">
          <Link
            href="/contact-us"
            className={cn(
              "flex-1 text-center px-4 py-2 rounded-md",
              "bg-navy-100 text-navy-700 font-medium text-sm",
              "hover:bg-navy-200 transition-colors",
            )}
          >
            View Profile
          </Link>
          <Button
            href="/contact-us"
            variant="outline"
            size="sm"
            className="flex-1"
          >
            Contact {firstName}
          </Button>
        </div>
      </div>
    </Card>
  );
}
