import StanfordBar from "@/components/stanfordBar.js";
import HumsciLogo from "@/components/logos/HumSciLogo.js";

export default function Header() {
  return (
    <div className="absolute top-0 z-50 w-full">
      <StanfordBar />
      <div className="max-w-wrapper py-4 w-full">
        <HumsciLogo className="w-[444px] h-auto" />
        
        <ul className="flex items-center justify-end gap-6 font-bold text-white text-shadow-lg/50 text-lg border-t border-white pt-4">
          <li>Prospective Students</li>
          <li>Current Students</li>
          <li>Academics and Research</li>
          <li>News</li>
          <li>Events</li>
          <li>About</li>
          <li>Giving</li>
        </ul>

      </div>
    </div>
  );
}