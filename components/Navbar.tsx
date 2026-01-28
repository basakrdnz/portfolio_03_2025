"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/types/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled && !menuOpen
        ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-200/50"
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-slate-900 hover:text-slate-600 transition-colors lowercase"
        >
          basak.dev
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-1 items-center bg-slate-100/95 backdrop-blur-md rounded-full px-2 py-1.5 border border-slate-200 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.2)]">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-bold transition-all duration-300",
                pathname === item.href
                  ? "bg-slate-900 text-white shadow-lg"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100/50 transition-all"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-5 text-slate-600" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-[100] flex flex-col"
            >
              <div className="p-6 flex flex-col h-full uppercase md:normal-case">
                <div className="flex justify-between items-center mb-10">
                  <span className="text-xl font-bold text-slate-900 lowercase">basak.dev</span>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="size-5 text-slate-600" />
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "px-5 py-4 rounded-2xl text-lg font-bold transition-all duration-300 flex items-center justify-between group text-left",
                        pathname === item.href
                          ? "bg-slate-900 text-white shadow-xl shadow-slate-900/20"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      )}
                    >
                      {item.label}
                      {pathname === item.href && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </Link>
                  ))}
                </div>

                {/* Brand at bottom */}
                <div className="mt-auto pt-8 border-t border-slate-50">
                  <p className="text-[11px] font-medium text-slate-400 text-center tracking-widest lowercase">
                    © {new Date().getFullYear()} basak.dev
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
