import { useState, useRef } from "react";
import { Plus } from "lucide-react";

export default function ExpandableSection({
  title = "Why this matters",
  preview = "hello hello hello",
  details = (
    <>
      <p>
        This is the extra detail that appears once the section is expanded.
        Swap this content for whatever you need — paragraphs, lists, images,
        or other components.
      </p>
      <p>
        Because this component is full width, it works well as a section on
        a landing page, a FAQ row, or an expandable note inside a longer
        document.
      </p>
    </>
  ),
}) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <section className="w-full border-t border-b border-neutral-200 bg-white">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="group flex w-full items-start justify-between gap-8 px-6 py-10 text-left sm:px-10 md:px-16"
      >
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-600">
            {preview}
          </p>
        </div>

        <span className="mt-1 flex shrink-0 items-center justify-center rounded-full border border-neutral-300 p-2.5 transition-colors group-hover:border-neutral-900 group-hover:bg-neutral-900">
          <Plus
            size={16}
            className={`text-neutral-900 transition-transform duration-300 group-hover:text-white ${
              open ? "rotate-45" : "rotate-0"
            }`}
          />
        </span>
      </button>

      <div className="px-6 pb-10 sm:px-10 md:px-16">
        <div
          style={{
            maxHeight: open ? contentRef.current?.scrollHeight ?? 1000 : 0,
          }}
          className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
        >
          <div
            ref={contentRef}
            className="max-w-2xl space-y-4 pt-6 text-base leading-relaxed text-neutral-700"
          >
            {details}
          </div>
        </div>
      </div>
    </section>
  );
}
