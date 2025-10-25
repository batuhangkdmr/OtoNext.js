import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatButton from '@/components/WhatsAppFloatButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://yonelotoyedekparca.com'),
  title: 'Yönel Oto Yedek Parça | Foton, Karataş, Iveco, Mutlu Akü',
  description: 'Foton traktör yedek parçaları, Iveco Daily, Karataş traktör, Ducato yedek parça ve Mutlu akü satışında Türkiye\'nin güvenilir adresi.',
  keywords: 'foton yedek parça, iveco daily yedek parça, karataş traktör, mutlu akü, ducato yedek parça',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://yonelotoyedekparca.com',
    title: 'Yönel Oto Yedek Parça',
    description: 'Foton, Iveco, Karataş Traktör ve Mutlu Akü - 50+ yıllık tecrübe',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yönel Oto Yedek Parça',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yönel Oto Yedek Parça',
    description: 'Foton, Iveco, Karataş Traktör ve Mutlu Akü - 50+ yıllık tecrübe',
    images: ['/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloatButton />
        </ThemeRegistry>
      </body>
    </html>
  );
}

