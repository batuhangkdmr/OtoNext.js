import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { notFound } from 'next/navigation';
import ProductsRepository from '@/lib/repositories/ProductsRepository';
import CategoriesRepository from '@/lib/repositories/CategoriesRepository';
import ProductForm from '../../ProductForm';

// Force dynamic rendering to avoid build-time database connection
export const dynamic = 'force-dynamic';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function EditProductPage({ params }: PageProps) {
  const product = await ProductsRepository.findById(parseInt(params.id));
  
  if (!product) {
    notFound();
  }

  const categories = await CategoriesRepository.findAll();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Ürün Düzenle
      </Typography>

      <Paper sx={{ p: 4, mt: 3 }}>
        <ProductForm categories={categories} product={product} />
      </Paper>
    </Container>
  );
}

