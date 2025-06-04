"use client"
import HeroParallax from "@/app/round-4/f/components/heroParallax";
import News from "@/app/round-4/f/components/news";
import TextAndMedia from "@/app/round-4/f/components/textAndMedia";
import TextAndMedia2 from "@/app/round-4/f/components/textAndMedia2";
import TextAndMedia3 from "@/app/round-4/f/components/textAndMedia3";
import ParallaxFeature from "@/app/round-4/f/components/parallaxFeature";
import Books from "@/app/round-4/f/components/books";
import AnimatedBlock from "@/app/round-4/f/components/animatedBlock";
import TextBox from "@/app/round-4/f/components/textBox";
import bgImage from "@/assets/images/bldg110_14_3200x1532-1006439883.jpg"
import Header from "@/components/header.js";
import Awards from "@/app/round-4/f/components/awards";
import InTheMoment from "@/app/round-4/f/components/inTheMoment";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import seal from "@/assets/images/th-2291945262.jpg"
import Image from "next/image";
import newImage from "@/assets/images/round-4/1-dafna-zur-7_smallest-4210350370.jpg"

export default function Home() {
  const newsRef = useRef(null);
  const momentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: newsRef,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: momentProgress } = useScroll({
    target: momentRef,
    offset: ["start end", "end start"]
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 0.8],
    ["#ffffff", "#F2E9D2", "#F2E9D2", "#ffffff"]
  );

  return (
    <>
      <Header />
      <motion.div 
        style={{ backgroundColor: backgroundColor }}
        className="transition-colors duration-500"
      >
        <HeroParallax />
        <div className="max-w-wrapper flex flex-col gap-12 p-12">
          {/* <section className="py-20 pb-24">
            <div className="flex flex-col gap-4 max-w-4xl mx-auto text-center text-balance">
              <Image src={seal} alt="seal" width={100} height={100} className="mx-auto" />
              <h2 className="text-5xl tracking-tight font-bold">
                <span className="text-cardinal-red text-6xl">The Heart of Stanford:</span> <br/>Where Ideas Begin and Futures Take Shape
              </h2>
              <h3 className="text-2xl text-neutrals-black">Stanford&apos;s School of Humanities and Sciences fuels discovery, creativity, and critical thinking across the liberal arts and sciences.</h3>
            </div>
          </section> */}

          <TextBox bgImage={newImage}/>
          
          <section className="flex flex-col gap-32">
            <TextAndMedia />
            <TextAndMedia2 />
            {/* <TextAndMedia3 /> */}
          </section>

          <div ref={newsRef}>
            <Awards />
            <Books />
          </div>

          {/* <ParallaxFeature /> */}
          
          <AnimatedBlock />
          <News bgColor="bg-transparent"/>
          
          {/* <TextBox bgImage={bgImage}/> */}
          
          <InTheMoment />
          
        </div>
      </motion.div>
      <footer>
        <div className="bg-black-90 min-h-[300px]">
          <div className="max-w-wrapper text-white py-12">
            <p>Footer</p>
          </div>
        </div>
        <div className="bg-cardinal-red min-h-[100px]"></div>
      </footer>
    </>
  );
}
