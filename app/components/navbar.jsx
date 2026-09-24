"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Shared brand tokens (kept in sync across Navbar, Timer, Footer,
 * FeeImpactCard, and the policy/ticket sections):
 *   maroon      #8B2E2E   primary / links / CTAs
 *   maroon-dark #6E2323   hover state
 *   ink         #241C1A   dark surfaces (timer bar, footer base)
 *   cream       #FAF6EE   page background
 *   gold        #D9A441   accent, used sparingly for emphasis
 */

const links = [
  { href: "/platform", label: "Platform" },
  { href: "/candidates", label: "Candidates" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b border-[#8B2E2E]/10 bg-[#FAF6EE]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid h-18 grid-cols-[auto_1fr_auto] items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#8B2E2E] text-sm font-bold text-white">
              R
            </div>
            <span className="text-lg font-semibold tracking-tight text-[#241C1A]">
              ReformUMD
            </span>
          </Link>

          {/* Nav links — centered, desktop only */}
          <div className="hidden items-center justify-center gap-9 sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#241C1A]/75 transition-colors hover:text-[#8B2E2E]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: spacer on desktop, menu toggle on mobile */}
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-md text-[#241C1A] transition-colors hover:text-[#8B2E2E] sm:hidden"
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="flex flex-col gap-1 border-t border-[#8B2E2E]/10 pb-4 pt-2 sm:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-[#241C1A]/75 transition-colors hover:bg-[#8B2E2E]/5 hover:text-[#8B2E2E]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}