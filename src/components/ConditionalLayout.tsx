'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloatButton from './WhatsAppFloatButton';

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Admin ve auth sayfalarında Navbar, Footer ve WhatsApp gösterme
  const isAdminOrAuth = pathname.startsWith('/admin') || pathname.startsWith('/auth');

  if (isAdminOrAuth) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}

