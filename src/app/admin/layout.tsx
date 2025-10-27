import type { Metadata } from 'next';
import Link from 'next/link';
import { logout } from '../auth/actions';

export const metadata: Metadata = {
  title: 'Admin Panel | Yönel Oto Yedek Parça',
  description: 'Yönel Oto Yedek Parça - Admin Yönetim Paneli',
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo / Title */}
            <div className="flex items-center">
              <Link href="/admin" className="text-2xl font-bold text-primary">
                Admin Panel
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/admin"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/products"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Ürünler
              </Link>
              <Link
                href="/admin/categories"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Kategoriler
              </Link>
              <Link
                href="/admin/sliders"
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                Slider
              </Link>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                target="_blank"
                className="text-gray-600 hover:text-primary transition-colors text-sm"
              >
                Siteyi Görüntüle →
              </Link>
              <form action={logout}>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Çıkış Yap
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Admin Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Yönel Oto Yedek Parça - Admin Panel
          </p>
        </div>
      </footer>
    </div>
  );
}

