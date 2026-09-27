import Link from "next/link"
import { useRef } from 'react'
import { Fragment, useEffect, useState } from "react"


interface PolicyProps {
  title?: string;
  text?: React.ReactNode;
  area?: string;
  setRef: (id: string) => (el: HTMLElement | null) => void
}

export default function policy({
  title = "title",
  text = <p>text</p>,
  area = "",
  setRef,
}: PolicyProps)
    {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
    });

    const jumpToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
        return (
        <section className="border-b border-[rgba(139,46,46,0.12)] px-[6vw] py-16" id={area}  ref={setRef(title)} >
        <span
        className="inline-flex items-center gap-1 rounded-full bg-[#D9A441] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.04em] text-[#241C1A]"
        style={{ fontFamily: "var(--font-mono, 'Space Grotesk', sans-serif)" }}
            >
                <button onClick={jumpToTop}>
                    Back to Top
                </button>
      </span>

      <h1
        className="mt-4 max-w-[20ch] text-[2.2rem] font-bold leading-[1.05] tracking-[-0.02em] text-[#241C1A] sm:text-5xl"
        style={{ fontFamily: "var(--font-serif, 'Source Serif 4', serif)" }}
      >
        {title}
      </h1>

      <hr className="my-6 border-t border-[rgba(139,46,46,0.12)]" />
        {text}
      </section>
        )
    }