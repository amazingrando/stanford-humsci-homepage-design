import HeroParallax from "@/app/round-2/components/heroParallax";
import News from "@/app/round-2/components/news";
import TextAndMedia from "@/app/round-2/components/textAndMedia";
import ParallaxFeature from "@/app/round-2/components/parallaxFeature";
import Collection1 from "@/app/round-2/components/collection1";
import Collection2 from "@/app/round-2/components/collection2";

export default function Home() {
  return (
    <div className="min-h-[600vh]">
      <HeroParallax />
      <div className="max-w-wrapper grid gap-12 p-12">
        <TextAndMedia />
        <ParallaxFeature />
      </div>
      <News bgColor="bg-black-90"/>
      <Collection1 />
      <Collection2 />
    </div>
  );
}
