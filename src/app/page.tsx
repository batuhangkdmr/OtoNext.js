import ProductsRepository from '@/lib/repositories/ProductsRepository';
import SliderImagesRepository from '@/lib/repositories/SliderImagesRepository';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  // Server-side data fetching (SSR)
  const sliderImages = await SliderImagesRepository.findAll();
  const { products: featuredProducts } = await ProductsRepository.findAll({ limit: 4 });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Yönel Oto Yedek Parça
          </h1>
          <p className="text-2xl md:text-3xl mb-4">
            Foton Traktör | Iveco Daily | Karataş Traktör | Mutlu Akü
          </p>
          <p className="text-xl mb-8">
            50+ yıllık tecrübe ile güvenilir çözüm ortağınız
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
          >
            Ürünleri İncele
          </Link>
        </div>
      </section>

      {/* Slider Section */}
      {sliderImages.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Ürün Galerisi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sliderImages.slice(0, 6).map((image) => (
                <div key={image.Id} className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                  <Image
                    src={image.ImageUrl}
                    alt="Yönel Oto Yedek Parça"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">Öne Çıkan Ürünler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <Link
                  key={product.Id}
                  href={`/products/${product.Id}`}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition group"
                >
                  {product.ImageUrl && (
                    <div className="mb-4 overflow-hidden rounded">
                      <Image
                        src={product.ImageUrl}
                        alt={product.Name}
                        width={300}
                        height={300}
                        className="w-full h-48 object-contain group-hover:scale-110 transition"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{product.Name}</h3>
                  {product.Description && (
                    <p className="text-gray-600 text-sm line-clamp-2">{product.Description}</p>
                  )}
                  {product.CategoryName && (
                    <p className="text-primary text-sm mt-2">{product.CategoryName}</p>
                  )}
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition"
              >
                Tüm Ürünleri Görüntüle
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Hemen İletişime Geçin</h2>
          <p className="text-2xl mb-8">
            Tüm yedek parça ihtiyaçlarınız için yanınızdayız
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              İletişim
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ile İletişim
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-2xl font-bold mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600">Türkiye geneline hızlı ve güvenli teslimat</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-2">Orijinal Ürünler</h3>
              <p className="text-gray-600">%100 orijinal ve garantili yedek parçalar</p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2">50+ Yıllık Tecrübe</h3>
              <p className="text-gray-600">Sektörde yarım asırı aşkın deneyim</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

