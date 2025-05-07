'use client'

import React, { useEffect, useRef } from "react";
import mediaImage from "@/assets/images/Jasper Ridge Final_18_0.webp"
import Image from "next/image"
import { motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform, } from "framer-motion";

export default function HeroParallax() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="h-screen w-full relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          target={targetRef}
          className="w-full h-[110%]"
        >
          <Image src={mediaImage} alt="Jasper Ridge" className="w-full h-full object-cover z-10 relative" />
        </motion.div>
      </div>

      <div className="z-10 relative text-center max-w-4xl space-y-4">
        <p className="text-white/90 text-3xl font-bold uppercase tracking-wide text-shadow-lg/40">Research at the Heart of Stanford</p>
        <h1 className="text-white text-balance text-8xl leading-[90%] font-bold text-shadow-lg/40">Two seasons on Jasper Ridge</h1>
        <a href="#" className="text-xl inline-block mt-8 px-6 py-3 font-bold bg-cardinal-red-dark text-white hover:bg-cardinal-red-dark/80 transition-all duration-300">
          Follow the Research Journey
        </a>
      </div>
    </div>
  );
}