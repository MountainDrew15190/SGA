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
      <h1
        className="mx-auto mt-4 max-w-[20ch] text-[2.2rem] font-bold leading-[1.05] tracking-[-0.02em] text-[#241C1A] sm:text-5xl text-center"
        style={{ fontFamily: "var(--font-serif, 'Source Serif 4', serif)" }}
      >
        Our Platform
      </h1>
    </section>
  );
}