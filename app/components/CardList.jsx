/**
 * CardList.jsx
 *
 * Example parent component that drives Card's content.
 * Change the `cards` array below (or pass it in as a prop / fetch it
 * from an API or CMS) to customize every Card's title, category, and text.
 *
 * Filter bar follows the style guide's "segmented" control: maroon for
 * the active segment, a neutral tan fill for the rest, Space Grotesk
 * uppercase labels.
 */

"use client";

import { useMemo, useState } from "react";
import Card from "./Card";

const cards = [
  {
    title: "Getting Started",
    category: "Guide",
    text: "Learn how to set up your project and start building in minutes.",
  },
  {
    title: "Advanced Patterns",
    category: "Deep Dive",
    text: "Explore composition patterns for scalable, customizable components.",
  },
  {
    title: "Deploying to Production",
    category: "Ops",
    text: "A checklist for shipping your Next.js app safely and reliably.",
  },
  {
    title: "Writing Tests",
    category: "Guide",
    text: "Cover your components with unit and integration tests.",
  },
  {
    title: "Performance Tuning",
    category: "Deep Dive",
    text: "Profile and optimize rendering, bundling, and data fetching.",
  },
];

export default function CardList({ items = cards }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(items.map((item) => item.category))],
    [items]
  );

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? items
        : items.filter((item) => item.category === activeCategory),
    [items, activeCategory]
  );

  return (
    <div className="px-[6vw] py-10">
      {/* Category filter bar — segmented control */}
      <div
        className="mb-8 inline-flex flex-wrap gap-2"
        style={{ fontFamily: "var(--font-mono, 'Space Grotesk', sans-serif)" }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-lg px-4 py-2 text-[13px] font-bold uppercase tracking-[0.03em] transition ${
              activeCategory === category
                ? "bg-[#8B2E2E] text-white"
                : "bg-[#EFE7DC] text-[#241C1A] hover:bg-[#e5dbcc]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtered card grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, i) => (
            <Card
              key={i}
              title={item.title}
              category={item.category}
              text={item.text}
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-[#6B5D56]">No items found in this category.</p>
      )}
    </div>
  );
}
