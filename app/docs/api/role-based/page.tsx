import type { Metadata } from "next";
import { EndpointCard } from "@/components/endpoint-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Role-Based API - AuthKit Docs",
  description: "API Reference for the Role-Based Auth template.",
};

export default function RoleBasedApiPage() {
  return (
    <div>
      <div className="mb-6">
        <Link 
          href="/docs/api" 
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back to API Hub
        </Link>
      </div>
      <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-5">
        api reference
      </p>
      <h1 className="text-[1.5rem] font-semibold tracking-tight leading-tight text-text-primary mb-3">
        Role-Based Endpoints
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-10">
        Adds role assignment and guard middleware on top of the Basic endpoints.
        All routes are prefixed with <span className="font-mono text-[0.8125rem] text-text-primary bg-code-bg border border-code-border px-1.5 py-0.5 rounded">/api/v1/users</span>.
      </p>

      <hr className="divider mb-10" />

      <EndpointCard
        method="POST"
        endpoint="/register"
        description="Register a new user with an optional role parameter."
        auth="No"
        middleware="registerLimiter"
      >
        <pre className="mb-2">{`/ / Request
{ 
 "name": "Admin User", 
 "email": "admin@example.com", 
 "password": "AdminPassword123", 
 "role": "admin" 
}
// role defaults to "user" if omitted

// Response 201
{ 
 "success": true, 
 "message": "User registered successfully", 
 "data": { 
  "userId": "67b8fa98765432100fedcba2" 
 } 
}`}</pre>
      </EndpointCard>

      <EndpointCard
        method="POST"
        endpoint="/login"
        description="Login, returning a JWT that includes the role claim."
        auth="No"
        middleware="loginIpLimiter, loginEmailLimiter"
      >
        <pre className="mb-2">{`// Request
{
 "email": "admin@example.com",
 "password": "AdminPassword123"
}

// Response 200
{
 "success": true,
 "message": "Login successful",
 "data": {
  "accessToken": "eyJ...",
  "role": "admin"
 }
}`}</pre>
        <p className="text-[0.8125rem] text-text-muted italic mt-3">A secure HttpOnly refreshToken cookie is set automatically.</p>
      </EndpointCard>

      <EndpointCard
        method="POST"
        endpoint="/refresh-token"
        description="Refresh tokens (retains the role claim in the new access token)."
        auth="Cookie (refreshToken)"
        middleware="refreshTokenLimiter"
      >
        <pre>{`// Response 200
{   
 "success": true,
 "message": "Access token refreshed successfully.",
 "data": {
  "accessToken": "eyJ...",
  "role": "admin"
 }
}`}</pre>
      </EndpointCard>

      <EndpointCard
        method="DELETE"
        endpoint="/logout"
        description="Logout and clear the HttpOnly cookie."
        auth="Cookie (refreshToken)"
        middleware="None"
      >
        <pre>{`// Response 200
{
 "success": true, 
 "message": "Logout successful"
}`}</pre>
      </EndpointCard>

      <EndpointCard
        method="GET"
        endpoint="/admin-only"
        description="Sample protected route utilizing the isAdmin guard middleware."
        auth="Bearer (Access Token)"
        middleware="authMiddleware, isAdmin"
      >
        <pre className="mb-2">{`Authorization: Bearer <access_token>`}</pre>
        <pre>{`// 200 OK
{
 "success": true,
 "message": "Welcome, Admin!"
}

// 403 Forbidden (non-admin)
{
 "success": false,
 "message": "Forbidden: Admins only"
}`}</pre>
      </EndpointCard>

    </div>
  );
}
