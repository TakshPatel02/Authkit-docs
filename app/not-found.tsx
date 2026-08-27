import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found · AuthKit",
  description: "This page doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="container flex flex-col justify-center py-32 md:py-40">

      {/* 404 number */}
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-6">
        404 · not found
      </p>

      {/* Heading */}
      <h1 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight leading-[1.15] text-text-primary mb-4 max-w-sm">
        This page doesn't exist.
      </h1>

      {/* Subtext */}
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-10 max-w-xs">
        The URL might be wrong, or this page was moved. Check the address and try again.
      </p>

      {/* Back home */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-text-primary hover:text-text-secondary transition-colors duration-150 w-fit"
      >
        <ArrowLeft size={13} />
        Back to home
      </Link>

    </div>
  );
}
