import type { Metadata } from "next";
import { EndpointCard } from "@/components/endpoint-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "OTP Verification API - AuthKit Docs",
  description: "API Reference for the OTP Verification template.",
};

export default function OtpApiPage() {
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
        OTP Verification Endpoints
      </h1>
      <p className="text-[0.9375rem] text-text-secondary leading-[1.75] mb-10">
        Full password-reset lifecycle via 6-digit email OTPs.
        All routes are prefixed with <span className="font-mono text-[0.8125rem] text-text-primary bg-code-bg border border-code-border px-1.5 py-0.5 rounded">/api/v1/users</span>.
      </p>

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

      <EndpointCard
        method="POST"
        endpoint="/forget-password"
        description="Request a 6-digit OTP to be sent to the user's email address."
        auth="No"
        rateLimit="5/15m (Email+IP)"
      >
        <pre className="mb-2">{`// Request
{ 
 "email": "jane@example.com" 
}

// Response 200
{ 
 "success": true, 
 "message": "If this email exists, an OTP has been sent." 
}`}</pre>
        <p className="text-[0.8125rem] text-text-muted italic mt-3">Timing-safe generic response — prevents email enumeration.</p>
      </EndpointCard>

      <EndpointCard
        method="POST"
        endpoint="/verify-reset-otp"
        description="Verify the 6-digit OTP and receive a single-use JWT reset token."
        auth="No"
        rateLimit="10/15m (Email+IP)"
      >
        <pre className="mb-2">{`// Request
{ 
 "email": "jane@example.com",
    "otp": "839201" 
}

// Response 200
{ 
 "success": true,
 "message": "OTP verified successfully. You can now reset your password.",
 "data": {
  "resetToken": "eyJ..."
 }
}`}</pre>
      </EndpointCard>

      <EndpointCard
        method="POST"
        endpoint="/reset-password"
        description="Submit the new password utilizing the secure reset token."
        auth="Bearer (Reset Token)"
        rateLimit="10/15m (Email+IP)"
      >
        <pre className="mb-2">{`Authorization: Bearer <resetToken>`}</pre>
        <pre>{`// Request
{ 
 "newPassword": "NewSecurePassword456"  
}

// Response 200
{ 
 "success": true, 
 "message": "Password reset successfully. Please log in with your new password." 
}`}</pre>
      </EndpointCard>

    </div>
  );
}
