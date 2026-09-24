import CandidateGrid from "../components/CandidateGrid";
import Navbar from "../components/navbar";
import Timer from "../components/timer"
import RequiredInfoPlusContact from "@/app/components/RequiredInfo";
export default function Home() {
  return (
    <div className="bg-[#FAF6EE]`">
    <Navbar />
    <Timer />
    <main className="bg-[#FAF6EE]">
<CandidateGrid
  ticketName="Terps United"
  candidates={[
    {
      id: 1,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear: 2028,
      position: "President",
    },
    {
      id: 2,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear: 2027,
      position: "Vice President",
    },
        {
      id: 4,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear: 2028,
      position: "President",
    },
    {
      id: 5,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear: 2027,
      position: "Vice President",
    },
            {
      id: 6,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear: 2028,
      position: "President",
    },
    {
      id: 7,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear: 2027,
      position: "Vice President",
    },
            {
      id: 8,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear: 2028,
      position: "President",
    },
    {
      id: 9,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear: 2027,
      position: "Vice President",
    },
            {
      id: 10,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear: 2028,
      position: "President",
    },
    {
      id: 11,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear: 2027,
      position: "Vice President",
    },
            {
      id: 12,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear: 2028,
      position: "President",
    },
    {
      id: 13,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear: 2027,
      position: "Vice President",
    },
            {
      id: 14,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear: 2028,
      position: "President",
    },
    {
      id: 15,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear: 2027,
      position: "Vice President",
    },
    {
      id: 3,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear: 2027,
      position: "Vice President",
    },
  ]}
/>
<RequiredInfoPlusContact />
</main>
    </div>
  )
}