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
    <div className="relative w-full h-[300px] md:h-[450px] mb-12 overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
        {sliders.map((slider, index) => {
          const style = getSlideStyle(index);
          return (
            <div
              key={slider.Id}
              className="absolute w-[85%] md:w-[70%] h-[85%] bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out"
              style={style}
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative w-full h-full p-4 md:p-6">
                <Image
                  src={slider.ImageUrl}
                  alt={`Yönel Oto Yedek Parça - Görsel ${slider.Id}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
              
              {/* Active Badge */}
              {index === activeIndex && (
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg">
                  {activeIndex + 1} / {sliders.length}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Navigation */}
      {sliders.length > 1 && (
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 bg-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg">
          {sliders.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-red-600 w-6 md:w-8 h-2.5' 
                  : 'bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5'
              }`}
              aria-label={`Slayt ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

