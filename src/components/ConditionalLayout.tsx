'use client';

import { usePathname } from 'next/navigation';
import CenterLogoNavbar from './CenterLogoNavbar';
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
    return <div suppressHydrationWarning>{children}</div>;
  }

  return (
    <div className="pt-[30px] lg:pt-0" suppressHydrationWarning>
      <CenterLogoNavbar />
      {children}
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}

