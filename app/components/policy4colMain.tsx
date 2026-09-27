import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

type Pillar = {
  title: string;
  body: string;
  href: string;
  icon: React.ReactNode;
};

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const pillars: Pillar[] = [
  {
    title: "Affordability",
    body: "Redirecting administrative overhead back into commuter stipends, dining subsidies, and lower mandatory fees.",
    href: "/platform#Affordability",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5a2.5 2.5 0 0 1 2.5-1.5h.25a2.25 2.25 0 0 1 0 4.5H12a2.25 2.25 0 0 0 0 4.5h.25a2.5 2.5 0 0 0 2.25-1.5" />
      </svg>
    ),
  },
  {
    title: "Representation",
    body: "Guaranteed Senate seats for commuter, transfer, and graduate students so every Terp has a vote at the table.",
    href: "/platform#Representation",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="3.25" />
        <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
        <circle cx="5" cy="10" r="2.25" />
        <path d="M2 20a4 4 0 0 1 3.6-4" />
        <circle cx="19" cy="10" r="2.25" />
        <path d="M22 20a4 4 0 0 0-3.6-4" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    body: "A public dashboard tracking every SGA budget line, so students can see exactly where fee dollars go.",
    href: "/platform#Transparency",
    icon: (
      <svg {...iconProps}>
        <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
        <path d="M8 15v-3M12 15V8M16 15v-5" />
      </svg>
    ),
  },
  {
    title: "Funding Reform",
    body: "Rewriting how club and organization budgets are approved, cutting approval time from weeks to days.",
    href: "/platform#FundingReform",
    icon: (
      <svg {...iconProps}>
        <path d="M4 19h16" />
        <path d="M6 19v-6l4-2 4 3 4-4v9" />
      </svg>
    ),
  },
];

export default function FourColumnMainpage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-4">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col rounded-[22px] border border-[#8B2E2E]/10 bg-white p-7 shadow-[0_10px_30px_rgba(36,28,26,0.06)]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8B2E2E]/10 text-[#8B2E2E]">
              {pillar.icon}
            </div>
            <h2
              className={`${serif.className} mt-5 text-xl font-bold text-[#241C1A]`}
            >
              {pillar.title}
            </h2>
            <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#241C1A]/65">
              {pillar.body}
            </p>
            <Link
              href={pillar.href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B2E2E] hover:text-[#6E2323]"
            >
              Learn more
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-3.5 w-3.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
