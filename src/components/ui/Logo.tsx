import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "header" | "footer";
}

export function Logo({
  variant = "dark",
  className,
  size = "header",
}: LogoProps) {
  const isLight = variant === "light";
  const isHeader = size === "header";

  // Header: 48px tall, Footer: 56px tall
  const height = isHeader ? 48 : 56;
  // Maintain 3:1 aspect ratio
  const width = height * 3;

  return (
    <Link
      href="/"
      className={cn(
        "inline-block transition-opacity hover:opacity-80",
        className,
      )}
      aria-label="Swanson KC Legal Solutions - Home"
    >
      <Image
        src="/images/logo.png"
        alt="Swanson KC Legal Solutions"
        width={width}
        height={height}
        priority={isHeader}
        className={cn(
          "h-auto w-auto transition-all",
          isLight && "brightness-0 invert",
        )}
        style={{
          maxHeight: `${height}px`,
          width: "auto",
        }}
      />
    </Link>
  );
}
