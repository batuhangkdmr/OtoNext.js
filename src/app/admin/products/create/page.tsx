import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CategoriesRepository from '@/lib/repositories/CategoriesRepository';
import ProductForm from '../ProductForm';

export default async function CreateProductPage() {
  const categories = await CategoriesRepository.findAll();

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Yeni Ürün Ekle
      </Typography>

      <Paper sx={{ p: 4, mt: 3 }}>
        <ProductForm categories={categories} />
      </Paper>
    </Container>
  );
}

