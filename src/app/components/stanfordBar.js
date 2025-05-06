import StanfordUniversityLogo from "@/app/components/logos/StanfordUniversityLogo.js";

export default function StanfordBar({className = ""}) {
  return (
    <div className={`bg-cardinal-red text-white p-2 pt-3 relative z-40 ${className}`}>
      <div className="max-w-(--max-width) mx-auto">
        <StanfordUniversityLogo className="" />
      </div>
    </div>
  );
}