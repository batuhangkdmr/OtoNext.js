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
import { extractIdFromSlug } from '@/lib/utils/slugify';
import { Metadata } from 'next';

// Force dynamic rendering to prevent build-time database connection
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const productId = extractIdFromSlug(params.slug);
  
  if (!productId) {
    return {
      title: 'Ürün Bulunamadı',
    };
  }

  const product = await ProductsRepository.findById(productId);

  if (!product) {
    return {
      title: 'Ürün Bulunamadı',
    };
  }

  const canonicalUrl = `https://yonelotoyedekparca.com/products/${params.slug}`;

  return {
    title: `${product.Name} | Yönel Oto Yedek Parça`,
    description: product.Description || product.Name,
    keywords: `${product.Name}, ${product.CategoryName || ''}, yedek parça, iveco, ducato, foton, karataş, mutlu akü`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${product.Name} | Yönel Oto Yedek Parça`,
      description: product.Description || product.Name,
      images: product.ImageUrl ? [{ url: product.ImageUrl }] : [],
      type: 'website',
      url: canonicalUrl,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  // URL slug'ından ID'yi çıkar
  const productId = extractIdFromSlug(params.slug);

  if (!productId) {
    notFound();
  }

  const product = await ProductsRepository.findById(productId);

  if (!product) {
    notFound();
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905542597273';
  const whatsappMessage = `Merhaba, "${product.Name}" ürünü hakkında bilgi almak istiyorum.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Breadcrumb Schema for Google
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
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
        item: 'https://yonelotoyedekparca.com/urunler',
      },
      ...(product.CategoryName ? [{
        '@type': 'ListItem',
        position: 3,
        name: product.CategoryName,
        item: `https://yonelotoyedekparca.com/urunler`,
      }] : []),
      {
        '@type': 'ListItem',
        position: product.CategoryName ? 4 : 3,
        name: product.Name,
        item: `https://yonelotoyedekparca.com/products/${params.slug}`,
      },
    ],
  };

  // Product Schema for SEO
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.Name,
    image: product.ImageUrl || 'https://yonelotoyedekparca.com/og-image.jpg',
    description: product.Description || `${product.Name} - Yönel Oto Yedek Parça`,
    brand: {
      '@type': 'Brand',
      name: 'Yönel Oto Yedek Parça',
    },
    category: product.CategoryName || 'Yedek Parça',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'TRY',
      seller: {
        '@type': 'Organization',
        name: 'Yönel Oto Yedek Parça',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
    },
  };

  return (
    <>
      {/* Breadcrumb Schema for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
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
                  priority
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

            {/* Kategoriler */}
            {(product.CategoryName || product.SubCategoryName) && (
              <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                {product.CategoryName && (
                  <Chip 
                    label={product.CategoryName} 
                    color="primary" 
                    size="medium"
                    sx={{ fontWeight: 600 }}
                  />
                )}
                {product.SubCategoryName && (
                  <Chip 
                    label={product.SubCategoryName} 
                    variant="outlined"
                    color="primary"
                    size="medium"
                    sx={{ fontWeight: 600, borderWidth: 2 }}
                  />
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
                fullWidth
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
    </>
  );
}
