import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giriş Yap | Yönel Oto Yedek Parça',
  description: 'Admin Panel - Giriş Yap',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {children}
    </div>
  );
}

