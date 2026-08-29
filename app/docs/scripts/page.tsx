import type { Metadata } from "next";
import { Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Scripts Reference - AuthKit Docs",
  description: "NPM scripts available in AuthKit generated templates.",
};

const jsScripts = [
  {
    script: "npm run dev",
    command: "node --watch index.js",
    purpose: "Starts the development server utilizing Node.js native watch mode for live reloading.",
  },
  {
    script: "npm start",
    command: "node index.js",
    purpose: "Starts the production server.",
  },
];

const tsScripts = [
  {
    script: "npm run dev",
    command: "tsx watch src/index.ts",
    purpose: "Starts the development server using tsx for on-the-fly execution and live reloading.",
  },
  {
    script: "npm run build",
    command: "tsc",
    purpose: "Compiles the TypeScript source code into standard JavaScript in the dist/ folder.",
  },
  {
    script: "npm start",
    command: "node dist/index.js",
    purpose: "Starts the production server from the compiled dist/ directory (must run build first).",
  },
];

export default function ScriptsPage() {
  return (
    <div>
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
        project
      </p>
      <h1 className="text-[1.5rem] font-semibold tracking-tight leading-tight text-text-primary mb-3">
        Scripts Reference
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-12">
        Every AuthKit template comes pre-configured with a standard set of npm scripts 
        optimized for both local development and production deployment.
      </p>

      {/* ── JavaScript Scripts ── */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-4">
          <Terminal size={16} className="text-text-muted" />
          <h2 className="text-[1.125rem] font-medium text-text-primary">
            JavaScript
          </h2>
        </div>
        
        <div className="flex flex-col divide-y divide-border">
          {jsScripts.map((s, i) => (
            <div key={i} className="py-5 first:pt-4 last:pb-0">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-[0.875rem] font-medium text-text-primary">
                  {s.script}
                </span>
                <span className="font-mono text-[0.75rem] text-text-muted">
                  {s.command}
                </span>
              </div>
              <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
                {s.purpose}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── TypeScript Scripts ── */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Terminal size={16} className="text-text-muted" />
          <h2 className="text-[1.125rem] font-medium text-text-primary">
            TypeScript
          </h2>
        </div>
        
        <div className="flex flex-col divide-y divide-border">
          {tsScripts.map((s, i) => (
            <div key={i} className="py-5 first:pt-4 last:pb-0">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-[0.875rem] font-medium text-text-primary">
                  {s.script}
                </span>
                <span className="font-mono text-[0.75rem] text-text-muted">
                  {s.command}
                </span>
              </div>
              <p className="text-[0.9375rem] text-text-secondary leading-relaxed">
                {s.purpose}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
