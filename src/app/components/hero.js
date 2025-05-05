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

function ParallaxText({ baseVelocity = 100, className }) {
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
  const x = useTransform(baseX, (v) => `${wrap(20, -50, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 5000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

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
    <div className=" bg-red-500">
      <motion.div className={`scroller flex flex-row ${className}`} style={{ x }}>
        {[1,2,3,4].map((color, index) => (
          ['bg-[var(--color-poppy)]',
          'bg-[var(--color-sky)]',
          'bg-[var(--color-bay)]',
          'bg-[var(--color-plum)]',
          'bg-[var(--color-palo-verde)]',
          'bg-[var(--color-olive)]',
          'bg-[var(--color-brick)]',
          'bg-[var(--color-lagunita)]',
          'bg-[var(--color-spirited)]'].map((color, index) => (
            <div 
              key={index}
              className={`${color} !w-[200px] h-[200px] block`}
            >
              {index}
            </div>
          ))))}
      </motion.div>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="min-h-[600vh]">

      <div className="flex flex-col items-center justify-center h-screen bg-semantic-bg-charcoal text-color-cardinal-red overflow-hidden">
        <h1 className="text-4xl font-bold text-white">Hero</h1>
        {/* <div className="flex flex-col gap-4 mt-8">
          {[
            'bg-[var(--color-poppy)]',
            'bg-[var(--color-sky)]',
            'bg-[var(--color-bay)]',
            'bg-[var(--color-plum)]',
            'bg-[var(--color-palo-verde)]',
            'bg-[var(--color-olive)]',
            'bg-[var(--color-brick)]',
            'bg-[var(--color-lagunita)]',
            'bg-[var(--color-spirited)]',
            'bg-[var(--color-illuminating)]',
            'bg-[var(--color-archway)]',
            'bg-[var(--color-stone)]'
          ].map((color, index) => (
            <div 
              key={index}
              className={`${color} w-24 h-24 rounded-lg shadow-lg block`}
            />
          ))}
        </div> */}
        <ParallaxText baseVelocity={-2} className="text-4xl font-bold text-white">Framer Motion</ParallaxText>
        <ParallaxText baseVelocity={2} className="text-4xl font-bold text-white">Scroll velocity</ParallaxText>
        
      </div>
    </div>
  );
};

export default Hero;
