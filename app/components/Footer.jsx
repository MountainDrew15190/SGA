"use client";

import { useState } from "react";
import { Source_Serif_4 } from "next/font/google";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic"],
  display: "swap",
});

const quickLinks = ["About", "Members", "Committees", "Home", "Contact"];

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hook this up to your newsletter provider (Mailchimp, ConvertKit, etc.)
    console.log("Sign up:", { name, email });
  };

  return (
    <footer className="w-full">
      {/* Main footer content */}
      <div className="bg-[#FAF6EE] px-6 py-16 sm:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left: About */}
          <div>
            <h3 className="text-2xl font-bold text-[#8B2E2E]">UMD SGA</h3>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-[#8B2E2E]/80">
              The University of Maryland Student Government Association is
              the premier student-led governing body at UMD, a voice for all
              Terps.
            </p>

          </div>

          {/* Middle: Newsletter */}
          <div>
            <h3 className="text-2xl font-bold text-[#8B2E2E]">
              Subscribe to our newsletter
            </h3>
            <p className={`${serif.className} mt-2 text-4xl italic text-[#8B2E2E]`}>
              Never miss an update
            </p>

            <form onSubmit={handleSubmit} className="mt-10 max-w-md">
              <div className="border-b border-[#8B2E2E]/40 pb-2">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full bg-transparent text-[#8B2E2E]/70 placeholder-[#8B2E2E]/70 outline-none"
                />
              </div>
              <div className="mt-8 border-b border-[#8B2E2E]/40 pb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="w-full bg-transparent text-[#8B2E2E]/70 placeholder-[#8B2E2E]/70 outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-8 w-full rounded-md bg-[#241C1A] py-4 font-bold tracking-wide text-white transition-colors hover:bg-[#8B2E2E]"
              >
                Sign Up
              </button>
            </form>
          </div>

          {/* Right: Quick Links */}
          <div className="md:text-right">
            <h3 className="text-xl font-bold tracking-wide text-[#8B2E2E]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[17px] text-[#8B2E2E]/80 transition-colors hover:text-[#8B2E2E]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#8B2E2E] py-6 text-center">
        <p className="text-sm text-[#F4E6E0]">
          Designed by SGA Communications &middot; &copy; 2026 UMD SGA
        </p>
      </div>
    </footer>
  );
}
