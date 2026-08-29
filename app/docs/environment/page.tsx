import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Environment Variables - AuthKit Docs",
  description: "Environment configuration requirements for each AuthKit template.",
};

const envBasic = `# Server
PORT=8000
CORS_ORIGIN=http://localhost:3000

# Database
MONGODB_URL=mongodb://localhost:27017/myapp

# JWT Secrets
ACCESS_JWT_SECRET=your_access_secret_here
REFRESH_JWT_SECRET=your_refresh_secret_here

# JWT Lifespans (Optional)
ACCESS_JWT_EXPIRES_IN=15m
REFRESH_JWT_EXPIRES_IN=7d`;

const envOtp = `# Server
PORT=8000
CORS_ORIGIN=http://localhost:3000

# Database
MONGODB_URL=mongodb://localhost:27017/myapp

# JWT Secrets
ACCESS_JWT_SECRET=your_access_secret_here
REFRESH_JWT_SECRET=your_refresh_secret_here
JWT_RESET_PASSWORD_TOKEN_SECRET=your_reset_secret_here

# JWT Lifespans (Optional)
ACCESS_JWT_EXPIRES_IN=15m
REFRESH_JWT_EXPIRES_IN=7d
RESET_PASSWORD_JWT_EXPIRES_IN=15m

# Nodemailer OTP
GOOGLE_USER=your_email@gmail.com
GOOGLE_APP_PASSWORD=your_16_char_app_password`;

export default function EnvironmentPage() {
  return (
    <div>
      {/* ── Header ── */}
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
        configuration
      </p>
      <h1 className="text-[1.5rem] font-semibold tracking-tight leading-tight text-text-primary mb-3">
        Environment Variables
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-10">
        A breakdown of the environment variables required for each authentication template.
        All scaffolding creates an <span className="font-mono text-[0.8125rem] text-text-primary">.env.example</span> file automatically.
      </p>

      {/* ── Basic & Role-Based Auth ── */}
      <div className="mb-14">
        <h2 className="text-[1rem] font-medium text-text-primary mb-2">
          Basic & Role-Based Auth
        </h2>
        <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-4">
          Both the Basic and Role-Based templates require the exact same environment variables.
        </p>
        <pre>{envBasic}</pre>
      </div>

      {/* ── OTP Verification ── */}
      <div>
        <h2 className="text-[1rem] font-medium text-text-primary mb-4">
          OTP Verification
        </h2>
        <pre className="mb-4">{envOtp}</pre>
        
        {/* ── Gmail App Password Note ── */}
        <div className="py-3.5">
          <p className="text-sm text-text-secondary leading-relaxed">
            <span className="font-medium text-text-primary">Gmail App Password —</span>{" "}
            Email delivery uses a Gmail account with an App Password (not OAuth2). Generate one from your <span className="font-medium text-text-primary">Google Account → Security → 2-Step Verification → App Passwords</span>. Requires 2FA to be enabled on the account.
          </p>
        </div>
      </div>

    </div>
  );
}
