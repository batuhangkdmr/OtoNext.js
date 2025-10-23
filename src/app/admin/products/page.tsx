import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from 'next/link';
import AddIcon from '@mui/icons-material/Add';
import ProductsRepository from '@/lib/repositories/ProductsRepository';
import ProductsTable from './ProductsTable';

export default async function AdminProductsPage() {
  const { products } = await ProductsRepository.findAll({ limit: 100 });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
          Ürün Yönetimi
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          component={Link}
          href="/admin/products/create"
        >
          Yeni Ürün
        </Button>
      </Box>

      <ProductsTable products={products} />

      <Box sx={{ mt: 4 }}>
        <Button component={Link} href="/admin" variant="outlined">
          ← Panele Dön
        </Button>
      </Box>
    </Container>
  );
}

