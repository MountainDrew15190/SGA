import Image from "next/image";

interface CandidateCardProps {
  name: string;
  photoSrc: string;
  major: string;
  classYear: number; // e.g. 2028
  position: string; // e.g. "President", "Senator - Engineering"
  statement?: string; // defaults to a "making a difference" line if omitted
}

export default function CandidateCard({
  name,
  photoSrc,
  major,
  classYear,
  position,
  statement,
}: CandidateCardProps) {
  const pledge =
    statement ?? "Running to make a real difference on campus.";

  return (
    <div className="relative w-full max-w-sm overflow-hidden rounded-none border-2 border-black bg-[#FBF7EE] shadow-[6px_6px_0_0_#000]">
      {/* Maryland-flag corner flag: black/gold checks + red/white cross, kept small and structural, not decorative */}
      <div
        className="absolute right-0 top-0 h-14 w-14"
        style={{
          backgroundImage:
            "repeating-conic-gradient(#000 0% 25%, #FFD520 0% 50%)",
          backgroundSize: "14px 14px",
        }}
        aria-hidden="true"
      />

      {/* Photo */}
      <div className="relative aspect-[4/3] w-full border-b-2 border-black bg-black">
        <Image
          src={photoSrc}
          alt={`Campaign photo of ${name}`}
          fill
          sizes="(max-width: 400px) 100vw, 384px"
          className="object-cover"
          priority={false}
        />
        <span className="absolute bottom-0 left-0 bg-[#E21833] px-3 py-1 text-sm font-bold uppercase tracking-wide text-white">
          Class of {classYear}
        </span>
      </div>

      {/* Details */}
      <div className="space-y-3 p-5">
        <div>
          <h3 className="text-2xl font-black leading-tight tracking-tight text-black">
            {name}
          </h3>
          <p className="text-sm font-semibold text-[#E21833]">{position}</p>
        </div>

        <p className="text-sm text-neutral-700">{major}</p>

        <p className="border-l-4 border-[#FFD520] pl-3 text-sm italic text-neutral-800">
          &ldquo;{pledge}&rdquo;
        </p>
      </div>
    </div>
  );
}
