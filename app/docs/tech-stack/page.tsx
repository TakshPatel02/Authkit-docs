import type { Metadata } from "next";
import { Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech Stack - AuthKit Docs",
  description: "The underlying technologies and libraries powering AuthKit templates.",
};

const stackItems = [
  {
    category: "Core Framework",
    tech: "Express 5 + Node.js",
    description: "The latest Express release for native Promise support and robust routing, running on the standard Node.js runtime.",
  },
  {
    category: "Database & ORM",
    tech: "MongoDB + Mongoose",
    description: "NoSQL document storage mapped via Mongoose schemas for strict typing, relationship modeling, and seamless validation.",
  },
  {
    category: "Authentication",
    tech: "JWT + bcrypt",
    description: "Stateless JSON Web Tokens for access (short-lived) and rotation (long-lived refresh), paired with bcrypt for secure password hashing.",
  },
  {
    category: "Data Validation",
    tech: "Zod",
    description: "TypeScript-first schema declaration and validation. Used extensively across all routes to guarantee strict payload integrity.",
  },
  {
    category: "Security",
    tech: "express-rate-limit + cors",
    description: "Compound IP and email rate-limiting against brute force attacks, secure HttpOnly cookie management, and cross-origin resource sharing policies.",
  },
  {
    category: "Email Delivery",
    tech: "Nodemailer (OTP Template)",
    description: "Industry-standard SMTP client configured by default to utilize Google App Passwords for robust, zero-configuration email delivery.",
  },
];

export default function TechStackPage() {
  return (
    <div>
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
        project
      </p>
      <h1 className="text-[1.5rem] font-semibold tracking-tight leading-tight text-text-primary mb-3">
        Tech Stack
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-12">
        AuthKit relies entirely on industry-standard, deeply tested libraries. There are no experimental frameworks or 
        bloated abstractions — just the exact tools you'd choose if you were building a production backend from scratch.
      </p>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <Layers size={16} className="text-text-muted" />
          <h2 className="text-[1.125rem] font-medium text-text-primary">
            Under the hood
          </h2>
        </div>
        
        <div className="flex flex-col divide-y divide-border">
          {stackItems.map((item, i) => (
            <div key={i} className="py-5 first:pt-4 last:pb-0 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 items-start">
              <div className="md:col-span-1">
                <p className="font-mono text-[0.6875rem] text-text-muted uppercase tracking-widest mb-1.5">
                  {item.category}
                </p>
                <h3 className="text-[0.9375rem] font-medium text-text-primary">
                  {item.tech}
                </h3>
              </div>
              <div className="md:col-span-2">
                <p className="text-[0.9375rem] text-text-secondary leading-[1.6]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
