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
      classYear:  "Junior",
      position: "President",
       
      color:"bg-[#FFD520]"
    },
    {
      id: 2,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear:  "Junior",
      position: "Vice President",
      color:"bg-[#FFD520]"
    },
        {
      id: 4,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear:  "Junior",
      position: "President",
      color:"bg-[#FFD520]"
    },
    {
      id: 5,
      name: "Galen Richardson",
      photoSrc: "/candidates/Galen.jpg",
      major: "GVPT + Public Policy",
      classYear: "Junior",
      position: "BSOS Legislator",
      statement:"As a legislator, I want to use SGA to promote BSOS internship opportunities, improve lobbying efforts to ensure student needs are addressed, and provide new avenues of funding for BSOS student organizations.",
      color:"bg-[#FBF7EE]"
    },
            {
      id: 6,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear:  "Junior",
      position: "President",
       
      color:"bg-[#FBF7EE]"
    },
    {
      id: 7,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear:  "Junior",
      position: "Vice President",
       
      color:"bg-[#FBF7EE]"
    },
            {
      id: 8,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear:  "Junior",
      position: "President",
       
      color:"bg-[#FBF7EE]"
    },
    {
      id: 9,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear:  "Junior",
      position: "Vice President",
       
      color:"bg-[#FBF7EE]"
    },
            {
      id: 10,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear:  "Junior",
      position: "President",
       
      color:"bg-[#FBF7EE]"
    },
    {
      id: 11,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear:  "Junior",
      position: "Vice President",
       
      color:"bg-[#FBF7EE]"
    },
            {
      id: 12,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear:  "Junior",
      position: "President",
       
      color:"bg-[#FBF7EE]"
    },
    {
      id: 13,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear:  "Junior",
      position: "Vice President",
       
      color:"bg-[#FBF7EE]"
    },
            {
      id: 14,
      name: "Jordan Reyes",
      photoSrc: "/afford.jpeg",
      major: "Government & Politics",
      classYear:  "Junior",
      position: "President",
       
      color:"bg-[#FBF7EE]"
    },
    {
      id: 15,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear:  "Junior",
      position: "Vice President",
       
      color:"bg-[#FBF7EE]"
    },
    {
      id: 3,
      name: "Amara Osei",
      photoSrc: "/afford.jpeg",
      major: "Computer Science",
      classYear:  "Junior",
      position: "Vice President",
       
      color:"bg-[#FBF7EE]"
    },
  ]}
/>
<RequiredInfoPlusContact />
</main>
    </div>
  )
}