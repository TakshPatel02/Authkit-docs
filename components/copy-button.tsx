"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      className="shrink-0 text-text-muted hover:text-text-primary transition-colors duration-150 cursor-pointer bg-transparent border-none p-0"
    >
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
};

export default CopyButton;
