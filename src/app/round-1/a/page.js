import HeroAnimated from "@/app/round-1/components/heroAnimated";
import TextAndMedia from "@/app/round-1/components/textAndMedia";
import News from "@/app/round-1/components/news";

export default function Home() {
  return (
    <div className="min-h-[600vh]">
      <HeroAnimated />
      <TextAndMedia />
      <News />
    </div>
  );
}
