'use client'

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import ButtonGhost from "@/components/buttonGhost.js";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

import lonerainbow from "@/assets/images/moment/01_lone-valley-oak-rainbow-and-photographer_danquinn.webp"
import whiteplaza from "@/assets/images/moment/1-2025-white-plaza-observation-3.webp"
import democracy from "@/assets/images/moment/democracy-legacy-admissions_2368.webp"
import mlk from "@/assets/images/moment/mlk-memorial-church-0189-enhanced-nr.webp"
import rumsey from "@/assets/images/moment/rumsey-history-0283-enhanced-nr.webp"

const inTheMomentData = [
  {
    description: "First-year student Serena Young conducts sociological observations in Stanford's White Plaza to see how the plaza and pavilion are used by community members. Her observations and interviews, and those of other volunteers, will go toward a larger assessment of Stanford's public spaces.",
    caption: "Photo by Harrison Truong for Stanford University.",
    date: "May 21, 2025",
    image: whiteplaza,
  },
  {
    description: <p>Photographer LiPo Ching captures a rainbow on a winter day at Jasper Ridge Biological Preserve. Ching produced stunning images of the preserve for <a href="https://humsci.stanford.edu/feature/two-seasons-jasper-ridge-0">a photo story about seasonal change</a> at this unique H&amp;S education and research site.</p>,
    caption: "Photo by Dan Quinn, JRBP docent",
    date: "April 11, 2025",
    image: lonerainbow,
  },
  {
    description: <p>History student Christian Robles-Baez explores part of the digital collection at Stanford&apos;s <a href="https://library.stanford.edu/libraries/david-rumsey-map-center">David Rumsey Map Center</a> during a tour organized by the Department of History to familiarize its students with the center&apos;s resources.</p>,
    caption: "Photo by LiPo Ching/Stanford University.",
    date: "February 11, 2025",
    image: rumsey,
  },
  {
    description: <p>Lerone A. Martin, the Martin Luther King, Jr. Centennial Professor and professor of Religious Studies and of African and African American Studies in H&amp;S speaks at the 2025 King &amp; Faith Symposium at Memorial Church: The Day Dr. Martin Luther King Jr. Came to Stanford. Attendees watched a <a href="https://youtu.be/cYK9xGALPrU?si=q3RLaqC520_AFc0v">recording of Dr. King&apos;s 1967 speech at Stanford.</a></p>,
    caption: "Photo by LiPo Ching/Stanford University.",
    date: "January 17, 2025",
    image: mlk,
  },
  {
    description: <div class="text-long"><p><em><strong>Democracy and Disagreement </strong></em><strong>starts Jan. 7.</strong><em> </em><a href="https://explorecourses.stanford.edu/search?view=catalog&amp;filter-coursestatus-Active=on&amp;page=0&amp;catalog=&amp;academicYear=&amp;q=PHIL+3%3A+Democracy+and+Disagreement&amp;collapse="><strong>Enroll today!</strong></a></p><p>H&amp;S Dean Debra Satz and Law Professor Emeritus Paul Brest once again host their course featuring discussions with faculty on opposing sides of issues. ​Attend the weekly conversations ​for one unit of credit; attend weekly ​discussion seminars for an ​additional unit. The class happens Tuesdays at 3 p.m. in CEMEX Auditorium. <a href="https://humsci.stanford.edu/events/democracy-and-disagreement">See the topics and speaker lineup for this quarter.</a></p><p>Each conversation is also open to the Stanford community. Discussion groups are open to enrolled undergraduates only.</p><p>Photo by LiPo Ching/Stanford University</p></div>,
    caption: "Photo by LiPo Ching/Stanford University",
    date: "January 6, 2025",
    image: democracy,
  },
  
];

const EnlargeIcon = ({className}) => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><circle id="bg" cx="25" cy="25" r="24.5" fill="#000" fill-opacity=".7" stroke="#fff"/><path id="arrow top" d="M26 23.474L35.474 14m0 0v8.21m0-8.21h-7.58" stroke="#fff" stroke-width="1.263"/><path id="arrow bottom" d="M23.474 27L14 36.474m0 0v-8.21m0 8.21h7.579" stroke="#fff" stroke-width="1.263"/></svg>
  )
}

function Slide({item}) {
  return (
    <div className="relative group">
      <div className="absolute bottom-0 right-0 w-full h-full flex items-center justify-center opacity-0 bg-black/50 group-hover:opacity-100 transition-opacity duration-300">
        <EnlargeIcon className="absolute right-4 bottom-4 border-1 border-transparent rounded-full hover:border-white hover:border-1" />
      </div>
      <Image src={item.image} alt={item.title} className="max-h-[400px] w-auto"/>
    </div>
  )
}


export default function InTheMoment() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="pb-16">
      <div className="!px-32 max-w-wrapper">
        <div className="">
          <h2 class="text-5xl tracking-tight font-bold mb-6 text-balance text-cardinal-red">In the Moment</h2>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4 !px-32 max-w-wrapper">
        {!isBeginning && (
          <button 
            onClick={() => swiperRef.current?.slidePrev()} 
            className="!text-neutrals-black hover:!text-cardinal-red transition-colors duration-300 flex items-center gap-2"
          >
            <ChevronDoubleLeftIcon className="size-4" /> Previous
          </button>
        )}
        {!isEnd && (
          <button 
            onClick={() => swiperRef.current?.slideNext()} 
            className="!text-neutrals-black hover:!text-cardinal-red transition-colors duration-300 flex items-center gap-2 ml-auto"
          >
            Next <ChevronDoubleRightIcon className="size-4" />
          </button>
        )}
      </div>
      <div className="relative">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView="auto"
          spaceBetween={30}
          className="mySwiper max-w-full flex items-stretch"
        >
          {inTheMomentData.map((item, index) => (
            <SwiperSlide 
              key={item.title} 
              className="!h-auto !w-auto"
            >
              <Slide item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}