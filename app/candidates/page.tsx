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
  ticketName="ReviveUMD"
  candidates={[
    {
      id: 1,
      name: "Avi Polirer",
      photoSrc: "/candidates/avibig.png",
      major: "Public Policy",
      classYear:"Senior",
      position: "Student Body President",
      statement:"If elected to serve as your Student Body President, I vow to work towards reducing student costs, freezing tuition, protecting our immigrant and undocumented populations, and returning SGA to the people.",
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
      photoSrc: "/candidates/johnnybig.png",
      major: "Finance",
      classYear:  "Senior",
      position: "Vice President of Financial Affiars",
      statement:"I want to fix SGA funding. Student organizations shouldn’t have to jump through hoops just to access basic necessities. I want to make funding more efficient and accessible while helping organizations build sustainable revenue that lasts longer than the funding cycle",
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
      photoSrc: "/candidates/Sathwika copy.jpeg",
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
      photoSrc: "/candidates/Jake copy.jpeg",
      major: "Secondary English Education",
      classYear:  "Sophomore",
      position: "EDUC Legislator",
      statement:"I want to make a difference on campus by making UMD a sanctuary campus. For specific college of education stuff I don’t have too much in mind but would be willing to back anything that another student in the college needs.",
      color:"bg-[#FBF7EE]"
    },
    {
      id: 9,
      name: "Denis Njoroge",
      photoSrc: "/candidates/Denis copy 2.PNG",
      major: "Information Science",
      classYear:  "Senior",
      position: "INFO Legislator",
      statement:"I want to strengthen communication between students and SGA, advocate for resources and opportunities that support students academically and professionally, and create better engagement across campus.",
      color:"bg-[#FBF7EE]"
    },
                {
      id: 21,
      name: "Ike Gbolagun",
      photoSrc: "/candidates/ike.jpg",
      major: "Mechanical Engineering",
      classYear:  "Junior",
      statement:"My hope for my role in SGA is to build a more student centered safety and wellbeing program, to create more visible spaces where students feel supported both personally and academically.",
      position: "ENGR Legislator",
       
      color:"bg-[#FBF7EE]"
    },
    {
      id: 11,
      name: "Zoe Mededovic",
      photoSrc: "/candidates/Zoe copy.PNG",
      major: "Architecture",
      classYear:  "Sophomore",
      position: "ARCH Legislator",
      statement:"I want to use my role to listen to my peers, turn their concerns into meaningful action, and help make campus a more connected and supportive place for everyone.",
       
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
      id: 13,
      name: "Molly Zatlukal",
      photoSrc: "/candidates/Molly2.jpeg",
      major: "Public Policy",
      classYear:  "Junior",
      position: "PLCY Legislator",
      statement:"I promise to listen to the issues that matter most to my peers, bring those perspectives to SGA, and help transform them into meaningful action.",
      color:"bg-[#FBF7EE]"
    },
            {
      id: 14,
      name: "Spencer Zheng",
      photoSrc: "/candidates/Spencer copy.JPG",
      major: "Computer Science",
      classYear:  "Senior",
      statement:"As a CMNS representative, I will work to communicate with and stand up for our clubs so that the SGA addresses their concerns and properly funds them.",
      position: "CMNS Legislator",
       
      color:"bg-[#FBF7EE]"
    },
    {
      id: 15,
      name: "Andrew Dietrich",
      photoSrc: "/candidates/Andrew copy.jpeg",
      major: "Computer Science",
      classYear:  "Sophomore",
      statement:"I want to make SGA more transparent and communicative as well increase funding for Computing related student organizations.",
      position: "CMNS Legislator",
       
      color:"bg-[#FBF7EE]"
    },
    {
      id: 3,
      name: "Jas Bhamra",
      photoSrc: "/candidates/Jas.jpeg",
      major: "Mathematics",
      classYear:  "Senior",
      statement:"I want to help bridge the gap between SGA and the student body. There’s a large disconnect between the students and how they perceive SGA and SGA involvement, so being able to bridge that gap is important to me.",
      position: "CMNS Legislator",
       
      color:"bg-[#FBF7EE]"
    },
                {
      id: 12,
      name: "Raj Bhansali",
      photoSrc: "/candidates/Raj copy.png",
      major: "Public Health Sciences + Finance",
      classYear:  "Junior",
      position: "SPH Legislator",
      statement:"I want to make a difference on campus by representing more diverse perspectives and advocating for those around me. ",
      color:"bg-[#FBF7EE]"
    },
        {
      id: 17,
      name: "Hayden Day",
      photoSrc: "/candidates/Hayden copy.JPEG",
      major: "History + PPE",
      classYear:  "Junior",
      statement: "I will faithfully serve the student body of the University of Maryland while championing the humanities across student groups and fields of study.",
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
      id: 19,
      name: "Cahlil Gainey",
      photoSrc: "/candidates/Cahlil.jpeg",
      major: "LTSC",
      classYear: "Junior",
      position: "USTUD Legislator",
      statement: "I want to push for a better support system for first gen Terps and low-income students",
      color:"bg-[#FBF7EE]"
    },
            {
      id: 20,
      name: "Isaiah Singletary",
      photoSrc: "/candidates/Isaiah.JPG",
      major: "LTSC",
      classYear:  "Freshman",
      statement:"I want to help make SGA more accessible to the student body and create more opportunities for students to get involved, share their ideas, and feel connected to the UMD community.",
      position: "USTUD Legislator",
       
      color:"bg-[#FBF7EE]"
    },
  ]}
/>
<RequiredInfoPlusContact />
</main>
    </div>
  )
}