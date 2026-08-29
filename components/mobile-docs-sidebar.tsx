"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import DocsSidebar from "./docs-sidebar";
import { usePathname } from "next/navigation";

export default function MobileDocsSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar on route change automatically
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="xl:hidden">
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/60 z-40 backdrop-blur-[2px] transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Sidebar */}
      <div 
        className={`fixed top-0 bottom-0 left-0 w-70 bg-bg-primary border-r border-border z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto shadow-2xl ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 pb-2">
          <span className="font-mono font-bold text-[0.9375rem] text-text-primary tracking-tight">
            Docs Menu
          </span>
        </div>
        <div className="pt-2">
          <DocsSidebar onLinkClick={() => setIsOpen(false)} />
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-text-primary text-bg-primary rounded-full flex items-center justify-center shadow-xl shadow-black/10 dark:shadow-black/40 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Toggle Docs Menu"
      >
        {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
      </button>
    </div>
  );
}
