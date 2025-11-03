'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SliderImage } from '@/lib/models/SliderImage';

interface Props {
  sliders: SliderImage[];
}

export default function ProductsCarousel({ sliders }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (sliders.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliders.length]);

  if (sliders.length === 0) return null;

  const getSlideStyle = (index: number) => {
    const diff = index - activeIndex;
    const normalizedDiff = ((diff + sliders.length) % sliders.length);
    
    if (normalizedDiff === 0) {
      // Active slide - center
      return {
        transform: 'translateX(0%) scale(1)',
        zIndex: 30,
        opacity: 1,
      };
    } else if (normalizedDiff === 1 || normalizedDiff === sliders.length - 1) {
      // Adjacent slides
      const isNext = normalizedDiff === 1;
      return {
        transform: `translateX(${isNext ? '80%' : '-80%'}) scale(0.8)`,
        zIndex: 20,
        opacity: 0.6,
      };
    } else {
      // Hidden slides
      return {
        transform: 'translateX(0%) scale(0.6)',
        zIndex: 10,
        opacity: 0,
      };
    }
  };

  return (
    <div className="relative w-full mb-12 overflow-hidden">
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full aspect-[16/9] flex items-center justify-center" style={{ perspective: '1200px' }}>
        {sliders.map((slider, index) => {
          const style = getSlideStyle(index);
          return (
            <div
              key={slider.Id}
              className="absolute w-[90%] md:w-[75%] aspect-[16/9] rounded-xl md:rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out"
              style={style}
              onClick={() => setActiveIndex(index)}
            >
              {/* Image - No Padding, Full Fill */}
              <div className="relative w-full h-full">
                <Image
                  src={slider.ImageUrl}
                  alt={`Yönel Oto Yedek Parça - Görsel ${slider.Id}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  unoptimized
                  sizes="(max-width: 768px) 90vw, 75vw"
                />
              </div>
              
              {/* Active Badge */}
              {index === activeIndex && (
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-red-600 text-white px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg">
                  {activeIndex + 1} / {sliders.length}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

