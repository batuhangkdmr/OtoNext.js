import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductsRepository from '@/lib/repositories/ProductsRepository';
import CategoriesRepository from '@/lib/repositories/CategoriesRepository';
import ProductCard from './ProductCard';
import ProductsFilter from './ProductsFilter';
import ProductsPagination from './ProductsPagination';
import ProductsToolbar from './ProductsToolbar';
import Breadcrumb from '@/components/Breadcrumb';
import ProductsHeader from './ProductsHeader';
import ScrollToTop from '@/components/ScrollToTop';
import { Metadata } from 'next';
import { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

// Force dynamic rendering to prevent build-time database connection
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Ürünler | Yönel Oto Yedek Parça - İveco, Ducato, Foton, Karataş',
  description: 'İveco Daily, Fiat Ducato, Foton traktör, Karataş traktör yedek parçaları ve Mutlu akü. 5000+ ürün çeşidi. Orijinal ve yan sanayi. Hızlı kargo.',
  keywords: 'yedek parça, iveco daily, fiat ducato, foton traktör, karataş traktör, mutlu akü, oto yedek parça, tokat',
  openGraph: {
    title: 'Ürünlerimiz - Yönel Oto Yedek Parça',
    description: 'İveco Daily, Ducato, Foton ve Karataş traktör yedek parçaları. 5000+ ürün çeşidi. Türkiye geneli kargo.',
    url: 'https://yonelotoyedekparca.com/urunler',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yönel Oto Yedek Parça Ürünleri',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ürünlerimiz - Yönel Oto',
    description: 'İveco, Ducato, Foton, Karataş yedek parça. 5000+ ürün.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://yonelotoyedekparca.com/urunler',
  },
};

interface PageProps {
  searchParams: {
    page?: string;
    search?: string;
    categoryId?: string;
    subCategory?: string;
    sort?: string;
    limit?: string;
  };
}

// Loading component
function ProductsLoading() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 400 }}>
      <CircularProgress size={60} sx={{ color: '#a80000' }} />
    </Box>
  );
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const page = parseInt(searchParams.page || '1');
  const search = searchParams.search || '';
  const categoryId = searchParams.categoryId ? parseInt(searchParams.categoryId) : undefined;
  const subCategory = searchParams.subCategory || undefined;
  const sort = searchParams.sort || 'newest';
  const limit = parseInt(searchParams.limit || '12');

  // Fetch data
  const { products, total } = await ProductsRepository.findAll({
    page,
    limit,
    search,
    categoryId,
    subCategory,
    sort,
  });

  const categories = await CategoriesRepository.findAll();
  const totalPages = Math.ceil(total / limit);

  // Aktif kategoriyi bul (breadcrumb için)
  let activeCategory = null;
  if (categoryId) {
    activeCategory = categories.find(c => c.Id === categoryId);
    if (!activeCategory) {
      for (const cat of categories) {
        if (cat.SubCategories) {
          activeCategory = cat.SubCategories.find(sub => sub.Id === categoryId);
          if (activeCategory) break;
        }
      }
    }
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Ürünler', href: '/products' },
          ...(activeCategory ? [{ label: activeCategory.Name }] : []),
        ]}
      />

      {/* Header with title */}
      <ProductsHeader />
      
      <Grid container spacing={3}>
        {/* Sidebar - Filters (Desktop) */}
        <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
          <ProductsFilter categories={categories} />
        </Grid>

        {/* Products Grid */}
        <Grid item xs={12} md={9}>
          {/* Results Info */}
          <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body1" color="text.secondary">
              <strong>{total}</strong> ürün bulundu
              {search && (
                <span className="ml-2">
                  - <span className="text-primary font-semibold">"{search}"</span> için sonuçlar
                </span>
              )}
            </Typography>
          </Box>

          {/* Toolbar (Filtrele + Sıralama + Sayfa Başına Ürün) */}
          <ProductsToolbar categories={categories} />

          {/* Products with Suspense */}
          <Suspense fallback={<ProductsLoading />}>
            {products.length === 0 ? (
              <Box sx={{ textAlign: 'center', py: 8, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                  😕 Ürün Bulunamadı
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Arama kriterlerinizi değiştirerek tekrar deneyin
                </Typography>
              </Box>
            ) : (
              <>
                <Grid container spacing={3}>
                  {products.map((product) => (
                    <Grid item key={product.Id} xs={12} sm={6} md={4}>
                      <ProductCard product={product} />
                    </Grid>
                  ))}
                </Grid>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                    <ProductsPagination currentPage={page} totalPages={totalPages} />
                  </Box>
                )}
              </>
            )}
          </Suspense>
        </Grid>
      </Grid>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </Container>
  );
}

