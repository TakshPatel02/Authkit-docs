import type { Metadata } from "next";
import { Check as CheckIcon, X as XIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Templates - AuthKit Docs",
  description: "Compare the three AuthKit templates: Basic Auth, Role-Based Auth, and OTP Verification.",
};

const templates = [
  {
    name: "Basic Auth",
    slug: "basic",
    features: "Username/Password, JWT Access Tokens, Rotating Refresh Tokens (HttpOnly cookies), Zod validation, rate limiting",
    bestFor: "MVPs, single-tenant apps, mobile/SPA backends",
    languages: "JS / TS",
  },
  {
    name: "Role-Based Auth",
    slug: "role-based",
    features: "Everything in Basic + multi-role schema (user, admin), isAdmin guard middleware, JWT role claims",
    bestFor: "SaaS, dashboards, admin panels",
    languages: "JS / TS",
  },
  {
    name: "OTP Verification",
    slug: "otp-verification",
    features: "Everything in Basic + forgot password, 6-digit email OTPs, Nodemailer + Gmail App Passwords, single-use JTI reset tokens",
    bestFor: "Consumer apps, high-security workflows",
    languages: "JS / TS",
  },
];

const featureMatrix = [
  { feature: "Express 5 + MongoDB", basic: true, roleBased: true, otp: true },
  { feature: "Password Hashing (bcrypt)", basic: true, roleBased: true, otp: true },
  { feature: "Access Tokens (JWT)", basic: true, roleBased: true, otp: true },
  { feature: "Rotating Refresh Tokens", basic: true, roleBased: true, otp: true },
  { feature: "HttpOnly Secure Cookies", basic: true, roleBased: true, otp: true },
  { feature: "Zod Schema Validation", basic: true, roleBased: true, otp: true },
  { feature: "Rate Limiting", basic: true, roleBased: true, otp: true },
  { feature: "Multi-Role RBAC", basic: false, roleBased: true, otp: false },
  { feature: "Role Guard Middleware", basic: false, roleBased: true, otp: false },
  { feature: "Email Delivery (Nodemailer)", basic: false, roleBased: false, otp: true },
  { feature: "Email OTP Verification", basic: false, roleBased: false, otp: true },
  { feature: "Single-Use Password Reset", basic: false, roleBased: false, otp: true },
];

function Check({ active }: { active: boolean }) {
  if (active) {
    return <CheckIcon size={16} className="text-text-primary inline-block" />;
  }
  return <XIcon size={16} className="text-text-muted opacity-30 inline-block" />;
}

export default function TemplatesPage() {
  return (
    <div>
      {/* ── Header ── */}
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
        reference
      </p>
      <h1 className="text-[1.5rem] font-semibold tracking-tight leading-tight text-text-primary mb-3">
        Templates
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-10">
        AuthKit provides three distinct authentication strategies. Choose the one that matches
        your project's exact needs so you aren't carrying dead weight.
      </p>

      {/* ── Template Comparison ── */}
      <div className="mb-14">
        <h2 className="text-[1rem] font-medium text-text-primary mb-6">
          Template Overview
        </h2>
        <div className="w-full">
          <table className="w-full text-left text-sm">
            <thead className="text-text-secondary border-b border-border">
              <tr>
                <th className="font-medium py-3 pr-4">Template</th>
                <th className="font-medium px-4 py-3">Slug</th>
                <th className="font-medium px-4 py-3">Best For</th>
                <th className="font-medium pl-4 py-3">Languages</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {templates.map((t) => (
                <tr key={t.slug} className="hover:bg-hover-bg transition-colors duration-150">
                  <td className="py-3.5 pr-4 text-text-primary font-medium">{t.name}</td>
                  <td className="px-4 py-3.5">
                    {t.slug}
                  </td>
                  <td className="px-4 py-3.5 text-text-secondary">{t.bestFor}</td>
                  <td className="pl-4 py-3.5 text-text-secondary">{t.languages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Template Descriptions underneath for readability rather than cramming into the table */}
        <div className="mt-6 flex flex-col gap-4">
          {templates.map((t) => (
            <div key={t.slug + "-desc"} className="text-sm">
              <span className="font-medium text-text-primary mr-2">{t.name}:</span>
              <span className="text-text-secondary leading-relaxed">{t.features}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Feature Matrix ── */}
      <div>
        <h2 className="text-[1rem] font-medium text-text-primary mb-6">
          Feature Matrix
        </h2>
        <div className="w-full">
          <table className="w-full text-sm table-fixed">
            <thead className="text-text-secondary border-b border-border">
              <tr>
                <th className="font-medium py-3 pr-3 text-left w-[40%]">Feature</th>
                <th className="font-medium px-4 py-3 w-[20%]">
                  <div className="flex justify-center">Basic</div>
                </th>
                <th className="font-medium px-4 py-3 w-[20%]">
                  <div className="flex justify-center">Role-Based</div>
                </th>
                <th className="font-medium px-4 py-3 w-[20%]">
                  <div className="flex justify-center">OTP</div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {featureMatrix.map((row) => (
                <tr key={row.feature} className="hover:bg-hover-bg transition-colors duration-150">
                  <td className="py-3.5 pr-4 text-text-secondary text-left">{row.feature}</td>
                  <td className="px-4 py-3.5"><div className="flex justify-center"><Check active={row.basic} /></div></td>
                  <td className="px-4 py-3.5"><div className="flex justify-center"><Check active={row.roleBased} /></div></td>
                  <td className="px-4 py-3.5"><div className="flex justify-center"><Check active={row.otp} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
