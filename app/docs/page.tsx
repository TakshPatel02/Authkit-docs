import type { Metadata } from "next";
import CopyButton from "@/components/copy-button";

export const metadata: Metadata = {
  title: "Quick Start - AuthKit Docs",
  description:
    "Get up and running with AuthKit in seconds. Scaffold a production-ready Express + MongoDB auth backend with one command.",
};

export default function DocsPage() {
  return (
    <div>

      {/* ── Header ── */}
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
        getting started
      </p>
      <h1 className="text-[1.5rem] font-semibold tracking-tight leading-tight text-text-primary mb-3">
        Quick Start
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-10">
        Scaffold a production-ready Express + MongoDB auth backend in seconds.
        All dependencies install automatically — no global install needed.
      </p>
      
      {/* ── Step 01 — Install ── */}
      <div className="mb-10">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="font-mono text-[0.6875rem] text-text-muted shrink-0">01</span>
          <h2 className="text-[0.9375rem] font-medium text-text-primary">Run the CLI</h2>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mb-3 pl-5.5">
          Scaffold your project with a single command.
        </p>
        <div className="group flex items-center justify-between gap-4 bg-code-bg border border-code-border rounded-lg px-4 py-3">
          <span className="font-mono text-[0.8125rem] text-text-primary">
            npx create-express-authkit &lt;project-name&gt;
          </span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0">
            <CopyButton text="npx create-express-authkit <project-name>" />
          </div>
        </div>
      </div>

      {/* ── Step 02 — Choose setup ── */}
      <div className="mb-10">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="font-mono text-[0.6875rem] text-text-muted shrink-0">02</span>
          <h2 className="text-[0.9375rem] font-medium text-text-primary">Choose your setup</h2>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mb-3 pl-5.5">
          The CLI walks you through two prompts — language and auth strategy.
        </p>
        <pre>{`? Choose your language:
  ● JavaScript
  ○ TypeScript

? Choose authentication strategy:
  ● Basic Auth (Email/Password + JWT + Refresh Token)
  ○ OTP Verification (Email OTP + Password Reset)
  ○ Role-Based Auth (User & Admin RBAC)`}</pre>
      </div>

      {/* ── Step 03 — Configure env ── */}
      <div className="mb-10">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="font-mono text-[0.6875rem] text-text-muted shrink-0">03</span>
          <h2 className="text-[0.9375rem] font-medium text-text-primary">Configure your environment</h2>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mb-3 pl-5.5">
          Copy the example env file and fill in your MongoDB URL, JWT secrets, and (for OTP) your Gmail App Password.
        </p>
        <pre>{`cd <project-name>

cp .env.example .env          # macOS / Linux
copy .env.example .env        # Windows

# configure .env with your MongoDB URL and JWT secrets`}</pre>
      </div>

      {/* ── Step 04 — Run dev server ── */}
      <div className="mb-10">
        <div className="flex items-baseline gap-3 mb-2">
          <span className="font-mono text-[0.6875rem] text-text-muted shrink-0">04</span>
          <h2 className="text-[0.9375rem] font-medium text-text-primary">Start the dev server</h2>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mb-3 pl-5.5">
          All dependencies were installed during scaffolding. Just run:
        </p>
        <div className="group flex items-center justify-between gap-4 bg-code-bg border border-code-border rounded-lg px-4 py-3">
          <span className="font-mono text-[0.8125rem] text-text-primary">
            npm run dev
          </span>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 shrink-0">
            <CopyButton text="npm run dev" />
          </div>
        </div>
      </div>

      {/* ── TypeScript note ── */}
      <div className="rounded-lg border border-code-border bg-code-bg px-4 py-3.5">
        <p className="text-sm text-text-secondary leading-relaxed">
          <span className="font-medium text-text-primary">TypeScript —</span>{" "}
          <span className="font-mono text-[0.8125rem]">npm run dev</span> uses hot-reload via <span className="font-mono text-[0.8125rem]">tsx</span>. For production,
          run <span className="font-mono text-[0.8125rem]">npm run build</span> then <span className="font-mono text-[0.8125rem]">npm start</span>.
        </p>
      </div>

    </div>
  );
}
