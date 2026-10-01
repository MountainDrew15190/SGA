"use client";

import { useEffect, useState } from "react";

// Set your target date/time here (local time). Format: YYYY-MM-DDTHH:MM:SS
const TARGET_DATE = "2026-10-01T09:00:00";

// Where the "Vote Now" button links to
const VOTE_URL = "https://example.com/vote";

function getTimeLeft(target) {
  const diff = +new Date(target) - +new Date();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done: false,
  };
}

export default function CountdownBanner({
  targetDate = TARGET_DATE,
  voteUrl = VOTE_URL,
}) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Avoid mismatched server/client render on first paint
  if (!timeLeft) return null;

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full bg-[#241C1A] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-start gap-3 px-6 py-3 sm:flex-row sm:gap-6">
        <span className="text-sm font-medium tracking-wide text-white/80">
          {timeLeft.done ? "SGA Voting Is Open" : "SGA Voting Closes In"}
        </span>
        {!timeLeft.done && (
          <div className="flex items-center gap-3">
            {units.map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-3">
                <div className="flex flex-row items-baseline leading-none">
                  <span className="mr-1 text-lg font-semibold tabular-nums text-[#D9A441]">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-wide text-white/50">
                    {unit.label}
                  </span>
                </div>
                {i < units.length - 1 && (
                  <span className="text-white/25">:</span>
                )}
              </div>
            ))}
          </div>
        )}
        <a
          href={voteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#D9A441] px-4 py-1.5 text-sm font-semibold text-[#241C1A] transition hover:bg-[#e8b856] sm:ml-auto"
        >
          Vote Now
        </a>
      </div>
    </div>
  );
}