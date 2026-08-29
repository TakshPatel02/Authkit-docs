import type { Metadata } from "next";
import { FolderTree } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Architecture - AuthKit Docs",
  description: "Directory structures for JavaScript and TypeScript templates.",
};

const jsTree = `|-- .env.example
|-- .gitignore
|-- index.js
|-- package.json
+-- src/
    |-- app.js
    |-- config/
    |   +-- db.js
    |-- controllers/
    |   +-- user.controller.js
    |-- middlewares/
    |   |-- auth.middleware.js
    |   |-- isAdmin.middleware.js      // Role-Based only
    |   +-- rateLimiter.middleware.js
    |-- models/
    |   |-- user.model.js
    |   |-- otp.model.js               // OTP only
    |   +-- resetToken.model.js        // OTP only
    |-- routes/
    |   +-- user.routes.js
    |-- services/
    |   +-- email.service.js           // OTP only
    |-- utils/
    |   |-- token.util.js
    |   +-- otp.util.js                // OTP only
    +-- validations/
        +-- user.validation.js`;

const tsTree = `|-- .env.example
|-- .gitignore
|-- tsconfig.json
|-- package.json
+-- src/
    |-- index.ts
    |-- app.ts
    |-- config/
    |   +-- db.ts
    |-- controllers/
    |   +-- user.controller.ts
    |-- middlewares/
    |   |-- auth.middleware.ts
    |   |-- isAdmin.middleware.ts      // Role-Based only
    |   +-- rateLimiter.middleware.ts
    |-- models/
    |   |-- user.model.ts
    |   |-- otp.model.ts               // OTP only
    |   +-- resetToken.model.ts        // OTP only
    |-- routes/
    |   +-- user.routes.ts
    |-- services/
    |   +-- email.service.ts           // OTP only
    |-- types/
    |   |-- apiResponse.types.ts
    |   |-- express.d.ts
    |   |-- jwt.types.ts
    |   +-- user.types.ts
    |-- utils/
    |   |-- token.util.ts
    |   +-- otp.util.ts                // OTP only
    +-- validations/
        +-- auth.validation.ts`;

export default function ArchitecturePage() {
  return (
    <div>
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
        reference
      </p>
      <h1 className="text-[1.5rem] font-semibold tracking-tight leading-tight text-text-primary mb-3">
        Project Architecture
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-10">
        AuthKit outputs a standard MVC-style Express architecture. Everything is modular, decoupled, and neatly organized into dedicated layers so it's easy to extend.
      </p>

      {/* ── JavaScript Tree ── */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-4">
          <FolderTree size={16} className="text-text-muted" />
          <h2 className="text-[1.0625rem] font-medium text-text-primary">
            JavaScript Structure
          </h2>
        </div>
        <pre className="text-[0.8125rem] leading-[1.6] bg-code-bg border border-code-border p-5 rounded-xl overflow-x-auto text-text-primary">
          {jsTree}
        </pre>
      </div>

      {/* ── TypeScript Tree ── */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <FolderTree size={16} className="text-text-muted" />
          <h2 className="text-[1.0625rem] font-medium text-text-primary">
            TypeScript Structure
          </h2>
        </div>
        <pre className="text-[0.8125rem] leading-[1.6] bg-code-bg border border-code-border p-5 rounded-xl overflow-x-auto text-text-primary">
          {tsTree}
        </pre>
        <p className="text-[0.9375rem] text-text-secondary leading-relaxed mt-4">
          TypeScript scaffolding additionally includes a dedicated <span className="font-mono text-[0.8125rem] text-text-primary bg-code-bg border border-code-border px-1.5 py-0.5 rounded">types/</span> directory to hold shared interfaces and global type augmentations (like extending <span className="font-mono text-[0.8125rem] text-text-primary bg-code-bg border border-code-border px-1.5 py-0.5 rounded">Express.Request</span>).
        </p>
      </div>
    </div>
  );
}
