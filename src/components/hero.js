'use client'

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import bg from "@/data/heroBackgrounds.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/pro-thin-svg-icons'

function ParallaxText({ baseVelocity = 100, className, bgImages }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-90, 0, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 3000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get() * 10;

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <motion.div className={`flex flex-row justify-start ${className}`} style={{ x }} >
      {[1,2,3,4].map((_, index) => (
        bgImages.map((image, imageIndex) => (
          <div 
            key={`${index}-${imageIndex}`}
            className="!w-[200px] h-[200px] block flex-none"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))
      ))}
    </motion.div>
  );
}

const Hero = () => {
  return (

    <div className="h-screen max-h-[1200px] bg-semantic-bg-charcoal text-color-cardinal-red z-10 overflow-hidden relative">
      
      <div className="flex flex-col justify-start">
        <ParallaxText baseVelocity={-2} className="text-4xl font-bold text-white" bgImages={bg.heroBackgrounds.group1}/>
        <ParallaxText baseVelocity={2} className="text-4xl font-bold text-white" bgImages={bg.heroBackgrounds.group2}/>
        <ParallaxText baseVelocity={-2} className="text-4xl font-bold text-white" bgImages={bg.heroBackgrounds.group3}/>
        <ParallaxText baseVelocity={2} className="text-4xl font-bold text-white" bgImages={bg.heroBackgrounds.group4}/>
        <ParallaxText baseVelocity={-2} className="text-4xl font-bold text-white" bgImages={bg.heroBackgrounds.group5}/>
        <ParallaxText baseVelocity={2} className="text-4xl font-bold text-white" bgImages={bg.heroBackgrounds.group6}/>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gradient-to-b from-cardinal-red to-stanford-red-light rounded shadow-2xl/40 text-white text-center p-16 relative z-40">
          <h1 className="space-y-2">
            <span className="block text-7xl font-bold tracking-tight">Research & Learning </span> 
            <span className="block text-6xl text-white/80 tracking-tight">are the foundations of discovery.</span>
          </h1>
          <a href="#" className="text-2xl inline-block mt-8 px-8 py-4 font-bold border top-0 border-humsci-gold hover:shadow-xl/30 relative  hover:scale-105 hover:bg-cardinal-red-dark transition-all duration-300">
            <FontAwesomeIcon icon={faCompass} className="mr-2 text-humsci-gold" />
            Explore What Moves You
          </a>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-semantic-bg-charcoal via-semantic-bg-charcoal to-black mix-blend-multiply z-30" />
    </div>
  );
};

export default Hero;
