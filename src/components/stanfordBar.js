import StanfordUniversityLogo from "@/components/logos/StanfordUniversityLogo.js";

export default function StanfordBar({className = ""}) {
  return (
    <div className={`bg-cardinal-red text-white pb-2 pt-3 relative z-40 ${className}`}>
      <div className="max-w-wrapper">
        <StanfordUniversityLogo className="" />
      </div>
    </div>
  );
}