'use client'

import Image from "next/image";
import bgImage from "@/assets/images/A5091FDF-29FD-49AF-89A6-9C24367E3C1C.png"
import { motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform, } from "framer-motion";
import React, { useEffect, useRef } from "react";
import newsDataJson from "@/data/newsData.json";

const Card = ({ title, image, date, description, useDefaultImage = false }) => {
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { once: true });
  const defaultImage = "https://placehold.co/600x400"
  
  return (
    <motion.div 
      ref={targetRef} 
      initial={{ opacity: 0.25, y: 200 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.25, y: 200 }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-humsci-gold-dark text-humsci-gold-dark"
    >
      <Image src={useDefaultImage ? defaultImage : image} alt={title} width={600} height={400} className="block" />
      <div className="p-6">
        <p className="text-sm mb-2 font-bold text-semantic-bg-charcoal">{date}</p>
        <h2 className="text-3xl tracking-tight font-medium text-cardinal-red-dark mb-4">{title}</h2>
        <p className="text-base text-semantic-bg-charcoal">{description}</p>
      </div>
    </motion.div>
  )
}

export default function News({bgColor = "bg-black-70"}) {
  // Get first 6 items for the three columns
  const displayItems = newsDataJson.newsData;

  return (
    <div className={`${bgColor} py-20 space-y-16 relative`}>
      
      <div className="max-w-wrapper text-center z-10 relative">
        <h2 className="text-5xl tracking-tight font-bold mb-6 text-white">Advancing Knowledge, Shaping the Future</h2>
        <h3 className="text-2xl text-white max-w-2xl mx-auto">Behind every breakthrough is the unseen work that drives discovery, innovation, and progress for all humankind.</h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 z-10 relative">
          {[0, 1, 2].map((columnIndex) => (
            <motion.div 
              key={columnIndex}
              className="flex flex-col gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: columnIndex * 0.2 }}
            >
              {displayItems.slice(columnIndex * 2, (columnIndex + 1) * 2).map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card 
                    title={item.title} 
                    image={item.image} 
                    date={item.date} 
                    description={item.description}
                    className="h-full transition-all duration-300 hover:shadow-lg"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}