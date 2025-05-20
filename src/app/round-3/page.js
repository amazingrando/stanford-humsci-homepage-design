import HeroParallax from "@/app/round-3/components/heroParallax";
import News from "@/app/round-3/components/news";
import TextAndMedia from "@/app/round-3/components/textAndMedia";
import ParallaxFeature from "@/app/round-3/components/parallaxFeature";
import Books from "@/app/round-3/components/books";
import AnimatedBlock from "@/app/round-3/components/animatedBlock";
import TextBox from "@/app/round-3/components/textBox";
import bgImage from "@/assets/images/bldg110_14_3200x1532-1006439883.jpg"
import Header from "@/components/header.js";
import Awards from "@/app/round-3/components/awards";
import InTheMoment from "@/app/round-3/components/inTheMoment";

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
          <Awards />
          <AnimatedBlock />
          <Books />
          <InTheMoment />
          <TextBox bgImage={bgImage}/>
        </div>
      </div>
    </>
  );
}
