'use client';

import Image from 'next/image';
import Link from 'next/link';

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
}

export default function ModernBrandCard({ brand, index }: Props) {
  return (
    <Link href={brand.link} className="block group h-full">
      <div
        className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/30 h-full transition-all duration-300 hover:-translate-y-2"
        style={{
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
          {/* Brand Image */}
          <div className="relative w-full h-40 bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-6 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src={brand.image}
                alt={`${brand.name} Yedek Parça`}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-center mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
              {brand.name}
            </h3>

            {/* Models */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {brand.models.map((model) => (
                <span
                  key={model}
                  className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {model}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-center text-sm leading-relaxed mb-4">
              {brand.description}
            </p>

            {/* CTA */}
            <div className="text-center">
              <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                Ürünleri Görüntüle
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>
          </div>

        {/* Hover Shadow Effect */}
        <style jsx>{`
          .group:hover > div {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12) !important;
          }
        `}</style>
      </div>
    </Link>
  );
}

