import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PersonIcon from '@mui/icons-material/Person';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const metadata: Metadata = {
  title: 'Blog | Yedek Parça Rehberi ve Bakım İpuçları - Yönel Oto',
  description: 'İveco Daily, Ducato, Foton, Karataş traktör bakım ve onarım rehberleri. 50+ yıl tecrübe ile hazırlanmış uzman tavsiyeleri.',
  keywords: 'iveco daily bakım, ducato yedek parça rehberi, foton traktör bakım ipuçları, karataş traktör onarım, mutlu akü bakımı, yedek parça seçimi, orijinal parça, yan sanayi parça',
  openGraph: {
    title: 'Blog | Yedek Parça Rehberi - Yönel Oto',
    description: 'İveco, Ducato, Foton ve Karataş için profesyonel yedek parça rehberleri. 50+ yıl tecrübe.',
    url: 'https://yonelotoyedekparca.com/blog',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yönel Oto Yedek Parça Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Yedek Parça Rehberi',
    description: 'İveco, Ducato, Foton ve Karataş bakım rehberleri',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://yonelotoyedekparca.com/blog',
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'iveco-daily-yedek-parca-secimi-rehberi',
    title: 'İveco Daily Yedek Parça Seçimi: Orijinal mi Yan Sanayi mi? Uzman Rehberi',
    excerpt: 'İveco Daily 120-14, 85-12, 65-9 ve 50NC modelleri için doğru yedek parça seçimi nasıl yapılır? 50 yıllık tecrübemizle tüm detayları açıklıyoruz.',
    content: '',
    category: 'İveco Daily',
    tags: ['İveco Daily', 'Yedek Parça', 'Orijinal Parça', 'Bakım'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '15 Aralık 2024',
    readTime: '8 dk',
    image: '/assets/dailly.png',
    featured: true,
  },
  {
    slug: 'fiat-ducato-motor-bakimi-ipuclari',
    title: 'Fiat Ducato Motor Bakımı: 2.3 ve 3.0 Dizel Motorlar için Kapsamlı Bakım Rehberi',
    excerpt: 'Fiat Ducato 2.3 MultiJet ve 3.0 HDI motorlarının uzun ömürlü olması için yapılması gereken periyodik bakımlar ve dikkat edilmesi gereken noktalar.',
    content: '',
    category: 'Fiat Ducato',
    tags: ['Ducato', 'Motor Bakımı', 'Dizel Motor', 'Periyodik Bakım'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '10 Aralık 2024',
    readTime: '10 dk',
    image: '/assets/d.png',
    featured: true,
  },
  {
    slug: 'foton-traktor-yedek-parca-temini',
    title: 'Foton Traktör Yedek Parça Temini ve Bakım Önerileri: Güvenilir Kaynaklardan Tedarik',
    excerpt: 'Foton traktör sahipleri için yedek parça bulma zorlukları, doğru tedarikçi seçimi ve traktörünüzün performansını artıracak bakım önerileri.',
    content: '',
    category: 'Foton Traktör',
    tags: ['Foton', 'Traktör', 'Yedek Parça', 'Tarım Makinaları'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '5 Aralık 2024',
    readTime: '7 dk',
    image: '/assets/foton.png',
    featured: true,
  },
  {
    slug: 'karatas-traktor-hidrolik-sistem-bakimi',
    title: 'Karataş Traktör Hidrolik Sistem Bakımı: Sorunsuz Çalışma için Profesyonel İpuçları',
    excerpt: 'Karataş traktörlerde hidrolik sistem bakımı, yağ değişimi, filtre seçimi ve sık karşılaşılan sorunların çözümleri hakkında detaylı bilgiler.',
    content: '',
    category: 'Karataş Traktör',
    tags: ['Karataş', 'Hidrolik Sistem', 'Traktör Bakımı', 'Yağ Değişimi'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '1 Aralık 2024',
    readTime: '9 dk',
    image: '/assets/karat.png',
    featured: false,
  },
  {
    slug: 'mutlu-aku-bakim-ve-kullanim-omru',
    title: 'Mutlu Akü Bakımı ve Kullanım Ömrü Nasıl Uzatılır? Kış Aylarında Dikkat Edilmesi Gerekenler',
    excerpt: 'Mutlu akü bakım önerileri, şarj durumu kontrolü, kış aylarında alınacak önlemler ve akü ömrünü 2 katına çıkaracak pratik bilgiler.',
    content: '',
    category: 'Mutlu Akü',
    tags: ['Mutlu Akü', 'Akü Bakımı', 'Kış Bakımı', 'Şarj'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '25 Kasım 2024',
    readTime: '6 dk',
    image: '/images/60aku.png',
    featured: false,
  },
  {
    slug: 'iveco-daily-fren-sistemi-bakimi',
    title: 'İveco Daily Fren Sistemi Bakımı: Balata, Disk ve Hidrolik Sistem Kontrolü',
    excerpt: 'İveco Daily ticari araçlarda fren sisteminin önemi, balata ve disk değişim zamanları, fren hidroliği bakımı ve güvenli sürüş için kritik kontroller.',
    content: '',
    category: 'İveco Daily',
    tags: ['İveco', 'Fren Sistemi', 'Güvenlik', 'Balata'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '20 Kasım 2024',
    readTime: '8 dk',
    image: '/assets/dailly.png',
    featured: false,
  },
  {
    slug: 'orijinal-yan-sanayi-yedek-parca-farklari',
    title: 'Orijinal ve Yan Sanayi Yedek Parça Farkları: Hangi Durumlarda Hangisi Tercih Edilmeli?',
    excerpt: 'Orijinal yedek parça mı yoksa kaliteli yan sanayi mı? Fiyat-performans dengesini nasıl kurarsınız? Hangi parçalarda orijinal şart? Tüm soruların cevapları.',
    content: '',
    category: 'Genel',
    tags: ['Orijinal Parça', 'Yan Sanayi', 'Kalite', 'Fiyat'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '15 Kasım 2024',
    readTime: '12 dk',
    image: '/assets/logo.webp',
    featured: true,
  },
  {
    slug: 'ducato-salincak-ve-rotil-degisimi',
    title: 'Fiat Ducato Ön Takım: Salıncak, Rotil ve Bijon Değişimi Zamanı Nasıl Anlaşılır?',
    excerpt: 'Ducato ön takım parçalarının (salıncak, rotil, bijon, rot başı) yıpranma belirtileri, değişim zamanı ve kaliteli yedek parça seçimi hakkında bilmeniz gerekenler.',
    content: '',
    category: 'Fiat Ducato',
    tags: ['Ducato', 'Ön Takım', 'Salıncak', 'Rotil'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '10 Kasım 2024',
    readTime: '7 dk',
    image: '/assets/d.png',
    featured: false,
  },
  {
    slug: 'traktor-filtre-bakimi-rehberi',
    title: 'Traktör Filtre Bakımı: Hava, Yağ, Yakıt ve Hidrolik Filtre Değişim Aralıkları',
    excerpt: 'Foton ve Karataş traktörlerde filtre bakımının önemi, doğru filtre seçimi, değişim periyotları ve filtrelerin motor ömrüne etkisi hakkında kapsamlı rehber.',
    content: '',
    category: 'Tarım Makinaları',
    tags: ['Traktör', 'Filtre', 'Bakım', 'Foton', 'Karataş'],
    author: 'Yönel Oto Uzman Ekibi',
    date: '5 Kasım 2024',
    readTime: '9 dk',
    image: '/assets/foton.png',
    featured: false,
  },
];

const categories = [
  { name: 'Tümü', slug: 'all', count: blogPosts.length },
  { name: 'İveco Daily', slug: 'iveco-daily', count: blogPosts.filter(p => p.category === 'İveco Daily').length },
  { name: 'Fiat Ducato', slug: 'fiat-ducato', count: blogPosts.filter(p => p.category === 'Fiat Ducato').length },
  { name: 'Foton Traktör', slug: 'foton-traktor', count: blogPosts.filter(p => p.category === 'Foton Traktör').length },
  { name: 'Karataş Traktör', slug: 'karatas-traktor', count: blogPosts.filter(p => p.category === 'Karataş Traktör').length },
  { name: 'Mutlu Akü', slug: 'mutlu-aku', count: blogPosts.filter(p => p.category === 'Mutlu Akü').length },
  { name: 'Genel', slug: 'genel', count: blogPosts.filter(p => p.category === 'Genel').length },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Yönel Oto Yedek Parça Blog',
            description: 'İveco Daily, Fiat Ducato, Foton ve Karataş Traktör yedek parça bakım rehberleri',
            url: 'https://yonelotoyedekparca.com/blog',
            publisher: {
              '@type': 'Organization',
              name: 'Yönel Oto Yedek Parça',
              logo: {
                '@type': 'ImageObject',
                url: 'https://yonelotoyedekparca.com/assets/logo.webp',
              },
            },
            blogPost: blogPosts.map(post => ({
              '@type': 'BlogPosting',
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              author: {
                '@type': 'Organization',
                name: post.author,
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-red-700 to-red-900 text-white py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight mt-4">
              Uzman Tavsiyeleri ve<br />
              <span className="text-yellow-300">Bakım Rehberleri</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed font-medium">
              İveco Daily, Fiat Ducato, Foton, Karataş Traktör ve Mutlu Akü için 
              <strong className="text-gray-900"> 50+ yıllık tecrübemizle </strong> 
              hazırladığımız profesyonel içerikler
            </p>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249, 250, 251)"/>
          </svg>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-bold mb-4">
                ⭐ ÖNE ÇIKAN YAZILAR
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                En Çok Okunan İçerikler
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary"
                >
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <CalendarTodayIcon sx={{ fontSize: 16 }} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <AccessTimeIcon sx={{ fontSize: 16 }} />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-primary font-bold">
                        Devamını Oku
                        <ArrowForwardIcon sx={{ fontSize: 20, ml: 1 }} className="group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Tüm Blog Yazıları
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[...featuredPosts.slice(2), ...regularPosts].map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-primary"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <CalendarTodayIcon sx={{ fontSize: 12 }} />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <AccessTimeIcon sx={{ fontSize: 12 }} />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm">
                      Devamını Oku
                      <ArrowForwardIcon sx={{ fontSize: 16, ml: 0.5 }} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Yedek Parça İhtiyacınız mı Var?
            </h2>
            <p className="text-xl text-red-50 mb-8">
              50+ yıllık tecrübemizle size en doğru yedek parçayı buluyoruz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905542597273"
                className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
              >
                📞 Hemen Arayın
              </a>
              <Link
                href="/urunler"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all shadow-lg hover:scale-105"
              >
                🛒 Ürünleri İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

