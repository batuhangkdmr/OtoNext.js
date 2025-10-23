import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim | Yönel Oto Yedek Parça',
  description: 'Yönel Oto Yedek Parça ile iletişime geçin. Adres, telefon ve email bilgilerimiz.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">İletişim</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">İletişim Bilgileri</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">📍 Adres</h3>
                <p className="text-gray-600">
                  Yönel Oto Yedek Parça<br />
                  Türkiye
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">📞 Telefon</h3>
                <p className="text-gray-600">
                  <a href="tel:+905542597273" className="hover:text-primary">
                    0 (554) 259 72 73
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">📧 Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:tokatyonelotoyedekparca@gmail.com" className="hover:text-primary">
                    tokatyonelotoyedekparca@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">⏰ Çalışma Saatleri</h3>
                <p className="text-gray-600">
                  Pazartesi - Cumartesi: 08:00 - 18:00<br />
                  Pazar: Kapalı
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp ile İletişim
              </a>
            </div>
          </div>

          {/* Map or Image */}
          <div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Harita buraya gelecek</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

