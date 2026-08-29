import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Portfolio", href: "https://takshpatel.vercel.app", external: true },
  { label: "GitHub", href: "https://github.com/TakshPatel02/create-express-authkit", external: true },
  { label: "npm", href: "https://www.npmjs.com/package/create-express-authkit", external: true },
  { label: "Issues", href: "https://github.com/TakshPatel02/create-express-authkit/issues", external: true },
];

const Footer = () => {
  return (
    <footer className="relative z-10 bg-bg-primary border-t border-border mt-auto">
      <div className="container py-8 flex flex-col-reverse md:flex-row items-center justify-between gap-6">

        {/* Left: copyright */}
        <p className="font-mono text-xs text-text-muted text-center md:text-left">
          © {new Date().getFullYear()} Taksh Patel · MIT License
        </p>

        {/* Right: links */}
        <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 font-mono text-xs text-text-muted hover:text-text-primary transition-colors duration-150"
            >
              {link.label}
              <ArrowUpRight size={10} className="opacity-50" />
            </a>
          ))}
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
