'use client'

import { books } from '@/data/books';
import Image from "next/image";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Card = ({ title, headshot, book }) => {  
  return (
    <div className="relative pl-8 pr-4 pb-0 space-y-8">
      <figure className="relative">
        <Image src={headshot} alt={title} width={90} className="block rounded-full absolute -bottom-4 -left-4 shadow-lg/40" />
        <Image src={book} alt={title} width={600} height={400} className="block ring-1 ring-black/20" />
      </figure>
      <h2 className="text-lg font-bold tracking-tight leading-tight text-cardinal-red">
        <a href="#" className="hover:underline hover:text-cardinal-red-dark">
          {title}
        </a>
      </h2>
    </div>
  )
}

export default function Collection3() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="bg-transparent py-20">
      <div className="max-w-wrapper space-y-4">
        <div className="text-neutrals-black  max-w-2xl">
          {/* <p className="text-lg tracking-wide uppercase font-bold mb-3 text-balance">Books in Brief</p> */}
          <h2 className="text-5xl tracking-tight font-bold mb-6 text-balance text-cardinal-red">Books by Our Thinkers</h2>
          <h3 className="text-lg text-balance">Explore recent books published by faculty in the School of Humanities and Sciences—covering groundbreaking research, fresh perspectives, and influential scholarship.</h3>
        </div>
        <div className="">
          <div className="flex items-center justify-between mb-4">
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
              slidesPerView={5}
              spaceBetween={30}
              className="mySwiper max-w-full flex items-stretch"
            >
              {books.map((item, index) => (
                <SwiperSlide key={item.title} className="!h-auto">
                  <Card title={item.title} headshot={item.author} book={item.image} />
                </SwiperSlide>
              ))}
              <SwiperSlide className="!h-auto">
                <a href="#" className="bg-transparent text-neutrals-black border border-humsci-gold h-full flex items-center justify-center hover:bg-white hover:text-cardinal-red-dark transition-all duration-300">
                  <h2 className="text-2xl tracking-tight font-medium flex items-center gap-2">Explore All Books <ArrowRightIcon className="size-4" /></h2>
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div>
          <p className="flex justify-start items-center gap-8">
            <a href="#" className="text-lg px-4 py-2 font-bold border border-humsci-gold hover:bg-white hover:text-stanford-red transition-all duration-300">Submit a Book</a>
            <span className="flex items-center gap-2"><a href="#" className="hover:underline transition-all duration-300">Explore All Books</a>
            <ArrowRightIcon className="size-4" /></span>
          </p>
        </div>
      </div>
    </div>
  );
}