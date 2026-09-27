import CandidateCard from "./CandidateCard";

export interface Candidate {
  id: string | number;
  name: string;
  photoSrc: string;
  major: string;
  classYear: string;
  position: string;
  statement?: string;
  color:string;
}

interface CandidateGridProps {
  ticketName?: string; // e.g. "Terps United"
  candidates: Candidate[];
}

export default function CandidateGrid({
  ticketName,
  candidates,
}: CandidateGridProps) {
  return (
    <section className="bg-[#FBF7EE] px-6 py-12">
      {ticketName && (
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E21833]">
            UMD SGA Ticket
          </span>
          <h2 className="mt-1 text-3xl font-black tracking-tight text-black sm:text-4xl">
            {ticketName}
          </h2>
        </div>
      )}

      {candidates.length === 0 ? (
        <p className="text-center text-sm text-neutral-600">
          No candidates added to this ticket yet.
        </p>
      ) : (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              name={candidate.name}
              photoSrc={candidate.photoSrc}
              major={candidate.major}
              classYear={candidate.classYear}
              position={candidate.position}
              statement={candidate.statement}
              color={candidate.color}
            />
          ))}
        </div>
      )}
    </section>
  );
}
