import Link from "next/link";
import { Source_Serif_4 } from "next/font/google";
import CandidateGrid from "../components/CandidateGrid";
const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const steps = [
  {
    title: "Log in with your UMD ID",
    body: "From October 1st to 6th, head to elections.umd.edu and sign in with your Directory ID. You only need to do this once per election cycle.",
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
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
      <CandidateGrid
      ticketName="Meet the Executive Candidates"
      candidates={[
    {
      id: 1,
      name: "Avi Polirer",
      photoSrc: "/candidates/avibig.png",
      major: "Public Policy",
      classYear:  "Senior",
      position: "President",
      statement:"",
      color:"bg-[#FFD520]"
    },
    {
      id: 2,
      name: "Peyton McDonald",
      photoSrc: "/candidates/peytonbig.png",
      major: "Public Policy",
      classYear:  "Senior",
      position: "Executive Vice President",
      statement:"As Executive Vice President, I will strengthen our advocacy off campus and deepen our partnership with university administration to ensure student voices shape every decision. My priority is building a transparent, accessible SGA that directly serves and represents every student.",
      color:"bg-[#FFD520]"
    },
        {
      id: 4,
      name: "Jonathan Leung",
      photoSrc: "/candidates/johnbig.png",
      major: "Finance",
      classYear:  "Senior",
      position: "Vice President of Financial Affiars",
      statement:"I want to fix SGA funding. Student organizations shouldn’t have to jump through hoops just to access basic necessities. I want to make funding more efficient and accessible while helping organizations build sustainable revenue that lasts longer than the funding cycle",
      color:"bg-[#FFD520]"
      }]}/>
        <Link
          href="/candidates"
          className="mt-8 w-[66%] inline-block rounded-md bg-[#8B2E2E] px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-[#6E2323]"
        >
          View the full slate
        </Link>
      </section>

      <div className="mx-auto h-px max-w-5xl bg-[#8B2E2E]/10" />

    </div>
  );
}

