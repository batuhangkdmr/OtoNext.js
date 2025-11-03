'use client';

import { useState, useEffect, useRef } from 'react';
import ModernBrandCard from './ModernBrandCard';

interface Brand {
  name: string;
  models: string[];
  icon: string;
  image: string;
  description: string;
  link: string;
}

interface Props {
  brand: Brand;
  index: number;
  animationClass: string;
  delayClass: string;
}

export default function AnimatedBrandCard({ brand, index, animationClass, delayClass }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animasyon bir kez tetiklendikten sonra observer'ı durdur
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Kartın %10'u görünür olduğunda tetikle
        rootMargin: '0px 0px -50px 0px', // Biraz daha scroll etmesini bekle
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={isVisible ? `${animationClass} ${delayClass}` : 'opacity-0'}
    >
      <ModernBrandCard brand={brand} index={index} />
    </div>
  );
}

