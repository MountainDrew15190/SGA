"use client"
import { useRef } from 'react'
import { Source_Serif_4, Space_Grotesk } from "next/font/google";
import Navbar from "@/app/components/navbar";
import Timer from "@/app/components/timer";
import CardList from "@/app/components/CardList";
import PlatformStatement from "@/app/components/platformStatement";
import ExpandableSection from "@/app/components/ExpandableSection"
import RequiredInfoPlusContact from "@/app/components/RequiredInfo";
import ButtonLinks from "@/app/components/ButtonLinkGrid"
import Policy from "../components/policy";
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
          text={<div className="leading-loose text-base text-[#6B5D56]"><p> - Work with university administration to implement a systemwide tuition freeze for students based on their class year </p>
            <p> - Set up master list of scholarship and internship opportunities </p>
            <p> - Expanding access to university resources for students looking for off-campus housing </p>
            <p> - Compensation for students who experience severe utility issues throughout the year </p>
            <p> - Increase funding towards the pilot Metrocard program that began implementation last year </p>
            <p> - Advocate for UMD’s participation in the Metro U-Pass college student program </p>
            <p> - Expand on Transportation Services food drive for parking citation reduction </p>
            <p> - Continue free printing during exam weeks initiative </p>
            <p> - Put textbook costs on Testudo before classes start </p>
            <p> - Work with faculty to adopt more open educational resources </p>
            <p> - Continue initiative to restore the Maryland Food Co-op, or assist liaisons in establishing a College Park Co-op </p> 
            <p> - Work to increase funding for the Campus Pantry</p></div>} />
        <Policy 
        setRef={setRef}
          area="Representation"
          title="Representation"
          text={<div className="leading-loose text-base text-[#6B5D56]"> <p> - Restore relations with RHA, GSG</p>
          <p> - Take advantage of largely unused avenues for change (MGA, B1G support, College Park City Council)</p>
          <p> - De-polarize SGA culture</p>
          <p> - Expedite smaller, overly bureaucratic processes to allow for focus on bigger issues</p>
          <p> - Amend election rules to allow for broader advertisement during passive campaigning </p>
          <p> - Apply individual sanctions for individual election violations</p> 
          <p> - Set aside a fund to provide money to campaigns running in elections</p>
          <p> - Have election administrators elected by outgoing legislature</p>
          <p> - Committee to discuss popular vote of justices</p>
          <p> - Allow students to add laws and amend the SGA Constitution by petitioning for referenda</p>
          <p> - Semesterly/yearly summit with admin to openly publish a list of commitments</p>
          <p> - Cultural Specialized Committee with representatives from cultural orgs to ensure representation from communities</p></div>}
        />
        <Policy 
        setRef={setRef}
          area="Transparency"
          title="Transparency"
          text={<div className="leading-loose text-base text-[#6B5D56]">
            <p> - Create videos and infographics to help students get involved in SGA, including those interested in running for office</p>
            <p> - Have Elections Commission publicize eligible tickets further before active campaigning begins</p>
            <p> - Redesign SGA website entirely, to make it easier for students to understand the role and operations of the organization</p>
            <p> - Release student surveys for big decisions for public feedback</p>
            <p> - During elections, suggest professors advertise the elections to their students and encourage them to vote</p>
            <p> - Work to expand Terrapins Connect, our platform that connects students with alumni for mentoring and professional opportunities</p> 
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
            <p> - Revitalize the COFA website to include video tutorials to improve accessibility</p>
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
          area="CampusSafety"
          title="Campus Safety"
          text={<div className='leading-loose text-base text-[#6B5D56]'> 
          <p> - Establish UMD as a Sanctuary Campus</p>
          <p> - Establish a know your rights education campaign</p>
          <p> - Expand the Student Legal Aid center to protect and advocate for immigrant students</p>
          <p> - Restore immigrant student resources page to the UMD website, and archive it on the SGA website</p>
          <p> - Work with PG Immigrant Rights Collective and immigrant student groups</p>
          <p> - Ensure timely admin-student communication and overall admin transparency (see: McKeldin lice incident) </p>
          <p> - Work with liaisons to have a rapid response system for power and heat outages</p>
          <p> - Improve police alert timeliness, to allow for community to prepare or respond when necessary</p>
          <p> - Expand sexual misconduct prevention efforts</p>
          <p> - Push for trained response team to respond to mental health crises, rather than UMPD</p>
          <p> - Allow 2 unexcused absences per class per semester, instead of 1T (pg. 13 for Pines’ memo)</p>
          <p> - More lenient grief absence policy modeled after University of Illinois Urbana</p>
          <p> - Continue accessibility walk, safety walk; push for improvements upon seeing results</p>
          <p> - Expand on access to free feminine hygiene products campuswide</p>
          <p> - Continue advocating for the Graduate Labor Union</p>
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
            <p> - Protection from Flock Safety, AI Cameras</p>
            <p> - Transparency of investments and pushing for divestment from problematic companies</p>
            <p> - Further support for GLU, both on campus and lobbying in Annapolis</p>
            <p> - Work with MGA on legislation that did not pass in previous legislative sessions</p>
            <p> - Shuttle to polling locations that offer early voting in addition to having STAMP as a voting location</p>
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
