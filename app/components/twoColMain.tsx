import Image from "next/image";
import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

type TicketMember = {
  role: string;
  name: string;
  photo: string;
};

const ticket: TicketMember[] = [
  { role: "President", name: "Firstname Lastname", photo: "/pres_placeholder.jpeg" },
  { role: "VPFA", name: "Firstname Lastname", photo: "/VPFA.jpeg" },
  { role: "EVP", name: "Firstname Lastname", photo: "/EVP.jpeg" },
];

export default function TwoColumns() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left: pitch */}
        <div>
          <h1
            className={`${serif.className} text-5xl font-bold leading-[1.05] text-[#241C1A] sm:text-6xl`}
          >
            Students deserve a say in how UMD spends their money.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#241C1A]/70">
            ReformUMD is running on lower mandatory fees, guaranteed seats
            for commuter and graduate students, and a public budget
            dashboard — real changes, not campaign slogans.
          </p>
          <Link
            href="/platform"
            className="mt-8 inline-block rounded-md bg-[#8B2E2E] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#6E2323]"
          >
            What we're going to change
          </Link>
        </div>

        {/* Right: the ticket */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {ticket.map((member) => (
            <div
              key={member.role}
              className="flex items-center gap-4 rounded-[18px] border border-[#8B2E2E]/10 bg-white p-4 shadow-[0_10px_30px_rgba(36,28,26,0.06)] lg:flex-row"
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-[#FAF6EE]">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[#8B2E2E]">
                  {member.role}
                </p>
                <p className="mt-0.5 text-base font-semibold text-[#241C1A]">
                  {member.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pull quote from the presidential candidate */}
      <blockquote className="mx-auto mt-14 max-w-3xl border-l-4 border-[#D9A441] pl-6 text-xl italic leading-relaxed text-[#241C1A]/80">
        "We're not running to add another line to our resume. We're running
        because every student should know where their fee dollars go — and
        have a say in it."
        <footer className="mt-3 text-sm not-italic font-semibold text-[#8B2E2E]">
          — SGA Presidential Candidate
        </footer>
      </blockquote>
    </section>
  );
}
