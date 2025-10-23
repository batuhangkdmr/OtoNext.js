import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Yönel Oto Yedek Parça',
  description: 'Yönel Oto Yedek Parça - 50+ yıllık tecrübe ile Türkiye\'nin güvenilir yedek parça tedarikçisi.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">Hakkımızda</h1>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4">Yönel Oto Yedek Parça</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              50 yılı aşkın süredir otomotiv sektöründe faaliyet gösteren Yönel Oto Yedek Parça, 
              Foton traktör yedek parçaları, Iveco Daily, Karataş traktör, Ducato yedek parça ve 
              Mutlu akü satışında Türkiye'nin güvenilir adreslerinden biridir.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Vizyonumuz</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Müşteri memnuniyetini ön planda tutarak, kaliteli ve orijinal ürünlerle 
              sektördeki lider konumumuzu sürdürmek ve güçlendirmektir.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Misyonumuz</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Müşterilerimize en kaliteli ürünleri en uygun fiyatlarla sunmak, 
              hızlı ve güvenilir teslimat ile sektörde fark yaratmaktır.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Markalarımız</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Foton', 'Iveco', 'Karataş', 'Mutlu Akü'].map((brand) => (
                <div key={brand} className="bg-gray-100 rounded-lg p-6 text-center">
                  <p className="font-bold text-lg">{brand}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <ul className="space-y-4 text-lg">
              <li>✅ 50+ yıllık sektör tecrübesi</li>
              <li>✅ %100 orijinal ve garantili ürünler</li>
              <li>✅ Türkiye geneline hızlı teslimat</li>
              <li>✅ Rekabetçi fiyatlar</li>
              <li>✅ Profesyonel müşteri hizmetleri</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

