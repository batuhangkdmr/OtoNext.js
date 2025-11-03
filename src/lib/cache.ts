import { unstable_cache } from 'next/cache';

/**
 * Cache configuration for different data types
 * Next.js 14 Data Cache (unstable_cache)
 */

export const CACHE_TAGS = {
  PRODUCTS: 'products',
  CATEGORIES: 'categories',
  SLIDERS: 'sliders',
  PRODUCT_DETAIL: 'product-detail',
} as const;

export const CACHE_REVALIDATE = {
  PRODUCTS: 60 * 5, // 5 minutes
  CATEGORIES: 60 * 60, // 1 hour
  SLIDERS: 60 * 10, // 10 minutes
  PRODUCT_DETAIL: 60 * 15, // 15 minutes
} as const;

/**
 * Wrapper for unstable_cache with default configurations
 */
export function createCache<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  {
    tags,
    revalidate,
  }: {
    tags: string[];
    revalidate: number;
  }
): T {
  return unstable_cache(fn, undefined, {
    tags,
    revalidate,
  }) as T;
}

/**
 * Generate cache key from parameters
 */
export function generateCacheKey(prefix: string, params: Record<string, any>): string {
  const sortedParams = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  return `${prefix}:${sortedParams}`;
}

/**
 * Cache invalidation helpers
 * (Bu fonksiyonlar Server Actions'da kullanılacak)
 */
export async function revalidateProducts() {
  const { revalidateTag } = await import('next/cache');
  revalidateTag(CACHE_TAGS.PRODUCTS);
}

export async function revalidateCategories() {
  const { revalidateTag } = await import('next/cache');
  revalidateTag(CACHE_TAGS.CATEGORIES);
}

export async function revalidateSliders() {
  const { revalidateTag } = await import('next/cache');
  revalidateTag(CACHE_TAGS.SLIDERS);
}

export async function revalidateProductDetail(productId: number) {
  const { revalidateTag } = await import('next/cache');
  revalidateTag(`${CACHE_TAGS.PRODUCT_DETAIL}-${productId}`);
}

