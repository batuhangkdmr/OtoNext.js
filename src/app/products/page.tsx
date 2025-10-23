import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ProductsRepository from '@/lib/repositories/ProductsRepository';
import CategoriesRepository from '@/lib/repositories/CategoriesRepository';
import ProductCard from './ProductCard';
import ProductsFilter from './ProductsFilter';
import ProductsPagination from './ProductsPagination';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ürünler | Yönel Oto Yedek Parça',
  description: 'Foton, Iveco, Karataş traktör yedek parçaları ve Mutlu akü ürünlerimizi inceleyin.',
};

interface PageProps {
  searchParams: {
    page?: string;
    search?: string;
    categoryId?: string;
    subCategory?: string;
  };
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const page = parseInt(searchParams.page || '1');
  const search = searchParams.search || '';
  const categoryId = searchParams.categoryId ? parseInt(searchParams.categoryId) : undefined;
  const subCategory = searchParams.subCategory || undefined;

  // Fetch data
  const { products, total } = await ProductsRepository.findAll({
    page,
    limit: 12,
    search,
    categoryId,
    subCategory,
  });

  const categories = await CategoriesRepository.findAll();
  const totalPages = Math.ceil(total / 12);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Ürünlerimiz
      </Typography>
      
      <Grid container spacing={3}>
        {/* Sidebar - Filters */}
        <Grid item xs={12} md={3}>
          <ProductsFilter categories={categories} />
        </Grid>

        {/* Products Grid */}
        <Grid item xs={12} md={9}>
          {/* Results Info */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" color="text.secondary">
              {total} ürün bulundu
              {search && ` - "${search}" için sonuçlar`}
            </Typography>
          </Box>

          {/* Products */}
          {products.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Typography variant="h6" color="text.secondary">
                Ürün bulunamadı
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
        </Grid>
      </Grid>
    </Container>
  );
}

