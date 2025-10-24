'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'İveco Daily Yedek Parça',
    subtitle: '120-14, 85-12, 65-9, 50NC Tüm Modeller',
    description: 'Orijinal ve yan sanayi yedek parçaları stoklarımızda',
    image: '/assets/slider1.png',
    buttonText: 'İveco Ürünleri',
    buttonLink: '/products?search=iveco',
  },
  {
    id: 2,
    title: 'Fiat Ducato Yedek Parça',
    subtitle: '2.3 ve 3.0 Motor Serisi',
    description: 'Fren, motor, filtre sistemlerinde uzman çözümler',
    image: '/assets/slider2.png',
    buttonText: 'Ducato Ürünleri',
    buttonLink: '/products?search=ducato',
  },
  {
    id: 3,
    title: 'Foton & Karataş Traktör',
    subtitle: 'Tüm Modeller İçin Yedek Parça',
    description: 'Tarımda kesintisiz üretim için güvenilir parçalar',
    image: '/assets/slider3.png',
    buttonText: 'Traktör Parçaları',
    buttonLink: '/products?search=traktör',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-2xl md:text-3xl text-yellow-300 mb-4 font-semibold">
                {slide.subtitle}
              </p>
              <p className="text-lg md:text-xl mb-8 text-gray-200">
                {slide.description}
              </p>
              <Link
                href={slide.buttonLink}
                className="inline-block bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
              >
                {slide.buttonText} →
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}

