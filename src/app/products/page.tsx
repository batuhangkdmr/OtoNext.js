import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductsRepository from '@/lib/repositories/ProductsRepository';
import CategoriesRepository from '@/lib/repositories/CategoriesRepository';
import SliderImagesRepository from '@/lib/repositories/SliderImagesRepository';
import ProductCard from './ProductCard';
import ProductsFilter from './ProductsFilter';
import ProductsPagination from './ProductsPagination';
import ProductsToolbar from './ProductsToolbar';
import Breadcrumb from '@/components/Breadcrumb';
import ProductsHeader from './ProductsHeader';
import ScrollToTop from '@/components/ScrollToTop';
import ProductsCarousel from '@/components/ProductsCarousel';
import ProductsInfoCards from '@/components/ProductsInfoCards';
import { Metadata } from 'next';
import { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

// Force dynamic rendering to prevent build-time database connection
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Ürünler | Yönel Oto Yedek Parça - İveco, Ducato, Foton, Karataş Traktör Yedek Parçaları',
  description: 'İveco Daily, Fiat Ducato, Foton traktör, Karataş traktör yedek parçaları ve Mutlu akü. 5000+ ürün çeşidi. Orijinal ve yan sanayi parçalar. Motor yağı, fren balatası, filtre, yağ, akü ve daha fazlası. Hızlı kargo ile Türkiye geneline teslimat.',
  keywords: 'yedek parça, iveco daily yedek parça, fiat ducato yedek parça, foton traktör yedek parça, karataş traktör yedek parça, mutlu akü, oto yedek parça, motor yağı, fren balatası, yağ filtresi, hava filtresi, tokat yedek parça, iveco 65-9, iveco 85-12, iveco 120-14, ducato 2.3, foton 504',
  openGraph: {
    title: 'Ürünlerimiz - Yönel Oto Yedek Parça | İveco, Ducato, Foton, Karataş',
    description: 'İveco Daily, Fiat Ducato, Foton ve Karataş traktör yedek parçaları. 5000+ ürün çeşidi. Orijinal ve yan sanayi. Motor yağı, filtre, fren sistemi, akü. Türkiye geneli hızlı kargo.',
    url: 'https://yonelotoyedekparca.com/products',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Yönel Oto Yedek Parça',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yönel Oto Yedek Parça - İveco, Ducato, Foton, Karataş Traktör Yedek Parçaları',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ürünlerimiz - Yönel Oto Yedek Parça',
    description: 'İveco, Ducato, Foton, Karataş yedek parça. 5000+ ürün. Orijinal ve yan sanayi.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://yonelotoyedekparca.com/products',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  const sliders = await SliderImagesRepository.findAll();
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

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Oto Yedek Parça Ürünleri',
    description: 'İveco Daily, Fiat Ducato, Foton ve Karataş traktör yedek parçaları',
    url: 'https://yonelotoyedekparca.com/products',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Ana Sayfa',
          item: 'https://yonelotoyedekparca.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Ürünler',
          item: 'https://yonelotoyedekparca.com/products',
        },
      ],
    },
    provider: {
      '@type': 'AutoPartsStore',
      name: 'Yönel Oto Yedek Parça',
      image: 'https://yonelotoyedekparca.com/og-image.jpg',
      '@id': 'https://yonelotoyedekparca.com',
      url: 'https://yonelotoyedekparca.com',
      telephone: '+90-356-214-6060',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Tokat',
        addressCountry: 'TR',
      },
    },
  };

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
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

      {/* Products Carousel - Admin tarafından eklenen slider görselleri */}
      <ProductsCarousel sliders={sliders} />
      
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

      {/* SEO Info Cards - Özellikler ve Marka Bilgileri (En Alt) */}
      <ProductsInfoCards />

      {/* Scroll to Top Button */}
      <ScrollToTop />
      </Container>
    </>
  );
}

