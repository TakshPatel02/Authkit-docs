import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "API Reference - AuthKit Docs",
  description: "Complete API reference for all AuthKit endpoints.",
};

const templates = [
  {
    title: "Basic Auth",
    href: "/docs/api/basic",
    desc: "Endpoints for email/password registration, login, token refresh, and logout.",
  },
  {
    title: "Role-Based Access Control",
    href: "/docs/api/role-based",
    desc: "Endpoints including role assignment and admin-guarded routes.",
  },
  {
    title: "OTP Verification",
    href: "/docs/api/otp",
    desc: "Endpoints for the 6-digit email OTP password reset lifecycle.",
  },
];

export default function ApiHubPage() {
  return (
    <div>
      {/* ── Header ── */}
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
        reference
      </p>
      <h1 className="text-[1.5rem] font-semibold tracking-tight leading-tight text-text-primary mb-3">
        API Reference
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-10">
        All routes across all templates are mounted under <span className="font-mono text-[0.8125rem] text-text-primary bg-code-bg border border-code-border px-1.5 py-0.5 rounded">/api/v1/users</span>.
        Choose the authentication strategy below to view its specific endpoints.
      </p>

      <hr className="divider mb-10" />

      {/* ── Navigation Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {templates.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group block p-5 rounded-xl border border-border bg-surface-card hover:bg-hover-bg hover:border-text-muted transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-mono text-[0.875rem] font-medium text-text-primary group-hover:text-text-primary transition-colors">
                {t.title}
              </h2>
              <ChevronRight size={16} className="text-text-muted group-hover:text-text-primary transition-colors transform group-hover:translate-x-1" />
            </div>
            <p className="text-[0.8125rem] text-text-secondary leading-relaxed">
              {t.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
