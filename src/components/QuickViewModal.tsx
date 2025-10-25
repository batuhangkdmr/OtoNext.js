'use client';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';
import Link from 'next/link';
import { generateProductUrl } from '@/lib/utils/slugify';

interface Product {
  Id: number;
  Name: string;
  Description?: string;
  ImageUrl?: string;
  CategoryName?: string;
  SubCategoryName?: string;
}

interface Props {
  product: Product;
  open: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, open, onClose }: Props) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '905542597273';
  const whatsappMessage = `Merhaba, "${product.Name}" ürünü hakkında bilgi almak istiyorum.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const productUrl = `/products/${generateProductUrl(product)}`;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
        },
      }}
    >
      {/* Header */}
      <DialogTitle sx={{ bgcolor: '#f5f5f5', p: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Hızlı Önizleme
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      {/* Content */}
      <DialogContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
          {/* Image */}
          <Box sx={{ flex: 1 }}>
            {product.ImageUrl ? (
              <Box
                sx={{
                  position: 'relative',
                  height: 300,
                  bgcolor: '#f5f5f5',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={product.ImageUrl}
                  alt={product.Name}
                  fill
                  style={{ objectFit: 'contain', padding: '1rem' }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  height: 300,
                  bgcolor: '#f5f5f5',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography color="text.secondary">Görsel Yok</Typography>
              </Box>
            )}
          </Box>

          {/* Info */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              {product.Name}
            </Typography>

            {/* Kategoriler */}
            {(product.CategoryName || product.SubCategoryName) && (
              <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {product.CategoryName && (
                  <Chip label={product.CategoryName} color="primary" size="small" />
                )}
                {product.SubCategoryName && (
                  <Chip 
                    label={product.SubCategoryName} 
                    variant="outlined"
                    color="primary" 
                    size="small"
                    sx={{ borderWidth: 2 }}
                  />
                )}
              </Box>
            )}

            {product.Description && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3, lineHeight: 1.7 }}
              >
                {product.Description}
              </Typography>
            )}

            {/* Features */}
            <Box sx={{ mb: 3, p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                Ürün Özellikleri
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                ✓ Orijinal ve garantili ürün
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                ✓ Hızlı teslimat
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                ✓ Uzman destek
              </Typography>
            </Box>

            {/* Buttons */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<WhatsAppIcon />}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  bgcolor: '#25D366',
                  '&:hover': { bgcolor: '#128C7E' },
                  fontWeight: 600,
                  py: 1.5,
                }}
              >
                WhatsApp ile Bilgi Al
              </Button>

              <Button
                variant="outlined"
                fullWidth
                component={Link}
                href={productUrl}
                startIcon={<VisibilityIcon />}
                sx={{
                  borderColor: '#a80000',
                  color: '#a80000',
                  '&:hover': {
                    borderColor: '#8b0000',
                    bgcolor: '#fff5f5',
                  },
                  fontWeight: 600,
                  py: 1.5,
                }}
              >
                Detaylı Bilgi
              </Button>
            </Box>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

