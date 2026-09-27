/**
 * CardList.jsx
 *
 * Example parent component that drives Card's content.
 * Change the `cards` array below (or pass it in as a prop / fetch it
 * from an API or CMS) to customize every Card's category, text, and
 * expanded `details`.
 *
 * Filter bar follows the style guide's "segmented" control: maroon for
 * the active segment, a neutral tan fill for the rest, Space Grotesk
 * uppercase labels.
 *
 * Only one card is open at a time: clicking a card opens it and closes
 * whichever other card was previously open (accordion behavior).
 */

"use client";

import { useMemo, useState } from "react";
import Card from "./Card";

const cards = [
  {
    id: 1,
    category: "Affordability",
    text: "Work with university administration to implement a systemwide tuition freeze for students based on their class year",
    details:
      "This would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degreeThis would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degree",
  },
  {
    id: 2,
    category: "Affordability",
    text: "Set up master list of scholarship and internship opportunities",
    details:
      "A single, searchable directory maintained in partnership with financial aid and career services so students no longer have to hunt across a dozen departmental pages.",
  },
  {
    id: 3,
    category: "Affordability",
    text: "Expanding access to university resources for students looking for off-campus housing",
    details:
      "Includes vetted listings, lease-review support, and workshops on tenant rights for students moving off campus for the first time.",
  },
  {
    id: 4,
    category: "Affordability",
    text: "Compensation for students who experience severe utility issues throughout the year",
    details:
      "A reimbursement process for students facing extended outages or utility failures in university-managed housing, with a clear claims timeline.",
  },
  {
    id: 5,
    category: "Affordability",
    text: "Increase funding towards the pilot Metrocard program that began implementation last year",
    details:
      "Additional funding would let the program cover more students and more trips per semester, based on demand data from the pilot year.",
  },
  {
    id: 6,
    category: "Affordability",
    text: "Advocate for UMD's participation in the Metro U-Pass college student program",
    details:
      "Modeled on similar programs at other DC-area universities, giving students unlimited Metro access for a flat fee bundled into student fees.",
  },
  {
    id: 7,
    category: "Affordability",
    text: "Expand on Transportation Services food drive for parking citation reduction",
    details:
      "Students could offset a portion of a parking citation by donating to the campus food drive, turning a fine into community benefit.",
  },
  {
    id: 8,
    category: "Affordability",
    text: "Work with university administration to implement a systemwide tuition freeze for students based on their class year",
    details:
      "This would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degree.",
  },
  {
    id: 9,
    category: "Affordability",
    text: "Work with university administration to implement a systemwide tuition freeze for students based on their class year",
    details:
      "This would lock in a student's tuition rate at the level it was when they enrolled, protecting them from increases for the remainder of their degree.",
  },
];

export default function CardList({ items = cards }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState(null);

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

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

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
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              category={item.category}
              text={item.text}
              details={item.details}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
              className="h-fit self-start"
            />
          ))}
        </div>
      ) : (
        <p className="text-sm text-[#6B5D56]">No items found in this category.</p>
      )}
    </div>
  );
}
