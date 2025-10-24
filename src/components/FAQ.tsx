'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'İveco Daily yedek parçalarınız orijinal mi?',
    answer: 'Evet, hem orijinal hem de kaliteli yan sanayi (muadil) yedek parçalar sunuyoruz. Müşterilerimizin tercihine göre her iki seçeneği de stoklarımızda bulunduruyoruz. Orijinal parçalarda 2 yıl, yan sanayi parçalarda 1 yıl garanti veriyoruz.',
  },
  {
    question: 'Kargolu satış yapıyor musunuz?',
    answer: 'Evet, Türkiye geneline kargo ile satış yapıyoruz. Aynı gün kargo özelliği ile siparişiniz aynı gün kargoya verilir. Kargo ücreti alıcıya aittir. Büyük siparişlerde kargo ücreti tarafımızdan karşılanabilir.',
  },
  {
    question: 'Fiat Ducato 2.3 motor yedek parçaları var mı?',
    answer: 'Evet, Fiat Ducato 2.3 ve 3.0 motor serisi için kapsamlı yedek parça stoğumuz mevcuttur. Fren balata, filtre, debriyaj, su pompası, alternatör gibi tüm kritik parçalarda hizmet veriyoruz.',
  },
  {
    question: 'Foton traktör yedek parçası temin süresi ne kadar?',
    answer: 'Stoktaki parçalar aynı gün kargoya verilir. Stokta olmayan parçalar için tedarik süresi 2-5 iş günüdür. Acil durumlar için ekspres temin hizmeti sunuyoruz.',
  },
  {
    question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
    answer: 'Havale/EFT, kapıda nakit ödeme ve Papara ödemelerini kabul ediyoruz. Kurumsal müşterilerimize çek/senet ödeme seçeneği de sunuyoruz.',
  },
  {
    question: 'Montaj hizmeti veriyor musunuz?',
    answer: 'Sadece yedek parça satışı yapmaktayız. Ancak, anlaşmalı servislerimizi tavsiye edebiliriz. Montaj için teknik destek ve danışmanlık hizmeti ücretsizdir.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              ❓ SIK SORULAN SORULAR
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Merak Edilenler
            </h2>
            <p className="text-xl text-gray-600">
              Yedek parça alımı hakkında sık sorulan sorular
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-primary transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl">
            <p className="text-gray-700 text-lg mb-4">
              Sorunuzun cevabını bulamadınız mı?
            </p>
            <a
              href="tel:+905542597273"
              className="inline-block bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
            >
              Bizi Arayın: 0554 259 72 73
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

