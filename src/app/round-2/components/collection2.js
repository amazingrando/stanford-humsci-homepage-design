'use client'

import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import { newsData as defaultNewsData } from '@/data/newsData';

const Card = ({ title, image, date, description, useDefaultImage = false }) => {
  const defaultImage = "https://placehold.co/600x400"
  
  return (
    <div className="bg-white border border-humsci-gold-dark text-humsci-gold-dark h-full flex flex-col">
      <Image src={defaultImage} alt={title} width={600} height={400} className="block" />
      <div className="p-6 flex-grow">
        <p className="text-sm mb-2 font-bold text-semantic-bg-charcoal">{date}</p>
        <h2 className="text-2xl tracking-tight font-medium text-cardinal-red-dark mb-4">{title}</h2>
        <p className="text-base text-semantic-bg-charcoal">{description}</p>
      </div>
    </div>
  )
}

export default function Collection2({ newsData: propNewsData = defaultNewsData }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="bg-palo-alto-dark py-20">
      <div className="max-w-wrapper grid grid-cols-1 md:grid-cols-7 gap-12">
        <div className="col-span-2 text-white">
          <p className="text-humsci-gold text-lg tracking-wide uppercase font-bold mb-6 text-balance">Faculty Awards</p>
          <h2 className="text-5xl tracking-tight font-bold mb-6 text-balance">Honoring the Impact of H&S Faculty
          </h2>
          <h3 className="text-lg text-balance">Faculty across the School of Humanities and Sciences continue to earn distinguished awards for their innovative research, transformative teaching, and contributions to global scholarship.</h3>
          <a href="#" className="text-lg inline-block mt-12 px-4 py-2 font-bold border border-humsci-gold hover:bg-white hover:text-stanford-red transition-all duration-300">Add an award or honor</a>
          <p className="mt-8 flex items-center gap-2">
            <a href="#" className="text-white/90 hover:text-white hover:underline transition-all duration-300">Explore All Awards</a>
            <ArrowRightIcon className="size-4" />
          </p>
        </div>
        <div className="col-span-5">
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
              slidesPerView={3}
              spaceBetween={30}
              className="mySwiper max-w-full flex items-stretch"
            >
              {propNewsData.map((item, index) => (
                <SwiperSlide key={item.title} className="!h-auto">
                  <Card title={item.title} image={item.image} date={item.date} description={item.description} />
                </SwiperSlide>
              ))}
              <SwiperSlide className="!h-auto">
                <a href="#" className="bg-transparent text-white border border-humsci-gold h-full flex items-center justify-center hover:bg-white hover:text-cardinal-red-dark transition-all duration-300">
                  <h2 className="text-2xl tracking-tight font-medium flex items-center gap-2">Explore All Awards <ArrowRightIcon className="size-4" /></h2>
                </a>
              </SwiperSlide>
            </Swiper>
            <div className="flex items-center justify-between mt-4">
              {!isBeginning && (
                <button 
                  onClick={() => swiperRef.current?.slidePrev()} 
                  className="!text-white/90 hover:!text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <ChevronDoubleLeftIcon className="size-4" /> Previous
                </button>
              )}
              {!isEnd && (
                <button 
                  onClick={() => swiperRef.current?.slideNext()} 
                  className="!text-white/90 hover:!text-white transition-colors duration-300 flex items-center gap-2 ml-auto"
                >
                  Next <ChevronDoubleRightIcon className="size-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}