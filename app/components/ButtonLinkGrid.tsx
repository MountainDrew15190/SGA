
'use client'
import Link from "next/link";
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
// --- Content: swap these arrays for your real links/labels ---
const gridButtons:btn[] = [
  { label: "Affordability", href: "" },
  { label: "Representation", href: "/platform#Representation" },
  { label: "Campus Safety", href: "/platform#CampusSafety" },
  { label: "Financial Reform", href: "/platform#FundingReform" },
];

const rowButtons:btn[] = [
{label: "Transparency", href: "/platform#Transparency" },
  { label: "City/State Policy", href: "/platform#CityState" },
  { label: "Dining", href: "/platform#Dining" },
];

const gridBtnClass =
  "flex items-center justify-center text-center w-full py-4 px-4 rounded-lg font-semibold text-white bg-[#8B2E2E] hover:bg-[#6E2323] transition-colors";

const rowBtnClass =
  "flex items-center justify-center text-center w-full py-4 px-4 rounded-lg font-semibold text-black hover:bg-[#8B2E2E] transition-colors bg-[#D9A441] ";

interface btn {
  href: string;
  label: string;
}


interface ScrollNavProps {
  onScrollTo: (id: string) => void
}
export default function ButtonLinkGrid({ onScrollTo }: ScrollNavProps) {

  return (
    <div className="w-screen bg-[#FAF6EE] py-12 px-4 sm:px-8">
      {/* 2x2 grid, full width */}
      <div className="grid grid-cols-2 gap-4 w-full mb-8">
        {gridButtons.map((btn:btn) => (
          <button key={btn.label} onClick={() => onScrollTo(btn.label)} className={gridBtnClass}>
            {btn.label}
          </button>
        ))}
      </div>

      {/* 1x3 row, full width */}
      <div className="grid grid-cols-3 gap-4 w-full ">
        {rowButtons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => onScrollTo(btn.label)}
            rel="noopener noreferrer"
            className={rowBtnClass}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}