import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ProductsRepository from '@/lib/repositories/ProductsRepository';
import { Metadata } from 'next';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await ProductsRepository.findById(parseInt(params.id));

  if (!product) {
    return {
      title: 'Ürün Bulunamadı',
    };
  }

  return {
    title: `${product.Name} | Yönel Oto Yedek Parça`,
    description: product.Description || product.Name,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const product = await ProductsRepository.findById(parseInt(params.id));

  if (!product) {
    notFound();
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905542597273';
  const whatsappMessage = `Merhaba, ${product.Name} hakkında bilgi almak istiyorum.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={4}>
          {/* Product Image */}
          <Grid item xs={12} md={6}>
            {product.ImageUrl ? (
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: 400,
                  bgcolor: '#f5f5f5',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={product.ImageUrl}
                  alt={product.Name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  height: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: '#f5f5f5',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  Görsel Yok
                </Typography>
              </Box>
            )}
          </Grid>

          {/* Product Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              {product.Name}
            </Typography>

            {product.CategoryName && (
              <Box sx={{ mb: 2 }}>
                <Chip label={product.CategoryName} color="primary" />
                {product.SubCategoryName && (
                  <Chip label={product.SubCategoryName} sx={{ ml: 1 }} />
                )}
              </Box>
            )}

            {product.Description && (
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, lineHeight: 1.8 }}
              >
                {product.Description}
              </Typography>
            )}

            {/* CTA */}
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                color="success"
                startIcon={<WhatsAppIcon />}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: '#25D366',
                  '&:hover': { bgcolor: '#128C7E' },
                  fontWeight: 600,
                  py: 2,
                  px: 4,
                }}
              >
                WhatsApp ile Bilgi Al
              </Button>
            </Box>

            {/* Product Features */}
            <Box sx={{ mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                Ürün Özellikleri
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                ✓ Orijinal ve garantili ürün
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                ✓ Hızlı teslimat
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ✓ Uzman destek
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

