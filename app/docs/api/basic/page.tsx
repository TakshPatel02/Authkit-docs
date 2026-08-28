import type { Metadata } from "next";
import { EndpointCard } from "@/components/endpoint-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Basic Auth API - AuthKit Docs",
  description: "API Reference for the Basic Auth template.",
};

export default function BasicApiPage() {
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
        Basic Auth Endpoints
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-10">
        Endpoints for email/password registration, login, token refresh, and logout. 
        All routes are prefixed with <span className="font-mono text-[0.8125rem] text-text-primary bg-code-bg border border-code-border px-1.5 py-0.5 rounded">/api/v1/users</span>.
      </p>

      <hr className="divider mb-10" />

      <EndpointCard
        method="POST"
        endpoint="/register"
        description="Register a new user."
        auth="No"
        rateLimit="5/1hr (IP)"
      >
        <pre className="mb-2">{`// Request
{ 
 "name": "Jane Doe", 
 "email": "jane@example.com", 
 "password": "Password123" 
}

// Response 201
{ 
 "success": true,
 "message": "User registered successfully",
 "data": {
   "userId": "67b8f9e1234567890abcdef1"
 }
}`}</pre>
      </EndpointCard>

      <EndpointCard
        method="POST"
        endpoint="/login"
        description="Authenticate user credentials and issue JWT tokens."
        auth="No"
        rateLimit="20/15m (IP) + 5/1hr (Email)"
      >
        <pre className="mb-2">{`// Request
{ 
 "email": "jane@example.com",
  "password": "Password123" 
}

// Response 200
{ 
 "success": true, 
 "message": "Login successful", 
 "data": { 
  "accessToken": "eyJ..." 
 } 
}`}</pre>
        <p className="text-[0.8125rem] text-text-muted italic mt-3">A secure HttpOnly refreshToken cookie is set automatically.</p>
      </EndpointCard>

      <EndpointCard
        method="POST"
        endpoint="/refresh-token"
        description="Rotate access and refresh tokens using an existing valid refresh cookie."
        auth="Cookie (refreshToken)"
        rateLimit="20/15m (IP)"
      >
        <pre>{`// Response 200
{ 
 "success": true,
 "message": "Access token refreshed successfully.",
"data": {
  "accessToken": "eyJ..."
 }
}`}</pre>
      </EndpointCard>

      <EndpointCard
        method="DELETE"
        endpoint="/logout"
        description="Invalidate the refresh token in the database and clear the HttpOnly cookie."
        auth="Cookie (refreshToken)"
        rateLimit="None"
      >
        <pre>{`// Response 200
{
 "success": true,
 "message": "Logout successful"
}`}</pre>
      </EndpointCard>

      <EndpointCard
        method="GET"
        endpoint="/health"
        description="Public health check route."
        auth="No"
        rateLimit="None"
      />
    </div>
  );
}
