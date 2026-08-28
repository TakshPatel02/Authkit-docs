import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quick Start - AuthKit Docs",
  description: "Get up and running with AuthKit in seconds.",
};

export default function DocsPage() {
  return (
    <div>
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
        getting started
      </p>
      <h1 className="text-[1.5rem] font-semibold tracking-tight leading-tight text-text-primary mb-3">
        Quick Start
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75]">
        Coming soon.
      </p>
    </div>
  );
}
