"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navGroups = [
  {
    label: "Getting Started",
    links: [
      { label: "Quick Start", href: "/docs" },
    ],
  },
  {
    label: "Reference",
    links: [
      { label: "Templates", href: "/docs/templates" },
      { label: "Environment", href: "/docs/environment" },
      { label: "API Reference", href: "/docs/api" },
      { label: "Security", href: "/docs/security" },
    ],
  },
  {
    label: "Project",
    links: [
      { label: "Architecture", href: "/docs/architecture" },
      { label: "Customization", href: "/docs/customization" },
      { label: "Scripts", href: "/docs/scripts" },
      { label: "Tech Stack", href: "/docs/tech-stack" },
    ],
  },
];

const DocsSidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/docs") return pathname === "/docs";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav className="w-full flex flex-col gap-6 py-10 px-4">
      {navGroups.map((group) => (
        <div key={group.label}>

          {/* Group label */}
          <p className="font-mono text-[0.6875rem] text-text-muted tracking-widest uppercase mb-2 px-2">
            {group.label}
          </p>

          {/* Links */}
          <ul className="flex flex-col gap-0.5">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-sm px-2 py-1.5 rounded-md transition-colors duration-150 ${
                    isActive(link.href)
                      ? "font-medium text-accent"
                      : "font-normal text-text-secondary hover:text-text-primary hover:bg-hover-bg"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      ))}
    </nav>
  );
};

export default DocsSidebar;
