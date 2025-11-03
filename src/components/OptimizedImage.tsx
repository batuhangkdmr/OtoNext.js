'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Box, CircularProgress } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
  style?: React.CSSProperties;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  onLoadComplete?: () => void;
}

/**
 * Optimized Image Component with:
 * - Automatic WebP/AVIF format selection
 * - Lazy loading by default
 * - Loading skeleton
 * - Error fallback
 * - Blur placeholder
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  quality = 85,
  sizes,
  className,
  style,
  objectFit = 'cover',
  onLoadComplete,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
    if (onLoadComplete) {
      onLoadComplete();
    }
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Error fallback UI
  if (hasError) {
    return (
      <Box
        sx={{
          width: fill ? '100%' : width,
          height: fill ? '100%' : height,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: '#f5f5f5',
          borderRadius: 1,
          gap: 1,
        }}
      >
        <ImageIcon sx={{ fontSize: 48, color: '#bdbdbd' }} />
        <Box sx={{ fontSize: 12, color: '#999' }}>Görsel yüklenemedi</Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: 'relative',
        width: fill ? '100%' : width,
        height: fill ? '100%' : height,
        ...style,
      }}
      className={className}
    >
      {/* Loading skeleton */}
      {isLoading && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#f5f5f5',
            borderRadius: 1,
            zIndex: 1,
          }}
        >
          <CircularProgress size={40} sx={{ color: '#a80000' }} />
        </Box>
      )}

      {/* Next.js Image with optimizations */}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        quality={quality}
        priority={priority}
        sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        onLoad={handleLoadComplete}
        onError={handleError}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
        style={{
          objectFit,
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </Box>
  );
}

