'use client'

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import bgImage from "@/assets/images/moment/01_lone-valley-oak-rainbow-and-photographer_danquinn.webp"
import bgImage2 from "@/assets/images/rumsey-history-0283-enhanced-nr.webp"
import ButtonGhost from "@/components/buttonGhost.js";

export default function InTheMoment() {
  return (
    <div className="relative bg-neutrals-black max-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Background"
          className="w-full h-full object-cover blur-lg opacity-80 "
          priority
        />
      </div>
      <div className="relative z-10">
        <Image
          src={bgImage}
          alt="Lone Valley Oak with Rainbow"
          className="w-full h-full object-contain max-h-screen"
          priority
        />
      </div>
      
      <div className="absolute left-0 bottom-0 z-20 bg-gradient-to-b from-transparent to-black/80 via-black/80 text-white px-16 py-8 w-full flex flex-row gap-16 items-end justify-between">
        <div className="max-w-2xl ">
          <h2 className="text-xl font-bold uppercase text-humsci-gold">In The Moment</h2>
          <p className="text-xl">Photographer LiPo Ching captures a rainbow on a winter day at Jasper Ridge Biological Preserve. Ching produced stunning images of the preserve for <a href="#" target="_blank" rel="noopener noreferrer">a photo story about seasonal change</a> at this unique H&S education and research site.</p>
          <ButtonGhost size="sm" className="!mt-4">Explore all moments</ButtonGhost>
        </div>
        <p>Photo by Dan Quinn, JRBP docent</p>
      </div>
    </div>
  );
}