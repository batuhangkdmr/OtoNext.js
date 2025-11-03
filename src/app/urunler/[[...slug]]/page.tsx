import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductsRepository from '@/lib/repositories/ProductsRepository';
import CategoriesRepository from '@/lib/repositories/CategoriesRepository';
import SliderImagesRepository from '@/lib/repositories/SliderImagesRepository';
import ProductCard from '@/app/products/ProductCard';
import ProductsFilter from '@/app/products/ProductsFilter';
import ProductsPagination from '@/app/products/ProductsPagination';
import ProductsToolbar from '@/app/products/ProductsToolbar';
import Breadcrumb from '@/components/Breadcrumb';
import ProductsHeader from '@/app/products/ProductsHeader';
import ScrollToTop from '@/components/ScrollToTop';
import ProductsCarousel from '@/components/ProductsCarousel';
import ProductsInfoCards from '@/components/ProductsInfoCards';
import { Metadata } from 'next';
import CircularProgress from '@mui/material/CircularProgress';
import { slugify } from '@/lib/utils/slugify';
import { notFound } from 'next/navigation';

// Force dynamic rendering to prevent build-time database connection
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: { slug?: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
}

// Metadata for SEO
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  let title = 'Ürünler - Yonel Otomotiv';
  let description = 'Yonel Otomotiv yedek parça ürünleri. İveco, Fiat, Karataş ve Foton markaları için geniş ürün yelpazesi.';
  let canonicalUrl = 'https://yonelotoyedekparca.com/urunler';

  if (params.slug && params.slug.length > 0) {
    const parentSlug = params.slug[0];
    const subSlug = params.slug[1];
    const categories = await CategoriesRepository.findAll();
    
    for (const cat of categories) {
      if (slugify(cat.Name) === parentSlug) {
        if (subSlug && cat.SubCategories) {
          // Alt kategori varsa
          for (const sub of cat.SubCategories) {
            if (slugify(sub.Name) === subSlug) {
              title = `${cat.Name} ${sub.Name} - Yonel Otomotiv`;
              description = `${cat.Name} ${sub.Name} yedek parça ürünleri. Orijinal ve kaliteli yedek parçalar.`;
              canonicalUrl = `https://yonelotoyedekparca.com/urunler/${parentSlug}/${subSlug}`;
              break;
            }
          }
        } else {
          // Sadece ana kategori
          title = `${cat.Name} - Yonel Otomotiv`;
          description = `${cat.Name} kategorisindeki tüm ürünler. Kaliteli yedek parça çözümleri.`;
          canonicalUrl = `https://yonelotoyedekparca.com/urunler/${parentSlug}`;
        }
        break;
      }
    }
  }

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonicalUrl,
    },
  };
}

// Loading component
function ProductsLoading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
      }}
    >
      <CircularProgress size={60} sx={{ color: '#a80000' }} />
    </Box>
  );
}

export default async function UrunlerPage({ params, searchParams }: PageProps) {
  const page = parseInt(searchParams.page as string || '1');
  const search = searchParams.search as string || '';
  const sort = searchParams.sort as string || 'newest';
  const limit = parseInt(searchParams.limit as string || '12');

  // Fetch categories with error handling (hydration fix)
  let categories: any[] = [];
  try {
    categories = await CategoriesRepository.findAll();
  } catch (error) {
    console.error('Categories fetch error:', error);
    categories = [];
  }
  
  // Slug'dan kategori bul
  let categoryId: number | undefined = undefined;
  let activeCategory = null;
  let parentCategory = null; // Ana kategoriyi takip etmek için
  
  if (params.slug && params.slug.length > 0 && categories.length > 0) {
    // URL yapısı: /urunler/parent-slug veya /urunler/parent-slug/sub-slug
    const parentSlug = params.slug[0]; // İlk segment ana kategori slug'ı
    const subSlug = params.slug[1]; // İkinci segment alt kategori slug'ı (varsa)
    
    // Önce ana kategoriyi bul
    for (const cat of categories) {
      const catSlug = slugify(cat.Name);
      
      if (catSlug === parentSlug) {
        parentCategory = cat;
        
        // Eğer alt kategori slug'ı varsa onu ara
        if (subSlug && cat.SubCategories) {
          for (const sub of cat.SubCategories) {
            const subCatSlug = slugify(sub.Name);
            
            if (subCatSlug === subSlug) {
              categoryId = sub.Id;
              activeCategory = sub;
              break;
            }
          }
          
          // Alt kategori bulunamadıysa 404
          if (!activeCategory) {
            notFound();
          }
        } else {
          // Alt kategori slug'ı yoksa, ana kategori aktif
          categoryId = cat.Id;
          activeCategory = cat;
        }
        break;
      }
    }
    
    // Ana kategori bulunamadıysa 404
    if (!parentCategory) {
      notFound();
    }
  }

  // Fetch data with error handling
  let products: any[] = [];
  let total = 0;
  try {
    const result = await ProductsRepository.findAll({
      page,
      limit,
      search,
      categoryId,
      sort,
    });
    products = result.products;
    total = result.total;
  } catch (error) {
    console.error('Products fetch error:', error);
    products = [];
    total = 0;
  }

  // Fetch sliders with error handling
  let sliders: any[] = [];
  try {
    sliders = await SliderImagesRepository.findAll();
  } catch (error) {
    console.error('Sliders fetch error:', error);
    sliders = [];
  }
  
  const totalPages = Math.ceil(total / limit);

  // Breadcrumb Schema for Google
  const breadcrumbItems = [
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
      item: 'https://yonelotoyedekparca.com/urunler',
    },
  ];

  if (parentCategory) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: parentCategory.Name,
      item: `https://yonelotoyedekparca.com/urunler/${slugify(parentCategory.Name)}`,
    });
  }

  if (activeCategory) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: parentCategory ? 4 : 3,
      name: activeCategory.Name,
      item: parentCategory 
        ? `https://yonelotoyedekparca.com/urunler/${slugify(parentCategory.Name)}/${slugify(activeCategory.Name)}`
        : `https://yonelotoyedekparca.com/urunler/${slugify(activeCategory.Name)}`,
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: activeCategory ? activeCategory.Name : 'Ürünler',
    description: 'Yonel Otomotiv yedek parça ürünleri',
    url: `https://yonelotoyedekparca.com/urunler${activeCategory ? `/${slugify(activeCategory.Name)}` : ''}`,
    numberOfItems: total,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.Name,
        description: product.Description || product.Name,
        url: `https://yonelotoyedekparca.com/products/${product.Id}`,
      },
    })),
  };

  return (
    <div suppressHydrationWarning>
      {/* Breadcrumb Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Collection Page Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Container maxWidth="lg" sx={{ py: 4 }} suppressHydrationWarning>
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: 'Ürünler', href: '/urunler' },
              ...(parentCategory ? [{ label: parentCategory.Name, href: `/urunler/${slugify(parentCategory.Name)}` }] : []),
              ...(activeCategory ? [{ label: activeCategory.Name }] : []),
            ]}
          />

          {/* Header with title */}
          <ProductsHeader />

          {/* Products Carousel - Admin tarafından eklenen slider görselleri */}
          <ProductsCarousel sliders={sliders} />
          
          <Grid container spacing={3} suppressHydrationWarning>
            {/* Sidebar - Filters (Desktop) */}
            <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }} suppressHydrationWarning>
              <ProductsFilter categories={categories} activeCategory={activeCategory} />
            </Grid>

            {/* Main Content */}
            <Grid item xs={12} md={9} suppressHydrationWarning>
              {/* Toolbar - Sort & Limit Controls + Mobile Filter Button */}
              <ProductsToolbar categories={categories} activeCategory={activeCategory} />

              {/* Product Grid */}
              {products.length === 0 ? (
                <Box
                  sx={{
                    textAlign: 'center',
                    py: 8,
                    bgcolor: '#f9f9f9',
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ color: '#666', mb: 1 }}>
                    Ürün bulunamadı
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#999' }}>
                    {search
                      ? 'Arama kriterlerinize uygun ürün bulunmamaktadır.'
                      : 'Bu kategoride henüz ürün bulunmamaktadır.'}
                  </Typography>
                </Box>
              ) : (
                <>
                  <Grid container spacing={3} suppressHydrationWarning>
                    {products.map((product) => (
                      <Grid item xs={12} sm={6} md={4} key={product.Id} suppressHydrationWarning>
                        <ProductCard product={product} />
                      </Grid>
                    ))}
                  </Grid>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                      <ProductsPagination 
                        currentPage={page} 
                        totalPages={totalPages}
                        categorySlug={
                          activeCategory && parentCategory
                            ? `${slugify(parentCategory.Name)}/${slugify(activeCategory.Name)}`
                            : activeCategory
                            ? slugify(activeCategory.Name)
                            : undefined
                        }
                      />
                    </Box>
                  )}
                </>
              )}
            </Grid>
          </Grid>

          {/* Info Cards - Alt bilgi kartları */}
          <ProductsInfoCards />

          {/* Scroll to Top Button */}
          <ScrollToTop />
      </Container>
    </div>
  );
}
