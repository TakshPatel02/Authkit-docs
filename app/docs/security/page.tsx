import type { Metadata } from "next";
import { ShieldCheck, Lock, RefreshCw, Activity, EyeOff, FileKey2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Architecture - AuthKit Docs",
  description: "Overview of AuthKit's built-in security architecture.",
};

const features = [
  {
    icon: Lock,
    title: "Password Hashing",
    desc: "Passwords are mathematically hashed using bcrypt with 10 salt rounds before being stored in the database.",
  },
  {
    icon: ShieldCheck,
    title: "HttpOnly Secure Cookies",
    desc: "Refresh tokens are transported via HttpOnly cookies with sameSite='strict', making them inaccessible to client-side JS and immune to XSS.",
  },
  {
    icon: RefreshCw,
    title: "Refresh Token Rotation",
    desc: "Every token refresh issues a brand new access and refresh token pair. The prior refresh token is immediately invalidated in MongoDB.",
  },
  {
    icon: Activity,
    title: "Compound Rate Limiting",
    desc: "Combines IP-based limiters with email+IP compound limiters, strictly preventing distributed brute force attacks against specific accounts.",
  },
  {
    icon: EyeOff,
    title: "Anti-Enumeration",
    desc: "Password recovery endpoints return identical, ambiguous timing-safe responses regardless of whether the submitted email exists.",
  },
  {
    icon: FileKey2,
    title: "Single-Use JTI Claims",
    desc: "JWT reset tokens carry unique 'jti' identifiers that are flagged as 'used: true' immediately after their first successful submission.",
  },
];

export default function SecurityPage() {
  return (
    <div>
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
        reference
      </p>
      <h1 className="text-[1.5rem] font-semibold tracking-tight leading-tight text-text-primary mb-3">
        Security Architecture
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-10">
        AuthKit is designed to be secure by default. Every template implements modern authentication best practices out of the box to keep your users safe.
      </p>

      <div className="flex flex-col divide-y divide-border">
        {features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <div key={idx} className="py-8 first:pt-0 last:pb-0 flex flex-col md:flex-row gap-3 md:gap-12">
              <div className="md:w-1/3 flex items-center gap-3">
                <Icon size={16} className="text-text-muted" />
                <h3 className="text-[0.9375rem] font-medium text-text-primary">
                  {f.title}
                </h3>
              </div>
              <div className="md:w-2/3">
                <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
