import Hero from "@/app/round-1/components/heroParallax";
import TextAndMedia from "@/app/round-1/components/textAndMedia";
import News from "@/app/round-1/components/news";

export default function Home() {
  return (
    <div className="min-h-[600vh]">
      <Hero />
      <TextAndMedia />
      <News />
    </div>
  );
}
