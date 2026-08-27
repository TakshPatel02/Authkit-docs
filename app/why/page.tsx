import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why AuthKit - AuthKit Docs",
  description:
    "The origin story, design decisions, and architecture reasoning behind AuthKit - a production-ready Express auth scaffolding CLI.",
};

const files = [
  {
    id: "01",
    title: "The repetition problem",
    body: [
      "I wrote the same auth code multiple times while learning backend development. That repetition wasn't wasted time - repeating logic is how you actually learn it, and I don't regret writing it by hand the first several times. But once I'd learned it, writing it again on every new project stopped being practice and started being a tax.",
      "AuthKit isn't for people who haven't written auth before. It's for the version of me that already had.",
    ],
  },
  {
    id: "02",
    title: "Why not just use Auth.js, Clerk, or Supabase Auth",
    body: [
      "This isn't a replacement for them. Not every project needs a full third-party auth provider - a lot of smaller or medium-sized projects, side projects, and learning projects don't need that weight. A lot of people end up writing their own auth code anyway instead of pulling in a dependency. AuthKit exists for that group, so they're not rewriting the same thing from scratch every time.",
    ],
  },
  {
    id: "03",
    title: "Why not just ask AI to write it",
    body: [
      "AI can write this code in minutes. That's exactly why AuthKit is different from just prompting an LLM: AI-generated auth code still has to be tested and debugged by you, every time. AuthKit skips that step - it's the same code, already tested multiple times, already fixed, structured to industry standards. You're not trading AI for effort here. You're trading \"write and debug it yourself\" for \"install and move on.\"",
    ],
  },
  {
    id: "04",
    title: "Build order: why OTP came first, not last",
    body: [
      "OTP verification was the first strategy, not the last. I built it because my own backend project needed OTP-based verification, so I added it there first. I hadn't planned Basic or Role-Based at that point - it wasn't until later that I realized not every project needs OTP, and that Basic and RBAC needed to exist as their own paths. The three strategies exist because real project needs revealed themselves one at a time, not because of a plan drawn up on day one.",
    ],
  },
  {
    id: "05",
    title: "Why three separate templates, not one with feature flags",
    body: [
      "My portfolio uses a feature-flag pattern for optional pieces. AuthKit doesn't, on purpose. Backend code is deeply interconnected in a way frontend feature flags aren't - if I bolted a flag onto one auth system to toggle RBAC or OTP on and off, that file would balloon, and anyone who only wanted Basic auth would still be carrying dead weight and reading around branches that don't apply to them.",
      "Three separate templates keep each one readable and exactly as heavy as it needs to be. This also wasn't a decision made in advance - the project existed before I'd even built the feature-flag pattern I use elsewhere.",
    ],
  },
  {
    id: "06",
    title: "Would I rebuild it differently",
    body: [
      "No. The project is already structured so I can add new auth strategies later without touching the existing ones - each strategy is its own separated code path. That was the right call going in, even if it wasn't a fully deliberate one at the time.",
    ],
  },
];

const architecturePoints = [
  {
    title: "Refresh token rotation, not a single long-lived token",
    body: "A single long-lived refresh token is a liability - if it leaks, it's valid until it expires, full stop. With rotation, every refresh issues a new token and invalidates the old one in the database. If a user logs out, that refresh token is gone immediately - even if an attacker already had it, it's dead the moment the real user logs out.",
  },
  {
    title: "Compound rate limiting (email + IP), not just IP",
    body: "IP-only limiting has an obvious hole: one attacker, many emails, no per-account protection. Compound limiting keys off both the target email and the client IP together, so brute-forcing one specific account is throttled independently of general traffic from that IP. Basic auth login uses both - 20 req/15min by IP, 5 req/1hr by email - and OTP endpoints use the same compound pattern.",
  },
  {
    title: "Zod for validation",
    body: "No exotic reasoning here - already using it, already familiar with it, no reason to bring in Joi or express-validator for the same job.",
  },
  {
    title: "Anti-enumeration on password recovery",
    body: "forget-password always returns the same generic success message, whether or not the email exists in the database. This is a deliberate anti-enumeration pattern - a different response for \"email exists\" vs \"email doesn't\" is an attacker's free account discovery tool.",
  },
  {
    title: "Single-use JTI reset tokens",
    body: "Password reset tokens carry a unique jti claim and get flagged used: true on first submission. A reset token that still works after it's already been used is a replay vulnerability waiting to happen - this closes it.",
  },
];

const tracks = [
  {
    label: "Learning auth?",
    body: "The code is written with correct status codes, precise error messages, and each module scoped to a single responsibility. Reading it teaches the pattern, not just the output.",
  },
  {
    label: "Want to own your backend?",
    body: "No third-party auth provider, no vendor lock-in. You get the actual code, in your repo, under your control.",
  },
  {
    label: "Want to move fast?",
    body: "Skip the auth chapter entirely. Every new backend or full-stack project starts with the same boring auth setup - scaffold it in seconds and go straight to the part of the project that's actually yours.",
  },
];

export default function WhyPage() {
  return (
    <div className="container py-16 md:py-24">

      {/* ── Page header ── */}
      <div className="mb-14 md:mb-18">
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-6">
          why authkit
        </p>
        <h1 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight leading-[1.15] text-text-primary mb-5 max-w-120">
          Why I built this, and why it works the way it does.
        </h1>
        <p className="text-[0.9375rem] text-text-secondary leading-[1.75] max-w-135">
          Six files. Honest answers about where AuthKit came from, what it doesn't try to be, and the decisions that shaped how it's built.
        </p>
      </div>

      {/* ── FILE sections ── */}
      <section className="mb-16 md:mb-20">
        <div className="flex flex-col gap-12">
          {files.map((file) => (
            <div key={file.id}>
              {/* FILE label */}
              <p className="font-mono text-xs text-text-muted tracking-widest mb-2">
                FILE · {file.id}
              </p>
              {/* Section title */}
              <h2 className="text-[1rem] font-medium text-text-primary mb-4 leading-snug">
                {file.title}
              </h2>
              {/* Body paragraphs */}
              <div className="flex flex-col gap-3 max-w-150">
                {file.body.map((para, i) => (
                  <p key={i} className="text-[0.9375rem] text-text-secondary leading-[1.75]">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <hr className="divider mb-14 md:mb-18" />

      {/* ── Architecture decisions ── */}
      <section className="mb-16 md:mb-20">
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-6">
          architecture decisions
        </p>
        <h2 className="text-[1.25rem] font-semibold tracking-tight text-text-primary mb-10 leading-snug">
          Why this, not the simpler thing.
        </h2>

        <div className="flex flex-col divide-y divide-border">
          {architecturePoints.map((point, i) => (
            <div key={i} className="py-6 first:pt-0 last:pb-0 max-w-150">
              <h3 className="text-[0.9375rem] font-medium text-text-primary mb-2.5 leading-snug">
                {point.title}
              </h3>
              <p className="text-sm text-text-secondary leading-[1.75]">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <hr className="divider mb-14 md:mb-18" />

      {/* ── Who it's for ── */}
      <section className="mb-16 md:mb-20">
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-6">
          who it's for
        </p>
        <h2 className="text-[1.25rem] font-semibold tracking-tight text-text-primary mb-10 leading-snug">
          Three reasons to use it.
        </h2>

        <div className="flex flex-col gap-2 max-w-150">
          {tracks.map((track, i) => (
            <div
              key={i}
              className="border border-border-card rounded-md px-5 py-5 hover:bg-surface-card transition-colors duration-150"
            >
              <h3 className="text-[0.9375rem] font-medium text-text-primary mb-2">
                {track.label}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {track.body}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <p className="text-sm text-text-muted mt-8 max-w-135 leading-relaxed">
          Same code an AI could write for you in five minutes - except this version is already tested, already fixed, and installs its own dependencies while it's at it. The value isn't the code. It's not having to verify it again.
        </p>
      </section>

      {/* ── Divider ── */}
      <hr className="divider mb-14 md:mb-18" />

      {/* ── Personal note ── */}
      <section>
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-6">
          personal note
        </p>
        <blockquote className="border-l-2 border-border-card pl-5 max-w-140">
          <p className="text-[0.9375rem] text-text-secondary leading-[1.75] italic">
            I got tired of writing the same 200 lines of auth boilerplate for every new project, then testing it all over again each time. AuthKit exists so I don't have to - and so whoever uses it can pick the strategy that actually matches what they're building instead of carrying code they don't need.
          </p>
        </blockquote>
      </section>

    </div>
  );
}
