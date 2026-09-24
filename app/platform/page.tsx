import { Source_Serif_4, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Navbar from "@/app/components/navbar";
import Timer from "@/app/components/timer";
import CardList from "@/app/components/CardList";
import PlatformStatement from "@/app/components/platformStatement";
import RequiredInfoPlusContact from "./components/RequiredInfo";
import { plusJakartaSans } from '@/app/fonts';
// Style-guide type system:
// Source Serif 4 — headlines / pull-quotes only
// Plus Jakarta Sans — body copy, default UI text
// Space Grotesk — small-caps labels, data, UI chrome
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mono",
});

export default function Home() {
  return (
    <div
      className={`${sourceSerif.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} bg-[#FAF6EE]`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <Navbar />
      <Timer />
      <main>
        <PlatformStatement />
        <CardList />
        <RequiredInfoPlusContact />
      </main>
    </div>
  );
}
