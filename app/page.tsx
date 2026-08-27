import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import CopyButton from "@/components/copy-button";

export const metadata: Metadata = {
  title: "AuthKit - Express Auth Scaffolding CLI",
  description:
    "A CLI that scaffolds a production-ready Express + MongoDB auth backend. Basic, Role-Based, or OTP verification - in JavaScript or TypeScript.",
};

const INSTALL_CMD = "npx create-express-authkit <project-name>";

const strategies = [
  {
    slug: "basic",
    label: "Basic Auth",
    description:
      "Email/password, JWT access tokens, rotating refresh tokens via HttpOnly cookies, Zod validation, rate limiting.",
    bestFor: "MVPs, single-tenant apps, mobile/SPA backends",
  },
  {
    slug: "role-based",
    label: "Role-Based Auth",
    description:
      "Everything in Basic + multi-role schema (user/admin), isAdmin guard middleware, JWT role claims.",
    bestFor: "SaaS, dashboards, admin panels",
  },
  {
    slug: "otp-verification",
    label: "OTP Verification",
    description:
      "Everything in Basic + forgot password, 6-digit email OTPs via Nodemailer, single-use JTI reset tokens.",
    bestFor: "Consumer apps, high-security workflows",
  },
];

export default function Home() {
  return (
    <div className="container py-16 md:py-24">

      {/* ── Hero ── */}
      <section className="mb-16 md:mb-20">

        {/* Package label */}
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-7">
          npm · create-express-authkit
        </p>

        {/* Headline */}
        <h1 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight leading-[1.15] text-text-primary mb-5 max-w-125">
          Auth you don't have to write again.
        </h1>

        {/* Subhead - split at the positioning line */}
        <p className="text-[0.9375rem] text-text-secondary leading-[1.75] max-w-135 mb-3">
          A CLI that scaffolds a production-ready Express + MongoDB auth backend -
          Basic, Role-Based, or OTP verification - in JavaScript or TypeScript.
          Fully tested, rate-limited, and structured to industry standards.
        </p>
        <p className="text-[0.9375rem] font-medium text-text-primary leading-[1.75] max-w-135 mb-10">
          Not a wrapper. Not AI-generated on the spot. Code that's already been
          written, tested, and fixed once - so you don't have to do it again.
        </p>

        {/* Install command */}
        <div className="flex items-center justify-between gap-4 bg-code-bg border border-code-border rounded-lg px-4 py-3 mb-8 max-w-130">
          <code className="font-mono text-[0.8125rem] text-text-primary">
            {INSTALL_CMD}
          </code>
          <CopyButton text={INSTALL_CMD} />
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-5">
          <Link
            href="/docs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-accent px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-150"
          >
            Get Started
            <ArrowRight size={13} />
          </Link>
          <a
            href="https://github.com/TakshPatel02/create-express-authkit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors duration-150"
          >
            View on GitHub
            <ArrowUpRight size={13} className="opacity-60" />
          </a>
        </div>

      </section>

      {/* ── Divider ── */}
      <hr className="divider mb-12 md:mb-16" />

      {/* ── Strategy rows ── */}
      <section>

        {/* Section label */}
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-8">
          Three strategies - each available in JS and TS
        </p>

        <div className="flex flex-col gap-2">
          {strategies.map((s) => (
            <div
              key={s.slug}
              className="group border border-border-card rounded-md px-5 py-5 hover:bg-surface-card transition-colors duration-150"
            >
              <div className="flex items-start justify-between gap-8">

                {/* Left: content */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-[0.9375rem] font-medium text-text-primary mb-1.5">
                    {s.label}
                  </h2>
                  <p className="text-sm text-text-secondary leading-relaxed mb-2.5">
                    {s.description}
                  </p>
                  <p className="text-xs text-text-muted">
                    Best for - {s.bestFor}
                  </p>
                </div>

                {/* Right: language badges */}
                <div className="flex gap-1.5 shrink-0 pt-0.5">
                  <span className="font-mono text-[0.6875rem] text-text-secondary border border-border-card px-2 py-0.5 rounded">
                    JS
                  </span>
                  <span className="font-mono text-[0.6875rem] text-text-secondary border border-border-card px-2 py-0.5 rounded">
                    TS
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}
