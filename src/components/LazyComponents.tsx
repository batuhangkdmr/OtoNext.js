/**
 * Lazy-loaded Components for Code Splitting
 * Bu componentler sayfa ilk yüklendiğinde değil, ihtiyaç duyulduğunda yüklenir
 */

import dynamic from 'next/dynamic';
import { CircularProgress, Box } from '@mui/material';

// Loading fallback component
const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 200,
    }}
  >
    <CircularProgress size={40} sx={{ color: '#a80000' }} />
  </Box>
);

// Lazy load QuickViewModal (sadece tıklandığında yüklenir)
export const LazyQuickViewModal = dynamic(
  () => import('@/components/QuickViewModal'),
  {
    loading: LoadingFallback,
    ssr: false, // Client-side only
  }
);

// Lazy load FAQ (scroll edildiğinde yüklensin)
export const LazyFAQ = dynamic(
  () => import('@/components/FAQ'),
  {
    loading: LoadingFallback,
  }
);

// Lazy load Testimonials (scroll edildiğinde yüklensin)
export const LazyTestimonials = dynamic(
  () => import('@/components/Testimonials'),
  {
    loading: LoadingFallback,
  }
);

// Lazy load ProductsCarousel (scroll edildiğinde yüklensin)
export const LazyProductsCarousel = dynamic(
  () => import('@/components/ProductsCarousel'),
  {
    loading: LoadingFallback,
  }
);

// Lazy load Newsletter (footer'da, sayfa yüklendiğinde gerekmez)
export const LazyNewsletter = dynamic(
  () => import('@/components/Newsletter'),
  {
    loading: () => null,
    ssr: false,
  }
);

// Lazy load WhatsAppFloatButton (zaten float, geç yüklenebilir)
export const LazyWhatsAppButton = dynamic(
  () => import('@/components/WhatsAppFloatButton'),
  {
    loading: () => null,
    ssr: false, // Client-side only
  }
);

// Lazy load ScrollToTop (scroll edildiğinde yüklensin)
export const LazyScrollToTop = dynamic(
  () => import('@/components/ScrollToTop'),
  {
    loading: () => null,
    ssr: false,
  }
);

// Lazy load Chart components (admin panelde kullan)
export const LazyChart = dynamic(
  () => import('@mui/icons-material/BarChart'),
  {
    loading: () => null,
    ssr: false,
  }
);

