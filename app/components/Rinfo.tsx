"use client";

import { useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CONTACT_EMAIL = "reviveumd@gmail.com";
// AJAX endpoint lets the form submit without leaving the page.
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/candidates", label: "Candidates" },
];

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full rounded-xl border border-[#8B2E2E]/15 bg-[#FAF6EE] px-4 py-2.5 text-[15px] text-[#241C1A] placeholder:text-[#241C1A]/40 focus:border-[#8B2E2E] focus:outline-none focus:ring-2 focus:ring-[#8B2E2E]/20";

export default function RequiredInfoPlusContact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await res.json();
      if (!res.ok || data.success === "false" || data.success === false) {
        throw new Error("Submission failed");
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
        {/* Email us form (FormSubmit) */}
        <div className="rounded-[22px] border border-[#8B2E2E]/10 bg-white p-7 shadow-[0_10px_30px_rgba(36,28,26,0.06)] md:col-span-2 mr-10 ml-10 mb-10">
          <h3 className="text-xl font-bold text-[#241C1A]">Email Us</h3>
          <p className="mt-2 text-[15px] text-[#241C1A]/70">
            Have a question or suggestion? Send us a message and we&apos;ll reply by email.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* FormSubmit config */}
            <input type="hidden" name="_subject" value="New message from the Revive UMD website" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            {/* Honeypot: real users never see or fill this; bots do */}
            <input
              type="text"
              name="_honey"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div>
              <label htmlFor="contact-name" className="mb-1.5 block text-sm font-semibold text-[#241C1A]">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-1.5 block text-sm font-semibold text-[#241C1A]">
                Your email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                placeholder="you@umd.edu"
                className={fieldClass}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-[#241C1A]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="What would you like to tell us?"
                className={`${fieldClass} resize-y`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 md:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-[#8B2E2E] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6E2323] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B2E2E]/40 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              <p role="status" aria-live="polite" className="text-sm">
                {status === "sent" && (
                  <span className="text-[#2F6B3F]">Message sent. We&apos;ll get back to you soon.</span>
                )}
                {status === "error" && (
                  <span className="text-[#8B2E2E]">
                    Message not sent. Try again, or email us at {CONTACT_EMAIL}.
                  </span>
                )}
              </p>
            </div>
          </form>
      </div>
    <section className="mx-auto max-w-7xl px-6 pb-20 bg-[#FAF6EE]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Contact Us */}
        <div className="rounded-[22px] border border-[#8B2E2E]/10 bg-white p-7 shadow-[0_10px_30px_rgba(36,28,26,0.06)]">
          <h3 className="text-xl font-bold text-[#241C1A]">Contact Us</h3>
          <div className="mt-5 flex flex-col gap-4">
            <a
              href="https://instagram.com/reviveumd"
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
              @reviveUMD
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email"
              className="flex items-center gap-3 text-[#241C1A]/75 transition-colors hover:text-[#8B2E2E]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B2E2E]/10 ">
                <Mail size={18} />
              </span>
              {CONTACT_EMAIL}
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
            <p className="text-sm font-semibold text-[#8B2E2E]  decoration-[#8B2E2E]/30 hover:text-[#6E2323]">
              UMD SGA Elections: October 1-6
            </p>
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
    </div>
  );
}