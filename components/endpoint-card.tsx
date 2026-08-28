import { ReactNode } from "react";

function MethodBadge({ method }: { method: string }) {
  const colors = {
    POST: "text-[#34d399] bg-[#34d399]/10 border-[#34d399]/20",
    GET: "text-[#60a5fa] bg-[#60a5fa]/10 border-[#60a5fa]/20",
    DELETE: "text-[#f87171] bg-[#f87171]/10 border-[#f87171]/20",
  };
  const colorClass = colors[method as keyof typeof colors] || "text-text-secondary bg-code-bg border-code-border";
  return (
    <span className={`font-mono text-[0.6875rem] font-medium tracking-wide px-2 py-0.5 rounded border ${colorClass}`}>
      {method}
    </span>
  );
}

interface EndpointCardProps {
  method: string;
  endpoint: string;
  description: string;
  auth: string;
  rateLimit?: string;
  middleware?: string;
  children?: ReactNode; // For request/response code blocks
}

export function EndpointCard({
  method,
  endpoint,
  description,
  auth,
  rateLimit,
  middleware,
  children,
}: EndpointCardProps) {
  return (
    <div className="border border-border rounded-xl p-6 mb-8 bg-surface-card shadow-sm hover:border-text-muted transition-colors duration-200">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <MethodBadge method={method} />
        <h3 className="font-mono text-[1.0625rem] text-text-primary tracking-tight">
          {endpoint}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-6">
        {description}
      </p>

      {/* Metadata Flexbox */}
      <div className="flex flex-wrap gap-x-8 gap-y-4 mb-6">
        <div className="flex flex-col">
          <span className="text-[0.6875rem] font-semibold text-text-muted uppercase tracking-wider mb-1">
            Auth
          </span>
          <span className="text-sm text-text-primary font-medium">{auth}</span>
        </div>
        
        {rateLimit && (
          <div className="flex flex-col">
            <span className="text-[0.6875rem] font-semibold text-text-muted uppercase tracking-wider mb-1">
              Rate Limit
            </span>
            <span className="text-sm text-text-primary font-medium">{rateLimit}</span>
          </div>
        )}
        
        {middleware && (
          <div className="flex flex-col">
            <span className="text-[0.6875rem] font-semibold text-text-muted uppercase tracking-wider mb-1">
              Middleware
            </span>
            <span className="text-sm text-text-primary font-medium">{middleware}</span>
          </div>
        )}
      </div>

      {/* Snippets / Body */}
      {children && (
        <div className="mt-6 pt-6 border-t border-border/50">
          {children}
        </div>
      )}
    </div>
  );
}
