'use client'

import React, { useRef } from "react";
import mediaImage from "@/assets/images/120204-9605-3405190177.jpg"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroParallax() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

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

      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 relative text-center max-w-4xl space-y-4 bg-neutrals-black/40 p-8 rounded-lg mt-32"
      >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-white text-3xl font-bold uppercase tracking-wide text-shadow-lg/40"
        >
          Research at the Heart of Stanford
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-white text-balance text-8xl leading-[90%] font-bold text-shadow-lg/40"
        >
          Innovating the Human Experience
        </motion.h1>
        
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          href="#" 
          className="text-xl inline-block mt-8 px-6 py-3 font-bold border border-cardinal-red-dark bg-cardinal-red-dark text-white hover:bg-white hover:text-cardinal-red-dark"
        >
          Explore Our Impact
        </motion.a>
      </motion.div>
    </div>
  );
}