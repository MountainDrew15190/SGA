import Navbar from "@/app/components/navbar";
import Timer from "@/app/components/timer";
import TwoColumns from "./components/twoColMain";
import FourColumnMainpage from "./components/policy4colMain";
import FeeImpactCard from "./components/FeeImpactCard";
import MeetTheCandidates from "./components/MeetTheCandidates";
import RequiredInfoPlusContact from "./components/RequiredInfo";
import Footer from "./components/Footer"
import { plusJakartaSans } from './fonts'

export default function Home() {
  return (
    <div className="bg-[#FAF6EE]">
      <Navbar />
      <Timer />
      <main>
        <TwoColumns />

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <h2
              className={`${plusJakartaSans.className} text-4xl font-bold text-[#241C1A] sm:text-5xl`}
            >
              Policy Focuses
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[#241C1A]/70">
              Four commitments ReformUMD is running on this year.
            </p>
          </div>
          <div className="mt-12">
            <FourColumnMainpage />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <FeeImpactCard />
        </section>

        <MeetTheCandidates />
        <RequiredInfoPlusContact />

      </main>
    </div>
  );
}
