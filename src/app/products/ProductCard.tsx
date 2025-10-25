'use client';

import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link';
import { Product } from '@/lib/models/Product';
import { generateProductUrl } from '@/lib/utils/slugify';
import QuickViewModal from '@/components/QuickViewModal';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905542597273';
  const whatsappMessage = `Merhaba, "${product.Name}" ürünü hakkında bilgi almak istiyorum.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const productUrl = `/products/${generateProductUrl(product)}`;

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
          transform: 'translateY(-4px)',
        }
      }}
    >
      {/* Ürün Görseli - Sabit Yükseklik */}
      <CardActionArea component={Link} href={productUrl}>
        {product.ImageUrl ? (
          <CardMedia
            component="img"
            image={product.ImageUrl}
            alt={product.Name}
            sx={{ 
              height: 240,
              objectFit: 'contain',
              bgcolor: '#f5f5f5',
              p: 2,
            }}
          />
        ) : (
          <Box
            sx={{
              height: 240,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: '#f5f5f5',
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Görsel Yok
            </Typography>
          </Box>
        )}
      </CardActionArea>

      {/* Ürün İçeriği - Sabit Yükseklik */}
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
        {/* Başlık - 2 Satır Limit */}
        <Typography 
          gutterBottom 
          variant="h6" 
          component="h2" 
          sx={{ 
            fontWeight: 600,
            fontSize: '1rem',
            lineHeight: 1.4,
            height: '2.8em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            mb: 1,
          }}
        >
          {product.Name}
        </Typography>

        {/* Açıklama - 2 Satır Limit */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: '2.8em',
            lineHeight: 1.4,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            mb: 1.5,
            fontSize: '0.875rem',
          }}
        >
          {product.Description || 'Detaylı bilgi için tıklayın'}
        </Typography>

        {/* Kategori ve Alt Kategori */}
        {(product.CategoryName || product.SubCategoryName) && (
          <Box sx={{ mb: 2, display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
            {product.CategoryName && (
              <Chip
                label={product.CategoryName}
                size="small"
                color="primary"
                sx={{ fontSize: '0.75rem' }}
              />
            )}
            {product.SubCategoryName && (
              <Chip
                label={product.SubCategoryName}
                size="small"
                variant="outlined"
                color="primary"
                sx={{ fontSize: '0.75rem' }}
              />
            )}
          </Box>
        )}

        {/* Spacer - İçeriği üste itmek için */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Butonlar */}
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          {/* Hızlı Görünüm Butonu */}
          <IconButton
            onClick={() => setQuickViewOpen(true)}
            sx={{
              bgcolor: '#f5f5f5',
              color: '#a80000',
              '&:hover': {
                bgcolor: '#a80000',
                color: 'white',
              },
              width: 40,
              height: 40,
            }}
            aria-label="Hızlı görünüm"
          >
            <VisibilityIcon />
          </IconButton>

          {/* WhatsApp Butonu */}
          <Button
            variant="contained"
            fullWidth
            startIcon={<WhatsAppIcon />}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              bgcolor: '#25D366',
              color: 'white',
              fontWeight: 600,
              py: 1,
              '&:hover': {
                bgcolor: '#128C7E',
              },
              textTransform: 'none',
              fontSize: '0.875rem',
            }}
          >
            Bilgi Al
          </Button>
        </Box>
      </CardContent>

      {/* Quick View Modal */}
      <QuickViewModal
        product={product}
        open={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </Card>
  );
}

