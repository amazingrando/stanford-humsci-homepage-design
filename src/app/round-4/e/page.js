"use client"
import HeroParallax from "@/app/round-4/components/heroParallax";
import News from "@/app/round-4/components/news";
import TextAndMedia from "@/app/round-4/components/textAndMedia";
import ParallaxFeature from "@/app/round-4/components/parallaxFeature";
import Books from "@/app/round-4/components/books";
import AnimatedBlock from "@/app/round-4/components/animatedBlock";
import TextBox from "@/app/round-4/components/textBox";
import bgImage from "@/assets/images/bldg110_14_3200x1532-1006439883.jpg"
import Header from "@/components/header.js";
import Awards from "@/app/round-4/components/awards";
import InTheMoment from "@/app/round-4/components/inTheMoment";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import seal from "@/assets/images/th-2291945262.jpg"
import Image from "next/image";

export default function Home() {
  const newsRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: newsRef,
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
        style={{ backgroundColor }}
        className="transition-colors duration-500"
      >
        <HeroParallax />
        <div className="max-w-wrapper flex flex-col gap-12 p-12">
          <section className="py-20 pb-24">
            <div className="flex flex-col gap-4 max-w-4xl mx-auto text-center text-balance">
              <Image src={seal} alt="seal" width={100} height={100} className="mx-auto" />
              <h2 className="text-5xl tracking-tight font-bold">
                <span className="text-cardinal-red text-6xl">The Heart of Stanford:</span> <br/>Where Ideas Begin and Futures Take Shape
              </h2>
              <h3 className="text-2xl text-neutrals-black">Stanford’s School of Humanities and Sciences fuels discovery, creativity, and critical thinking across the liberal arts and sciences.</h3>
            </div>
          </section>
          
          <TextAndMedia />
          <ParallaxFeature />
          <div ref={newsRef}>
            <News bgColor="bg-transparent"/>
          </div>
          <Awards />
          <AnimatedBlock />
          <Books />
          {/* <TextBox bgImage={bgImage}/> */}
        </div>
      </motion.div>
      <InTheMoment />
    </>
  );
}
