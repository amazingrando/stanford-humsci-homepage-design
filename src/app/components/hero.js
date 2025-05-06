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

const HERO_IMAGES = [
  '/images/heroBg/AfricanandAfricanAmericanStudies-web.jpg',
  '/images/heroBg/AmericanStudies-web.jpg',
  '/images/heroBg/Anthropology-web_0.jpg',
  '/images/heroBg/Appliedphysics-web.jpg',
  '/images/heroBg/Archaeology-web.jpg',
  '/images/heroBg/ArtArtHistory-web_1.jpg',
  '/images/heroBg/AsianAmericanStudies-web.jpg',
  '/images/heroBg/Biology-web.jpg',
];

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
        HERO_IMAGES.map((image, imageIndex) => (
          <div 
            key={`${index}-${imageIndex}`}
            className="!w-[200px] h-[200px] block flex-none"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {imageIndex}
          </div>
        ))
      ))}
    </motion.div>
  );
}

const Hero = () => {
  return (
    <div className="min-h-[600vh]">

      <div className="h-screen bg-semantic-bg-charcoal text-color-cardinal-red z-10 overflow-hidden">
        
        <div className="flex flex-col justify-start">
          <ParallaxText baseVelocity={-2} className="text-4xl font-bold text-white"/>
          <ParallaxText baseVelocity={2} className="text-4xl font-bold text-white"/>
          <ParallaxText baseVelocity={-2} className="text-4xl font-bold text-white"/>
          <ParallaxText baseVelocity={2} className="text-4xl font-bold text-white"/>
          <ParallaxText baseVelocity={-2} className="text-4xl font-bold text-white"/>
          <ParallaxText baseVelocity={2} className="text-4xl font-bold text-white"/>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-cardinal-red text-white p-16 relative z-40">
            <h1 className="text-4xl font-bold">Research and learning are the foundations of discovery.</h1>
          </div>
        </div>


        <div className="absolute inset-0 bg-semantic-bg-charcoal mix-blend-multiply saturate-50 z-30" />
      </div>
    </div>
  );
};

export default Hero;
