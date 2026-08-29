import CopyButton from "./copy-button";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className = "" }: CodeBlockProps) {
  return (
    <div className={`relative group ${className}`}>
      <pre className="text-[0.8125rem] leading-[1.6] bg-code-bg border border-code-border p-5 rounded-xl overflow-x-auto text-text-primary pr-14">
        {code}
      </pre>
      <div className="absolute top-3 right-3 p-1.5 rounded-md bg-bg-primary border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm flex items-center justify-center">
        <CopyButton text={code} />
      </div>
    </div>
  );
}
