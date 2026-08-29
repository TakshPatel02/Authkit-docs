import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customization & Extending - AuthKit Docs",
  description: "Learn how to protect new routes and add role-based guards using AuthKit's middlewares.",
};

const protectRouteCode = `import express from 'express';
import { authMiddleware } from './middlewares/auth.middleware.js';

const router = express.Router();

// Apply authMiddleware to protect this route
router.get('/profile', authMiddleware, (req, res) => {
    // req.user is securely injected by authMiddleware
    res.json({ success: true, user: req.user });
});

export default router;`;

const roleGuardCode = `import { authMiddleware } from '../middlewares/auth.middleware.js';
import { isAdmin } from '../middlewares/isAdmin.middleware.js';

// Apply both middlewares sequentially to restrict access to admins
router.delete('/users/:id', authMiddleware, isAdmin, deleteUserController);`;

export default function CustomizationPage() {
  return (
    <div>
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
        project
      </p>
      <h1 className="text-[1.5rem] font-semibold tracking-tight leading-tight text-text-primary mb-3">
        Customization & Extending
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-12">
        AuthKit is built to be a springboard, not a black box. Because you completely own the generated code, 
        extending the backend to protect your own specific routes is as simple as dropping in the included middlewares.
      </p>

      {/* ── Protecting New Routes ── */}
      <div className="mb-14">
        <h2 className="text-[1.125rem] font-medium text-text-primary mb-4 leading-snug">
          Protecting new routes
        </h2>
        <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
          To require authentication on any endpoint, import and apply the <span className="font-mono text-[0.8125rem] text-text-primary bg-code-bg border border-code-border px-1.5 py-0.5 rounded">authMiddleware</span>. 
          If successful, it securely attaches the decoded JWT payload directly to <span className="font-mono text-[0.8125rem] text-text-primary bg-code-bg border border-code-border px-1.5 py-0.5 rounded">req.user</span>.
        </p>
        <pre className="text-[0.8125rem] leading-[1.6] bg-code-bg border border-code-border p-5 rounded-xl overflow-x-auto text-text-primary">
          {protectRouteCode}
        </pre>
      </div>

      {/* ── Adding Role-Based Guards ── */}
      <div>
        <h2 className="text-[1.125rem] font-medium text-text-primary mb-4 leading-snug">
          Adding role-based guards
        </h2>
        <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
          If you generated a Role-Based template, you can chain the <span className="font-mono text-[0.8125rem] text-text-primary bg-code-bg border border-code-border px-1.5 py-0.5 rounded">isAdmin</span> guard immediately 
          after the <span className="font-mono text-[0.8125rem] text-text-primary bg-code-bg border border-code-border px-1.5 py-0.5 rounded">authMiddleware</span> to strictly restrict an endpoint to administrators only.
        </p>
        <pre className="text-[0.8125rem] leading-[1.6] bg-code-bg border border-code-border p-5 rounded-xl overflow-x-auto text-text-primary">
          {roleGuardCode}
        </pre>
      </div>

    </div>
  );
}
