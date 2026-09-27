/**
 * Card.jsx
 *
 * A reusable, fully customizable card component styled to the
 * ReformUMD style guide: light card family (22px radius, hairline
 * maroon border, soft shadow), gold category badge, ink title,
 * muted body text.
 *
 * Clicking anywhere on the card toggles it open, revealing `details`
 * beneath the preview `text`. Open/close state is controlled by the
 * parent (via `isOpen` / `onToggle`) so a parent list can enforce
 * "only one card open at a time."
 */

import { Plus } from "lucide-react";

export default function Card({
  category = "General",
  text = "Default description text goes here.",
  details = "More detail about this item goes here.",
  isOpen = false,
  onToggle = () => {},
  className = "",
}) {
  return (
    <button
      onClick={onToggle}
      aria-expanded={isOpen}
      className={`group flex w-full flex-col rounded-[22px] border border-[#8B2E2E]/[0.12] bg-white p-6 text-left shadow-[0_10px_30px_rgba(36,28,26,0.06)] transition hover:shadow-[0_14px_36px_rgba(36,28,26,0.1)] ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span
          className="inline-flex items-center gap-1 rounded-full bg-[#D9A441] px-3 py-1 text-[15px] font-bold uppercase tracking-[0.04em] text-[#241C1A]"
          style={{ fontFamily: "var(--font-mono, 'Space Grotesk', sans-serif)" }}
        >
          {category}
        </span>

        <span className="mt-0.5 flex shrink-0 items-center justify-center rounded-full border border-[#8B2E2E]/[0.25] p-1.5 transition-colors group-hover:border-[#8B2E2E] group-hover:bg-[#8B2E2E]">
          <Plus
            size={14}
            className={`text-[#8B2E2E] transition-transform duration-300 group-hover:text-white ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
          />
        </span>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-[#6B5D56]">{text}</p>

      <div
        style={{ maxHeight: isOpen ? 400 : 0 }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <p className="mt-3 border-t border-[#8B2E2E]/[0.1] pt-3 text-sm leading-relaxed text-[#6B5D56]">
          {details}
        </p>
      </div>
    </button>
  );
}
