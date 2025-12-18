"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/types/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full z-40 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
        >
          basak.dev
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded hover:bg-muted transition-colors"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 w-48 h-full bg-background shadow-lg p-6 flex flex-col gap-4 items-end md:hidden z-50">
            <button
              onClick={() => setMenuOpen(false)}
              className="mb-4 p-2 rounded-full hover:bg-muted"
              aria-label="Close menu"
            >
              <X className="size-6" />
            </button>

            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </nav>
  );
}

