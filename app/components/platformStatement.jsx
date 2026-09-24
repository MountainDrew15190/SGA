/**
 * PlatformStatement.jsx
 *
 * Section intro styled to match the style guide's hero pattern:
 * gold "tag" badge, Source Serif 4 headline, hairline maroon rule,
 * muted lede copy. Renamed from a lowercase function name (React
 * treats lowercase component names as literal DOM tags, which was
 * silently breaking this component).
 */

export default function PlatformStatement() {
  return (
    <section className="border-b border-[rgba(139,46,46,0.12)] px-[6vw] py-16">
      <span
        className="inline-flex items-center gap-1 rounded-full bg-[#D9A441] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#241C1A]"
        style={{ fontFamily: "var(--font-mono, 'Space Grotesk', sans-serif)" }}
      >
        Our Platform
      </span>

      <h1
        className="mt-4 max-w-[20ch] text-[2.2rem] font-bold leading-[1.05] tracking-[-0.02em] text-[#241C1A] sm:text-5xl"
        style={{ fontFamily: "var(--font-serif, 'Source Serif 4', serif)" }}
      >
        Our Platform
      </h1>

      <hr className="my-6 border-t border-[rgba(139,46,46,0.12)]" />

      <p className="max-w-[60ch] text-base leading-relaxed text-[#6B5D56]">
        Info about the platform goes here — what it does, who it's for, and
        why it matters. Keep this section focused on the single most
        important thing a visitor should understand about the platform
        before they scroll further.
      </p>
    </section>
  );
}
