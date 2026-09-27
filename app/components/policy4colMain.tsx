import Link from "next/link";
import Image from "next/image";
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
    body: "Implementing a tuition freeze, publicizing and reducing textbook costs, lowering Metro costs, and set up master list of scholarship opportunities.",
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
    body: "updates of progress on platform promises, direct democracy of justices and referenda, and improved understandability of SGA processes and website.",
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
    title: "Campus Safety",
    body: "Establish UMD as a sanctuary campus, expand sexual misconduct prevention efforts, and allow 2 unexcused absences per semester.",
    href: "/platform#CampusSafety",
    icon: (
<svg {...iconProps} viewBox="-50 -75 800 800" strokeWidth="3">

<g transform="translate(0.000000,740.000000) scale(0.100000,-0.100000)"
fill="currentColor">
<path d="M3685 7100 c-18 -28 -190 -168 -293 -238 -684 -463 -1481 -766 -2274
-865 l-173 -22 -13 -130 c-22 -207 -21 -835 1 -1075 76 -832 268 -1542 597
-2215 408 -832 1057 -1584 1746 -2022 175 -111 387 -223 424 -223 33 0 284
135 430 231 351 231 674 512 953 829 403 458 787 1112 1012 1725 286 775 416
1644 384 2566 -5 144 -11 277 -15 295 l-6 34 -74 0 c-230 0 -819 134 -1213
276 -539 195 -1191 561 -1421 798 -46 48 -55 53 -65 36z m126 -619 c494 -328
1140 -610 1731 -755 135 -34 444 -96 474 -96 1 0 8 -24 16 -52 18 -73 18 -759
0 -948 -70 -716 -221 -1261 -524 -1890 -136 -282 -286 -529 -469 -771 -335
-444 -791 -862 -1212 -1111 -86 -51 -124 -68 -141 -64 -26 6 -222 130 -353
223 -318 224 -719 623 -985 978 -373 498 -653 1091 -813 1720 -59 234 -96 426
-125 652 -68 525 -79 1231 -21 1263 10 5 94 23 187 40 735 136 1326 372 1984
793 74 48 138 87 141 87 3 0 53 -31 110 -69z"/>
</g></svg>)
  },
  {
    title: "Financial Reform",
    body: "Allow clubs to request funding for food even when it's not in their mission statement, and revitalize the COFA website to improve accessibility",
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
