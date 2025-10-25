import ProductsRepository from '@/lib/repositories/ProductsRepository';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import HeroSlider from '@/components/HeroSlider';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

  // Advanced SEO Optimized Metadata
export const metadata: Metadata = {
  title: 'Yönel Oto Yedek Parça | İveco Daily 120-14, 85-12, 65-9, Eurobus | Fiat Ducato | Foton & Karataş Traktör | Mutlu Akü - Orijinal Yedek Parça',
  description: 'İveco Daily 120-14, 85-12, 65-9, 50NC, Eurobus yedek parça. Fiat Ducato 2.3, 3.0 motor parçaları. Foton ve Karataş traktör yedek parça. Mutlu akü çeşitleri. 50+ yıllık tecrübe, orijinal parça garantisi, Türkiye geneli hızlı kargo. Fren balata, filtre, motor parçası stoklarımızda.',
  keywords: 'iveco daily yedek parça, iveco 120-14 yedek parça, iveco 85-12 parça, iveco 65-9, iveco 50nc, iveco eurobus, iveco daily eurobus, iveco daily 4x4, fiat ducato yedek parça, ducato 2.3 motor, ducato 3.0, ducato fren balata, iveco fren sistemi, foton traktör yedek parça, foton filtre, karataş traktör parça, karataş hidrolik, mutlu akü, mutlu akü fiyat, ağır hizmet akü, traktör aküsü, iveco filtre, ducato yağ filtresi, ticari araç yedek parça, orijinal yedek parça, tokat yedek parça',
  alternates: {
    canonical: 'https://yonelotoyedekparca.com',
  },
  authors: [{ name: 'Yönel Oto Yedek Parça' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Yönel Oto Yedek Parça | İveco Daily, Fiat Ducato, Foton, Karataş Traktör, Mutlu Akü',
    description: 'İveco Daily 120-14, 85-12, 65-9, Fiat Ducato, Foton ve Karataş traktör yedek parçaları. 50+ yıllık tecrübe, %100 orijinal ürün garantisi. Fren, motor, filtre sistemleri.',
    url: 'https://yonelotoyedekparca.com',
    siteName: 'Yönel Oto Yedek Parça',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yönel Oto Yedek Parça - İveco, Ducato, Foton, Karataş, Mutlu Akü',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yönel Oto Yedek Parça | İveco, Ducato, Foton, Karataş',
    description: 'İveco Daily, Fiat Ducato, Foton ve Karataş traktör yedek parçaları. Orijinal ürün, hızlı teslimat.',
    images: ['/twitter-image.jpg'],
  },
};

export default async function Home() {
  // Server-side data fetching (SSR) - İveco Products with Stable Order
  let featuredProducts: any[] = [];
  
  try {
    const result = await ProductsRepository.findAll({ 
      limit: 6, // 6 ürün direkt çekiyoruz
      search: 'iveco'
    });
    
    // Ürünleri direkt kullan (stable order for hydration)
    featuredProducts = result.products;
  } catch (error) {
    console.log('⚠️ Products could not be loaded (database not configured)');
  }

  // Brand categories with models
  const brands = [
    {
      name: 'İveco Daily',
      models: ['120-14', '85-12', '65-9', '50NC', 'Daily'],
      icon: '🚐',
      image: '/assets/dailly.png',
      description: 'İveco Daily serisi için orijinal yedek parçalar',
      link: '/products?search=iveco',
    },
    {
      name: 'Fiat Ducato',
      models: ['Ducato 2.3', 'Ducato 3.0', 'Tüm Modeller'],
      icon: '🚚',
      image: '/assets/d.png',
      description: 'Fiat Ducato ticari araç yedek parçaları',
      link: '/products?search=ducato',
    },
    {
      name: 'Karataş Traktör',
      models: ['Tüm Modeller'],
      icon: '🚜',
      image: '/assets/karat.png',
      description: 'Karataş traktör yedek parça ve aksesuar çeşitleri',
      link: '/products?search=karataş',
    },
    {
      name: 'Foton Traktör',
      models: ['Tüm Modeller'],
      icon: '🚜',
      image: '/assets/foton.png',
      description: 'Foton traktör yedek parçaları ve bakım ürünleri',
      link: '/products?search=foton',
    },
    {
      name: 'Mutlu Akü',
      models: ['Tüm Kapasiteler'],
      icon: '🔋',
      image: '/images/60aku.png',
      description: 'Mutlu akü çeşitleri, güvenilir enerji çözümleri',
      link: '/products?search=mutlu',
    },
  ];

  // Product categories
  const categories = [
    { name: 'Fren Sistemleri', icon: '🛑', link: '/products?search=fren' },
    { name: 'Motor Yedek Parça', icon: '⚙️', link: '/products?search=motor' },
    { name: 'Filtre Grubu', icon: '🔧', link: '/products?search=filtre' },
    { name: 'Elektrik Sistemleri', icon: '⚡', link: '/products?search=elektrik' },
    { name: 'Yağlar', icon: '🛢️', link: '/products?search=yağ' },
    { name: 'Balata & Kampana', icon: '🔩', link: '/products?search=balata' },
  ];

  return (
    <main className="min-h-screen">
      {/* Advanced Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': 'https://yonelotoyedekparca.com/#organization',
                name: 'Yönel Oto Yedek Parça',
                url: 'https://yonelotoyedekparca.com',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://yonelotoyedekparca.com/assets/logo.jpg',
                  width: 260,
                  height: 120,
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: '+90-554-259-72-73',
                  contactType: 'Customer Service',
                  areaServed: 'TR',
                  availableLanguage: 'Turkish',
                },
                sameAs: [
                  'https://yonelotoyedekparca.com',
                ],
              },
              {
                '@type': 'LocalBusiness',
                '@id': 'https://yonelotoyedekparca.com/#localbusiness',
                name: 'Yönel Oto Yedek Parça',
                image: 'https://yonelotoyedekparca.com/og-image.jpg',
                url: 'https://yonelotoyedekparca.com',
                telephone: '+905542597273',
                priceRange: '$$',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'TR',
                  addressRegion: 'Tokat',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 40.3167,
                  longitude: 36.55,
                },
                openingHoursSpecification: [
                  {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                    opens: '08:00',
                    closes: '18:00',
                  },
                ],
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: '4.8',
                  reviewCount: '250',
                  bestRating: '5',
                  worstRating: '1',
                },
              },
              {
                '@type': 'AutoPartsStore',
                name: 'Yönel Oto Yedek Parça',
                description: 'İveco Daily 120-14, 85-12, 65-9, 50NC, Fiat Ducato 2.3, 3.0, Foton Traktör, Karataş Traktör yedek parçaları ve Mutlu Akü satışı. Orijinal yedek parça, fren balata, filtre, motor parçaları.',
                url: 'https://yonelotoyedekparca.com',
                telephone: '+905542597273',
                email: 'tokatyonelotoyedekparca@gmail.com',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'TR',
                  addressRegion: 'Tokat',
                },
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Yedek Parça Katalog',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Product',
                        name: 'İveco Daily 120-14 Yedek Parça',
                        description: 'İveco Daily 120-14 modeline özel orijinal yedek parçalar',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Product',
                        name: 'Fiat Ducato Yedek Parça',
                        description: 'Fiat Ducato 2.3 ve 3.0 motor yedek parçaları',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Product',
                        name: 'Foton Traktör Yedek Parça',
                        description: 'Foton traktör parçaları ve aksesuar',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Product',
                        name: 'Karataş Traktör Yedek Parça',
                        description: 'Karataş traktör yedek parça ve hidrolik sistemler',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Product',
                        name: 'Mutlu Akü',
                        description: 'Tüm araç tipleri için Mutlu akü çeşitleri',
                      },
                    },
                  ],
                },
              },
              {
                '@type': 'WebSite',
                '@id': 'https://yonelotoyedekparca.com/#website',
                url: 'https://yonelotoyedekparca.com',
                name: 'Yönel Oto Yedek Parça',
                description: 'İveco Daily, Fiat Ducato, Foton, Karataş Traktör Yedek Parçaları',
                publisher: {
                  '@id': 'https://yonelotoyedekparca.com/#organization',
                },
                potentialAction: {
                  '@type': 'SearchAction',
                  target: 'https://yonelotoyedekparca.com/products?search={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero Slider - Main Banner */}
      <HeroSlider />

      {/* Main Title Section - SEO Focused */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Heading - H1 for SEO */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-6 leading-tight">
              İveco Daily, Foton ve Karataş Traktör Yedek Parçaları
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-5xl mx-auto font-medium">
              İveco Daily (120-14, 85-12, 65-9, 50NC, Eurobus), Fiat Ducato (2.3, 3.0), Foton Traktör, 
              Karataş Traktör yedek parçaları ve Mutlu Akü satışında Türkiye'nin güvenilir adresi. 
              50+ yıllık tecrübe ile orijinal ve kaliteli yan sanayi ürünleri.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border-2 border-primary/20">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-gray-800">50+ Yıl Tecrübe</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border-2 border-primary/20">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span className="font-bold text-gray-800">10.000+ Müşteri</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border-2 border-primary/20">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span className="font-bold text-gray-800">%100 Güvenilir</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section - Main Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Satış Yaptığımız Markalar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İveco Daily (120-14, 85-12, 65-9, 50NC), Fiat Ducato, Foton Traktör, Karataş Traktör ve Mutlu Akü ürünlerinin 
              tüm orijinal yedek parçalarını bulabilirsiniz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {brands.map((brand) => (
          <Link
                key={brand.name}
                href={brand.link}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-primary"
              >
                <div className="p-8">
                  {/* Brand Image */}
                  <div className="relative w-full h-32 mb-4 flex items-center justify-center">
                    <Image
                      src={brand.image}
                      alt={`${brand.name} Yedek Parça`}
                      width={180}
                      height={120}
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    {brand.name}
                  </h3>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {brand.models.map((model) => (
                        <span
                          key={model}
                          className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {brand.description}
                  </p>
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      Ürünleri Görüntüle
                      <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
          </Link>
            ))}
          </div>
        </div>
      </section>

      {/* İveco Models Detailed Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              İveco Daily Modelleri
            </h2>
            <p className="text-xl text-gray-600">
              İveco Daily serisi tüm modeller için orijinal ve yan sanayi yedek parça stoğumuz mevcuttur
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {['120-14', '85-12', '65-9', '50NC', 'Daily 4x4'].map((model) => (
              <Link
                key={model}
                href={`/products?search=iveco ${model.toLowerCase()}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border-2 border-transparent hover:border-primary"
              >
                <div className="text-4xl mb-3">🚐</div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  İveco {model}
                </h3>
                <p className="text-sm text-gray-600 mt-2">Yedek Parça</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Ürün Kategorileri
            </h2>
            <p className="text-xl text-gray-600">
              Aradığınız tüm yedek parça kategorilerinde hizmetinizdeyiz
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.link}
                className="group bg-white border-2 border-gray-200 hover:border-primary hover:bg-gradient-to-br hover:from-primary hover:to-red-700 rounded-xl p-6 text-center transition-all duration-300 shadow-md hover:shadow-2xl"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-white transition-colors">
                  {category.name}
                </h3>
              </Link>
              ))}
            </div>
          </div>
        </section>

      {/* Featured Products - İveco */}
      {featuredProducts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                İVECO YEDEK PARÇA
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                İveco Daily Öne Çıkan Ürünler
              </h2>
              <p className="text-xl text-gray-600">
                İveco Daily 120-14, 85-12, 65-9, 50NC için en çok tercih edilen orijinal yedek parçalar
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Link
                  key={product.Id}
                  href={`/products/${product.Id}`}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary"
                >
                  {product.ImageUrl && (
                    <div className="relative h-64 overflow-hidden bg-gray-50">
                      <Image
                        src={product.ImageUrl}
                        alt={`${product.Name} - Yönel Oto Yedek Parça`}
                        fill
                        className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                      {product.Name}
                    </h3>
                  {product.Description && (
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">
                        {product.Description}
                      </p>
                  )}
                  {product.CategoryName && (
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
                        {product.CategoryName}
                      </span>
                    )}
                    <div className="mt-4 flex items-center text-primary font-semibold">
                      Detayları Görüntüle
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/products?search=iveco"
                className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-red-700 hover:scale-105 transition-all shadow-lg"
              >
                Tüm İveco Ürünlerini Görüntüle
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Strong CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-red-700 to-red-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Main CTA Content */}
            <div className="text-center mb-12">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <span className="text-white font-bold text-sm">🎯 HEMEN ARAYIN</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Aradığınız Yedek Parçayı<br />
                <span className="text-yellow-300">Hemen Bulalım!</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-red-50 mb-4 max-w-3xl mx-auto leading-relaxed">
                İveco Daily, Fiat Ducato, Foton, Karataş Traktör ve Mutlu Akü için 
                <strong className="text-white"> 50+ yıllık tecrübemizle </strong> 
                size en doğru yedek parçayı buluyoruz!
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-white font-semibold">✅ Orijinal Ürün Garantisi</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-white font-semibold">🚚 Aynı Gün Kargo</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-white font-semibold">💰 Havale - Nakit</span>
                </div>
              </div>
            </div>

            {/* Contact Methods - Large Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Phone Button */}
              <a
                href="tel:+905542597273"
                className="group bg-white text-gray-900 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">Hemen Arayın</h3>
                  <p className="text-3xl font-bold text-primary mb-2 group-hover:text-white transition-colors">
                    0554 259 72 73
                  </p>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                    Uzman ekibimiz hizmetinizde
                  </p>
                </div>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/905542597273?text=Merhaba, yedek parça hakkında bilgi almak istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-gray-900 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">WhatsApp Destek</h3>
                  <p className="text-2xl font-bold text-green-600 mb-2 group-hover:text-white transition-colors">
                    Mesaj Gönderin
                  </p>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                    Hızlı ve kolay iletişim
                  </p>
                </div>
              </a>

              {/* Contact Page Button */}
              <Link
                href="/contact"
                className="group bg-white text-gray-900 rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">İletişim Formu</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2 group-hover:text-white transition-colors">
                    Mesaj Bırakın
                  </p>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors">
                    24 saat içinde yanıt veriyoruz
                  </p>
                </div>
              </Link>
            </div>

            {/* Extra Info */}
            <div className="mt-12 text-center">
              <p className="text-red-50 text-lg mb-4">
                📍 <strong>Tokat</strong> merkezli, <strong>Türkiye geneline</strong> hızlı kargo ile hizmet veriyoruz
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-red-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Pzt-Cmt: 08:00-18:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>tokatyonelotoyedekparca@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Comprehensive SEO Content Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main SEO Title */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                OTO YEDEK PARÇADA ONLİNE ALIŞVERİŞ
              </h2>
              <p className="text-xl text-gray-600">
                İveco Daily, Fiat Ducato, Foton ve Karataş Traktör Yedek Parçalarında Türkiye'nin Güvenilir Adresi
              </p>
            </div>

            {/* İveco Section */}
            <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-primary pb-4">
                İveco Daily Yedek Parça - Tüm Modeller
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>İveco Daily</strong> araç sahipleri için en kapsamlı yedek parça stoğuna sahibiz. 
                  <strong className="text-primary"> İveco Daily 120-14</strong>, 
                  <strong className="text-primary"> İveco Daily 85-12</strong>, 
                  <strong className="text-primary"> İveco Daily 65-9</strong>, 
                  <strong className="text-primary"> İveco Daily 50NC</strong> ve 
                  <strong className="text-primary"> İveco Daily 4x4</strong> modelleri için motor aksamı, 
                  şanzıman, diferansiyel, fren sistemi, elektrik parçaları ve kaporta ürünlerinde 
                  hem orijinal hem de kaliteli muadil ürünler sunmaktayız.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                  <div className="bg-primary/10 p-4 rounded-lg text-center">
                    <div className="font-bold text-primary text-lg">Motor 2.3</div>
                    <div className="text-sm text-gray-600">C13-C15</div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg text-center">
                    <div className="font-bold text-primary text-lg">Motor 2.8</div>
                    <div className="text-sm text-gray-600">C11-C13</div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg text-center">
                    <div className="font-bold text-primary text-lg">Motor 3.0</div>
                    <div className="text-sm text-gray-600">C15-C17</div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg text-center">
                    <div className="font-bold text-primary text-lg">Tüm Aksam</div>
                    <div className="text-sm text-gray-600">Stokta</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>İveco Daily yedek parça</strong> kategorisinde; debriyaj ve volant, 
                  fren balata ve diski, yağ ve hava filtresi, yakıt filtresi, alternatör, 
                  marş motoru, şarj dinamosu, su pompası, termostat gibi tüm bakım ürünleri 
                  depolarımızda mevcuttur. İveco orijinal yedek parça tercihinizde 
                  maksimum 2 iş günü içerisinde adresinize teslim ediyoruz.
                </p>
              </div>
            </div>

            {/* Fiat Ducato Section */}
            <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-primary pb-4">
                Fiat Ducato Yedek Parça - 2.3 ve 3.0 Motor
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Fiat Ducato</strong> ticari araçlarınız için en kaliteli yedek parçaları sunuyoruz. 
                  <strong className="text-primary"> Fiat Ducato 2.3 MultiJet</strong> ve 
                  <strong className="text-primary"> Fiat Ducato 3.0 MultiJet</strong> motor modellerine özel 
                  orijinal ve yan sanayi yedek parçalarımız bulunmaktadır. Ducato fren balata, 
                  motor yağ filtresi, hava filtresi, polen filtresi, su pompası, debriyaj seti, 
                  alternatör ve marş motoru gibi kritik parçalarda güvenle alışveriş yapabilirsiniz.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg my-4">
                  <h4 className="font-bold text-lg mb-3">Ducato Yedek Parça Kategorileri:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-gray-700">
                    <li>✓ Motor Yedek Parça (2.3 / 3.0)</li>
                    <li>✓ Fren Sistemi (Balata, Disk)</li>
                    <li>✓ Filtre Grubu (Yağ, Hava, Yakıt)</li>
                    <li>✓ Elektrik Sistemleri</li>
                    <li>✓ Debriyaj & Volant</li>
                    <li>✓ Şanzıman Parçaları</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Foton Traktör Section */}
            <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-primary pb-4">
                Foton Traktör Yedek Parça - Tüm Modeller
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Foton Traktör</strong> sahipleri için en kapsamlı yedek parça stoğunu sunuyoruz. 
                  Tarımda güvenilirlik ve dayanıklılığıyla öne çıkan Foton traktörleriniz için 
                  motor parçaları, hidrolik sistem elemanları, şanzıman aksam, fren grubu ve 
                  elektrik sistemleri başta olmak üzere tüm yedek parça kategorilerinde hizmet veriyoruz.
                </p>
                
                {/* Foton Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-600 text-white p-3 rounded-lg">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Motor Yedek Parça</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Piston ve Piston Segmanları</li>
                      <li>✓ Silindir Kapağı ve Contaları</li>
                      <li>✓ Enjektör ve Yakıt Pompaları</li>
                      <li>✓ Su Pompası ve Termostat</li>
                      <li>✓ Krank ve Kam Milleri</li>
                      <li>✓ Turbo ve Kompresör Parçaları</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-600 text-white p-3 rounded-lg">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Hidrolik Sistem</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Hidrolik Pompa ve Motorlar</li>
                      <li>✓ Hidrolik Silindir ve Pistonlar</li>
                      <li>✓ Hidrolik Hortum ve Rakordlar</li>
                      <li>✓ Kontrol Vanaları</li>
                      <li>✓ Hidrolik Filtreler</li>
                      <li>✓ Lift Kol Aksam Parçaları</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border-2 border-red-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-red-600 text-white p-3 rounded-lg">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Şanzıman & Fren</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Debriyaj Balata ve Baskı</li>
                      <li>✓ Şanzıman Dişli Takımları</li>
                      <li>✓ Fren Balata ve Disk</li>
                      <li>✓ Fren Hidrolik Sistemi</li>
                      <li>✓ Diferansiyel Parçaları</li>
                      <li>✓ Şaft ve Mafsallar</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border-2 border-yellow-200">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-yellow-600 text-white p-3 rounded-lg">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Elektrik & Filtre</h4>
                    </div>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Marş Motoru ve Alternatör</li>
                      <li>✓ Far ve Sinyal Lambası</li>
                      <li>✓ Akü ve Kablo Tesisatı</li>
                      <li>✓ Yağ ve Hava Filtresi</li>
                      <li>✓ Yakıt Filtresi</li>
                      <li>✓ Hidrolik Yağ Filtresi</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200 mt-6">
                  <p className="text-gray-700 leading-relaxed mb-0">
                    💡 <strong>Foton Traktör İpucu:</strong> Traktörünüzün performansını maksimum seviyede tutmak için 
                    periyodik bakımlarınızı aksatmayın. Özellikle filtre değişimleri, hidrolik yağ kontrolleri 
                    ve motor bakımları düzenli yapılmalıdır. Orijinal Foton yedek parça kullanımı, 
                    traktörünüzün ömrünü uzatır ve arıza riskini minimize eder.
                  </p>
                </div>
              </div>
            </div>

            {/* Karataş Traktör Section */}
            <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-primary pb-4">
                Karataş Traktör Yedek Parça - Yerli Üretim Güvencesi
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Karataş Traktör</strong>, Türkiye'nin yerli üretim traktör markalarından biridir. 
                  Karataş traktörleriniz için orijinal ve yan sanayi yedek parçalarında uzman kadromuz 
                  ve geniş stoklarımızla hizmetinizdeyiz. Tarla çalışmalarınızda kesintisiz üretim için 
                  ihtiyaç duyduğunuz tüm yedek parçaları hızlı ve güvenilir şekilde tedarik ediyoruz.
                </p>

                {/* Karataş Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl text-center border-2 border-primary/20 hover:shadow-lg transition-all">
                    <div className="text-5xl mb-4">🚜</div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Yerli Üretim</h4>
                    <p className="text-gray-600 text-sm">Türk yapımı traktör parçaları</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl text-center border-2 border-primary/20 hover:shadow-lg transition-all">
                    <div className="text-5xl mb-4">⚙️</div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Uyumlu Parçalar</h4>
                    <p className="text-gray-600 text-sm">%100 uyumlu yedek parça</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl text-center border-2 border-primary/20 hover:shadow-lg transition-all">
                    <div className="text-5xl mb-4">📦</div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">Hızlı Tedarik</h4>
                    <p className="text-gray-600 text-sm">Aynı gün kargoya hazır</p>
                  </div>
                </div>

                {/* Karataş Product Categories */}
                <div className="bg-gray-50 p-8 rounded-xl my-6 border-2 border-gray-200">
                  <h4 className="font-bold text-2xl mb-6 text-gray-900 text-center">
                    Karataş Traktör Yedek Parça Kategorileri
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl">🔧</div>
                      <div>
                        <div className="font-semibold text-gray-900">Motor Parçaları</div>
                        <div className="text-sm text-gray-600">Piston, segman, krank</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl">💧</div>
                      <div>
                        <div className="font-semibold text-gray-900">Hidrolik Sistem</div>
                        <div className="text-sm text-gray-600">Pompa, silindir, hortum</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl">⚙️</div>
                      <div>
                        <div className="font-semibold text-gray-900">Şanzıman</div>
                        <div className="text-sm text-gray-600">Dişli, rulman, conta</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl">🛞</div>
                      <div>
                        <div className="font-semibold text-gray-900">Fren Sistemi</div>
                        <div className="text-sm text-gray-600">Balata, disk, silindir</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl">🔌</div>
                      <div>
                        <div className="font-semibold text-gray-900">Elektrik</div>
                        <div className="text-sm text-gray-600">Marş, alternatör, kablo</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl">🔍</div>
                      <div>
                        <div className="font-semibold text-gray-900">Filtre Grubu</div>
                        <div className="text-sm text-gray-600">Yağ, hava, yakıt filtre</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl">🎯</div>
                      <div>
                        <div className="font-semibold text-gray-900">Debriyaj</div>
                        <div className="text-sm text-gray-600">Balata, baskı, rulman</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl">🔩</div>
                      <div>
                        <div className="font-semibold text-gray-900">Aksam Parçaları</div>
                        <div className="text-sm text-gray-600">Rotil, kampana, poyra</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl">🎨</div>
                      <div>
                        <div className="font-semibold text-gray-900">Kaporta</div>
                        <div className="text-sm text-gray-600">Far, ayna, panel</div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6">
                  <strong>Karataş Traktör yedek parça</strong> kategorisinde; motor revizyonu, 
                  şanzıman tamiri, hidrolik sistem bakımı, fren sistemi yenileme ve elektrik 
                  tesisatı onarımı için ihtiyaç duyacağınız tüm parçalar stoklarımızda mevcuttur. 
                  Yerli üretimin gücüyle, uygun fiyat avantajı ve hızlı teslimat garantisi sunuyoruz.
                </p>

                <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-200 mt-6">
                  <p className="text-gray-700 leading-relaxed mb-0">
                    ⚠️ <strong>Önemli Not:</strong> Karataş traktör yedek parça siparişlerinizde 
                    traktörünüzün model yılını ve seri numarasını belirtmeniz, doğru parçanın 
                    teminini hızlandırır. WhatsApp hattımızdan fotoğraf paylaşarak da ürün 
                    tespiti yaptırabilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            {/* Mutlu Akü Section */}
            <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-primary pb-4">
                Mutlu Akü - Tüm Araç Tipleri İçin
              </h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Mutlu Akü</strong> yetkili satıcısı olarak, otomobil, hafif ticari, 
                  ağır vasıta ve traktör aküsü çeşitlerinde en uygun fiyatları sunuyoruz. 
                  45 Ah'dan 200 Ah'a kadar farklı kapasitelerde Mutlu akü stoğumuz mevcuttur. 
                  Mutlu akü fiyatları ve kampanyalarımız için bizi arayabilirsiniz.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* Stats Section - Bottom of Page */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">50+</div>
              <div className="text-xl font-semibold mb-1">Yıllık Tecrübe</div>
              <div className="text-gray-400 text-sm">Sektörde uzman</div>
            </div>
            <div className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">5000+</div>
              <div className="text-xl font-semibold mb-1">Ürün Çeşidi</div>
              <div className="text-gray-400 text-sm">Geniş yelpaze</div>
            </div>
            <div className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">10K+</div>
              <div className="text-xl font-semibold mb-1">Mutlu Müşteri</div>
              <div className="text-gray-400 text-sm">Memnuniyet garantisi</div>
            </div>
            <div className="p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">%100</div>
              <div className="text-xl font-semibold mb-1">Orijinal Ürün</div>
              <div className="text-gray-400 text-sm">Garantili kalite</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}