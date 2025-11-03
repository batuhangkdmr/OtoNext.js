'use client';

// ⭐ GERÇEK GOOGLE YORUMLARI - Google My Business'tan alınmıştır
const testimonials = [
  {
    id: 1,
    name: 'Murat Can Çörekçi',
    company: 'Google Yorumu',
    role: 'Doğrulanmış Müşteri',
    comment: 'İveco ve fiat grubu hafif ticari araç grubu orijinal ve yan sanayi bilimum yedek parçalarını satan başarılı düzgün bir işletme herkeze tavsiye ederim rahatlıkla ve güvenle alış veriş yapabilirsiniz.',
    rating: 5,
    avatar: 'M',
    date: '3 ay önce',
  },
  {
    id: 2,
    name: 'Srkn srkn',
    company: 'Google Yorumu',
    role: 'Doğrulanmış Müşteri',
    comment: 'Yönel oto yedek parça ile tanışmam acil akü değişimim sayesinde arkadaş tavsiyesi ile oldu. İyikide yollarımız kesişmiş. Fatihi bey çok ilgili ve deneyimli birisi en ufak ekstra ücret almadan hem bulunduğum konuma geldi hem akümü değiştirdi.',
    rating: 5,
    avatar: 'S',
    date: '4 ay önce',
  },
  {
    id: 3,
    name: 'Devrim Gül',
    company: 'Google Yorumu',
    role: 'Doğrulanmış Müşteri',
    comment: 'İveco aracım için istediğim zaman rahatlıkla ulaşabileceğimiz bir işletme güler yüzlü ve ilgililer aynı zamanda işinin ehliiler herkese tavsiye eder rahatlıkla alış veriş yapabilirsiniz.',
    rating: 5,
    avatar: 'D',
    date: '2 ay önce',
  },
  {
    id: 4,
    name: 'Eren Şen',
    company: 'Google Yorumu',
    role: 'Doğrulanmış Müşteri',
    comment: 'Karataş marka traktör parçası için yollarımız kesişti. Fiyat performans açından gördüklerim en iyisi oldular. Şehir dışından geldiğim için tesadüfen ticaretiimiz oldu. Esnaflikları ve ilgileri için teşekkür ederim. Fatihi beye selamlar.',
    rating: 5,
    avatar: 'E',
    date: '4 ay önce',
  },
  {
    id: 5,
    name: 'Murat Afacan',
    company: 'Google Yorumu',
    role: 'Doğrulanmış Müşteri',
    comment: 'Foton 604 Traktorume Silindir Kapak Contası aldım. Whatsapp iletişim hattından görüşme sağladığım Fathi Bey sorunumla ilgilendi. Profesyonel hizmet için teşekkürler.',
    rating: 5,
    avatar: 'M',
    date: '3 ay önce',
  },
  {
    id: 6,
    name: 'Berkay Çiftlik',
    company: 'Google Yorumu',
    role: 'Doğrulanmış Müşteri',
    comment: 'Yolda kaldıramama rağmen acilen akü için yardım eden yonel oto yedek parcaya teşekkür ederim işlerini iyi yapıyorlar.',
    rating: 5,
    avatar: 'B',
    date: '4 ay önce',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ⭐ MÜŞTERİ YORUMLARI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            50 yıllık tecrübemiz ve binlerce mutlu müşterimizle sektörün güvenilir ismi
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.comment}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-red-700 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-md">
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1 bg-white border border-gray-200 px-2 py-0.5 rounded-md shadow-sm">
                      <svg className="w-3 h-3 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="text-xs font-semibold text-gray-700">Google</span>
                    </div>
                    <span className="text-xs text-gray-500">• {testimonial.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge - Google Verified Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-8 bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100">
            {/* Google Badge */}
            <div className="flex items-center gap-3">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">5.0 ⭐</div>
                <div className="text-sm text-gray-600">11 Google Yorumu</div>
              </div>
            </div>

            <div className="h-12 w-px bg-gray-200"></div>

            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-gray-900">10.000+ Mutlu Müşteri</span>
            </div>

            <div className="h-12 w-px bg-gray-200"></div>

            <div className="flex items-center gap-2">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="font-bold text-gray-900">50+ Yıllık Tecrübe</span>
            </div>
          </div>

          {/* Google Reviews Link */}
          <div className="mt-6">
            <a
              href="https://www.google.com/search?rlz=1C1FKPE_trTR1061TR1061&q=YÖNEL%20OTO%20YEDEK%20PARÇA%20Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2NDU3Nbc0MjQwMzI2NAUSxhYbGBlfMcpHHp7m5-qj4B_irxDp6uLqrRDgGHS43VEhKLUsM7W8eBErIRUAudm2614AAAA&rldimm=9575792106231562338&tbm=lcl&cs=1&hl=en&sa=X&ved=0CCIQ9fQKKABqFwoTCJi2iOeiypADFQAAAAAdAAAAABAG&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-red-700 font-semibold transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Tüm Google Yorumlarını Görüntüle</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

