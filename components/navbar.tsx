"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Why AuthKit", href: "/why" },
  { label: "Docs", href: "/docs" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 h-(--docs-header-height) bg-bg-primary border-b border-border transition-colors duration-300">
      <div className="container h-full flex items-center justify-between">

        {/* Brand — mono font, bold, always text-primary (not accent) */}
        <Link
          href="/"
          className="font-mono font-bold text-[0.9375rem] text-text-primary! tracking-tight"
        >
          AuthKit
        </Link>

        {/* Right: nav links + GitHub + theme toggle */}
        <nav className="flex items-center gap-1">

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm px-2 py-1 transition-colors duration-150 ${
                isActive(link.href)
                  ? "font-medium text-accent"
                  : "font-normal text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Divider */}
          <span className="w-px h-3.5 bg-border mx-0.5 shrink-0" />

          {/* GitHub */}
          <a
            href="https://github.com/TakshPatel02/create-express-authkit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary px-2 py-1 transition-colors duration-150"
          >
            GitHub
            <ArrowUpRight size={12} className="opacity-50" />
          </a>

          {/* Theme toggle — text-text-muted floor so icon is always visible */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-150 cursor-pointer bg-transparent border-none"
          >
            {theme === "dark"
              ? <Sun size={14} strokeWidth={1.5} />
              : <Moon size={13} strokeWidth={1.5} />
            }
          </button>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;

