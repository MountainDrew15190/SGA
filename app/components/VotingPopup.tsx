"use client";

import { useEffect, useRef, useState } from "react";
import { plusJakartaSans } from "../fonts";

// TODO: replace with your real voting link
const VOTING_URL = "https://umdsurvey.umd.edu/jfe/form/SV_aWezRKp3aiYpeMm";

export default function VotingPopup() {
  const [open, setOpen] = useState(true);
  const linkRef = useRef<HTMLAnchorElement>(null);

  // Close on Escape, focus the voting link on open
  useEffect(() => {
    if (!open) return;
    linkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#241C1A]/60 px-6"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="voting-popup-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-2xl bg-[#FAF6EE] p-8 text-center shadow-xl"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-2xl leading-none text-[#241C1A]/60 hover:bg-[#241C1A]/10 hover:text-[#241C1A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#241C1A]"
        >
          &times;
        </button>

        <h2
          id="voting-popup-title"
          className={`${plusJakartaSans.className} text-3xl font-bold text-[#241C1A] sm:text-4xl`}
        >
          Voting has opened
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-[#241C1A]/70">
          Cast your vote now.
        </p>

        <a
          ref={linkRef}
          href={VOTING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-[#241C1A] px-8 py-3 text-base font-semibold text-[#FAF6EE] hover:bg-[#241C1A]/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#241C1A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF6EE]"
        >
          Vote now
        </a>
      </div>
    </div>
  );
}
