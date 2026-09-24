"use client";

import { useState } from "react";
import {Space_Grotesk } from "next/font/google";
import styles from "./FeeImpactCard.module.css";
import { plusJakartaSans } from '@/app/fonts';
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type Marker = {
  /** Position on the bar, 0–100 (percent of the baseline fee). */
  percent: number;
  /** Small caption, e.g. "ReformUMD plan". */
  label: string;
  /** Bold value under/over the caption, e.g. "$1,480". Optional. */
  value?: string;
  /** Which side of the bar the label sits on. Default: "above". */
  side?: "above" | "below";
  /** Colour of the tick + label. Default: "light". */
  tone?: "accent" | "light" | "muted";
};

export type Profile = {
  id: string;
  buttonLabel: string;
  /** Yellow tag next to "Select Your Student Status" */
  tag: string;
  /** Current yearly fees (the full bar = 100%). */
  baseline: number;
  /** Yearly fees under the reform plan. */
  target: number;
  /** Text shown next to "Plus Direct Value". */
  directValue: string;
  /** Custom markers. If omitted, sensible defaults are generated. */
  markers?: Marker[];
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const usd = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

/**
 * Example of custom markers — add as many as you like, at any percentage:
 *
 * markers: [
 *   { percent: 76.3, label: "ReformUMD Target Plan", value: "$1,480 / yr", side: "above", tone: "accent" },
 *   { percent: 100,  label: "Current Baseline Fees", value: "$1,940 / yr", side: "below" },
 * ]
 *
 * (Numbers above are illustrative only.)
 * Tip: markers closer than ~15% on the same side can overlap — put them on
 * opposite sides ("above" / "below") to keep labels readable.
 */
export const DEFAULT_PROFILES: Profile[] = [
  {
    id: "commuter",
    buttonLabel: "Commuter",
    tag: "Commuter Terp",
    baseline: 1820,
    target: 1480,
    directValue: "Free Stamp Lockers & Night Shuttle",
  },
  // TODO: replace the numbers/copy below with the real figures for each group.
  {
    id: "dorm",
    buttonLabel: "Dorm Resident",
    tag: "Dorm Terp",
    baseline: 1820,
    target: 1480,
    directValue: "Free Stamp Lockers & Night Shuttle",
  },
  {
    id: "grad",
    buttonLabel: "Graduate / RA",
    tag: "Grad / RA Terp",
    baseline: 1820,
    target: 1480,
    directValue: "Free Stamp Lockers & Night Shuttle",
  },
];

function defaultMarkers(p: Profile): Marker[] {
  const targetPct = (p.target / p.baseline) * 100;
  return [
    {
      percent: targetPct,
      label: "ReformUMD Target Plan",
      value: `${usd(p.target)} / yr`,
      side: "above",
      tone: "accent",
    },
    {
      percent: 100,
      label: "Current Baseline Fees",
      value: `${usd(p.baseline)} / yr`,
      side: "below",
      tone: "light",
    },
  ];
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

type Props = {
  profiles?: Profile[];
  defaultProfileId?: string;
  className?: string;
};

const clamp = (n: number) => Math.min(100, Math.max(0, n));

/** Keep labels inside the card when a marker sits near either end. */
const alignFor = (percent: number) =>
  percent <= 8 ? "start" : percent >= 92 ? "end" : "center";

export default function FeeImpactCard({
  profiles = DEFAULT_PROFILES,
  defaultProfileId,
  className = "",
}: Props) {
  const [activeId, setActiveId] = useState(
    defaultProfileId ?? profiles[0].id
  );
  const active = profiles.find((p) => p.id === activeId) ?? profiles[0];

  const cashBack = active.baseline - active.target;
  const targetPct = clamp((active.target / active.baseline) * 100);
  const markers = active.markers ?? defaultMarkers(active);

  return (
    <section
      className={`${styles.card} ${plusJakartaSans.className} ${className}`}
      aria-labelledby="fee-impact-title"
    >
      {/* ---------------- left ---------------- */}
      <div>
        <span className={`${styles.badge} ${grotesk.className}`}>
          <svg
            className={styles.badgeIcon}
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="12" height="12" rx="2" />
            <path d="M5 6h6M5 9h3" strokeLinecap="round" />
          </svg>
          Interactive policy model
        </span>

        <h2 id="fee-impact-title" className={styles.title}>
          Where Does Your {usd(active.baseline)} Mandatory Fee Actually Go?
        </h2>

        <p className={styles.blurb}>
          The administration hides auxiliary fee growth in obscure line items.
          ReformUMD will redirect administrative overhead directly back into
          commuter stipends, student organization budgets, and dining
          subsidies.
        </p>

        <div className={grotesk.className}>
          <div className={styles.selectorHeader}>
            <span>Select Your Student Status</span>
            <span className={styles.selectorTag}>{active.tag}</span>
          </div>
          <div
            className={styles.segmented}
            role="group"
            aria-label="Student status"
          >
            {profiles.map((p) => (
              <button
                key={p.id}
                type="button"
                className={styles.segment}
                aria-pressed={p.id === activeId}
                onClick={() => setActiveId(p.id)}
              >
                {p.buttonLabel}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* ---------------- right ---------------- */}
      <div className={`${styles.panel} ${grotesk.className}`}>
        <div className={styles.panelHeader}>
          <span className={styles.panelTitle}>Annual SGA Fee Impact</span>
          <span className={styles.panelBadge}>Reform Proposal</span>
        </div>

        <div className={styles.barArea}>
          <div
            className={styles.track}
            role="img"
            aria-label={`Fees drop from ${usd(active.baseline)} to ${usd(
              active.target
            )} per year, a savings of ${usd(cashBack)}.`}
          >
            <div className={styles.clip}>
              <div className={styles.fill} style={{ width: `${targetPct}%` }} />
              <div
                className={styles.saved}
                style={{ width: `${100 - targetPct}%` }}
              />
            </div>

            {markers.map((m, i) => {
              const pos = clamp(m.percent);
              return (
                <div
                  key={`${m.label}-${i}`}
                  className={styles.marker}
                  style={{ left: `${pos}%` }}
                  data-side={m.side ?? "above"}
                  data-tone={m.tone ?? "light"}
                  data-align={alignFor(pos)}
                >
                  <span className={styles.tick} />
                  <span className={styles.markerLabel}>
                    <span className={styles.markerName}>{m.label}</span>
                    {m.value && (
                      <span className={styles.markerValue}>{m.value}</span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.cashBox}>
          <div>
            <span className={styles.cashLabel}>You'd Save</span>
            <span className={styles.cashAmount}>{usd(cashBack)} / yr</span>
          </div>
          <div className={styles.directValue}>
            <span className={styles.cashLabel}>Plus Direct Value</span>
            <span className={styles.directText}>{active.directValue}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
