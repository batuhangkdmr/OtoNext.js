'use client';

import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import Link from 'next/link';
import { Product } from '@/lib/models/Product';
import { generateProductUrl } from '@/lib/utils/slugify';
import QuickViewModal from '@/components/QuickViewModal';
import OptimizedImage from '@/components/OptimizedImage';
import { useFavorites } from '@/hooks/useFavorites';

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(product.Id);
  
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905542597273';
  const whatsappMessage = `Merhaba, "${product.Name}" ürünü hakkında bilgi almak istiyorum.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const productUrl = `/products/${generateProductUrl(product)}`;

  const handleFavoriteToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <Card 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        borderRadius: 3,
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          boxShadow: '0 12px 32px rgba(168, 0, 0, 0.12)',
          transform: 'translateY(-8px)',
          borderColor: 'primary.main',
        },
        background: 'linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)',
      }}
    >
      {/* Favori Butonu - Sağ Üst Köşe */}
      <Box
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 2,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      >
        <Tooltip title={isFav ? 'Favorilerden Çıkar' : 'Favorilere Ekle'}>
          <IconButton
            onClick={handleFavoriteToggle}
            sx={{
              bgcolor: 'white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              '&:hover': {
                bgcolor: 'white',
                transform: 'scale(1.1)',
              },
              width: 40,
              height: 40,
            }}
          >
            {isFav ? (
              <FavoriteIcon sx={{ color: '#e74c3c', fontSize: 20 }} />
            ) : (
              <FavoriteBorderIcon sx={{ color: '#95a5a6', fontSize: 20 }} />
            )}
          </IconButton>
        </Tooltip>
      </Box>

      {/* Ürün Görseli - Modern Container */}
      <CardActionArea component={Link} href={productUrl}>
        {product.ImageUrl ? (
          <Box 
            sx={{ 
              height: 280, 
              position: 'relative',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3,
            }}
          >
            <OptimizedImage
              src={product.ImageUrl}
              alt={product.Name}
              width={320}
              height={240}
              objectFit="contain"
              quality={85}
              sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
              style={{
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isHovered ? 'scale(1.08)' : 'scale(1)',
              }}
            />
            
            {/* Güven Badge'i */}
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                left: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                bgcolor: 'rgba(46, 204, 113, 0.95)',
                color: 'white',
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                fontSize: '0.75rem',
                fontWeight: 600,
                boxShadow: '0 2px 8px rgba(46, 204, 113, 0.3)',
              }}
            >
              <VerifiedIcon sx={{ fontSize: 14 }} />
              Orijinal
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              height: 280,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
          >
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
              Görsel Yok
            </Typography>
          </Box>
        )}
      </CardActionArea>

      {/* Ürün İçeriği - Modern Layout */}
      <CardContent 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          p: 2.5,
          bgcolor: 'white',
        }}
      >
        {/* Kategori Badge'leri - Modern Tasarım */}
        {(product.CategoryName || product.SubCategoryName) && (
          <Box sx={{ mb: 1.5, display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
            {product.CategoryName && (
              <Chip
                label={product.CategoryName}
                size="small"
                sx={{ 
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  height: 24,
                  bgcolor: '#a80000',
                  color: 'white',
                  letterSpacing: '0.3px',
                  '&:hover': {
                    bgcolor: '#8a0000',
                  },
                }}
              />
            )}
            {product.SubCategoryName && (
              <Chip
                label={product.SubCategoryName}
                size="small"
                sx={{ 
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  height: 24,
                  bgcolor: '#ecf0f1',
                  color: '#2c3e50',
                  border: '1px solid #bdc3c7',
                }}
              />
            )}
          </Box>
        )}

        {/* Başlık - Modern Typography */}
        <Typography 
          component={Link}
          href={productUrl}
          gutterBottom 
          variant="h6"
          sx={{ 
            fontWeight: 700,
            fontSize: '1.05rem',
            lineHeight: 1.4,
            height: '2.8em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            mb: 1,
            color: '#2c3e50',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: '#a80000',
            },
          }}
        >
          {product.Name}
        </Typography>

        {/* Açıklama - Modern Style */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            height: '2.8em',
            lineHeight: 1.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            mb: 2,
            fontSize: '0.875rem',
            color: '#7f8c8d',
          }}
        >
          {product.Description || 'Orijinal yedek parça. Detaylı bilgi için tıklayın.'}
        </Typography>

        {/* Hızlı Bilgi Banner */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            bgcolor: '#e8f5e9',
            color: '#2e7d32',
            px: 1.5,
            py: 1,
            borderRadius: 2,
            mb: 2,
            fontSize: '0.75rem',
            fontWeight: 600,
          }}
        >
          <LocalShippingOutlinedIcon sx={{ fontSize: 16 }} />
          Hızlı Kargo • Güvenli Ödeme
        </Box>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Butonlar - Modern Layout */}
        <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
          {/* Hızlı Görünüm */}
          <Tooltip title="Hızlı Görünüm">
            <IconButton
              onClick={() => setQuickViewOpen(true)}
              sx={{
                bgcolor: '#ecf0f1',
                color: '#a80000',
                border: '2px solid',
                borderColor: 'transparent',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#a80000',
                  color: 'white',
                  borderColor: '#a80000',
                  transform: 'rotate(360deg)',
                },
                width: 44,
                height: 44,
              }}
            >
              <VisibilityIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>

          {/* WhatsApp Butonu - Modern */}
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
              fontWeight: 700,
              fontSize: '0.875rem',
              py: 1.25,
              borderRadius: 2,
              textTransform: 'none',
              boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#128C7E',
                boxShadow: '0 6px 16px rgba(37, 211, 102, 0.4)',
                transform: 'translateY(-2px)',
              },
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

