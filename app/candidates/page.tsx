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
      name: "Sathwika Nadella",
      photoSrc: "/candidates/Sathwika.jpeg",
      major: "GVPT",
      classYear:  "Sophomore",
      statement:"I want our admin to be more transparent and communicate in urgent situations so us students aren’t left in the dark for so long (literally! see: power outage). I want to work to curb the out of control rent prices for off campus housing in College Park, so we can all afford to live.",
      position: "BSOS Legislator",
       
      color:"bg-[#FBF7EE]"
    },
    {
      id: 7,
      name: "Tiara Hatami",
      photoSrc: "/candidates/Tiara.jpeg",
      major: "GVPT",
      classYear:  "Sophomore",
      statement:"I hope to represent my fellow students to make all BSOS students’ voices heard and foster an inclusive learning environment for all students. ",
      position: "BSOS Legislator",
       
      color:"bg-[#FBF7EE]"
    },
            {
      id: 8,
      name: "Jake Duvall",
      photoSrc: "/candidates/Jake.jpeg",
      major: "Secondary English Education",
      classYear:  "Sophomore",
      position: "EDUC Legislator",
      statement:"I want to make a difference on campus by making UMD a sanctuary campus. For specific college of education stuff I don’t have too much in mind but would be willing to back anything that another student in the college needs.",
      color:"bg-[#FBF7EE]"
    },
    {
      id: 9,
      name: "Denis Njoroge",
      photoSrc: "/candidates/Denis.PNG",
      major: "Information Science",
      classYear:  "Senior",
      position: "INFO Legislator",
      statement:"I want to strengthen communication between students and SGA, advocate for resources and opportunities that support students academically and professionally, and create better engagement across campus.",
      color:"bg-[#FBF7EE]"
    },
            {
      id: 10,
      name: "Alexander Lubell",
      photoSrc: "/candidates/Alexander.JPG",
      major: "Finance & Information Systems",
      classYear:  "Junior",
      position: "BUS Legislator",
      statement:"I want to advocate for revision of the strict grading curve guidelines in Smith School courses, especially GPA caps that can penalize students in already rigorous classes. I also want to provide more advocacy outlets for underrepresented students and student orgs who need assistance.",
      color:"bg-[#FBF7EE]"
    },
    {
      id: 11,
      name: "Zoe Mededovic",
      photoSrc: "/candidates/Zoe.PNG",
      major: "Architecture",
      classYear:  "Sophomore",
      position: "ARCH Legislator",
      statement:"I want to use my role to listen to my peers, turn their concerns into meaningful action, and help make campus a more connected and supportive place for everyone.",
       
      color:"bg-[#FBF7EE]"
    },
            {
      id: 12,
      name: "Raj Bhansali",
      photoSrc: "/candidates/Raj.png",
      major: "Public Health Sciences + Finance",
      classYear:  "Junior",
      position: "SPH Legislator",
      statement:"I want to make a difference on campus by representing more diverse perspectives and advocating for those around me. ",
      color:"bg-[#FBF7EE]"
    },
    {
      id: 13,
      name: "Molly Zatlukal",
      photoSrc: "/candidates/Molly.jpeg",
      major: "Public Policy",
      classYear:  "Junior",
      position: "PLCY Legislator",
      statement:"I promise to listen to the issues that matter most to my peers, bring those perspectives to SGA, and help transform them into meaningful action.",
      color:"bg-[#FBF7EE]"
    },
            {
      id: 14,
      name: "Spencer Zheng",
      photoSrc: "/candidates/Spencer.jpg",
      major: "Computer Science",
      classYear:  "Senior",
      statement:"As a CMNS representative, I will work to communicate with and stand up for our clubs so that the SGA addresses their concerns and properly funds them.",
      position: "CMNS Legislator",
       
      color:"bg-[#FBF7EE]"
    },
    {
      id: 15,
      name: "Andrew Dietrich",
      photoSrc: "/candidates/Andrew.jpeg",
      major: "Computer Science",
      classYear:  "Sophomore",
      statement:"I want to make SGA more transparent and communicative",
      position: "CMNS Legislator",
       
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
        {
      id: 16,
      name: "Mikal Witherspoon",
      photoSrc: "/candidates/Mikail.jpg",
      major: "Plant Biology",
      statement:"I want to stay visible and easy to reach, so if something does come up, it gets handled quickly instead of sitting. ReviveUMD is about rebuilding SGA, and that takes new people willing to show up and do the work.",
      classYear:  "Sophomore",
      position: "AGNR Legislator",
      color:"bg-[#FBF7EE]"
    },
        {
      id: 17,
      name: "Hayden Day",
      photoSrc: "/candidates/Hayden.jpeg",
      major: "History + PPE",
      classYear:  "Junior",
      statement: "To faithfully serve the student body of the University of Maryland while championing the humanities across student groups and fields of study.",
      position: "ARHU Legislator",
       
      color:"bg-[#FBF7EE]"
    },
        {
      id: 18,
      name: "Mareena Panjabi",
      photoSrc: "/candidates/Mareena.jpeg",
      major: "English + GVPT",
      statement:"I want to make a difference on campus by making sure every student feels heard and help students have a smoother year!",
      classYear:  "Sophomore",
      position: "ARHU Legislator",
       
      color:"bg-[#FBF7EE]"
    },
            {
      id: 19,
      name: "Cahlil Gainey",
      photoSrc: "/candidates/Cahlil.jpeg",
      major: "LTSC",
      classYear: "Junior",
      position: "USTUD Legislator",
      statement: "To push for a better support system for first gen Terps and low-income students",
      color:"bg-[#FBF7EE]"
    },
            {
      id: 20,
      name: "Isaiah Singletary",
      photoSrc: "/candidates/Isaiah.jpg",
      major: "LTSC",
      classYear:  "Freshman",
      statement:"I want to help make SGA more accessible to the student body and create more opportunities for students to get involved, share their ideas, and feel connected to the UMD community.",
      position: "USTUD Legislator",
       
      color:"bg-[#FBF7EE]"
    },
            {
      id: 21,
      name: "Ike Gbloagun",
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