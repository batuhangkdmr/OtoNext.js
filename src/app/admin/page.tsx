import Link from 'next/link';
import ProductsRepository from '@/lib/repositories/ProductsRepository';
import CategoriesRepository from '@/lib/repositories/CategoriesRepository';
import SliderImagesRepository from '@/lib/repositories/SliderImagesRepository';
import { logout } from '../auth/actions';

// Force dynamic rendering to avoid build-time database connection
export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  // Get counts
  const { total: productsCount } = await ProductsRepository.findAll({ limit: 1 });
  const categories = await CategoriesRepository.findAll();
  const sliders = await SliderImagesRepository.findAll();

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Paneli</h1>
          <form action={logout}>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Çıkış Yap
            </button>
          </form>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-gray-600 text-sm font-medium mb-2">Toplam Ürün</h2>
            <p className="text-4xl font-bold text-primary">{productsCount}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-gray-600 text-sm font-medium mb-2">Toplam Kategori</h2>
            <p className="text-4xl font-bold text-primary">{categories.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-gray-600 text-sm font-medium mb-2">Slider Görselleri</h2>
            <p className="text-4xl font-bold text-primary">{sliders.length}</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/admin/products"
            className="bg-white rounded-lg shadow p-8 hover:shadow-lg transition text-center"
          >
            <div className="text-5xl mb-4">📦</div>
            <h2 className="text-2xl font-bold mb-2">Ürünler</h2>
            <p className="text-gray-600">Ürün ekle, düzenle, sil</p>
          </Link>

          <Link
            href="/admin/categories"
            className="bg-white rounded-lg shadow p-8 hover:shadow-lg transition text-center"
          >
            <div className="text-5xl mb-4">📁</div>
            <h2 className="text-2xl font-bold mb-2">Kategoriler</h2>
            <p className="text-gray-600">Kategori yönetimi</p>
          </Link>

          <Link
            href="/admin/sliders"
            className="bg-white rounded-lg shadow p-8 hover:shadow-lg transition text-center"
          >
            <div className="text-5xl mb-4">🖼️</div>
            <h2 className="text-2xl font-bold mb-2">Slider Görselleri</h2>
            <p className="text-gray-600">Ana sayfa slider yönetimi</p>
          </Link>
        </div>

        {/* Back to Site */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            ← Siteye Dön
          </Link>
        </div>
      </div>
    </main>
  );
}

