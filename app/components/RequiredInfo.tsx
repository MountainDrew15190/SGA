import { Import, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const quickLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/candidates", label: "Candidates" },
  { href: "/join", label: "Get Involved" },
];

export default function RequiredInfoPlusContact() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Contact Us */}
        <div className="rounded-[22px] border border-[#8B2E2E]/10 bg-white p-7 shadow-[0_10px_30px_rgba(36,28,26,0.06)]">
          <h3 className="text-xl font-bold text-[#241C1A]">Contact Us</h3>
          <div className="mt-5 flex flex-col gap-4">
            <a
              href="https://instagram.com/IGHANDLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center gap-3 text-[#241C1A]/75 transition-colors hover:text-[#8B2E2E]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B2E2E]/10 text-[#8B2E2E]">
              <Image
                alt="Instagram"
                src="/insta_logo.png"
                height={25}
                width={25}
                className="text-[#8B2E2E]"
              />
              </span>
              @IGHANDLE
            </a>
            <a
              href="mailto:example@example.com"
              aria-label="Email"
              className="flex items-center gap-3 text-[#241C1A]/75 transition-colors hover:text-[#8B2E2E]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B2E2E]/10 ">
                <Mail size={18} />
              </span>
              example@example.com
            </a>
          </div>
        </div>

        {/* Quick links + required disclosure */}
        <div className="flex flex-col rounded-[22px] border border-[#8B2E2E]/10 bg-white p-7 shadow-[0_10px_30px_rgba(36,28,26,0.06)]">
          <h3 className="text-xl font-bold text-[#241C1A]">Quick Links</h3>
          <div className="mt-5 flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-[#241C1A]/75 transition-colors hover:text-[#8B2E2E]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 border-t border-[#8B2E2E]/10 pt-5">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSczcmWWzG7ADspEWCOWI6HzmkaWCIWB3_NzNYhwJJZUdYP0NQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#8B2E2E] underline decoration-[#8B2E2E]/30 underline-offset-4 hover:text-[#6E2323]"
            >
              Report all SGA Elections Violations here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
