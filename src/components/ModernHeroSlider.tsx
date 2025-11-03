'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'İveco Daily Yedek Parça',
    subtitle: '120-14, 85-12, 65-9, 50NC Tüm Modeller',
    description: 'Orijinal ve yan sanayi yedek parçaları stoklarımızda',
    image: '/assets/slider1.png',
    buttonText: 'İveco Ürünleri',
    buttonLink: '/urunler?search=iveco',
  },
  {
    id: 2,
    title: 'Fiat Ducato Yedek Parça',
    subtitle: '2.3 ve 3.0 Motor Serisi',
    description: 'Fren, motor, filtre sistemlerinde uzman çözümler',
    image: '/assets/slider2.png',
    buttonText: 'Ducato Ürünleri',
    buttonLink: '/urunler?search=ducato',
  },
  {
    id: 3,
    title: 'Foton & Karataş Traktör',
    subtitle: 'Tüm Modeller İçin Yedek Parça',
    description: 'Tarımda kesintisiz üretim için güvenilir parçalar',
    image: '/assets/slider3.png',
    buttonText: 'Traktör Parçaları',
    buttonLink: '/urunler?search=traktör',
  },
  {
    id: 4,
    title: 'Kaliteli Yedek Parça',
    subtitle: 'Geniş Ürün Yelpazesi',
    description: 'Motor, fren, filtre ve akü çözümlerinde uzman kadro',
    image: '/gorsel.png',
    buttonText: 'Tüm Ürünler',
    buttonLink: '/urunler',
  },
  {
    id: 5,
    title: 'Mutlu Akü ve Yağlar',
    subtitle: 'Orijinal ve Garantili Ürünler',
    description: 'Araç ve traktörleriniz için en kaliteli bakım malzemeleri',
    image: '/gorsel1.png',
    buttonText: 'Ürünleri İncele',
    buttonLink: '/urunler',
  },
];

export default function ModernHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isMounted]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Animation variants - Komatsu style (Fade + Zoom)
  const slideVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1] as const, // Smooth easing
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  // Content animation variants
  const contentVariants = {
    enter: {
      opacity: 0,
      y: 40,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[75vh] overflow-hidden bg-gray-900">
      {/* Slides Container */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background Image with Ken Burns Effect */}
          <div className="absolute inset-0">
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              sizes="100vw"
              quality={90}
            />
            {/* Gradient Overlay - Komatsu style (darker, more premium) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>

          {/* Content */}
          <motion.div
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center"
          >
            <div className="max-w-2xl lg:max-w-3xl text-white">
              {/* Badge - Optional */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="inline-block bg-primary/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              >
                YENİ ÜRÜNLER
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight"
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl lg:text-3xl text-yellow-300 mb-4 font-semibold"
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-base md:text-lg lg:text-xl mb-8 text-gray-200 max-w-xl"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link
                  href={slides[currentSlide].buttonLink}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/50"
                >
                  {slides[currentSlide].buttonText}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots - Komatsu Minimal Style */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-white w-10 md:w-12 h-1.5'
                : 'bg-white/40 hover:bg-white/60 w-1.5 h-1.5'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation - Minimalist */}
      <button
        onClick={goToPrev}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 border border-white/20 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 md:p-4 rounded-full transition-all duration-300 border border-white/20 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress Bar - Optional Premium Touch */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <motion.div
          key={currentSlide}
          className="h-full bg-primary"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 5, ease: 'linear' }}
        />
      </div>
    </section>
  );
}

