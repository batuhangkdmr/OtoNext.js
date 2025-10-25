import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Sayfa Bulunamadı | Yönel Oto Yedek Parça',
  description: 'Aradığınız sayfa bulunamadı. Yönel Oto yedek parça kataloğuna göz atın.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[200px] font-extrabold text-primary leading-none">
            404
          </h1>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sayfa Bulunamadı
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Aradığınız sayfa mevcut değil, taşınmış veya kaldırılmış olabilir.
          <br className="hidden md:block" />
          Yönel Oto yedek parça kataloğumuzda aradığınız ürünü bulabilirsiniz.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Ana Sayfaya Dön
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-md border-2 border-gray-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Ürünleri İncele
          </Link>
        </div>

        {/* Suggestions */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Popüler Sayfalar:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/products?search=iveco"
              className="text-sm bg-gray-50 hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-full transition-all"
            >
              İveco Daily
            </Link>
            <Link
              href="/products?search=ducato"
              className="text-sm bg-gray-50 hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-full transition-all"
            >
              Fiat Ducato
            </Link>
            <Link
              href="/products?search=foton"
              className="text-sm bg-gray-50 hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-full transition-all"
            >
              Foton Traktör
            </Link>
            <Link
              href="/products?search=karataş"
              className="text-sm bg-gray-50 hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-full transition-all"
            >
              Karataş Traktör
            </Link>
            <Link
              href="/blog"
              className="text-sm bg-gray-50 hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-full transition-all"
            >
              Blog Yazıları
            </Link>
            <Link
              href="/contact"
              className="text-sm bg-gray-50 hover:bg-primary hover:text-white text-gray-700 px-4 py-2 rounded-full transition-all"
            >
              İletişim
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8">
          <p className="text-gray-600 mb-2">Yardıma mı ihtiyacınız var?</p>
          <a
            href="tel:05542597273"
            className="text-primary font-bold hover:underline"
          >
            0554 259 72 73
          </a>
        </div>
      </div>
    </div>
  );
}

