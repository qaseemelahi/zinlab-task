'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Icons } from '../assets/icons';

interface Tool {
  title: string;
  Image: string;
  description: string;
}

interface SliderProps {
  tools: Tool[];
}

export default function Slider({ tools }: SliderProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= 100;
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += 100;
    }
  };

  return (
    <div className='w-full items-center justify-between pt-10'>
      <div className='w-full flex flex-row justify-between pr-5'>
        <h2 className='text-base lg:text-3xl font-bold text-black dark:text-white'>
          Convert From PDF
        </h2>
        {tools.length > 5 && (
          <button className='text-black text-sm font-medium px-3 py-1 rounded-full bg-[#F2F2F2] hover:bg-[#F2F2F2] focus:outline-none'>
            ALL &gt;
          </button>
        )}
      </div>
      <div className='flex flex-row items-center w-full lg:overflow-hidden py-4 md:space-x-3'>
        {tools.length > 5 && (
          <div className='cursor-pointer w-full h-[44px] relative' onClick={scrollLeft}>
            <Image src={Icons.LeftIcon} alt={'Left'} fill className="object-contain"
 />
          </div>
        )}
        <div
          className='flex flex-shrink-0 carousel rounded-box w-[78%] sm:w-[90%] pb-5 overflow-x-auto'
          ref={carouselRef}
        >
          {tools.map((item) => (
            <div
              key={item.title}
              className={`flex min-w-[240px] flex-col justify-start items-start text-left p-5 bg-white dark:bg-black rounded-lg border border-[#e5e5e55c] max-w-[100%] lg:max-w-[20%] w-[100%] lg:w-[15%] m-2 transition-shadow duration-300 ease-in-out transform-gpu hover:shadow-lg`}
            >
              <Image src={item.Image} alt={item.title} width={65} height={65} />
              <h3 className='text-black dark:text-white text-sm text-left lg:text-xl font-bold'>
                {item.title}
              </h3>
              <p className='overflow-hidden text-black dark:text-white text-left text-xs lg:text-sm font-normal'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        {tools.length > 5 && (
          <div className='cursor-pointer w-full h-[42px] relative' onClick={scrollRight}>
            <Image src={Icons.RightIcon} alt={'Right'} fill className="object-contain"
    
 />
          </div>
        )}
      </div>
    </div>
  );
}
