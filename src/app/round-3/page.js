import HeroParallax from "@/app/round-3/components/heroParallax";
import News from "@/app/round-3/components/news";
import TextAndMedia from "@/app/round-3/components/textAndMedia";
import ParallaxFeature from "@/app/round-3/components/parallaxFeature";
import Collection1 from "@/app/round-3/components/collection1";
import Collection2 from "@/app/round-3/components/collection2";
import Collection3 from "@/app/round-3/components/collection3";
import AnimatedBlock from "@/app/round-3/components/animatedBlock";
import TextBox from "@/app/round-3/components/textBox";
import bgImage from "@/assets/images/bldg110_14_3200x1532-1006439883.jpg"
import Header from "@/components/header.js";

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-black-90">
        <HeroParallax />
        <div className="max-w-wrapper flex flex-col gap-12 p-12">
          <TextAndMedia />
          <ParallaxFeature />
          <News bgColor="bg-transparent"/>
          <Collection1 />
          <Collection2 />
          <AnimatedBlock />
          <Collection3 />
          <TextBox bgImage={bgImage}/>
        </div>
      </div>
    </>
  );
}
