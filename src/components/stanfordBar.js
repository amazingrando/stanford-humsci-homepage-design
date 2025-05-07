import StanfordUniversityLogo from "@/components/logos/StanfordUniversityLogo.js";
import Link from "next/link";

export default function StanfordBar({className = ""}) {
  return (
    <div className={`bg-cardinal-red text-white pb-2 pt-3 relative z-40 ${className}`}>
      <div className="max-w-wrapper">
        <Link href="/">
          <StanfordUniversityLogo className="" />
        </Link>
      </div>
    </div>
  );
}