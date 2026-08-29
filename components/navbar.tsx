"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Why AuthKit", href: "/why" },
  { label: "Docs", href: "/docs" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 bg-bg-primary border-b border-border transition-colors duration-300">
      <div className="h-(--docs-header-height) container flex items-center justify-between">

        {/* Brand — mono font, bold, always text-primary (not accent) */}
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-mono font-bold text-[0.9375rem] text-text-primary! tracking-tight"
        >
          AuthKit
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">

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
            className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-150 cursor-pointer bg-transparent border-none ml-1"
          >
            {theme === "dark"
              ? <Sun size={14} strokeWidth={1.5} />
              : <Moon size={13} strokeWidth={1.5} />
            }
          </button>

        </nav>

        {/* Mobile Toggle + Theme (visible on mobile) */}
        <div className="flex items-center gap-1 md:hidden">
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
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors duration-150 cursor-pointer bg-transparent border-none"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-bg-primary absolute w-full top-full left-0 max-h-[calc(100vh-var(--docs-header-height))] overflow-y-auto shadow-lg shadow-black/5 dark:shadow-black/20 pb-4">
          <nav className="flex flex-col py-4 px-6 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-[1.0625rem] font-medium transition-colors duration-150 ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Divider */}
            <div className="w-full h-px bg-border my-1" />

            <a
              href="https://github.com/TakshPatel02/create-express-authkit"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-[1.0625rem] font-medium text-text-secondary hover:text-text-primary transition-colors duration-150"
            >
              GitHub
              <ArrowUpRight size={18} className="opacity-50" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
