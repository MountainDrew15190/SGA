"use client"
import { useRef } from 'react'
import { Source_Serif_4, Space_Grotesk } from "next/font/google";
import Navbar from "@/app/components/navbar";
import Timer from "@/app/components/timer";
import PlatformStatement from "@/app/components/platformStatement";
import RequiredInfoPlusContact from "@/app/components/RequiredInfo";
import ButtonLinks from "@/app/components/ButtonLinkGrid"
import Policy from "../components/policy";
import { plusJakartaSans } from '@/app/fonts';
import Link from "next/link";
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

    const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el
  }
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // Trigger function passed to ScrollNav
  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id]
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }


  return (
    <div
      className={`${sourceSerif.variable} ${plusJakartaSans.variable} ${spaceGrotesk.variable} bg-[#FAF6EE]`}
      style={{ fontFamily: "var(--font-sans)" }}
    >
      <section id ="Top">
      <Navbar />
      <Timer />
      </section>
      <main>
        <PlatformStatement />
        <ButtonLinks 
        onScrollTo={scrollToSection}/>
        <Policy 
        setRef={setRef}
          area="Affordability"
          title="Affordability"
          text={<div className="leading-loose text-base text-[#6B5D56]"><p> - Work with university administration to implement a systemwide <Link href="https://admission.universityofcalifornia.edu/tuition-financial-aid/tuition-cost-of-attendance/tuition-stability-plan.html" className='text-[#0000EE] underline'>tuition freeze</Link> for students based on their class year </p>
            <p> - Set up master list of scholarship and internship opportunities </p>
            <p> - Expanding access to university <Link href="https://www.och.umd.edu/resources/" className='text-[#0000EE] underline'>resources</Link> for students looking for off-campus housing </p>
            <p> - Compensation for students who experience  <Link href="https://dbknews.com/2025/12/10/umd-south-hill-water-outage/" className='text-[#0000EE] underline'>severe utility issues</Link> throughout the year </p>
            <p> - Increase funding towards the pilot  <Link href="https://dbknews.com/2026/02/05/umd-sga-fund-preloaded-metro-smartrip-card/" className='text-[#0000EE] underline'>Metrocard program</Link> that began implementation last year </p>
            <p> - Advocate for UMD's participation in the Metro  <Link href="https://www.wmata.com/pay/fare-programs/student-programs.html" className='text-[#0000EE] underline'>U-Pass college student program</Link> </p>
            <p> - Expand on Transportation Services <Link href="https://transportation.umd.edu/food-drive" className='text-[#0000EE] underline'>food drive</Link> for parking citation reduction </p>
            <p> - Continue  <Link href="https://dbknews.com/2026/04/02/umd-sga-printing-libraries-final/" className='text-[#0000EE] underline'>free printing during exam weeks</Link> initiative </p>
            <p> - Put textbook costs on Testudo before classes start </p>
            <p> - Work with faculty to adopt more <Link href="https://en.wikipedia.org/wiki/Open_educational_resources" className='text-[#0000EE] underline'>open educational resources</Link></p>
            <p> - Continue initiative to restore the  <Link href="https://dbknews.com/2019/06/11/umd-co-op-closed-permanent-official-stamp-food/" className='text-[#0000EE] underline'>Maryland Food Co-op</Link>, or assist liaisons in establishing a College Park Co-op </p> 
            <p> - Work to increase funding for the <Link href="https://dbknews.com/2024/04/16/umd-campus-pantry-food-insecurity/" className='text-[#0000EE] underline'>Campus Pantry</Link></p></div>} />
        <Policy 
        setRef={setRef}
          area="Representation"
          title="Representation"
          text={<div className="leading-loose text-base text-[#6B5D56]"> <p> - Restore relations with <Link href="https://dbknews.com/2026/04/29/umd-gsg-rha-sga-bylaw-amendments/" className='text-[#0000EE] underline'>RHA, GSG</Link></p>
          <p> - Take advantage of largely unused avenues for change (MGA, B1G support, College Park City Council)</p>
          <p> - De-<Link href="https://dbknews.com/2026/05/08/umd-sga-president-divestment-lease-ordinance/" className='text-[#0000EE] underline'>polarize</Link> SGA culture</p>
          <p> - Expedite smaller, overly bureaucratic processes to allow for focus on bigger issues</p>
          <p> - Amend election rules to allow for broader advertisement during passive campaigning </p>
          <p> - Apply <Link href="https://dbknews.com/2026/04/14/umd-sga-election-tickets-disqualified/" className='text-[#0000EE] underline'>individual sanctions for individual election violations</Link></p> 
          <p> - Set aside a fund to provide money to campaigns running in elections</p>
          <p> - Have election administrators elected by outgoing legislature</p>
          <p> - Committee to discuss popular vote of justices</p>
          <p> - Allow students to add laws and amend the SGA Constitution by petitioning for referenda</p>
          <p> - Semesterly/yearly summit with admin to openly publish a list of commitments</p>
          <p> - <Link href="https://dbknews.com/2026/02/26/sga-committee-campuswide-hate-bias/" className='text-[#0000EE] underline'>Cultural Specialized Committee</Link> with representatives from cultural orgs to ensure representation from communities</p></div>}
        />
        <Policy 
        setRef={setRef}
          area="Transparency"
          title="Transparency"
          text={<div className="leading-loose text-base text-[#6B5D56]">
            <p> - Create videos and infographics to help students get involved in SGA, including those interested in running for office</p>
            <p> - Have Elections Commission publicize eligible tickets further before active campaigning begins</p>
            <p> - Redesign <Link href="https://www.umdsga.com/" className='text-[#0000EE] underline'>SGA website</Link> entirely, to make it easier for students to understand the role and operations of the organization</p>
            <p> - Release student surveys for big decisions for public feedback</p>
            <p> - During elections, suggest professors advertise the elections to their students and encourage them to vote</p>
            <p> - Work to expand <Link href="https://alumni.umd.edu/resources/terrapins-connect" className='text-[#0000EE] underline'>Terrapins Connect</Link>, our platform that connects students with alumni for mentoring and professional opportunities</p> 
            <p> - Work towards higher civic engagement in SGA elections</p>
            <p> - Maintain ReviveUMD platform on a website, with intermittent progress reports on each platform initiative</p>
            <p> - Publicize the full results of the Spring 2026 election</p>
          </div>}
        />
                <Policy 
        setRef={setRef}
          area="FundingReform"
          title="Funding Reform"
          text={<div className='leading-loose text-base text-[#6B5D56]'>
            <p> - Create a Quick Grant Fund for small, time-sensitive expenses</p>
            <p> - Allow quicker funding requests for the beginnings of semesters</p>
            <p> - Create a dedicated funding pool for student organizations</p>
            <p> - Revitalize social media and outreach efforts to student organizations</p>
            <p> - Revitalize the <Link href="https://umdsgafinance.weebly.com/" className='text-[#0000EE] underline'>COFA website</Link> to include video tutorials to improve accessibility</p>
            <p> - Ease regulations towards allowing student organizations to request SGA funding for food even when not listed in the mission statement</p>
            <p> - Food money can be spent outside of Stamp locations</p>
            <p> - Increase the miscellaneous spending cap for clubs</p>
            <p> - Allow funding to go towards paying for gas and parking</p>
            <p> - Streamline E-Calendar, and have it include more information on rooms prior to booking</p>
            <p> - Introduce a consulting group for student orgs when funding request not wholly fulfilled</p>
          </div>}
        />
                <Policy 
        setRef={setRef}
          area="CampusSafety https://dbknews.com/2025/10/29/umd-sanctuary-campus-campaign-ydsa/"
          title="Campus Safety"
          text={<div className='leading-loose text-base text-[#6B5D56]'> 
          <p> - Establish UMD as a <Link href="https://dbknews.com/2025/10/29/umd-sanctuary-campus-campaign-ydsa/" className='text-[#0000EE] underline'>Sanctuary Campus</Link></p>
          <p> - Establish a <Link href="https://www.aclu-md.org/know-your-rights-page/" className='text-[#0000EE] underline'>know your rights</Link> education campaign</p>
          <p> - Expand the <Link href="https://legalaid.umd.edu/" className='text-[#0000EE] underline'>Student Legal Aid</Link> center to protect and advocate for immigrant students</p>
          <p> - Restore immigrant <Link href="https://legalaid.umd.edu/" className='text-[#0000EE] underline'>student resources page</Link> to the UMD website, and archive it on the SGA website</p>
          <p> - Work with <Link href="https://linktr.ee/pg_irc" className='text-[#0000EE] underline'>PG Immigrant Rights Collective</Link> and immigrant student groups</p>
          <p> - Ensure timely admin-student communication and overall admin transparency (see:  <Link href="https://dbknews.com/2025/09/19/umd-body-lice-campus/" className='text-[#0000EE] underline'>McKeldin lice incident</Link>) </p>
          <p> - Work with liaisons to have a rapid response system for <Link href="https://dbknews.com/2026/03/08/umd-dorms-power-outage/" className='text-[#0000EE] underline'>power and heat outages</Link></p>
          <p> - Improve police alert timeliness, to allow for community to prepare or respond when necessary</p>
          <p> - Expand sexual misconduct prevention efforts</p>
          <p> - Push for trained response team to respond to mental health crises, rather than UMPD</p>
          <p> - Allow <Link href="https://senate.umd.edu/api/s3/files/k/archive/files/public/senate/meetings/2025-2026/2025-10-15-Materials.pdf?v=1785249382000#page=13" className='text-[#0000EE] underline'>2 unexcused absences per class</Link> per semester, instead of 1T (pg. 13 for Pines’ memo)</p>
          <p> - More lenient <Link href="https://odos.illinois.edu/resources/students/bereavement/" className='text-[#0000EE] underline'>grief absence policy</Link> modeled after University of Illinois Urbana</p>
          <p> - Continue <Link href="https://dbknews.com/2026/05/08/accessibility-audit-umd-sga/" className='text-[#0000EE] underline'>accessibility walk, safety walk</Link>; push for improvements upon seeing results</p>
          <p> - Expand on access to free feminine hygiene products campuswide</p>
          <p> - Continue advocating for the <Link href="https://dbknews.com/2025/09/25/umd-sga-glu-recognition-act/" className='text-[#0000EE] underline'>Graduate Labor Union</Link></p>
          <p> - Increase timeliness in grade updates before Add/Drop deadline</p>
          <p> - Provide access to drink testers and covers, and promote their usage</p>
          <p> - Promote safety resources at neighborhood bars</p> 
          </div>}
        />
                <Policy 
        setRef={setRef}
          area="CityState"
          title="City/State Policy"
          text={<div className='leading-loose text-base text-[#6B5D56]'>
            <p> - Work with admin, city, and/or businesses to offer student discounts at local businesses </p>
            <p> - Housing policy w/city, state (rent control, realpage out, right to first refusal, maintain Early Lease Ordinance)</p>
            <p> - Increase pro-student lobbying efforts to the state legislature</p>
            <p> - Protection from <Link href="https://deflock.org/" className='text-[#0000EE] underline'>Flock Safety, AI Cameras</Link></p>
            <p> - Transparency of investments and pushing for divestment from  <Link href="https://dbknews.com/2026/04/17/umd-usm-divestment-coalition-tribunal/" className='text-[#0000EE] underline'>problematic companies</Link></p>
            <p> - <Link href="https://dbknews.com/2026/05/04/umd-graduate-student-unionization-rights/" className='text-[#0000EE] underline'>Further support for GLU</Link>, both on campus and lobbying in Annapolis</p>
            <p> - Work with MGA on legislation that did not pass in previous legislative sessions</p>
            <p> - Shuttle to polling locations that offer early voting in addition to having <Link href="https://dbknews.com/2024/09/24/umd-students-2024-voting-election-guide/" className='text-[#0000EE] underline'>STAMP as a voting location</Link></p>
            <p> - Expand relationship between former/current MGA interns and the SGA Governmental Affairs Committee to increase lobbying effectiveness</p>
          </div>}
        />
                <Policy 
        setRef={setRef}
          area="Dining"
          title="Dining"
          text={<div className='leading-loose text-base text-[#6B5D56]'>
            <p> - Work to allow student suggestions for new menu items</p>
            <p> - “Lunch with the director” meetings to improve communication</p>
            <p> - Advocate for meal swipe donation, dining dollar donation ability</p>
            <p> - Working to keep either the Y or South open slightly later, with reduced capacity</p>
            <p> - Allow students to take out food when inclement weather is expected, and during religious holidays</p>
            <p> - Expand on Kosher and Halal options at dining halls</p>
          </div>}
        />
        <RequiredInfoPlusContact/>
      </main>
    </div>
  );
}
