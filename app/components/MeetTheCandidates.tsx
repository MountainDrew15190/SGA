import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const steps = [
  {
    title: "Log in with your UMD ID",
    body: "Head to elections.umd.edu and sign in with your Directory ID. You only need to do this once per election cycle.",
  },
  {
    title: "Review the ballot",
    body: "Read each candidate's platform before you vote — the full slate and their positions are listed on the Candidates page.",
  },
  {
    title: "Submit your vote",
    body: "Confirm your selections and submit. You'll get an on-screen confirmation once your ballot is recorded.",
  },
];

export default function MeetTheCandidates() {
  return (
    <div className="bg-[#FAF6EE]">
      {/* Meet the Candidates */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2
          className={`${serif.className} text-4xl font-bold text-[#241C1A] sm:text-5xl`}
        >
          Meet the Candidates
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#241C1A]/70">
          ReformUMD is a slate of 21 students running for President, EVP,
          VPFA, and Senate seats across campus — each with a platform built
          from conversations with the students they hope to represent.
        </p>
        <Link
          href="/candidates"
          className="mt-8 inline-block rounded-md bg-[#8B2E2E] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#6E2323]"
        >
          View the full slate
        </Link>
      </section>

      <div className="mx-auto h-px max-w-5xl bg-[#8B2E2E]/10" />

      {/* How to Vote */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2
          className={`${serif.className} text-center text-4xl font-bold text-[#241C1A] sm:text-5xl`}
        >
          How to Vote
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-center text-lg leading-relaxed text-[#241C1A]/70">
          Voting takes less than five minutes. Here's the whole process.
        </p>

        <ol className="mt-14 grid gap-10 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="text-left">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B2E2E] text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#241C1A]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#241C1A]/65">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
