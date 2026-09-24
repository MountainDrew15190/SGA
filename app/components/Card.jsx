/**
 * Card.jsx
 *
 * A reusable, fully customizable card component styled to the
 * ReformUMD style guide: light card family (22px radius, hairline
 * maroon border, soft shadow), gold category badge, ink title,
 * muted body text.
 *
 * All content (title, category, text) is passed in as props,
 * so it can be controlled entirely from a parent component.
 */

export default function Card({
  title = "Default Title",
  category = "General",
  text = "Default description text goes here.",
  className = "",
}) {
  return (
    <div
      className={`rounded-[22px] border border-[#8B2E2E]/[0.12] bg-white p-6 shadow-[0_10px_30px_rgba(36,28,26,0.06)] transition hover:shadow-[0_14px_36px_rgba(36,28,26,0.1)] ${className}`}
    >
      <span
        className="inline-flex items-center gap-1 rounded-full bg-[#D9A441] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#241C1A]"
        style={{ fontFamily: "var(--font-mono, 'Space Grotesk', sans-serif)" }}
      >
        {category}
      </span>

      <h3
        className="mt-3 text-lg font-bold text-[#241C1A]"
        style={{ fontFamily: "var(--font-sans, 'Plus Jakarta Sans', sans-serif)" }}
      >
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-[#6B5D56]">{text}</p>
    </div>
  );
}
