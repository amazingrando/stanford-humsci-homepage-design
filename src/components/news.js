'use client'

import Image from "next/image";
import bgImage from "@/assets/images/A5091FDF-29FD-49AF-89A6-9C24367E3C1C.png"
import { motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform, } from "framer-motion";
import React, { useEffect, useRef } from "react";

const newsData = [
  {
    title: "New course showcases humanities, social science offerings for undergrads",
    date: "April 15, 2024",
    description: "With help from 30 professors, students were introduced to the breadth of these academic areas and gained insight into courses, research opportunities, and majors.",
    image: "https://placehold.co/600x450"
  },
  {
    title: "Josiah Ober's mission to revitalize democracy and civic education",
    date: "April 12, 2024",
    description: "The political science professor's innovative approach to teaching ancient political thought has inspired a new generation of students to engage with democratic principles and civic responsibility.",
    image: "https://placehold.co/600x720"
  },
  {
    title: "Common diversity argument linked to beliefs that maintain inequality",
    date: "April 8, 2024",
    description: "A groundbreaking study reveals how certain diversity narratives may inadvertently reinforce existing power structures, prompting a reevaluation of inclusion strategies.",
    image: "https://placehold.co/600x380"
  },
  {
    title: "Jamming with Joshua Redman",
    date: "April 5, 2024",
    description: "The renowned saxophonist and Stanford alumnus returns to campus for a series of masterclasses and performances, sharing his expertise with the next generation of jazz musicians.",
    image: "https://placehold.co/600x900"
  },
  {
    title: "Stanford researchers uncover ancient trade routes in Mediterranean",
    date: "April 3, 2024",
    description: "Using advanced archaeological techniques and historical analysis, a team of researchers has mapped previously unknown trade networks that shaped early Mediterranean civilizations.",
    image: "https://placehold.co/600x550"
  },
  {
    title: "New study reveals impact of digital media on political discourse",
    date: "April 1, 2024",
    description: "Research from the Communication Department shows how social media platforms are transforming political engagement and public opinion formation in contemporary society.",
    image: "https://placehold.co/600x680"
  },
  {
    title: "Philosophy department hosts international ethics symposium",
    date: "March 29, 2024",
    description: "Leading philosophers from around the world gathered to discuss pressing ethical challenges in technology, climate change, and global justice.",
    image: "https://placehold.co/600x420"
  },
  {
    title: "Anthropology team discovers prehistoric settlement patterns",
    date: "March 27, 2024",
    description: "Field research in South America has revealed sophisticated urban planning in ancient communities, challenging previous assumptions about early human social organization.",
    image: "https://placehold.co/600x750"
  },
  {
    title: "Economics professor wins prestigious research award",
    date: "March 25, 2024",
    description: "The recognition comes for groundbreaking work in behavioral economics that has influenced policy decisions at both national and international levels.",
    image: "https://placehold.co/600x320"
  },
  {
    title: "New language learning program breaks barriers",
    date: "March 22, 2024",
    description: "An innovative approach combining traditional methods with AI technology has shown remarkable success in helping students achieve fluency in record time.",
    image: "https://placehold.co/600x850"
  },
  {
    title: "History department launches digital archives project",
    date: "March 20, 2024",
    description: "A collaborative effort to digitize and preserve historical documents will make rare primary sources accessible to researchers and students worldwide.",
    image: "https://placehold.co/600x480"
  },
  {
    title: "Sociology study examines urban development patterns",
    date: "March 18, 2024",
    description: "Research tracking the evolution of city neighborhoods over the past century reveals surprising insights about community resilience and social change.",
    image: "https://placehold.co/600x620"
  },
  {
    title: "Political science team analyzes election trends",
    date: "March 15, 2024",
    description: "A comprehensive study of voting patterns and campaign strategies is providing new insights into the changing landscape of democratic participation.",
    image: "https://placehold.co/600x950"
  },
  {
    title: "Art history exhibition showcases Renaissance masters",
    date: "March 13, 2024",
    description: "The Cantor Arts Center's latest exhibition brings together rarely seen works from private collections, offering fresh perspectives on Renaissance art.",
    image: "https://placehold.co/600x400"
  },
  {
    title: "Psychology research reveals new insights into memory",
    date: "March 11, 2024",
    description: "Breakthrough findings about how the brain processes and stores information could lead to improved learning techniques and memory enhancement strategies.",
    image: "https://placehold.co/600x780"
  },
  {
    title: "Literature department celebrates Nobel laureate",
    date: "March 8, 2024",
    description: "The department honors its distinguished faculty member's contributions to contemporary literature and commitment to mentoring emerging writers.",
    image: "https://placehold.co/600x350"
  },
  {
    title: "New archaeology findings rewrite ancient history",
    date: "March 6, 2024",
    description: "Recent excavations in Southeast Asia have uncovered evidence of advanced civilizations that predate previously known settlements in the region.",
    image: "https://placehold.co/600x880"
  },
  {
    title: "Music department premieres student compositions",
    date: "March 4, 2024",
    description: "The annual showcase features innovative works that blend traditional techniques with cutting-edge technology and experimental approaches.",
    image: "https://placehold.co/600x520"
  },
  {
    title: "Linguistics team publishes breakthrough study",
    date: "March 1, 2024",
    description: "Research on language evolution challenges long-held theories about how human communication systems developed and spread across continents.",
    image: "https://placehold.co/600x650"
  },
  {
    title: "Religious studies conference explores global traditions",
    date: "February 28, 2024",
    description: "Scholars from diverse backgrounds gathered to examine the role of religious practices in shaping cultural identity and social movements.",
    image: "https://placehold.co/600x430"
  },
  {
    title: "Classics department hosts Greek drama festival",
    date: "February 26, 2024",
    description: "Students and faculty bring ancient plays to life with modern interpretations that highlight their enduring relevance to contemporary issues.",
    image: "https://placehold.co/600x760"
  },
  {
    title: "New gender studies program launches",
    date: "February 23, 2024",
    description: "The interdisciplinary initiative brings together scholars from across campus to address pressing questions about gender, power, and social justice.",
    image: "https://placehold.co/600x330"
  },
  {
    title: "Philosophy professor publishes groundbreaking work",
    date: "February 21, 2024",
    description: "The new book challenges conventional wisdom about consciousness and artificial intelligence, sparking debate among scholars worldwide.",
    image: "https://placehold.co/600x860"
  },
  {
    title: "Anthropology team studies climate adaptation",
    date: "February 19, 2024",
    description: "Field research in vulnerable communities reveals how traditional knowledge systems are helping populations adapt to environmental changes.",
    image: "https://placehold.co/600x490"
  },
  {
    title: "Economics research impacts policy decisions",
    date: "February 16, 2024",
    description: "Findings from a major study on income inequality have influenced new legislation aimed at addressing economic disparities.",
    image: "https://placehold.co/600x630"
  },
  {
    title: "Language department expands course offerings",
    date: "February 14, 2024",
    description: "New courses in less commonly taught languages reflect the university's commitment to global engagement and cultural understanding.",
    image: "https://placehold.co/600x940"
  },
  {
    title: "History professor receives teaching award",
    date: "February 12, 2024",
    description: "The recognition honors innovative approaches to making complex historical narratives accessible and engaging for undergraduate students.",
    image: "https://placehold.co/600x410"
  },
  {
    title: "Sociology study examines social media impact",
    date: "February 9, 2024",
    description: "Research reveals how digital platforms are reshaping social relationships and community formation in the 21st century.",
    image: "https://placehold.co/600x770"
  },
  {
    title: "Political science team analyzes global trends",
    date: "February 7, 2024",
    description: "A comprehensive study of international relations provides new insights into emerging power dynamics and diplomatic strategies.",
    image: "https://placehold.co/600x340"
  },
  {
    title: "Art history department hosts international symposium",
    date: "February 5, 2024",
    description: "Leading scholars gather to discuss the role of art in social movements and its impact on cultural identity formation.",
    image: "https://placehold.co/600x870"
  },
  {
    title: "Psychology research reveals cognitive patterns",
    date: "February 2, 2024",
    description: "New findings about decision-making processes could lead to improved strategies for addressing complex social challenges.",
    image: "https://placehold.co/600x510"
  },
  {
    title: "Literature department celebrates new publication",
    date: "January 31, 2024",
    description: "The latest work from a distinguished faculty member explores the intersection of technology and human experience in contemporary fiction.",
    image: "https://placehold.co/600x640"
  },
  {
    title: "Archaeology team makes significant discovery",
    date: "January 29, 2024",
    description: "Excavations in Central America have uncovered evidence of sophisticated urban planning that predates previously known civilizations.",
    image: "https://placehold.co/600x440"
  },
  {
    title: "Music department hosts world-renowned composer",
    date: "January 26, 2024",
    description: "The visiting artist's residency includes masterclasses, public performances, and collaboration with student composers.",
    image: "https://placehold.co/600x750"
  }
]

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

export default function News() {
  // Split newsData into four equal groups
  const itemsPerGroup = Math.ceil(newsData.length / 4);
  const firstGroup = newsData.slice(0, itemsPerGroup).slice(0, 6);
  const secondGroup = newsData.slice(itemsPerGroup, itemsPerGroup * 2).slice(0, 6);
  const thirdGroup = newsData.slice(itemsPerGroup * 2, itemsPerGroup * 3).slice(0, 6);
  const fourthGroup = newsData.slice(itemsPerGroup * 3).slice(0, 6);

  return (
    <div className="bg-black-70 py-20 space-y-16 relative">
      
      <div className="max-w-wrapper text-center z-10 relative">
        <h2 className="text-5xl tracking-tight font-bold mb-6 text-white">Advancing Knowledge, Shaping the Future</h2>
        <h3 className="text-2xl text-white max-w-2xl mx-auto">Behind every breakthrough is the unseen work that drives discovery, innovation, and progress for all humankind.</h3>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative">
        <div className="flex flex-col gap-8">
          {firstGroup.map((item) => (
            <Card title={item.title} image={item.image} date={item.date} description={item.description} key={item.title} />
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {secondGroup.map((item) => (
            <Card title={item.title} image={item.image} date={item.date} description={item.description} key={item.title} />
          ))}
        </div>
        <div className="flex flex-col gap-8">
          {thirdGroup.map((item) => (
            <Card title={item.title} image={item.image} date={item.date} description={item.description} key={item.title} />
          ))}
        </div>
        {/* <div className="flex flex-col gap-8">
          {fourthGroup.map((item) => (
            <Card title={item.title} image={item.image} date={item.date} description={item.description} key={item.title} />
          ))}
        </div> */}
      </div>
    </div>
  )
}