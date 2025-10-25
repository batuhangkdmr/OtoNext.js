import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GroupsIcon from '@mui/icons-material/Groups';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BuildIcon from '@mui/icons-material/Build';
import StarIcon from '@mui/icons-material/Star';

export const metadata: Metadata = {
  title: 'Hakkımızda - 50+ Yıllık Tecrübe | Yönel Oto Yedek Parça | Tokat',
  description: 'Yönel Oto Yedek Parça - 1970\'den beri İveco Daily, Fiat Ducato, Foton, Karataş Traktör ve Mutlu Akü yedek parça satışında Tokat ve Türkiye\'nin güvenilir adresi. 5000+ ürün çeşidi, orijinal parça garantisi.',
  keywords: 'yönel oto yedek parça, tokat yedek parça, iveco daily tokat, foton traktör tokat, karataş traktör yedek parça, hakkımızda, firma bilgileri, yedek parça tedarikçi',
  openGraph: {
    title: 'Hakkımızda - Yönel Oto Yedek Parça | 50+ Yıllık Tecrübe',
    description: '1970\'den beri İveco, Ducato, Foton ve Karataş Traktör yedek parçaları. Tokat merkezli, Türkiye geneline hizmet.',
    url: 'https://yonelotoyedekparca.com/hakkimizda',
    type: 'website',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hakkımızda - Yönel Oto Yedek Parça',
    description: '50+ yıllık tecrübe ile yedek parça sektöründe lider',
  },
  alternates: {
    canonical: 'https://yonelotoyedekparca.com/hakkimizda',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'LocalBusiness',
              '@id': 'https://yonelotoyedekparca.com',
              name: 'Yönel Oto Yedek Parça',
              description: 'İveco Daily, Fiat Ducato, Foton, Karataş Traktör ve Mutlu Akü yedek parça satışı',
              foundingDate: '1970',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Tokat',
                addressCountry: 'TR',
              },
              telephone: '+905542597273',
              email: 'tokatyonelotoyedekparca@gmail.com',
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                reviewCount: '250',
              },
            },
          }),
        }}
      />

      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-primary via-red-700 to-red-900 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Top Badge */}
            <div className="flex justify-center mb-8 animate-bounce">
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-8 py-3 rounded-full border-2 border-white/30">
                <LocationOnIcon className="w-6 h-6 text-yellow-300" />
                <span className="font-bold text-lg">TOKAT - TÜRKİYE</span>
                <AutoAwesomeIcon className="w-6 h-6 text-yellow-300" />
              </div>
            </div>

            {/* Main Title */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                <span className="block mb-2">50+ Yıllık Tecrübe ile</span>
                <span className="block text-yellow-300 drop-shadow-2xl">Güvenin Adresi</span>
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} className="w-8 h-8 text-yellow-300" />
                ))}
                <span className="ml-2 text-2xl font-bold">4.8</span>
              </div>
              <p className="text-xl md:text-2xl text-red-50 leading-relaxed max-w-4xl mx-auto">
                1970 yılından bu yana <strong className="text-white">İveco Daily</strong>, <strong className="text-white">Fiat Ducato</strong>, 
                <strong className="text-white"> Foton</strong>, <strong className="text-white">Karataş Traktör</strong> ve <strong className="text-white">Mutlu Akü</strong> yedek parça 
                sektöründe Türkiye'nin önde gelen firmalarından biriyiz.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <StorefrontIcon className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <div className="text-4xl font-bold mb-1">54</div>
                <div className="text-sm text-red-100">Yıldır Hizmetinizdeyiz</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <BuildIcon className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <div className="text-4xl font-bold mb-1">5000+</div>
                <div className="text-sm text-red-100">Farklı Ürün</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <GroupsIcon className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <div className="text-4xl font-bold mb-1">10K+</div>
                <div className="text-sm text-red-100">Mutlu Müşteri</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                <LocalShippingIcon className="w-12 h-12 mx-auto mb-3 text-yellow-300" />
                <div className="text-4xl font-bold mb-1">81</div>
                <div className="text-sm text-red-100">İle Teslimat</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-bold mb-4">
                🏆 GÜVEN VE KALİTE
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Neden Binlerce Müşteri Bizi Tercih Ediyor?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Badge 1 */}
              <div className="group relative bg-gradient-to-br from-primary/5 to-red-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary">
                <div className="absolute top-4 right-4">
                  <VerifiedUserIcon className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircleIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">%100 Orijinal Garanti</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Tüm ürünlerimiz orijinal ve garantilidir. Kaliteden asla ödün vermiyoruz.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Sertifikalı ürünler
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Üretici garantisi
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Hologram etiket
                    </li>
                  </ul>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="group relative bg-gradient-to-br from-primary/5 to-red-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary">
                <div className="absolute top-4 right-4">
                  <LocalShippingIcon className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <AccessTimeIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Hızlı Teslimat</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Türkiye'nin 81 iline aynı gün kargo ile maksimum 48 saat teslimat.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Aynı gün kargo
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Güvenli paketleme
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Kargo takip sistemi
                    </li>
                  </ul>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="group relative bg-gradient-to-br from-primary/5 to-red-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary">
                <div className="absolute top-4 right-4">
                  <AttachMoneyIcon className="w-16 h-16 text-primary/20 group-hover:text-primary/40 transition-colors" />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <AttachMoneyIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Uygun Fiyat</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Rekabetçi fiyatlar ve esnek ödeme seçenekleri ile bütçenize uygun çözümler.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Havale/EFT
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Nakit ödeme
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Toptan fiyat avantajı
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Enhanced */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-bold mb-4">
                📖 HİKAYEMİZ
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Yarım Asrı Aşkın Tecrübe
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                1970'den bugüne, üç nesil boyunca süren başarı hikayemiz
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Column - Story */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-primary">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <StorefrontIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Kuruluş</div>
                      <div className="text-xl font-bold text-primary">1970</div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-primary">Yönel Oto Yedek Parça</strong>, 1970 yılında Tokat'ta kurulmuş, 
                    otomotiv ve tarım makinaları yedek parça sektöründe <strong>54 yıllık</strong> tecrübesiyle 
                    bölgenin en köklü firmalarından biridir.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-red-600">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <BuildIcon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Uzmanlaşma</div>
                      <div className="text-xl font-bold text-red-600">5 Ana Marka</div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>İveco Daily</strong> (120-14, 85-12, 65-9, 50NC), <strong>Fiat Ducato</strong>, 
                    <strong> Foton Traktör</strong>, <strong>Karataş Traktör</strong> ve <strong>Mutlu Akü</strong> 
                    başta olmak üzere geniş ürün yelpazesiyle müşterilerimizin tüm ihtiyaçlarına cevap veriyoruz.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-green-600">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <LocationOnIcon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Hizmet Alanı</div>
                      <div className="text-xl font-bold text-green-600">81 İl</div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Tokat merkezli firmamız, <strong>Türkiye geneline</strong> hızlı kargo ile hizmet vermekte, 
                    <strong className="text-primary"> 5000+ ürün çeşidi</strong> ile sektörde fark yaratmaktadır.
                  </p>
                </div>
              </div>

              {/* Right Column - Values */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary via-red-700 to-red-900 rounded-3xl p-10 text-white shadow-2xl">
                  <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                    <AutoAwesomeIcon className="w-8 h-8 text-yellow-300" />
                    Temel Değerlerimiz
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 group">
                      <div className="bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircleIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Kalite Garantisi</h4>
                        <p className="text-red-100 text-sm">%100 orijinal ve garantili ürünler, sertifikalı kalite</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <GroupsIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Müşteri Memnuniyeti</h4>
                        <p className="text-red-100 text-sm">7/24 destek, hızlı çözüm ve sürekli iletişim</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <VerifiedUserIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Güvenilirlik</h4>
                        <p className="text-red-100 text-sm">54 yıllık sektör tecrübesi, üç nesil başarı</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <LocalShippingIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Hızlı Teslimat</h4>
                        <p className="text-red-100 text-sm">Türkiye geneline aynı gün kargo, 48 saat teslimat</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="bg-white/20 backdrop-blur-sm text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <AttachMoneyIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">Uygun Fiyatlar</h4>
                        <p className="text-red-100 text-sm">Rekabetçi fiyat, havale-nakit ödeme seçenekleri</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-gray-100 hover:border-primary transition-colors">
                    <div className="text-4xl font-bold text-primary mb-1">250+</div>
                    <div className="text-sm text-gray-600">Google Yorumu</div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {[1,2,3,4,5].map(s => <StarIcon key={s} className="w-4 h-4 text-yellow-400" />)}
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg text-center border-2 border-gray-100 hover:border-primary transition-colors">
                    <div className="text-4xl font-bold text-primary mb-1">15K+</div>
                    <div className="text-sm text-gray-600">Başarılı Teslimat</div>
                    <div className="text-xs text-gray-500 mt-2">2024 yılı</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Tarihçemiz
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-3xl font-bold text-primary">1970</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  <div className="w-0.5 h-full bg-primary/30 absolute left-1.5 top-6"></div>
                </div>
                <div className="pb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kuruluş</h3>
                  <p className="text-gray-600">Tokat'ta oto yedek parça ticaretine başladık</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-3xl font-bold text-primary">1985</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  <div className="w-0.5 h-full bg-primary/30 absolute left-1.5 top-6"></div>
                </div>
                <div className="pb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Genişleme</h3>
                  <p className="text-gray-600">İveco Daily ve traktör yedek parçalarında uzmanlaştık</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-3xl font-bold text-primary">2000</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  <div className="w-0.5 h-full bg-primary/30 absolute left-1.5 top-6"></div>
                </div>
                <div className="pb-12">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Büyüme</h3>
                  <p className="text-gray-600">Türkiye geneline hizmet vermeye başladık</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-3xl font-bold text-primary">2020</div>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dijitalleşme</h3>
                  <p className="text-gray-600">Online satış platformumuzu hayata geçirdik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
              Çalıştığımız Markalar
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg">
              Sektörün önde gelen markalarının yetkili satıcısıyız
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {[
                { name: 'İveco Daily', link: '/products?search=iveco' },
                { name: 'Fiat Ducato', link: '/products?search=ducato' },
                { name: 'Foton Traktör', link: '/products?search=foton' },
                { name: 'Karataş Traktör', link: '/products?search=karataş' },
                { name: 'Mutlu Akü', link: '/products?search=mutlu' },
              ].map((brand) => (
                <Link
                  key={brand.name}
                  href={brand.link}
                  className="group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-primary rounded-xl p-6 text-center transition-all hover:shadow-xl"
                >
                  <p className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
                    {brand.name}
                  </p>
                  <div className="mt-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Ürünleri Görüntüle →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-primary to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Neden Yönel Oto Yedek Parça?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-3">50+ Yıllık Tecrübe</h3>
                <p className="text-red-50">
                  1970'den beri sektörde, kuşaktan kuşağa aktarılan bilgi birikimi
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-3">Orijinal Ürün</h3>
                <p className="text-red-50">
                  %100 orijinal ve garantili ürünler, kaliteden ödün vermiyoruz
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="text-2xl font-bold mb-3">Hızlı Kargo</h3>
                <p className="text-red-50">
                  Türkiye geneline aynı gün kargo, maksimum 2 gün teslimat
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-bold mb-3">Uygun Fiyat</h3>
                <p className="text-red-50">
                  Rekabetçi fiyatlar, havale ve nakit ödeme seçenekleri
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-2xl font-bold mb-3">7/24 Destek</h3>
                <p className="text-red-50">
                  WhatsApp ve telefon ile sürekli ulaşılabilir uzman ekip
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">📦</div>
                <h3 className="text-2xl font-bold mb-3">Geniş Stok</h3>
                <p className="text-red-50">
                  5000+ ürün çeşidi, aradığınız her parça stoklarımızda
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Bizimle Çalışmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              50+ yıllık tecrübemizle size en iyi hizmeti sunmak için buradayız
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+905542597273"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:scale-105"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Arayın
              </a>
              <Link
                href="/urunler"
                className="inline-flex items-center justify-center bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-lg hover:scale-105"
              >
                Ürünleri İnceleyin
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}