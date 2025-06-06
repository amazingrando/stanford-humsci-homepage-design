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
import ButtonGhost from "@/components/buttonGhost";

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

const AnimatedBlock = () => {
  return (
    <div className="bg-transparent text-color-cardinal-red z-10 overflow-hidden relative">
      
      <div className="flex flex-col justify-start relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20" />
        <ParallaxText baseVelocity={-2} className="text-4xl font-bold text-white" bgImages={bg.heroBackgrounds.group1}/>
        <ParallaxText baseVelocity={2} className="text-4xl font-bold text-white" bgImages={bg.heroBackgrounds.group2}/>
        <ParallaxText baseVelocity={-2} className="text-4xl font-bold text-white" bgImages={bg.heroBackgrounds.group3}/>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gradient-to-b from-cardinal-red to-stanford-red-light rounded shadow-2xl/40 text-white text-center p-16 relative z-40">
          <h1 className="space-y-2">
            <span className="block text-6xl font-bold tracking-tight">Research & Learning </span> 
            <span className="block text-5xl text-white/80 tracking-tight">are the foundations of discovery.</span>
          </h1>
          <ButtonGhost>Explore what moves you</ButtonGhost>
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-gradient-to-b from-semantic-bg-charcoal via-semantic-bg-charcoal to-black/90 mix-blend-multiply z-30" /> */}
    </div>
  );
};

export default AnimatedBlock;
