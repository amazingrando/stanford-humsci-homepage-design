import HeroAnimated from "@/components/heroAnimated";
import HeroParallax from "@/components/heroParallax";
import ImageSide from "@/components/imageSide";
import mediaImage from "@/assets/images/foundational-research_iceberg_final-copy-01-01_1.webp"
import TextAndMedia from "@/components/textAndMedia";
import News from "@/components/news";
import TextAndMediaParallax from "@/components/textAndMediaParallax";
import ParallaxFeature from "@/components/parallaxFeature";

export default function Home() {
  return (
    <div className="min-h-[600vh]">
      <HeroParallax />
      <TextAndMediaParallax />
      <ParallaxFeature />
      <News/>
    </div>
  );
}
